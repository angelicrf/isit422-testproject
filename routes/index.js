const express = require('express');
process.env['DEBUG'] = 'angular-multiclouds:server';
var debug = require('debug')('angular-multiclouds:server');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const Dropbox = require('dropbox').Dropbox;
const BoxSDK = require('box-node-sdk');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const folder = './routes/AllFiles';
let HoldUserData = [];
let LoggedInUserID = '';
let downloadedFileName = '';
let sendToAngularAccessToken = '';
let saveGDAccessToken = '';
let sendToGd = '';
let Gdrecivedid = '';
let GdrecivedName = '';
let getDpFilePath = '';
let storeLastPart = '';
let holdBoxCode = '';
let boxAccessToken = '';
let boxRetreivedName = '';
let odAccessToken = '';
let getlfPath = '';
let boxFile = {};
let boxFolders = {};
let odFiles = {};
let localFile;
let dpHoldSessionId = '';
let holdDpSessionId = '';
let odUploadUrl = '';
let fileSizeInBytes = 0;
let secondFragmentLength = 0;
let firstFragmentLength = 0;
let bxParts = [];
let firstBxPart = 0;
let secondBxPart = 0;
let total_parts = 0;
let part_size = 0;
let convertedSize = 0;
let bxUpFileId = '';
let bxNewFiles = [];
let storeHashs = [];
let bxFirstExec = false;
let bxBeforeEndHash = '';
let bxCommitHash = '';
let gdResumedUrl = '';

let appDir = path.dirname(require.main.filename);
const fs = require('fs');
const ReadableStream = require('stream').Readable;
const child = require('child_process');
const mongoose = require('mongoose');
const MCUsers = require('../McUsers');
const MCClient = require('../McCloud');
const BoxClient = require('../BoxCloud');
const DbClient = require('../DbCloud');
const OdClient = require('../OdCloud');
const { debuglog } = require('util');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(process.cwd() + '/routes/dist');
/* app.use(express.static(process.cwd() + '/routes/dist'));
app.get('*', function (req, res) {
  res.sendFile(process.cwd() + '/routes/dist/index.html');
}); */

let corsOptions = {
  origin: 'https://stormy-headland-33273.herokuapp.com',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'production') {
  debug('app in production mode ....');
 
  app.use(express.static(process.cwd() + '/routes/dist'));
  app.get('*', function (req, res) {
    res.sendFile(process.cwd() + '/routes/dist/index.html');
  });
}
const dbURI =
  'mongodb+srv://yelloteam:bcuser123456@cluster0.08j1d.mongodb.net/MultiCloudDB?retryWrites=true&w=majority';
mongoose.set('useFindAndModify', false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10,
};
process.on('uncaughtException', function (err) {
  debug(err);
});
mongoose.connect(dbURI, options).then(
  () => {
    debug('Database connection established!');
  },
  (err) => {
    debug('Error connecting Database instance due to: ', err);
  },
);
app.get('*/FindTd', (req, res) => {
  console.log('route called');
  res.status(200).send('Server is called');
});

app.post('/api/AllMCUsers', (req, res) => {
  try {
    if (
      req.body.id !== undefined ||
      req.body.id !== null ||
      req.body.id !== '' ||
      LoggedInUserID !== undefined ||
      LoggedInUserID !== null ||
      LoggedInUserID !== ''
    ) {
      if (LoggedInUserID === req.body.id) {
        console.log('AllMCUsers called');
        MCUsers.find({}, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            console.log(result);
            res.status(201).json(result);
          }
        });
      }
    }
  } catch (error) {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
    throw error;
  }
});
app.post('/api/MCUserByID', (req, res) => {
  try {
    if (
      req.body.id !== undefined ||
      req.body.id !== null ||
      req.body.id !== '' ||
      LoggedInUserID !== undefined ||
      LoggedInUserID !== null ||
      LoggedInUserID !== ''
    ) {
      if (LoggedInUserID === req.body.id) {
        console.log('MCUserByID called');

        MCUsers.findById({ _id: req.body.id }, (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            console.log(result);
            res.status(201).json(result);
          }
        });
      }
    }
  } catch (error) {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
    throw error;
  }
});
app.post('/api/MCUserInfo', (req, res) => {
  console.log('MCUserInfo called');

  try {
    if (
      req.body.username !== undefined ||
      req.body.username !== null ||
      req.body.username !== '' ||
      req.body.password !== undefined ||
      req.body.password !== null ||
      req.body.password !== ''
    ) {
      HoldUserData.splice(0, HoldUserData.length);
      let holdUserName = req.body.username;
      let holdPassword = req.body.password;
      HoldUserData.push(holdUserName, holdPassword);
      res.json({ username: holdUserName, password: holdPassword });
      return HoldUserData;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/MCUserByUsrNmPwd', (req, res) => {
  console.log('MCUserByUsrNmPwd called');
  try {
    if (
      HoldUserData[0] !== '' ||
      HoldUserData[0] !== null ||
      HoldUserData[1] !== '' ||
      !HoldUserData[1] !== null ||
      req.body.username !== undefined ||
      req.body.username !== null ||
      req.body.username !== '' ||
      req.body.password !== undefined ||
      req.body.password !== null ||
      req.body.password !== ''
    ) {
      console.log('username from node ' + HoldUserData[0]);
      console.log('password from node ' + HoldUserData[1]);
      req.body.username = HoldUserData[0];
      req.body.password = HoldUserData[1];

      MCUsers.findOne(
        {
          username: req.body.username,
          password: req.body.password,
        },
        (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            console.log(result);
            res.status(201).json(result);
            LoggedInUserID = result.id;
          }
        },
      );
      return LoggedInUserID;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/MCUser', (req, res) => {
  console.log('MCUser called ');
  try {
    if (
      req.body.password !== undefined ||
      req.body.password !== null ||
      req.body.password !== '' ||
      req.body.name !== undefined ||
      req.body.name !== null ||
      req.body.name !== '' ||
      req.body.lastname !== undefined ||
      req.body.lastname !== null ||
      req.body.lastname !== '' ||
      req.body.username !== undefined ||
      req.body.username !== null ||
      req.body.username !== '' ||
      req.body.email !== undefined ||
      req.body.email !== null ||
      req.body.email !== ''
    ) {
      let oneNewMCUser = new MCUsers({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      oneNewMCUser.save((err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          console.log(result);
          res.status(201).json(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.patch('/api/UpdateMCUser', (req, res) => {
  try {
    if (
      req.body.id !== undefined ||
      req.body.id !== null ||
      req.body.id !== '' ||
      LoggedInUserID !== undefined ||
      LoggedInUserID !== null ||
      LoggedInUserID !== '' ||
      req.body.password !== undefined ||
      req.body.password !== null ||
      req.body.password !== '' ||
      req.body.email !== undefined ||
      req.body.email !== null ||
      req.body.email !== '' ||
      req.body.lastname !== undefined ||
      req.body.lastname !== null ||
      req.body.lastname !== '' ||
      req.body.name !== undefined ||
      req.body.name !== null ||
      req.body.name !== ''
    ) {
      if (LoggedInUserID === req.body.id) {
        console.log('UpdateMCUser called');
        MCUsers.findById({ _id: req.body.id }, async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            if (req.body.password) {
              result.password = req.body.password;
            }
            if (req.body.email) {
              result.email = req.body.email;
            }
            if (req.body.lastname) {
              result.lastname = req.body.lastname;
            }
            if (req.body.name) {
              result.name = req.body.name;
            }
            try {
              const newResult = await result.save();
              if (newResult === result) {
                console.log(newResult);
                res.status(200).json(newResult);
              }
            } catch (error) {
              console.log(error);
              res.status(404).json({ error: 'Update save failed!' });
              throw error;
            }
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/MCGdClient', (req, res) => {
  console.log('MCGdClient called ');
  try {
    if (
      req.body.gdname !== undefined ||
      req.body.gdname !== null ||
      req.body.gdname !== '' ||
      req.body.gdemail !== undefined ||
      req.body.gdemail !== null ||
      req.body.gdemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      let oneNewMCClient = new MCClient({
        gdname: req.body.gdname,
        gdemail: req.body.gdemail,
        usermongoid: req.body.usermongoid,
      });
      oneNewMCClient.save((err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          console.log(result);
          res.status(201).json(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/MCBoxClient', (req, res) => {
  console.log('MCBoxClient called ');
  try {
    if (
      req.body.bxname !== undefined ||
      req.body.bxname !== null ||
      req.body.bxname !== '' ||
      req.body.bxemail !== undefined ||
      req.body.bxemail !== null ||
      req.body.bxemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      let oneNewBoxClient = new BoxClient({
        bxname: req.body.bxname,
        bxemail: req.body.bxemail,
        usermongoid: req.body.usermongoid,
      });
      oneNewBoxClient.save((err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          console.log(result);
          res.status(201).json(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/MCOdClient', (req, res) => {
  console.log('MCOdClient called ');
  try {
    if (
      req.body.odname !== undefined ||
      req.body.odname !== null ||
      req.body.odname !== '' ||
      req.body.odemail !== undefined ||
      req.body.odemail !== null ||
      req.body.odemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      let oneNewOdClient = new OdClient({
        odname: req.body.odname,
        odemail: req.body.odemail,
        usermongoid: req.body.usermongoid,
      });
      oneNewOdClient.save((err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          console.log(result);
          res.status(201).json(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.delete('/api/DeleteMCUser', (req, res) => {
  try {
    if (
      LoggedInUserID !== undefined ||
      LoggedInUserID !== '' ||
      LoggedInUserID !== null
    ) {
      console.log('DeleteMCUser called');

      MCUsers.findById({ _id: LoggedInUserID }, async (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          try {
            const newResult = await MCUsers.deleteOne({
              username: result.username,
              password: result.password,
            });
            if (
              newResult.n == 1 &&
              newResult.ok == 1 &&
              newResult.deletedCount == 1
            ) {
              console.log(newResult);
              console.log('MCUser successfully deleted');
              res.status(200).json(newResult);
            }
          } catch (error) {
            console.log(error);
            res.status(404).json({ error: 'Delete failed!' + error });
            throw error;
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/LogOutMCUser', (req, res) => {
  console.log('LogOutMCUser called ');
  try {
    if (
      LoggedInUserID !== undefined ||
      LoggedInUserID !== null ||
      LoggedInUserID !== ''
    ) {
      LoggedInUserID = '';
      HoldUserData.splice(0, HoldUserData.length);
      res.status(200).send('user logged out successfully');
      console.log('HoldUserData ' + HoldUserData);
      return LoggedInUserID;
    }
  } catch (error) {
    console.log('REQ.body.id does not match logged in user ID');
    res
      .status(500)
      .send('REQ.body.id does not match logged in user ID' + MediaError);
    throw error;
  }
});
app.post('/api/MCGdClient', (req, res) => {
  console.log('MCGdClient called ');
  try {
    if (
      req.body.gdname !== undefined ||
      req.body.gdname !== null ||
      req.body.gdname !== '' ||
      req.body.gdemail !== undefined ||
      req.body.gdemail !== null ||
      req.body.gdemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      MCClient.findOne(
        { usermongoid: req.body.usermongoid },
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            if (result) {
              if (req.body.gdname) {
                result.gdname = req.body.gdname;
              }
              if (req.body.gdemail) {
                result.gdemail = req.body.gdemail;
              }
              try {
                const newResult = await result.save();
                if (newResult === result) {
                  console.log(newResult);
                  res.status(200).json(newResult);
                }
              } catch (error) {
                console.log('MCClient save FAILED!');
                res.status(404).json({ error: 'MCClient save FAILED!' });
                throw error;
              }
            } else {
              let oneNewMCClient = new MCClient({
                gdname: req.body.gdname,
                dbemail: req.body.gdemail,
                usermongoid: req.body.usermongoid,
              });

              await oneNewMCClient.save((err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                  throw err;
                } else {
                  console.log(result);
                  res.status(201).json(result);
                }
              });
            }
          }
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/MCClientData', (req, res) => {
  console.log('MCClientData called');
  try {
    if (
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      MCClient.findOne({ usermongoid: req.body.usermongoid }, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          console.log(result);
          res.status(201).json(result);
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.delete('/api/MCClientDeleteData', (req, res) => {
  console.log('MCClientDeleteData called ');
  try {
    if (
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      MCClient.findOne(
        { usermongoid: req.body.usermongoid },
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            try {
              const newResult = await MCClient.deleteOne({
                usermongoid: result.usermongoid,
                _id: result.id,
              });
              if (
                newResult.n == 1 &&
                newResult.ok == 1 &&
                newResult.deleteCount == 1
              ) {
                console.log(newResult);
                console.log('MCClient successfully deleted ALL credentials');
                res, status(200).json(newResult);
              }
            } catch (error) {
              console.log('MCClient delete FAILED!');
              res.status(404).json({ error: 'Delete failed!' });
              throw error;
            }
          }
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.patch('/api/MCClientUpdateData', (req, res) => {
  console.log('MCClientUpdateData called ');
  try {
    if (
      req.body.gdname !== undefined ||
      req.body.gdname !== null ||
      req.body.gdname !== '' ||
      req.body.gdemail !== undefined ||
      req.body.gdemail !== null ||
      req.body.gdemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      MCClient.findOne(
        { usermongoid: req.body.usermongoid },
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            if (req.body.gdname) {
              result.gdname = req.body.gdname;
            }
            if (req.body.gdemail) {
              result.gdemail = req.body.gdemail;
            }

            try {
              const newResult = await result.save();
              if (newResult === result) {
                console.log(newResult);
                res.status(200).json(newResult);
              }
            } catch (error) {
              console.log('MCClient update save FAILED!');
              res.status(404).json({ error: 'MCClient update save FAILED!' });
              throw error;
            }
          }
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/Files', (req, res) => {
  console.log('Files called');
  try {
    if (
      req.body.path !== undefined ||
      req.body.path !== null ||
      req.body.path !== ''
    ) {
      console.log('req.body.path is ' + req.body.path);
      fs.readdir(req.body.path, 'buffer', function (err, files) {
        if (err) {
          console.log('Unable to scan directory: ' + err);
          res.status(500).send(err);
          throw err;
        } else {
          let names = [];
          let fileData = [];
          files.forEach((file) => {
            names.push(file.toString());
            console.log(file.toString());
          });
          res.status(201).json({ files, names });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/AddFiles', (req, res) => {
  console.log('AddFiles called');
  try {
    if (
      req.body.filePath !== undefined ||
      req.body.filePath !== null ||
      req.body.filePath !== '' ||
      req.body.fileName !== undefined ||
      req.body.fileName !== null ||
      req.body.fileName !== ''
    ) {
      let path = req.body.filePath + '/' + req.body.fileName;
      fs.open(path, 'w', (err, fd) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw 'error opening file: ' + err;
        }
        buf = Buffer.from(req.body.fileData.data);
        fs.write(fd, buf.toString(), null, function (err) {
          if (err) throw 'error writing file: ' + err;
          fs.close(fd, () => {
            console.log(buf.toString());
            res.status(201).send('Local file written');
          });
        });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/LfFilePath', (req, res) => {
  console.log('LfFilePath called');
  try {
    if (
      req.body.lfStorePath !== undefined ||
      req.body.lfStorePath !== null ||
      req.body.lfStorePath !== ''
    ) {
      getlfPath = req.body.lfStorePath;
      console.log('getlfPath ' + getlfPath);
      res
        .status(201)
        .json({ success_MSG: 'File path received', response: getlfPath });
      return getlfPath;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/LfDownload', (req, res) => {
  console.log('LfDownload called');
  try {
    /* if(req.body.lfStorePath !== undefined || req.body.lfStorePath !== null || req.body.lfStorePath !== ""){
      
      getlfPath = req.body.lfStorePath; */
    console.log('getlfPath ' + getlfPath);
    setTimeout(async () => {
      await tpMoveFiletoLocalPath(downloadedFileName, getlfPath);
    }, 4000);
    res.status(201).json({
      success_MSG: 'File successfully stored to the local path',
      response: req.body.lfStorePath,
    });
    return getlfPath;
    // }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/LfileServer', (req, res) => {
  console.log('LfileServer called');
  try {
    if (
      req.body.lfTranfer !== undefined ||
      req.body.lfTranfer !== null ||
      req.body.lfTranfer !== '' ||
      getlfPath !== undefined ||
      getlfPath !== null ||
      getlfPath !== ''
    ) {
      let lfToTransfer = req.body.lfTranfer;
      console.log('getlfPath ' + getlfPath);
      setTimeout(async () => {
        await tpMoveFilefromLocalPath(lfToTransfer, getlfPath);
      }, 4000);
      res.status(201).json({
        success_MSG: 'File successfully stored in AllFile',
        response: req.body.lfStorePath,
      });
      return getlfPath;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/DeleteFiles', (req, res) => {
  console.log('DeleteFiles called');
  try {
    if (
      req.body.filePath !== undefined ||
      req.body.filePath !== null ||
      req.body.filePath !== '' ||
      req.body.fileName !== undefined ||
      req.body.fileName !== null ||
      req.body.fileName !== ''
    ) {
      fs.unlinkSync(req.body.filePath + '/' + req.body.fileName);
      res.status(201).json({
        success_MSG: 'Local File successfully deleted',
        response: req.body.fileName,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/MoveFile', (req, res) => {
  console.log('MoveFile called');
  try {
    if (
      req.body.fileName !== undefined ||
      req.body.fileName !== null ||
      req.body.fileName !== ''
    ) {
      setTimeout(async () => {
        let moveFileResule = await tpMoveFilestoAllFiles(req.body.fileName);
        res.status(201).json({
          success_MSG: 'Local File successfully moved',
          respponse: req.body.fileName,
        });
      }, 10000);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/MCDbClient', (req, res) => {
  console.log('MCDbClient calledOne ');
  try {
    if (
      req.body.dbname !== undefined ||
      req.body.dbname !== null ||
      req.body.dbname !== '' ||
      req.body.dbemail !== undefined ||
      req.body.dbemail !== null ||
      req.body.dbemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      DbClient.findOne(
        { usermongoid: req.body.usermongoid },
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            if (result) {
              if (req.body.dbname) {
                result.dbname = req.body.dbname;
              }
              if (req.body.dbemail) {
                result.dbemail = req.body.dbemail;
              }

              try {
                const newResult = await result.save();
                if (newResult === result) {
                  console.log(newResult);
                  res.status(200).json(newResult);
                }
              } catch (error) {
                console.log('DbClient save FAILED!');
                res.status(404).json({ error: 'DbClient save FAILED!' });
                throw error;
              }
            } else {
              let oneNewDbClient = new DbClient({
                dbname: req.body.dbname,
                dbemail: req.body.dbemail,
                usermongoid: req.body.usermongoid,
              });

              await oneNewDbClient.save((err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                  throw err;
                } else {
                  console.log(result);
                  res.status(201).json(result);
                }
              });
            }
          }
        },
      );
    }
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/DbClientData', (req, res) => {
  console.log('DbClientData called');
  try {
    if (
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      DbClient.findOne({ usermongoid: req.body.usermongoid }, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
          throw err;
        } else {
          console.log(result);
          res.status(201).json(result);
        }
      });
    }
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.delete('/api/DbClientDeleteData', (req, res) => {
  console.log('DbClientDeleteData called ' + JSON.stringify(req.body));
  try {
    if (
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      DbClient.findOne(
        { usermongoid: req.body.usermongoid },
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            try {
              const newResult = await DbClient.deleteOne({
                usermongoid: result.usermongoid,
                _id: result.id,
              });
              if (
                newResult.n == 1 &&
                newResult.ok == 1 &&
                newResult.deleteCount == 1
              ) {
                console.log(newResult);
                console.log('DbClient successfully deleted ALL credentials');
                res, status(200).json(newResult);
              }
            } catch (error) {
              console.log('DbClient delete FAILED!');
              res.status(404).json({ error: 'Delete failed!' });
              throw error;
            }
          }
        },
      );
    }
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.patch('/api/DbClientUpdateData', (req, res) => {
  console.log('DbClientUpdateData called ');
  try {
    if (
      req.body.dbname !== undefined ||
      req.body.dbname !== null ||
      req.body.dbname !== '' ||
      req.body.dbemail !== undefined ||
      req.body.dbemail !== null ||
      req.body.dbemail !== '' ||
      req.body.usermongoid !== undefined ||
      req.body.usermongoid !== null ||
      req.body.usermongoid !== ''
    ) {
      DbClient.findOne(
        { usermongoid: req.body.usermongoid },
        async (err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          } else {
            if (req.body.dbname) {
              result.dbname = req.body.dbname;
            }
            if (req.body.dbemail) {
              result.dbemail = req.body.dbemail;
            }
            const newResult = await result.save();
            if (newResult === result) {
              console.log(newResult);
              res.status(200).json(newResult);
            } else {
              console.log('DbClient update save FAILED!');
              res.status(404).json({ error: 'DbClient update save FAILED!' });
            }
          }
        },
      );
    }
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/ShowData', (req, res) => {
  console.log('ShowData called ');
  res.header('Access-Control-Allow-Origin', '*');
  try {
    if (
      req.body.saveCode !== undefined ||
      req.body.saveCode !== null ||
      req.body.saveCode !== ''
    ) {
      console.log('req body from node ' + JSON.stringify(req.body.saveCode));
      let codeData = req.body.saveCode;

      child.exec(
        `curl https://api.dropbox.com/oauth2/token \
                -d code=${codeData} \
                -d grant_type=authorization_code \
                -d redirect_uri=https://stormy-headland-33273.herokuapp.com/cloudmanagement/ \
                -u 4kbv0so8hjs83lf:hzrap940rcg09t1`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          }
          sendToAngular = stdout;
          sendToAngularAccessToken = sendToAngular.toString();
          console.log('the stdErr is ' + stderr);
          console.log('the stdOut ' + JSON.stringify(sendToAngular));
          res.status(200).send(sendToAngular);
        },
      );
    }
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/GDAcessToken', (req, res) => {
  console.log('GDAcessToken called ');
  try {
    if (
      req.body.accessTokenDg !== undefined ||
      req.body.accessTokenDg !== null ||
      req.body.accessTokenDg !== ''
    ) {
      let svAccess = req.body.accessTokenDg;

      saveGDAccessToken = svAccess;
      res.status(200).send('GD accessToken received' + saveGDAccessToken);
      return saveGDAccessToken;
    }
  } catch (error) {
    console.log(err);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/UploadGd', (req, res) => {
  try {
    if (
      downloadedFileName !== '' ||
      downloadedFileName != undefined ||
      downloadedFileName !== null ||
      saveGDAccessToken !== '' ||
      saveGDAccessToken != undefined ||
      saveGDAccessToken !== null
    ) {
      console.log('downloadedFileName is ' + downloadedFileName);
      setTimeout(async () => {
        let moveFileResule = await tpMoveFilestoAllFiles(downloadedFileName);
        console.log('moveFileResule after send ' + moveFileResule);
      }, 30000);
      let svAccess = saveGDAccessToken;
      let savefileId = '';
      let concatFile = '';
      setTimeout(async () => {
        console.log('google drive access token' + svAccess);
        fs.readdirSync(folder).forEach((file) => {
          console.log('inside the folderOne ');
          const extname = path.extname(file);
          const filename = path.basename(file, extname);
          const absolutePath = path.resolve(folder, file);
          const storeFile = file.toString();
          concatFile = filename + extname;
        });
        let findFileSize = await bytesToSize(concatFile);
        if (findFileSize < 5 && findFileSize !== NaN) {
          return child.exec(
            `curl --location --request POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id' \
            --header 'Authorization: Bearer ${svAccess}' \
            --header 'Content-Type: application/octet-stream' \
            --data-binary @./routes/AllFiles/${concatFile}`,
            (err, stdout, stderr) => {
              if (err) {
                console.log(err);
                res.status(500).send(err);
                throw err;
              }
              console.log(JSON.stringify(stdout));
              savefileId = JSON.stringify(stdout).toString();
              sendToGd = savefileId.slice(15, savefileId.length - 8);
              console.log('the stdErr is ' + stderr);
              console.log('the stdOut is ' + sendToGd);
              toDeleteAllFiles();
              res
                .status(200)
                .send('Response from Node: File uploaded to Google drive');
            },
          );
        } else {
          await gdUploadSessionStart(svAccess);
          await gdUploadlargeFileSingle(gdResumedUrl, svAccess, concatFile);
          res.status(200).json({
            gdLargeUploadMSG: 'gdFile_LargeUploaded',
            gdLargeFileUpload: 'gdUploadLargeFileComleted',
          });
          toDeleteAllFiles();
        }
      }, 35000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/UploadGdLocal', (req, res) => {
  try {
    if (
      req.body.fileName !== undefined ||
      req.body.fileName !== null ||
      req.body.fileName !== '' ||
      saveGDAccessToken !== undefined ||
      saveGDAccessToken !== null ||
      saveGDAccessToken !== ''
    ) {
      let svAccess = saveGDAccessToken;
      let savefileId = '';
      let concatFile = '';
      setTimeout(async () => {
        console.log('google drive access token' + svAccess);
        fs.readdirSync(folder).forEach((file) => {
          if (file === req.body.fileName) {
            console.log('inside the folderOne ');
            const extname = path.extname(file);
            const filename = path.basename(file, extname);
            const absolutePath = path.resolve(folder, file);
            const storeFile = file.toString();
            concatFile = filename + extname;
            localFile = concatFile;
          }
        });
        let findFileSize = await bytesToSize(concatFile);
        if (findFileSize < 5 && findFileSize !== NaN) {
          console.log('concatFile is ' + concatFile);
          return child.exec(
            `curl --location --request POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id' \
          --header 'Authorization: Bearer ${svAccess}' \
          --header 'Content-Type: application/octet-stream' \
          --data-binary @./routes/AllFiles/${concatFile}`,
            (err, stdout, stderr) => {
              if (err) {
                console.log(err);
                res.status(500).send(err);
                throw err;
              }
              console.log(JSON.stringify(stdout));
              savefileId = JSON.stringify(stdout).toString();
              sendToGd = savefileId.slice(15, savefileId.length - 8);
              console.log('the stdErr is ' + stderr);
              console.log('the stdOut is ' + sendToGd);
              toDeleteAllFiles();
              res
                .status(200)
                .send('Response from Node: File uploaded to Google drive');
            },
          );
        } else {
          await gdUploadSessionStart(svAccess);
          await gdUploadlargeFileSingle(gdResumedUrl, svAccess, concatFile);
          res.status(200).json({
            gdLocalUploadMSG: 'gdFile_LocalUploaded',
            gdLocalUpload: 'gdLocalUploadLargeFileComleted',
          });
          toDeleteAllFiles();
        }
      }, 35000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/GDUpdateLocalFile', (req, res) => {
  console.log('GDUpdateLocalFile called ');
  try {
    if (
      sendToGd !== undefined ||
      sendToGd !== null ||
      sendToGd !== '' ||
      saveGDAccessToken !== undefined ||
      saveGDAccessToken !== null ||
      saveGDAccessToken !== ''
    ) {
      console.log('saveGDAccessToken from GDUpdateFile ' + saveGDAccessToken);
      let svAccess = saveGDAccessToken;
      let updatedMs = '';
      return child.exec(
        `curl --location --request PATCH 'https://www.googleapis.com/drive/v2/files/${sendToGd}' \
        --header 'Authorization: Bearer ${svAccess}' \
        --header "Content-Type: application/json" \
        --header 'Accept: */*' \
        --data '{"title":"${localFile.toString()}"}'`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          }
          updatedMs = stdout;
          console.log('the stdErr is ' + stderr);
          console.log('the stdOut is ' + updatedMs);
          res
            .status(200)
            .send('Response from Node: File Updated in Google drive');
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/GDUpdateFile', (req, res) => {
  console.log('GDUpdateFile called ');
  try {
    if (
      downloadedFileName !== undefined ||
      downloadedFileName !== null ||
      downloadedFileName !== '' ||
      saveGDAccessToken !== undefined ||
      saveGDAccessToken !== null ||
      saveGDAccessToken !== ''
    ) {
      console.log('saveGDAccessToken from GDUpdateFile ' + saveGDAccessToken);
      console.log('storeLastPart is ' + downloadedFileName);
      let svAccess = saveGDAccessToken;
      let updatedMs = '';
      return child.exec(
        `curl --location --request PATCH 'https://www.googleapis.com/drive/v2/files/${sendToGd}' \
       --header 'Authorization: Bearer ${svAccess}' \
       --header "Content-Type: application/json" \
       --header 'Accept: */*' \
       --data '{"title":"${downloadedFileName.toString()}"}'`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          }
          updatedMs = stdout;
          console.log('the stdErr is ' + stderr);
          console.log('the stdOut is ' + updatedMs);
          res
            .status(200)
            .send('Response from Node: File Updated in Google drive');
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DPUpload', (req, res) => {
  console.log('DpUpload called ');
  try {
    if (
      downloadedFileName !== undefined ||
      downloadedFileName !== null ||
      downloadedFileName !== '' ||
      sendToAngularAccessToken !== undefined ||
      sendToAngularAccessToken !== null ||
      sendToAngularAccessToken !== ''
    ) {
      setTimeout(async () => {
        let moveFileResule = await tpMoveFilestoAllFiles(downloadedFileName);
        console.log('moveFileResule ' + moveFileResule);
      }, 30000);

      let gth = sendToAngularAccessToken;
      console.log('gth is ' + gth);
      let modifyGth = gth.split(' ');
      let saveAccess = modifyGth[1];
      let sendToGd = '';
      let newId = uuidv4();
      let concatFile = '';

      if (
        saveAccess.charAt(0) == '"' ||
        saveAccess.charAt(saveAccess.length - 1) == '"'
      ) {
        setTimeout(async () => {
          fs.readdirSync(folder).forEach((file) => {
            console.log('inside the folderOne ');
            const extname = path.extname(file);
            const filename = path.basename(file, extname);
            const absolutePath = path.resolve(folder, file);
            concatFile = filename + extname;
          });
          let fileSizeBytes = await bytesToSize(concatFile);
          if (fileSizeBytes < 5 && fileSizeBytes !== NaN) {
            console.log('concatFile outside ' + concatFile);
            child.exec(
              `curl -X POST https://content.dropboxapi.com/2/files/upload \
               -H 'Authorization: Bearer ${saveAccess.substr(
                 1,
                 saveAccess.length - 3,
               )}' \
               -H 'Content-Type: application/octet-stream' \
               -H 'Dropbox-Api-Arg: {"path": "/${concatFile}"}' \
               --data-binary @./routes/AllFiles/${concatFile}`,
              (err, stdout, stderr) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                  throw err;
                }
                sendToGd = stdout;
                console.log('the stdErr is ' + stderr);
                console.log('the stdOut is ' + JSON.stringify(stdout));
                toDeleteAllFiles();
                res
                  .status(200)
                  .send('Response from Node: file uploaded to Dropbox');
              },
            );
          } else {
            console.log('inside the largeFiles ');
            await dpSdkUpload(saveAccess, concatFile);
            toDeleteAllFiles();
            res
              .status(200)
              .send('Response from Node: large local file uploaded to Dropbox');
            /* await dpUploadSessionStart(saveAccess,concatFile);              
              let calcFileActualSize = await getFileSize(concatFile);
              await dpUploadLargeFileAppend(saveAccess,holdDpSessionId.toString(),concatFile,calcFileActualSize);
              await dpUploadSessionFinish(saveAccess,holdDpSessionId.toString(),concatFile,calcFileActualSize);
              toDeleteAllFiles();  
              res.status(200).send("Response from Node: large file uploaded to Dropbox");  */
          }
        }, 35000);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DPUploadLocal', (req, res) => {
  console.log('DpUploadLocal called ');
  try {
    if (
      req.body.fileName !== undefined ||
      req.body.fileName !== null ||
      req.body.fileName !== '' ||
      sendToAngularAccessToken !== undefined ||
      sendToAngularAccessToken !== null ||
      sendToAngularAccessToken !== ''
    ) {
      let gth = sendToAngularAccessToken;
      console.log('gth is ' + gth);
      let modifyGth = gth.split(' ');
      let saveAccess = modifyGth[1];
      let sendToGd = '';
      let newId = uuidv4();
      let concatFile = '';

      if (
        saveAccess.charAt(0) == '"' ||
        saveAccess.charAt(saveAccess.length - 1) == '"'
      ) {
        setTimeout(async () => {
          fs.readdirSync(folder).forEach((file) => {
            if (file === req.body.fileName) {
              console.log('inside the folderOne ');
              const extname = path.extname(file);
              const filename = path.basename(file, extname);
              const absolutePath = path.resolve(folder, file);
              concatFile = filename + extname;
              console.log('concatFile ' + concatFile);
            }
          });
          let fileSizeUp = await bytesToSize(concatFile);
          console.log(
            'fileSizeUp is ' + fileSizeUp + 'convertedSize ' + convertedSize,
          );
          if (fileSizeUp < 5 && fileSizeUp !== NaN) {
            console.log('concatFile outside ' + concatFile);
            child.exec(
              `curl -X POST https://content.dropboxapi.com/2/files/upload \
               -H 'Authorization: Bearer ${saveAccess.substr(
                 1,
                 saveAccess.length - 3,
               )}' \
               -H 'Content-Type: application/octet-stream' \
               -H 'Dropbox-Api-Arg: {"path": "/${concatFile}"}' \
               --data-binary @./routes/AllFiles/${concatFile}`,
              (err, stdout, stderr) => {
                if (err) {
                  console.log(err);
                  res.status(500).send(err);
                  throw err;
                }
                sendToGd = stdout;
                console.log('the stdErr is ' + stderr);
                console.log('the stdOut is ' + JSON.stringify(stdout));
                toDeleteAllFiles();
                res
                  .status(200)
                  .send('Response from Node: local file uploaded to Dropbox');
              },
            );
          } else {
            console.log('inside the largeFiles ');
            await dpSdkUpload(saveAccess, concatFile);
            toDeleteAllFiles();
            res
              .status(200)
              .send('Response from Node: large local file uploaded to Dropbox');
            /*  await dpUploadSessionStart(saveAccess,concatFile);
              let calcFileActualSize = await getFileSize(concatFile);
              await dpUploadLargeFileAppend(saveAccess,holdDpSessionId.toString(),concatFile,calcFileActualSize);
              await dpUploadSessionFinish(saveAccess,holdDpSessionId.toString(),concatFile,calcFileActualSize);
              toDeleteAllFiles();
              res.status(200).send("Response from Node: large local file uploaded to Dropbox") ;   */
          }
        }, 35000);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DpPath', function (req, res) {
  console.log('DpPath called');
  try {
    if (
      req.body.dpGetFPath !== undefined ||
      req.body.dpGetFPath !== '' ||
      req.body.dpGetFPath !== null
    ) {
      let saveDpFilePath = req.body.dpGetFPath;
      getDpFilePath = saveDpFilePath;
      console.log('dpPath from index is ' + getDpFilePath);
      res.send('Dp file path received ' + getDpFilePath);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DPDownload', async (req, res) => {
  console.log('DPDownload called');
  try {
    if (
      getDpFilePath !== undefined ||
      getDpFilePath !== null ||
      getDpFilePath !== '' ||
      sendToAngularAccessToken !== undefined ||
      sendToAngularAccessToken !== null ||
      sendToAngularAccessToken !== ''
    ) {
      console.log('getDPPath from DPDownload is ' + getDpFilePath);
      let gth = sendToAngularAccessToken;
      let modifyGth = gth.split(' ');
      let saveAccess = modifyGth[1];
      let sendToGd = '';
      let lastPart = getDpFilePath.split('/');
      downloadedFileName = lastPart[lastPart.length - 1];
      console.log('Last Part is ' + lastPart);
      console.log('downloadedFileName is ' + downloadedFileName);
      console.log('gth is ' + gth);
      console.log('saveAccess is ' + saveAccess);

      if (
        saveAccess.charAt(0) == '"' ||
        saveAccess.charAt(saveAccess.length - 1) == '"'
      ) {
        console.log('there is "');
        //check it out
        //-H 'Content-Type: application/octet-stream' \
        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/download \
          -H 'Authorization: Bearer ${saveAccess.substr(
            1,
            saveAccess.length - 3,
          )}' \
          -H 'Dropbox-Api-Arg: {"path": "${getDpFilePath}"}' \
          -o "${downloadedFileName}"`,
          (err, stdout, stderr) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
              throw err;
            }
            sendToGd = stdout;
            console.log('the stdErr is ' + stderr);
            console.log('the stdOut is ' + JSON.stringify(stdout));
          },
        );
        console.log('file transfered');
        res.status(200).send('Response from Node: file downloaded');
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DPDownloadLocal', async (req, res) => {
  console.log('DPDownloadLocal called');
  try {
    if (
      getDpFilePath !== undefined ||
      getDpFilePath !== null ||
      getDpFilePath !== '' ||
      sendToAngularAccessToken !== undefined ||
      sendToAngularAccessToken !== null ||
      sendToAngularAccessToken !== ''
    ) {
      console.log('getDPPath from DPDownload is ' + getDpFilePath);
      let gth = sendToAngularAccessToken;
      let modifyGth = gth.split(' ');
      let saveAccess = modifyGth[1];
      let sendToGd = '';
      let lastPart = getDpFilePath.split('/');
      downloadedFileName = lastPart[lastPart.length - 1];
      console.log('Last Part is ' + lastPart);
      console.log('storeLastPart is ' + storeLastPart);

      if (
        saveAccess.charAt(0) == '"' ||
        saveAccess.charAt(saveAccess.length - 1) == '"'
      ) {
        console.log('there is "');
        //-H 'Content-Type: application/octet-stream' \
        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/download \
          -H 'Authorization: Bearer ${saveAccess.substr(
            1,
            saveAccess.length - 3,
          )}' \
          -H 'Dropbox-Api-Arg: {"path": "${getDpFilePath}"}' \
          -o "${downloadedFileName}"`,
          (err, stdout, stderr) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
              throw err;
            }
            sendToGd = stdout;
            console.log('the stdErr is ' + stderr);
            console.log('the stdOut is ' + JSON.stringify(stdout));
            tpMoveFilestoAllFiles(storeLastPart);
          },
        );
        console.log('file transfered');
        res.status(200).send('Response from Node: file downloaded');
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/GdId', (req, res) => {
  console.log('GdId called ');
  try {
    if (
      req.body.gdSaveId !== undefined ||
      req.body.gdSaveId !== null ||
      req.body.gdSaveId !== '' ||
      req.body.gdSaveFileName !== undefined ||
      req.body.gdSaveFileName !== null ||
      req.body.gdSaveFileName !== ''
    ) {
      Gdrecivedid = req.body.gdSaveId;
      GdrecivedName = req.body.gdSaveFileName;
      downloadedFileName = GdrecivedName;
      console.log(
        'Gdrecivedid from /GdId ' +
          Gdrecivedid +
          'and File Name is ' +
          GdrecivedName,
      );
      res
        .status(200)
        .send(
          'GdId received ' + Gdrecivedid + 'with File name : ' + GdrecivedName,
        );
    }
  } catch (error) {
    console.log(errpr);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DownloadGd', (req, res) => {
  console.log('DownloadGd called ');
  try {
    if (
      GdrecivedName !== undefined ||
      GdrecivedName !== null ||
      GdrecivedName !== '' ||
      Gdrecivedid !== undefined ||
      Gdrecivedid !== null ||
      Gdrecivedid !== '' ||
      saveGDAccessToken !== undefined ||
      saveGDAccessToken !== null ||
      saveGDAccessToken !== ''
    ) {
      console.log('GdId from node ' + Gdrecivedid);
      console.log('GdrecivedName from node ' + GdrecivedName);
      //      --header 'Content-Type: application/json' \
      let sendToGd = '';
      let fileNameCreate = GdrecivedName.toString();
      return child.exec(
        `curl --location --request GET 'https://www.googleapis.com/drive/v2/files/${Gdrecivedid}?alt=media&source=downloadUrl' \
          --header 'Authorization: Bearer ${saveGDAccessToken}' \
          -o "${fileNameCreate}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          }
          sendToGd = stdout;
          console.log('the stdErr is ' + stderr);
          console.log('the stdOut is ' + JSON.stringify(sendToGd));
          res
            .status(200)
            .send('Response from Node: File downloaded from Google drive');
        },
      );
    }
  } catch (error) {
    console.log(errpr);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/DownloadGdLocal', (req, res) => {
  console.log('DownloadGdLocal called ');
  try {
    if (
      GdrecivedName !== undefined ||
      GdrecivedName !== null ||
      GdrecivedName !== '' ||
      Gdrecivedid !== undefined ||
      Gdrecivedid !== null ||
      Gdrecivedid !== '' ||
      saveGDAccessToken !== undefined ||
      saveGDAccessToken !== null ||
      saveGDAccessToken !== ''
    ) {
      console.log('GdId from node ' + Gdrecivedid);
      console.log('GdrecivedName from node ' + GdrecivedName);
      downloadedFileName = GdrecivedName;
      //      --header 'Content-Type: application/json' \
      let sendToGd = '';
      let fileNameCreate = GdrecivedName.toString();
      return child.exec(
        `curl --location --request GET 'https://www.googleapis.com/drive/v2/files/${Gdrecivedid}?alt=media&source=downloadUrl' \
          --header 'Authorization: Bearer ${saveGDAccessToken}' \
          -o "${fileNameCreate}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
            throw err;
          }
          sendToGd = stdout;
          console.log('the stdErr is ' + stderr);
          console.log('the stdOut is ' + JSON.stringify(sendToGd));
          res
            .status(200)
            .send('Response from Node: File downloaded from Google drive');
        },
      );
    }
  } catch (error) {
    console.log(errpr);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/BoxCode', (req, res) => {
  console.log('BoxCode called');

  try {
    if (
      req.body.saveCode !== undefined ||
      req.body.saveCode !== null ||
      req.body.saveCode !== ''
    ) {
      holdBoxCode = req.body.saveCode;
      console.log('holdBoxCode is ' + holdBoxCode);
      res
        .status(200)
        .json({ issuedCode: `the code is received ${holdBoxCode}` });
      return holdBoxCode;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BoxOauth', (req, res) => {
  console.log('BoxOauth called');
  try {
    if (
      holdBoxCode !== undefined ||
      holdBoxCode !== null ||
      holdBoxCode !== ''
    ) {
      console.log('holdBoxCode from BoxOath ' + holdBoxCode);
      return child.exec(
        `curl POST "https://api.box.com/oauth2/token" \
          -H "Content-Type: application/x-www-form-urlencoded" \
          -d "client_id=cizpnka9apgvmixa683wgv0lk63cbv7q" \
          -d "client_secret=5g7OcCqXqheEdINx3zDeF1jeXnBth137" \
          -d "code=${holdBoxCode}" \
          -d "grant_type=authorization_code"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from BoxOath ' + err);
            res.status(500).send(err);
            throw err;
          }
          let obj = stdout;
          let newObj = obj.toString().split(':')[1];
          console.log(
            'the BoxOath stdout is ' + newObj.substring(0, newObj.indexOf(',')),
          );
          console.log('the obj stderr is ' + stderr);

          boxAccessToken = newObj.substring(0, newObj.indexOf(','));
          res.status(200).json({
            boxAccesToken: 'box_AccessToken_Issued',
            access_token: boxAccessToken,
          });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BoxClientEmail', (req, res) => {
  console.log('BoxClientEmail called');
  try {
    if (
      boxAccessToken !== undefined ||
      boxAccessToken !== null ||
      boxAccessToken !== ''
    ) {
      return child.exec(
        `curl GET "https://api.box.com/2.0/users/me" \
        -H "Authorization: Bearer ${boxAccessToken}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from BoxClientEmail ' + err);
            res.status(500).send(err);
            throw err;
          }
          console.log('the BoxClientEmail stdout is ' + stdout);
          console.log('the BoxClientEmail stderr is ' + stderr);

          let obj = stdout;
          let boxClientName = obj.toString().split(':')[3];
          let newObj = obj.toString().split(':')[4];
          let boxEmail = newObj.substring(0, newObj.indexOf(','));

          res.status(200).json({
            BoxClientEmailMSG: 'BoxClientEmail_Issued',
            boxEmail: boxEmail.replace(/['"]+/g, ''),
            BoxClientName: boxClientName,
          });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BoxGetFile', (req, res) => {
  console.log('BoxGetFile called');
  try {
    if (
      boxAccessToken !== undefined ||
      boxAccessToken !== null ||
      boxAccessToken !== ''
    ) {
      return child.exec(
        `curl -X GET "https://api.box.com/2.0/files/12345" \
        -H "Authorization: Bearer ${boxAccessToken}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from BoxGetFile ' + err);
            res.status(500).send(err);
            throw err;
          }
          console.log('the BoxGetFile stdout is ' + stdout);
          console.log('the BoxGetFile stderr is ' + stderr);
          boxFile = stdout;
          res
            .status(200)
            .json({ BoxGetFileMSG: 'BoxGetFile_Received', boxFile: boxFile });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BoxGetFolders', (req, res) => {
  console.log('BoxGetFolders called');
  try {
    if (
      boxAccessToken !== undefined ||
      boxAccessToken !== null ||
      boxAccessToken !== ''
    ) {
      return child.exec(
        `curl GET "https://api.box.com/2.0/folders/0" \
         -H "Authorization: Bearer ${boxAccessToken}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from BoxGetFolders ' + err);
            res.status(500).send(err);
            throw err;
          }
          console.log('the BoxGetFolders stdout is ' + stdout);
          console.log('the BoxGetFolders stderr is ' + stderr);
          boxFolders = stdout;
          res.status(200).json({
            BoxGetFoldersMSG: 'BoxGetFolders_Received',
            boxFolders: boxFolders,
          });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BxDownload', (req, res) => {
  console.log('BxDownload called');
  try {
    if (
      boxAccessToken !== undefined ||
      boxAccessToken !== null ||
      boxAccessToken !== '' ||
      req.body.boxFileId !== undefined ||
      req.body.boxFileId !== null ||
      req.body.boxFileId !== '' ||
      req.body.boxFileName !== undefined ||
      req.body.boxFileName !== null ||
      req.body.boxFileName !== ''
    ) {
      let boxRetreivedId = req.body.boxFileId;
      boxRetreivedName = req.body.boxFileName;
      downloadedFileName = boxRetreivedName;

      console.log(
        'boxRetreivedId ' + boxRetreivedId + 'boxFileName ' + boxRetreivedName,
      );
      return child.exec(
        `curl --location --request GET "https://api.box.com/2.0/files/${boxRetreivedId}/content" \
        -H "Authorization: Bearer ${boxAccessToken}" \
        -o "${downloadedFileName}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from BxDownload ' + err);
            res.status(500).send(err);
            throw err;
          }
          console.log('the BxDownload stdout is ' + stdout);
          console.log('the BxDownload stderr is ' + stderr);
          res.status(200).json({ BxDownloadMSG: 'BoxFile_Downloaded' });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BxUpload', (req, res) => {
  console.log('BxUpload called');
  try {
    if (
      boxAccessToken !== undefined ||
      boxAccessToken !== null ||
      boxAccessToken !== '' ||
      req.body.boxUpFileName !== undefined ||
      req.body.boxUpFileName !== null ||
      req.body.boxUpFileName !== ''
    ) {
      let boxUploadFileName = req.body.boxUpFileName;
      console.log('boxUploadFileName from bxUpload ' + boxUploadFileName);
      downloadedFileName = boxUploadFileName;
      setTimeout(async () => {
        let moveFileResule = await tpMoveFilestoAllFiles(boxUploadFileName);
        console.log('moveFileResule after Boxdownload ' + moveFileResule);
      }, 50000);
      setTimeout(async () => {
        let boxConcatFile = '';
        fs.readdirSync(folder).forEach((file) => {
          if (file === boxUploadFileName) {
            console.log('inside the folderOne ');
            const extname = path.extname(file);
            const filename = path.basename(file, extname);
            const absolutePath = path.resolve(folder, file);
            boxConcatFile = filename + extname;
          }
        });
        let findFileSize = await bytesToSize(boxConcatFile);
        if (findFileSize < 5 && findFileSize !== NaN) {
          return child.exec(
            `curl --location --request POST "https://upload.box.com/api/2.0/files/content" \
            -H "Authorization: Bearer ${boxAccessToken}" \
            -H "Content-Type: multipart/form-data" \
            -F attributes='{"name":"MTC${boxUploadFileName}", "parent":{"id":"0"}}' \
            -F file=@./routes/AllFiles/${boxConcatFile}`,
            (err, stdout, stderr) => {
              if (err) {
                console.log('err from BxUpload ' + err);
                res.status(500).send(err);
                throw err;
              }
              console.log('the BxUpload stdout is ' + stdout);
              console.log('the BxUpload stderr is ' + stderr);
              res.status(200).json({ BxUploadMSG: 'BoxFile_Uploaded' });
              toDeleteAllFiles();
            },
          );
        } else {
          console.log('inside large file bxUpload');
          let bxActualFileSize = await getFileSize(boxConcatFile);
          await bxSdkUpload(boxAccessToken, boxConcatFile, bxActualFileSize);
          res.status(200).json({
            bxLargeUploadMSG: 'bxFile_Uploaded',
            bxLargeFileUpload: 'bxLargeFileUploadComleted',
          });
          toDeleteAllFiles();
          /* 
            await bxUploadSessionStart(boxAccessToken,bxActualFileSize,boxConcatFile);
            await encodeShaOne(part_size,boxConcatFile);
            await bxNewFlSizes(bxNewFiles);
            
            await bxFirstLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,part_size,boxConcatFile,storeHashs[1]);  
            await bxSecondLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,boxConcatFile,firstBxPart,storeHashs[1]);
            //handle errors get new hash from error
            bxFirstExec = true;
            await bxThirdLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,boxConcatFile,secondBxPart,storeHashs[storeHashs.length -2],bxFirstExec);
            bxFirstExec = false;
            await bxThirdLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,boxConcatFile,secondBxPart,bxBeforeEndHash,bxFirstExec);
            bxFirstExec = true;
            await bxCommitSession(boxAccessToken,bxUpFileId,bxParts,storeHashs[storeHashs.length -1],bxFirstExec);
            bxFirstExec = false;
            await bxCommitSession(boxAccessToken,bxUpFileId,bxParts,bxCommitHash,bxFirstExec);
            res.status(200).json({"bxLargeUploadMSG": "bxFile_Uploaded", "bxLargeFileUpload": "bxLargeFileUploadComleted"});
            toDeleteAllFiles(); */
        }
      }, 55000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/BxLocalUpload', (req, res) => {
  console.log('BxLocalUpload called');
  try {
    if (
      boxAccessToken !== undefined ||
      boxAccessToken !== null ||
      boxAccessToken !== '' ||
      req.body.boxUpFileName !== undefined ||
      req.body.boxUpFileName !== null ||
      req.body.boxUpFileName !== ''
    ) {
      let boxUploadFileName = req.body.boxUpFileName;
      console.log('boxUploadFileName from bxLocalUpload ' + boxUploadFileName);

      setTimeout(async () => {
        let boxConcatFile = '';
        fs.readdirSync(folder).forEach((file) => {
          if (file === boxUploadFileName) {
            console.log('inside the folderOne ');
            const extname = path.extname(file);
            const filename = path.basename(file, extname);
            const absolutePath = path.resolve(folder, file);
            boxConcatFile = filename + extname;
          }
        });
        let findFileSize = await bytesToSize(boxConcatFile);
        if (findFileSize < 5 && findFileSize !== NaN) {
          return child.exec(
            `curl --location --request POST "https://upload.box.com/api/2.0/files/content" \
            -H "Authorization: Bearer ${boxAccessToken}" \
            -H "Content-Type: multipart/form-data" \
            -F attributes='{"name":"MTC${boxUploadFileName}", "parent":{"id":"0"}}' \
            -F file=@./routes/AllFiles/${boxConcatFile}`,
            (err, stdout, stderr) => {
              if (err) {
                console.log('err from BxUpload ' + err);
                res.status(500).send(err);
                throw err;
              }
              console.log('the BxLocalUpload stdout is ' + stdout);
              console.log('the BxLocalUpload stderr is ' + stderr);
              res
                .status(200)
                .json({ BxLocalUploadMSG: 'BoxFile_LocalUploaded' });
              toDeleteAllFiles();
            },
          );
        } else {
          console.log('inside the large bxfile upload');
          let bxActualFileSize = await getFileSize(boxConcatFile);
          await bxSdkUpload(boxAccessToken, boxConcatFile, bxActualFileSize);
          res.status(200).json({
            bxLargeUploadMSG: 'bxFile_Uploaded',
            bxLargeFileUpload: 'bxLargeFileUploadComleted',
          });
          toDeleteAllFiles();
          /* 
             await bxUploadSessionStart(boxAccessToken,bxActualFileSize,boxConcatFile);
            await encodeShaOne(part_size,boxConcatFile);
            await bxNewFlSizes(bxNewFiles);
            
            await bxFirstLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,part_size,boxConcatFile,storeHashs[1]);  
            await bxSecondLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,boxConcatFile,firstBxPart,storeHashs[1]);
            //handle errors get new hash from error
            bxFirstExec = true;
            await bxThirdLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,boxConcatFile,secondBxPart,storeHashs[storeHashs.length -2],bxFirstExec);
            bxFirstExec = false;
            await bxThirdLargeFilePart(boxAccessToken,bxUpFileId,bxActualFileSize,boxConcatFile,secondBxPart,bxBeforeEndHash,bxFirstExec);
            bxFirstExec = true;
            await bxCommitSession(boxAccessToken,bxUpFileId,bxParts,storeHashs[storeHashs.length -1],bxFirstExec);
            bxFirstExec = false;
            await bxCommitSession(boxAccessToken,bxUpFileId,bxParts,bxCommitHash,bxFirstExec);
            res.status(200).json({"bxLargeUploadMSG": "bxFile_Uploaded", "bxLargeFileUpload": "bxLargeFileUploadComleted"});
            toDeleteAllFiles();  */
        }
      }, 55000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(err);
    throw err;
  }
});
app.post('/api/OdAccessToken', (req, res) => {
  console.log('OdAccessToken called');
  res.header('Access-Control-Allow-Origin', '*');

  try {
    if (
      req.body.odCode !== undefined ||
      req.body.odCode !== null ||
      req.body.odCode !== ''
    ) {
      odAccessToken = req.body.odCode;
      console.log('OdAccessToken is ' + odAccessToken);
      res.status(200).json({
        OdAccessTokenMSG: 'OdAccessToken_Received',
        OdAccessToken: odAccessToken,
      });
      return odAccessToken;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/OdProfile', (req, res) => {
  console.log('OdProfile called');
  try {
    if (
      odAccessToken !== undefined ||
      odAccessToken !== null ||
      odAccessToken !== ''
    ) {
      return child.exec(
        `curl GET "https://graph.microsoft.com/v1.0/me" \
         -H "Authorization: Bearer ${odAccessToken}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from OdProfile ' + err);
            timeStamp.status(500).send(err);
            throw err;
          }
          console.log('the OdProfile stdout is ' + stdout);
          console.log('the OdProfile stderr is ' + stderr);
          console.log(
            'odProfile in detail ' +
              JSON.parse(stdout) +
              'Name is ' +
              JSON.parse(stdout).id +
              'email is ' +
              JSON.parse(stdout).userPrincipalName,
          );
          let odClientName = JSON.parse(stdout).id;
          let odEmail = JSON.parse(stdout).userPrincipalName;
          res.status(200).json({
            OdProfileMSG: 'OdProfile_ProfileInfo',
            OdProfileInfo: odEmail.toString(),
            odClientName: odClientName.toString(),
          });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/OdGetFiles', (req, res) => {
  console.log('OdGetFiles called');
  try {
    if (
      odAccessToken !== undefined ||
      odAccessToken !== null ||
      odAccessToken !== ''
    ) {
      return child.exec(
        `curl GET "https://graph.microsoft.com/v1.0/me/drive/root/children" \
         -H "Authorization: Bearer ${odAccessToken}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from OdGetFiles ' + err);
            res.status(500).send(err);
            throw err;
          }
          console.log('the OdGetFiles stdout is ' + stdout);
          console.log('the OdGetFiles stderr is ' + stderr);
          odFiles = stdout;
          res
            .status(200)
            .json({ OdGetFilesMSG: 'OdFiles_Received', OdFiles: odFiles });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/OdDownload', (req, res) => {
  console.log('OdDownload called');
  try {
    if (
      odAccessToken !== undefined ||
      odAccessToken !== null ||
      odAccessToken !== '' ||
      req.body.odFileUrl !== undefined ||
      req.body.odFileUrl !== null ||
      req.body.odFileUrl !== '' ||
      req.body.odFileName !== undefined ||
      req.body.odFileName !== null ||
      req.body.odFileName !== ''
    ) {
      let odFileUrl = req.body.odFileUrl;
      let odFileName = req.body.odFileName;
      downloadedFileName = odFileName;

      console.log('OdFileName ' + odFileName + 'odFileId ' + odFileUrl);
      return child.exec(
        `curl --location --request GET ${odFileUrl} \
         -H "Authorization: Bearer ${odAccessToken}" \
         -o "${odFileName}"`,
        (err, stdout, stderr) => {
          if (err) {
            console.log('err from OdDownload ' + err);
            res.status(500).send(err);
            throw err;
          }
          console.log('the OdDownload stdout is ' + stdout);
          console.log('the OdDownload stderr is ' + stderr);
          odFileDownload = stdout;
          res.status(200).json({
            odDownloadMSG: 'odFile_Downloaded',
            OdDownload: odFileDownload,
          });
        },
      );
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/OdUpload', (req, res) => {
  console.log('OdUpload called');
  try {
    if (
      odAccessToken !== undefined ||
      odAccessToken !== null ||
      odAccessToken !== '' ||
      req.body.odUpFileName !== undefined ||
      req.body.odUpFileName !== null ||
      req.body.odUpFileName !== ''
    ) {
      let odUploadFileName = req.body.odUpFileName;
      console.log('odUpFileName is ' + odUploadFileName);

      setTimeout(async () => {
        let moveFileResule = await tpMoveFilestoAllFiles(odUploadFileName);
        console.log('moveFileResule after OdDownload ' + moveFileResule);
      }, 30000);

      setTimeout(async () => {
        let odConcatFile = '';
        fs.readdirSync(folder).forEach((file) => {
          if (file === odUploadFileName) {
            console.log('inside the folderOne ');
            const extname = path.extname(file);
            const filename = path.basename(file, extname);
            const absolutePath = path.resolve(folder, file);
            odConcatFile = filename + extname;
          }
        });
        let findFileSize = await bytesToSize(odConcatFile);
        if (findFileSize < 5 && findFileSize !== NaN) {
          return child.exec(
            `curl --location --request PUT https://graph.microsoft.com/v1.0/me/drive/root:/${odConcatFile}:/content \
            -H "Authorization: Bearer ${odAccessToken}" \
            --data-binary @./routes/AllFiles/${odConcatFile} \
            -H "Content-Type: application/json"`,
            (err, stdout, stderr) => {
              if (err) {
                console.log('err from OdUpload ' + err);
                res.status(500).send(err);
                throw err;
              }
              console.log('the OdUpload stdout is ' + stdout);
              console.log('the OdUpload stderr is ' + stderr);
              odFileUpload = stdout;
              res.status(200).json({
                odUploadMSG: 'odFile_Uploaded',
                OdUpload: odFileUpload,
              });
              toDeleteAllFiles();
            },
          );
        } else {
          await odUploadSessionStart(odAccessToken, odConcatFile);
          console.log('inside large file odUpload');
          await odUploadSessionStart(odAccessToken, odConcatFile);
          let saveActualSize = await getFileSize(odConcatFile);
          await odUploadFirstResume(
            odAccessToken,
            odUploadUrl,
            saveActualSize,
            odConcatFile,
          );
          await odUploadSecondResume(
            odAccessToken,
            odUploadUrl,
            saveActualSize,
            firstFragmentLength,
            odConcatFile,
          );
          let getOdLargeFileResult = await odUploadResumeCompleted(
            odAccessToken,
            odUploadUrl,
            saveActualSize,
            secondFragmentLength,
            odConcatFile,
          );
          res.status(200).json({
            odLargeFileUploadMSG: 'odFile_Uploaded',
            OdLargeFileUpload: getOdLargeFileResult,
          });
          toDeleteAllFiles();
        }
      }, 35000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
app.post('/api/OdLocalUpload', (req, res) => {
  console.log('OdLocalUpload called');
  try {
    if (
      odAccessToken !== undefined ||
      odAccessToken !== null ||
      odAccessToken !== '' ||
      req.body.odUpFileName !== undefined ||
      req.body.odUpFileName !== null ||
      req.body.odUpFileName !== ''
    ) {
      let odUploadFileName = req.body.odUpFileName;
      console.log('odLocalUpFileName is ' + odUploadFileName);

      setTimeout(async () => {
        let odConcatFile = '';
        fs.readdirSync(folder).forEach((file) => {
          if (file === odUploadFileName) {
            console.log('inside the folderOne ');
            const extname = path.extname(file);
            const filename = path.basename(file, extname);
            const absolutePath = path.resolve(folder, file);
            odConcatFile = filename + extname;
          }
        });
        let findFileSize = await bytesToSize(odConcatFile);
        if (findFileSize < 5 && findFileSize !== NaN) {
          return child.exec(
            `curl --location --request PUT https://graph.microsoft.com/v1.0/me/drive/root:/${odConcatFile}:/content \
            -H "Authorization: Bearer ${odAccessToken}" \
            --data-binary @./routes/AllFiles/${odConcatFile} \
            -H "Content-Type: application/json"`,
            (err, stdout, stderr) => {
              if (err) {
                console.log('err from OdUpload ' + err);
                res.status(500).send(err);
                reject(err);
                throw err;
              }
              console.log('the OdLocalUpload stdout is ' + stdout);
              console.log('the OdLocalUpload stderr is ' + stderr);
              odFileUpload = stdout;
              res.status(200).json({
                odLocalUploadMSG: 'odFile_LocalUploaded',
                OdLocalUpload: odFileUpload,
              });
              toDeleteAllFiles();
            },
          );
        } else {
          console.log('inside large file odUpload');
          await odUploadSessionStart(odAccessToken, odConcatFile);
          let saveActualSize = await getFileSize(odConcatFile);
          await odUploadFirstResume(
            odAccessToken,
            odUploadUrl,
            saveActualSize,
            odConcatFile,
          );
          await odUploadSecondResume(
            odAccessToken,
            odUploadUrl,
            saveActualSize,
            firstFragmentLength,
            odConcatFile,
          );
          await odUploadResumeCompleted(
            odAccessToken,
            odUploadUrl,
            saveActualSize,
            secondFragmentLength,
            odConcatFile,
          );
          res.status(200).json({
            odLocalUploadMSG: 'odFile_LocalUploaded',
            OdLocalUpload: 'OdLocalUploadLargeFileComleted',
          });
          toDeleteAllFiles();
        }
      }, 35000);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    throw error;
  }
});
function toDeleteAllFiles() {
  return child.exec(
    `cd ./routes/AllFiles && rm -f * && cd .. && pwd`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        throw err;
      }
      console.log(`stdout of files ${stdout}`);
    },
  );
}
async function tpMoveFilestoAllFiles(filename) {
  try {
    if (filename !== undefined || filename !== null || filename !== '') {
      return await new Promise((resolve, reject) => {
        console.log('tpMoveFilestoAllFiles called');
        console.log('the filename is ' + filename);
        let newAppDir = appDir
          .toString()
          .substring(0, appDir.toString().lastIndexOf('/') + 1);
        console.log('the newAppDir is ' + newAppDir);
        let singlepathAp = `${newAppDir}routes/AllFiles`;
        console.log('the singlepathAp is ' + singlepathAp);

        return child.exec(
          `mv "${filename}" ${singlepathAp}`,
          (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              reject(err);
              throw err;
            }
            console.log('stdout of files' + stdout);
            console.log('stderr of files' + stderr);
            return resolve(stdout);
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function tpMoveFiletoLocalPath(filename, flPath) {
  try {
    if (
      filename !== undefined ||
      filename !== null ||
      filename !== '' ||
      flPath !== undefined ||
      flPath !== null ||
      flPath !== ''
    ) {
      return await new Promise((resolve, reject) => {
        console.log('tpMoveFiletoLocalPath called');
        console.log('the filename is ' + filename);

        let singlepathAp = `${flPath}`;
        console.log('the singlepathAp is ' + singlepathAp);

        return child.exec(
          `mv "${filename}" ${singlepathAp} && cd .. && cd ..`,
          (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              reject(err);
              throw err;
            }
            console.log('stdout of files' + stdout);
            console.log('stderr of files' + stderr);
            return resolve(stdout);
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function tpMoveFilefromLocalPath(filename, flPath) {
  try {
    if (
      filename !== undefined ||
      filename !== null ||
      filename !== '' ||
      flPath !== undefined ||
      flPath !== null ||
      flPath !== ''
    ) {
      return await new Promise(async (resolve, reject) => {
        console.log('tpMoveFilefromLocalPath called');
        console.log('the filename is ' + filename);

        let newAppDir = appDir
          .toString()
          .substring(0, appDir.toString().lastIndexOf('/') + 1);
        console.log('the newAppDir is ' + newAppDir);
        let appFileLocalPath = `${newAppDir}routes/AllFiles`;

        let singlepathAp = `${flPath}`;
        let mdOriginFlPath = singlepathAp.split('/');
        console.log('the mdOriginFlPath is ' + +mdOriginFlPath.length);

        let mdAppDir = newAppDir.split('/');
        console.log('the mdAppDir is ' + mdAppDir + mdAppDir.length);
        let displayFound = await findSpecialPath(mdAppDir, mdOriginFlPath);
        console.log('displayFound ' + displayFound);
        let searchLFPath = singlepathAp.split(`${displayFound}`).pop();
        console.log('the searchLFPath is ' + searchLFPath);

        return child.exec(
          `cd && cd .${searchLFPath} && mv "${filename}" ${appFileLocalPath}`,
          (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              reject(err);
              throw err;
            }
            console.log('stdout of files' + stdout);
            console.log('stderr of files' + stderr);
            return resolve(stdout);
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function findSpecialPath(arrayOne, arrayTwo) {
  try {
    if (
      arrayOne !== undefined ||
      arrayOne.length !== 0 ||
      arrayTwo !== undefined ||
      arrayTwo.length !== 0
    ) {
      return await new Promise((resolve, reject) => {
        let findCommonPath = '';
        for (let index = 0; index < arrayOne.length; index++) {
          if (arrayOne.includes(arrayTwo[index])) {
            if (arrayTwo[index] !== 'home') {
              findCommonPath = arrayTwo[index];
            }
          }
        }
        console.log('findCommonPath is ' + findCommonPath);
        return resolve(findCommonPath);
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getFileSize(fileName) {
  return await new Promise((resolve, reject) => {
    let stats = fs.statSync('./routes/AllFiles/' + fileName);
    fileSizeInBytes = stats.size;
    console.log(fileSizeInBytes);
    resolve(fileSizeInBytes);
    return fileSizeInBytes;
  }).catch((err) => console.log(err));
}
async function bytesToSize(fileName) {
  try {
    if (fileName !== undefined || fileName !== null || fileName !== '') {
      let fileSizeResult = await getFileSize(fileName);
      console.log('fileSizeResult ' + fileSizeResult);
      convertedSize = (fileSizeResult / (1024 * 1024)).toFixed(2);

      console.log('convertedSize ' + convertedSize);
      return convertedSize;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function dpUploadSessionStart(dpAccessToken, dpFile) {
  console.log('dpUploadSessionStart called ');
  try {
    if (
      dpAccessToken !== undefined ||
      dpAccessToken !== null ||
      dpAccessToken !== '' ||
      dpFile !== undefined ||
      dpFile !== null ||
      dpFile !== ''
    ) {
      return await new Promise((resolve, reject) => {
        let gth = sendToAngularAccessToken;
        let modifyGth = gth.split(' ');
        let saveAccess = modifyGth[1];
        console.log('saveAccess is ' + saveAccess);

        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/upload_session/start \
          --header 'Authorization: Bearer ${dpAccessToken.substr(
            1,
            saveAccess.length - 3,
          )}' \
          --header 'Dropbox-API-Arg: {"close": false}' \
          --header 'Content-Type: application/octet-stream' \
          --data-binary @./routes/AllFiles/${dpFile}`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from dpLargeFileUpload ' + err);
              res.status(500).send(err);
              reject(err);
              throw err;
            }
            console.log('the dpLargeFile stdout is ' + stdout);
            console.log('the dpLargeFile stderr is ' + stderr);

            dpHoldSessionId = stdout.split(':')[1];
            console.log('dpHoldSessionId ' + dpHoldSessionId);
            mdDpHoldSessionId = dpHoldSessionId.substr(
              1,
              dpHoldSessionId.length - 2,
            );
            console.log('mdDpHoldSessionId ' + mdDpHoldSessionId);
            holdDpSessionId = mdDpHoldSessionId;

            resolve(mdDpHoldSessionId.toString());
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function dpUploadLargeFileAppend(
  dpAccessToken,
  sessionId,
  dpFile,
  actualSize,
) {
  console.log('dpUploadLargeFileAppend called ');
  try {
    if (
      dpAccessToken !== undefined ||
      dpAccessToken !== null ||
      dpAccessToken !== '' ||
      sessionId !== undefined ||
      sessionId !== null ||
      sessionId !== '' ||
      dpFile !== undefined ||
      dpFile !== null ||
      dpFile !== '' ||
      actualSize !== undefined ||
      actualSize !== null ||
      actualSize !== 0 ||
      actualSize !== NaN
    ) {
      return await new Promise((resolve, reject) => {
        let gth = sendToAngularAccessToken;

        let modifyGth = gth.split(' ');
        let saveAccess = modifyGth[1];
        console.log('saveAccess is ' + saveAccess);
        let newSessionId = sessionId.substr(1, sessionId.length - 2);

        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/upload_session/append_v2 \
          --header 'Authorization: Bearer ${dpAccessToken.substr(
            1,
            saveAccess.length - 3,
          )}' \
          --header 'Dropbox-API-Arg: {"cursor": {"session_id": "${newSessionId}","offset": ${actualSize}},"close": false}' \
          --header 'Content-Type: application/octet-stream' \
          --data-binary @./routes/AllFiles/${dpFile}`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from dpUploadLargeFileAppend ' + err);
              res.status(500).send(err);
              reject(err);
              throw err;
            }
            console.log('the dpUploadLargeFileAppend stdout is ' + stdout);
            console.log('the dpUploadLargeFileAppend stderr is ' + stderr);

            resolve(stdout.toString());
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function dpUploadSessionFinish(
  dpAccessToken,
  sessionId,
  dpFile,
  actualSize,
) {
  console.log('dpUploadSessionFinish called ');
  try {
    if (
      dpAccessToken !== undefined ||
      dpAccessToken !== null ||
      dpAccessToken !== '' ||
      sessionId !== undefined ||
      sessionId !== null ||
      sessionId !== '' ||
      dpFile !== undefined ||
      dpFile !== null ||
      dpFile !== '' ||
      actualSize !== undefined ||
      actualSize !== null ||
      actualSize !== 0 ||
      actualSize !== NaN
    ) {
      return await new Promise((resolve, reject) => {
        let gth = sendToAngularAccessToken;

        let modifyGth = gth.split(' ');
        let saveAccess = modifyGth[1];
        console.log('saveAccess is ' + saveAccess);
        let newSessionId = sessionId.substr(1, sessionId.length - 2);
        let secondOffset = actualSize * 2;

        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/upload_session/finish \
          --header 'Authorization: Bearer ${dpAccessToken.substr(
            1,
            saveAccess.length - 3,
          )}' \
          --header 'Dropbox-API-Arg: {"cursor": {"session_id": "${newSessionId}","offset": ${secondOffset}},"commit": {"path": "/MTC${dpFile}","mode": "add","autorename": true,"mute": false,"strict_conflict": false}}' \
          --header 'Content-Type: application/octet-stream' \
          --data-binary @./routes/AllFiles/${dpFile}`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from dpUploadSessionFinish ' + err);
              res.status(500).send(err);
              reject(err);
              throw err;
            }
            console.log('the dpUploadSessionFinish stdout is ' + stdout);
            console.log('the dpUploadSessionFinish stderr is ' + stderr);
            resolve(stdout.toString());
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function odUploadSessionStart(odAccToken, odFile) {
  console.log('odUploadSessionStart called ');
  try {
    if (
      odAccToken !== undefined ||
      odAccToken !== null ||
      dpAccessToken !== '' ||
      odFile !== undefined ||
      odFile !== null ||
      odFile !== ''
    ) {
      return await new Promise((resolve, reject) => {
        child.exec(
          `curl -X POST https://graph.microsoft.com/v1.0/me/drive/root:/${odFile}:/createUploadSession \
          --header 'Authorization: Bearer ${odAccToken}' \
          --header 'Content-Type: application/json' \
          -d '{
            "item": {
              "@odata.type": "microsoft.graph.driveItemUploadableProperties",
              "@microsoft.graph.conflictBehavior": "rename",
              "name": "${odFile}"
            }
          }'`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from odUploadSessionStart ' + err);

              reject(err);
              throw err;
            }
            console.log('the odUploadSessionStart stdout is ' + stdout);
            console.log('the odUploadSessionStart stderr is ' + stderr);

            let getOdResponse = stdout.toString();
            let mdGetOdResponse = getOdResponse.split(':');
            odUploadUrl =
              'https:' +
              mdGetOdResponse[8].substr(0, mdGetOdResponse[8].length - 2);
            console.log('odUploadUrl ' + odUploadUrl);

            resolve(odUploadUrl);
            return odUploadUrl;
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function odUploadFirstResume(
  odAccToken,
  uploadUrl,
  actualSize,
  fileName,
) {
  console.log('odUploadFirstResume called ');

  try {
    if (
      odAccToken !== undefined ||
      odAccToken !== null ||
      dpAccessToken !== '' ||
      uploadUrl !== undefined ||
      uploadUrl !== null ||
      uploadUrl !== '' ||
      actualSize !== undefined ||
      actualSize !== null ||
      actualSize !== 0 ||
      actualSize !== NaN
    ) {
      return await new Promise((resolve, reject) => {
        firstFragmentLength = Math.round(actualSize / 3);
        console.log('firstFragmentLength ' + firstFragmentLength);
        child.exec(
          `curl -i -X PUT ${uploadUrl} \
          -H 'Content-Length: ${firstFragmentLength + 1}' \
          --data-binary @./routes/AllFiles/${fileName} \
          -H 'Content-Range: bytes 0-${firstFragmentLength}/${actualSize}'`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from odUploadFirstResume ' + err);

              reject(err);
              throw err;
            }
            console.log('the odUploadFirstResume stdout is ' + stdout);
            console.log('the odUploadFirstResume stderr is ' + stderr);
            resolve(firstFragmentLength.toString());
            return firstFragmentLength;
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function odUploadSecondResume(
  odAccToken,
  uploadUrl,
  actualSize,
  firstFrg,
  fileName,
) {
  console.log('odUploadSecondResume called ');

  try {
    if (
      odAccToken !== undefined ||
      odAccToken !== null ||
      dpAccessToken !== '' ||
      uploadUrl !== undefined ||
      uploadUrl !== null ||
      uploadUrl !== '' ||
      actualSize !== undefined ||
      actualSize !== null ||
      actualSize !== 0 ||
      actualSize !== NaN
    ) {
      return await new Promise((resolve, reject) => {
        secondFragmentLength = firstFrg * 2;
        let secStr = firstFrg + 1;
        let secConLg = secondFragmentLength - secStr + 1;

        console.log(
          'firstFrg ' +
            firstFrg +
            'secondFragmentLength ' +
            secondFragmentLength +
            'secConLg ' +
            secConLg +
            'secStr ' +
            secStr,
        );

        child.exec(
          `curl -i -X PUT ${uploadUrl} \
          -H 'Content-Length: ${secConLg}' \
          --data-binary @./routes/AllFiles/${fileName} \
          -H 'Content-Range: bytes ${secStr}-${secondFragmentLength}/${actualSize}'`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from odUploadSecondResume ' + err);

              reject(err);
              throw err;
            }
            console.log('the odUploadSecondResume stdout is ' + stdout);
            console.log('the odUploadSecondResume stderr is ' + stderr);
            resolve(stderr);
            return secondFragmentLength;
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function odUploadResumeCompleted(
  odAccToken,
  uploadUrl,
  actualSize,
  secondFrg,
  fileName,
) {
  console.log('odUploadResumeCompleted called ');
  try {
    if (
      odAccToken !== undefined ||
      odAccToken !== null ||
      dpAccessToken !== '' ||
      uploadUrl !== undefined ||
      uploadUrl !== null ||
      uploadUrl !== '' ||
      actualSize !== undefined ||
      actualSize !== null ||
      actualSize !== 0 ||
      actualSize !== NaN
    ) {
      return await new Promise((resolve, reject) => {
        let compDiff = actualSize - 1;
        let compStr = secondFrg + 1;
        rmFragmentLength = compDiff - compStr + 1;
        console.log('rmFragmentLength ' + rmFragmentLength);
        console.log(
          'firstFrg ' +
            secondFrg +
            'compDiff ' +
            compDiff +
            'compStr ' +
            compStr,
        );

        child.exec(
          `curl -i -X PUT ${uploadUrl} \
          -H 'Content-Length: ${rmFragmentLength}' \
          --data-binary @./routes/AllFiles/${fileName} \
          -H 'Content-Range: bytes ${compStr}-${compDiff}/${actualSize}'`,
          (err, stdout, stderr) => {
            if (err) {
              console.log('err from odUploadResumeCompleted ' + err);
              reject(err);
              throw err;
            }
            console.log('the odUploadResumeCompleted stdout is ' + stdout);
            console.log('the odUploadResumeCompleted stderr is ' + stderr);
            resolve(stderr);
          },
        );
      }).catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function bxUploadSessionStart(bxAccToken, bxFileSize, bxFileName) {
  return await new Promise((resolve, reject) => {
    //let minSize = 20000000;
    //let diffSize = minSize - bxFileSize;
    //useSize = diffSize + bxFileSize;
    console.log(
      'bxAccToken ' +
        bxAccToken +
        'bxFileSize ' +
        bxFileSize +
        'bxFileName ' +
        bxFileName,
    );
    child.exec(
      `curl -X POST "https://upload.box.com/api/2.0/files/upload_sessions" \
        -H 'Authorization: Bearer ${bxAccToken.substr(
          1,
          bxAccToken.length - 2,
        )}' \
        -H 'Content-Type: application/json' \
        -d '{
          "folder_id": "0",
          "file_size": ${bxFileSize},
          "file_name": "${bxFileName}"
           }'`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from bxUploadSessionStart ' + err);
          reject(err);
          throw err;
        }
        console.log('the bxUploadSessionStart stdout is ' + stdout);
        console.log('the bxUploadSessionStart stderr is ' + stderr);

        let mdStdout = stdout.split(':');
        total_parts = mdStdout[1];
        part_size = mdStdout[2].split(',')[0];
        bxUpFileId = mdStdout[19];

        resolve({
          total_parts: total_parts,
          part_size: part_size,
          bxUpFileId: bxUpFileId,
        });
      },
    );
  }).catch((err) => console.log(err));
}
async function bxFirstLargeFilePart(
  bxAccToken,
  bxFileId,
  bxFileSize,
  firstBxPrt,
  bxFileName,
  hashDigest,
) {
  return await new Promise(async (resolve, reject) => {
    let bfFileId = bxFileId.substr(1, bxFileId.length - 3);
    console.log(
      'bxFileIdLength ' +
        bfFileId.length +
        'bxFileId ' +
        bfFileId.split('"')[0] +
        'bxFileSize ' +
        bxFileSize +
        'firstBxPart ' +
        firstBxPart +
        'bxFileName ' +
        bxFileName,
    );

    let mdFirstBxPart = firstBxPrt - 1;
    let mdBxFileId = bfFileId.split('"')[0];
    let mdIntFirstBxPart = parseInt(mdFirstBxPart);
    let mdbxFileSize = parseInt(bxFileSize);
    let mdIntFrst = parseInt(firstBxPrt);

    console.log('hashDigest ' + hashDigest);

    child.exec(
      `curl -X PUT "https://upload.box.com/api/2.0/files/upload_sessions/${mdBxFileId}" \
      -H 'Authorization: Bearer ${bxAccToken.substr(
        1,
        bxAccToken.length - 2,
      )}' \
      -H 'Content-Range: bytes 0-${mdIntFirstBxPart}/${mdbxFileSize}' \
      --data-binary @./routes/AllFiles/testImage.jpg \
      -H 'Content-Type: application/octet-stream' \
      --header 'Digest: sha=${hashDigest}' \
      -H 'Content-Length: ${mdIntFrst}'`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from bxFirstLargeFilePart ' + err);
          reject(err);
          throw err;
        }
        console.log('the bxFirstLargeFilePart stdout is ' + stdout);
        console.log('the bxFirstLargeFilePart stderr is ' + stderr);
        bxParts.push(stdout);
        firstBxPart = firstBxPrt;
        resolve(stdout);
        return firstBxPart;
      },
    );
  }).catch((err) => console.log(err));
}
async function bxSecondLargeFilePart(
  bxAccToken,
  bxFileId,
  bxFileSize,
  bxFileName,
  bxfirstPrt,
  hashDigest,
) {
  return await new Promise((resolve, reject) => {
    let bfFileId = bxFileId.substr(1, bxFileId.length - 3);
    let mdBxFileId = bfFileId.split('"')[0];
    let mdbxFileSize = parseInt(bxFileSize);
    let mdIntFrst = parseInt(bxfirstPrt);

    let bxSecondFilePart = mdIntFrst * 2 - 1;
    console.log('hashDigest ' + hashDigest);

    child.exec(
      `curl -X PUT "https://upload.box.com/api/2.0/files/upload_sessions/${mdBxFileId}" \
      -H 'Authorization: Bearer ${bxAccToken.substr(
        1,
        bxAccToken.length - 2,
      )}' \
      --header 'Digest: sha=${hashDigest}' \
      -H 'Content-Range: bytes ${mdIntFrst}-${bxSecondFilePart}/${mdbxFileSize}' \
      -H 'Content-Type: application/octet-stream' \
      --data-binary @./routes/AllFiles/${bxFileName} \
      -H 'Content-Length: ${mdIntFrst}'`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from bxSecondLargeFilePart ' + err);
          reject(err);
          throw err;
        }
        console.log('the bxSecondLargeFilePart stdout is ' + stdout);
        console.log('the bxSecondLargeFilePart stderr is ' + stderr);
        bxParts.push(stdout);
        secondBxPart = bxSecondFilePart;
        resolve(stdout);
        return secondBxPart;
      },
    );
  }).catch((err) => console.log(err));
}
async function bxThirdLargeFilePart(
  bxAccToken,
  bxFileId,
  bxFileSize,
  bxFileName,
  bxSecondPrt,
  hashDigest,
  bxFirstRun,
) {
  return await new Promise((resolve, reject) => {
    let bfFileId = bxFileId.substr(1, bxFileId.length - 3);
    let mdBxFileId = bfFileId.split('"')[0];
    let mdbxFileSize = parseInt(bxFileSize);
    let mdIntSecond = parseInt(bxSecondPrt) + 1;
    let diffBxPart = mdbxFileSize - 1;
    let lastBxCnLn = diffBxPart - mdIntSecond + 1;

    console.log('hashDigest ' + hashDigest);

    child.exec(
      `curl -X PUT "https://upload.box.com/api/2.0/files/upload_sessions/${mdBxFileId}" \
      -H 'Authorization: Bearer ${bxAccToken.substr(
        1,
        bxAccToken.length - 2,
      )}' \
      --header 'Digest: sha=${hashDigest}' \
      -H 'Content-Range: bytes ${mdIntSecond}-${diffBxPart}/${mdbxFileSize}' \
      -H 'Content-Type: application/octet-stream' \
      --data-binary @./routes/AllFiles/${bxFileName} \
      -H 'Content-Length: ${lastBxCnLn}'`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from bxThirdLargeFilePart ' + err);
          reject(err);
          throw err;
        }
        console.log('the bxThirdLargeFilePart stdout is ' + stdout);
        console.log('the bxThirdLargeFilePart stderr is ' + stderr);
        if (bxFirstRun) {
          let readMessage = JSON.parse(stdout).message;
          let hlMessage = readMessage.split(':')[1].split('=')[0];
          bxBeforeEndHash = hlMessage.substr(1, hlMessage.length) + '=';

          resolve(bxBeforeEndHash);
          return bxBeforeEndHash;
        } else {
          bxParts.push(stdout);
          resolve(stdout);
          return bxParts;
        }
      },
    );
  }).catch((err) => console.log(err));
}
async function bxCommitSession(
  bxAccToken,
  bxFileId,
  bxPrts,
  hashDigest,
  bxFirstRun,
) {
  return await new Promise(async (resolve, reject) => {
    let dateToDisplay = formatDate();
    console.log('dateToDisplay ' + dateToDisplay);
    let bfFileId = bxFileId.substr(1, bxFileId.length - 3);
    let mdBxFileId = bfFileId.split('"')[0];

    let newOut = [];
    bxPrts.filter((el) => newOut.push(JSON.parse(el).part));

    let arrayOfParts = JSON.stringify(newOut);

    child.exec(
      `curl -X POST 'https://upload.box.com/api/2.0/files/upload_sessions/${mdBxFileId}/commit' \
      -H 'Authorization: Bearer ${bxAccToken.substr(
        1,
        bxAccToken.length - 2,
      )}' \
      -H 'Digest: sha=${hashDigest}' \
      -H 'Content-Type: application/json' \
      -d '{
        "parts": ${arrayOfParts},
        "attributes": {
          "content_modified_at": "${dateToDisplay}"
        }
      }'`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from bxCommitSession ' + err);
          reject(err);
          throw err;
        }
        console.log('the bxCommitSession stdout is ' + stdout);
        console.log('the bxCommitSession stderr is ' + stderr);
        if (bxFirstRun) {
          let readMessage = JSON.parse(stdout).message;
          let hlMessage = readMessage.split(':')[2].split('=')[0];
          bxCommitHash = hlMessage.substr(1, hlMessage.length) + '=';

          resolve(bxCommitHash);
          return bxCommitHash;
        } else {
          bxParts.push(stdout);
          resolve(stdout);
          return bxParts;
        }
      },
    );
  }).catch((err) => reject(err));
}
async function gdUploadSessionStart(gdAccToken) {
  return await new Promise(async (resolve, reject) => {
    let ft = child.execSync(
      `curl -i -X POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable' \
      --header 'Authorization: Bearer ${gdAccToken}' \
      --header 'Content-Type: application/octet-stream' \
      -H 'Content-Length: 0'`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from gdUploadSessionStart ' + err);
          reject(err);
          throw err;
        }
        console.log('the gdUploadSessionStart stdout is ' + stdout);
        console.log('the gdUploadSessionStart stderr is ' + stderr);
      },
    );
    let holdGdLocation = ft.toString().split('\n')[3];
    gdResumedUrl = holdGdLocation
      .toString()
      .substr(10, ft.length)
      .split('\r')[0];
    resolve(gdResumedUrl);
    return gdResumedUrl;
  }).catch((err) => reject(err));
}
async function gdUploadlargeFileSingle(resumableUrl, gdAccToken, gdFileName) {
  return await new Promise(async (resolve, reject) => {
    console.log('resumableUrl ' + resumableUrl);
    child.exec(
      `curl -i -X PUT "${resumableUrl}" \
      --header 'Authorization: Bearer ${gdAccToken}' \
      --header 'Content-Type: application/octet-stream' \
      --data-binary @./routes/AllFiles/${gdFileName}`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from gdUploadSessionStart ' + err);
          reject(err);
          throw err;
        }
        console.log('the gdUploadSessionStart stdout is ' + stdout);
        console.log('the gdUploadSessionStart stderr is ' + stderr);
        resolve(stdout);
      },
    );
  }).catch((err) => console.log(err));
}
function User(name, lastname, username, email, password) {
  (this.name = name),
    (this.lastname = lastname),
    (this.username = username),
    (this.email = email),
    (this.password = password);
}
async function hashDigestFilePart(fileToEncode) {
  return await new Promise(async (resolve, reject) => {
    //  const blob = this.file.slice(part.offset, part.offset + partSize);
    //  this._file.slice(this._position, this._position + this._partSize);

    /* let filePath = `./routes/AllFiles`;
    
     fs.readdir(filePath, 'buffer', function (err, files) {
      if (err) {
        console.log('Unable to scan directory: ' + err);
        throw err;
      } 
      else {
        files.forEach(file => {
          console.log(file)
          _getNextChunk('callback',file)
        });
      
        //hash.update(buf);
       }
      }); */

    let file = `./routes/AllFiles/${flName}`;
    let stream = fs.createReadStream(file);
    let data = '';
    stream.on('error', (err) => reject(err));
    hash = crypto.createHash('sha1');
    stream.on('data', (chunk) => {
      data += chunk;
      hash.update(chunk);
    });
    stream.on('end', () => {
      storeHashs.push(hash.digest().toString('base64'));
      console.log('storeHashs ' + storeHashs);

      resolve(storeHashs);
      return storeHashs;
    });
    /*  let hash2 = crypto.createHash("sha1");
    let fFile = `./routes/AllFiles/${fileToEncode}`;
    let stream2 = fs.createReadStream(fFile);
    const firstByte = await stream2[Symbol.asyncIterator]().next();
    //output of file in Buffer
    console.log(firstByte.value.length)
    hash2.update(firstByte.value);
    let storeStr2 = hash2.digest().toString('base64');
    console.log(storeStr2);  */
  }).catch((err) => console.log(err));
}
function getNextChunk(callback, file) {
  let hash = crypto.createHash('sha1');
  let bfFile;
  let buf;
  let _stream;
  let _streamBuffer = [];
  let part_size = 8388608;

  if (file instanceof ReadableStream) {
    _stream = file.pause();
    _streamBuffer = [];
    console.log(_stream + 'calledOne');
  } else if (file instanceof Buffer || typeof file === 'string') {
    console.log(file + ' calledTwo');
    bfFile = file;
  } else {
    throw new TypeError('file must be a Stream, Buffer, or string!');
  }
  if (file) {
    buf = file.slice(0, 0 + part_size);
    console.log(buf + ' calledThree');
  } else if (_streamBuffer.length > 0) {
    console.log(_streamBuffer.length + ' called4');
    buf = _streamBuffer.shift();
  } else {
    console.log(' called5');
    buf = _stream.read(part_size);
    if (!buf) {
      console.log(' called6');
      setImmediate(() => getNextChunk(callback, file));
      return;
    } else if (buf.length > part_size) {
      console.log(' called7');
      for (let i = 0; i < buf.length; i += part_size) {
        _streamBuffer.push(buf.slice(i, i + part_size));
      }
      buf = _streamBuffer.shift();
    }
  }
  hash.update(buf);
  let storeStr = hash.digest().toString('base64');
  console.log(storeStr);
}
async function encodeShaOne(bytesToCut, fileNM) {
  return await new Promise((resolve, reject) => {
    let newFiles = child.execSync(
      `cd ./routes/AllFiles && split -b ${bytesToCut} ${fileNM} && ls`,
      (err, stdout, stderr) => {
        if (err) {
          console.log('err from encodeShaOne ' + err);
          reject(err);
          throw err;
        }
        console.log('the encodeShaOne stdout is ' + stdout);
        console.log('the encodeShaOne stderr is ' + stderr);
      },
    );

    let hlBxNewFiles = newFiles.toString().split('\n');
    bxNewFiles = hlBxNewFiles.filter((el) => el.trim());
    console.log('bxNewFiles ' + bxNewFiles);
    // remove the main file from the array
    resolve(bxNewFiles.toString());
  }).catch((err) => console.log(err));
  // let buff = Buffer.from(`${strToEncode}`).toString('base64').toString('utf8');
}
async function bxNewFlSizes(bxNFls) {
  return await new Promise(async (resolve, reject) => {
    for (let index = 0; index < bxNFls.length; index++) {
      resolve(hashDigestFilePart(bxNFls[index]));
    }
  }).catch((err) => {
    console.log(err);
  });
}
function formatDate() {
  var date = new Date().toISOString().substr(0, 19);
  let currentDate = date + 'Z';
  return currentDate;
}
async function bxSdkUpload(bxAccToken, flName, bxFileSize) {
  return await new Promise((resolve, reject) => {
    let sdk = new BoxSDK({
      clientID: 'cizpnka9apgvmixa683wgv0lk63cbv7q',
      clientSecret: '5g7OcCqXqheEdINx3zDeF1jeXnBth137',
    });
    console.log(bxAccToken);
    let client = sdk.getBasicClient(
      `${bxAccToken.substr(1, bxAccToken.length - 2)}`,
    );
    console.log(client);
    let fileToUpload = `./routes/AllFiles/${flName}`;
    let stream = fs.createReadStream(`${fileToUpload}`);
    let UpName = flName.toString();
    client.files
      .getChunkedUploader('0', bxFileSize, UpName, stream)
      .then((uploader) => uploader.start())
      .then((file) => {
        console.log(JSON.stringify(file));
        resolve(JSON.stringify(file));
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  }).catch((err) => console.log(err));
}
async function dpSdkUpload(dpAccToken, fileName) {
  return await new Promise((resolve, reject) => {
    let dbx = new Dropbox({
      accessToken: `${dpAccToken.substr(1, dpAccToken.length - 3)}`,
    });
    let filePath = './routes/AllFiles';
    const maxBlob = 8 * 1000 * 1000;
    let workItems = [];
    let offset = 0;
    let dpSid = '';
    let file = fs.readFileSync(filePath + '/' + fileName);
    let fileSize = Buffer.byteLength(file);

    while (offset < fileSize) {
      let chunkSize = Math.min(maxBlob, fileSize - offset);
      workItems.push(file.slice(offset, offset + chunkSize));
      offset += chunkSize;
    }
    const task = workItems.reduce((acc, blob, idx, items) => {
      console.log('idx is' + idx);
      if (idx == 0) {
        return acc.then(() => {
          return dbx
            .filesUploadSessionStart({ close: false, contents: blob })
            .then((response) => {
              dpSid = JSON.stringify(response.result.session_id);
              console.log('dpSid ' + dpSid);
              JSON.stringify(response.result.session_id);
            })
            .catch((err) => console.log(err));
        });
      } else if (idx < items.length - 1) {
        console.log('idx is' + idx);
        return acc.then((sessionId) => {
          sessionId = dpSid;
          console.log('idx * maxBlob is ' + idx * maxBlob);
          let cursor = {
            session_id: sessionId.substr(1, sessionId.length - 2),
            offset: idx * maxBlob,
          };

          return dbx
            .filesUploadSessionAppendV2({
              cursor: cursor,
              close: false,
              contents: blob,
            })
            .then((res) => {
              console.log(JSON.stringify(res));
            })
            .then(() => {
              console.log('done part one');
            })
            .catch((err) => console.log(err));
        });
      } else {
        return acc.then((sessionId) => {
          sessionId = dpSid;
          let cursor = {
            session_id: sessionId.substr(1, sessionId.length - 2),
            offset: fileSize - blob.byteLength,
          };
          let commit = {
            path: '/MTC' + fileName,
            mode: 'add',
            autorename: true,
            mute: false,
            strict_conflict: false,
          };

          return dbx
            .filesUploadSessionFinish({
              cursor: cursor,
              commit: commit,
              contents: blob,
            })
            .then(() => console.log('here8'))
            .then(() => resolve('large file uploaded'))
            .catch((err) => {
              console.log(JSON.stringify(err));
              reject(err);
            });
        });
      }
    }, Promise.resolve());
  }).catch((err) => console.log(err));
}

module.exports = app;
