var express = require('express');
var router = express.Router();
var path = require('path');
const {v4 : uuidv4} = require('uuid');
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
let appDir = path.dirname(require.main.filename);
// fs for reading local files
const fs = require('fs');
const child = require('child_process');
// mongoose is a API wrapper overtop of mongodb
const mongoose = require("mongoose");

const MCUsers = require("../McUsers");
const MCClient = require("../McCloud");
const BoxClient = require("../BoxCloud");
const DbClient = require('../DbCloud');
const OdClient = require("../OdCloud");
const { stdout, stderr } = require('process');

// mongodb connection string
const dbURI =
  "mongodb+srv://yelloteam:bcuser123456@cluster0.08j1d.mongodb.net/MultiCloudDB?retryWrites=true&w=majority";
mongoose.set('useFindAndModify', false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

function User(name,lastname,username,email,password){
  this.name = name,
  this.lastname = lastname,
  this.username = username,
  this.email = email,
  this.password = password
};

/* GET home page. */
router.get('/', function(req, res) {
  console.log('Home Page route called');

  res.sendFile('index.html');
});

/* GET all Users. */
router.get('/AllMCUsers', function(req, res) {
  if (LoggedInUserID === req.body.id) {
    console.log('AllMCUsers called');

    MCUsers.find({}, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      else {
        console.log(result);
        res.status(201).json(result);
      }
    });
  }
  else {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
  }
});

/* GET one User by ID */
router.get('/MCUserByID', function (req, res) {
  if (LoggedInUserID === req.body.id) {
    console.log('MCUserByID called');

    MCUsers.findById({ _id: req.body.id }, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      else {
        console.log(result);
        res.status(201).json(result);
      }
    });
  }
  else {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
  }
});

/* MCUserInfo SignIn */
router.post('/MCUserInfo', function (req, res) {
  console.log('MCUserInfo called');

  HoldUserData.splice(0, HoldUserData.length);
  let holdUserName = req.body.username;
  let holdPassword = req.body.password;
  HoldUserData.push(holdUserName,holdPassword);
  res.json({username: holdUserName, password:holdPassword});
  return HoldUserData;
});

/* GET one User by UserName and Password */
router.get('/MCUserByUsrNmPwd', function (req, res) {
  console.log("username from node " + HoldUserData[0]);
  console.log("password from node " + HoldUserData[1]);
  req.body.username = HoldUserData[0];
  req.body.password = HoldUserData[1];
  
  MCUsers.findOne({
    username: req.body.username,
    password: req.body.password
  }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      console.log(result);
      res.status(201).json(result);
      LoggedInUserID = result.id;
    }
  });
  return LoggedInUserID;
});

/* post a new User and push to Mongo */
router.post('/MCUser', function(req, res) {
  console.log("MCUser called " + req.body.name);

  let oneNewMCUser = new MCUsers({
    name: req.body.name,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });  
  
  oneNewMCUser.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      console.log(result);
      res.status(201).json(result);
    }
  });
});

/* update one User */
router.patch('/UpdateMCUser', function (req, res) {
  if (LoggedInUserID === req.body.id) {
    console.log('UpdateMCUser called');

    MCUsers.findById({ _id: req.body.id }, async (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      else {
        if (req.body.password) {
          result.password = req.body.password
        }
        if (req.body.email) {
          result.email = req.body.email
        }
        if (req.body.lastname) {
          result.lastname = req.body.lastname
        }
        if (req.body.name) {
          result.name = req.body.name
        }
        const newResult = await result.save();
        if (newResult === result) {
          console.log(newResult);
          res.status(200).json(newResult);
        }
        else {
          res.status(404).json({ error: "Update save failed!" });
        }
      }
    });
  }
  else {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
  }
});

/* post Google drive client data to McCloud */
router.post('/MCGdClient', function(req, res) {
  console.log("MCGdClient called " + req.body.gdname);

  let oneNewMCClient = new MCClient({
    gdname: req.body.gdname,
    gdemail: req.body.gdemail,
    usermongoid: req.body.usermongoid
  });  
  oneNewMCClient.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
    console.log(result);
    res.status(201).json(result);
    }
  });
});
router.post('/MCBoxClient', function(req, res) {
  console.log("MCBoxClient called " + req.body.bxname);

  let oneNewBoxClient = new BoxClient({
    bxname: req.body.bxname,
    bxemail: req.body.bxemail,
    usermongoid: req.body.usermongoid
  });  
  oneNewBoxClient.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
    console.log(result);
    res.status(201).json(result);
    }
  });
});
router.post('/MCOdClient', function(req, res) {
  console.log("MCOdClient called " + req.body.odname);

  let oneNewOdClient = new OdClient({
    odname: req.body.odname,
    odemail: req.body.odemail,
    usermongoid: req.body.usermongoid
  });  
  oneNewOdClient.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
    console.log(result);
    res.status(201).json(result);
    }
  });
});
/* delete one User */
router.delete('/DeleteMCUser', function (req, res) {
  if (LoggedInUserID !== '' || LoggedInUserID !== null) {
    console.log('DeleteMCUser called');

    MCUsers.findById({ _id: LoggedInUserID }, async (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      else {
        const newResult = await MCUsers.deleteOne({ username: result.username, password: result.password });
        if (newResult.n == 1 && newResult.ok == 1 && newResult.deletedCount == 1) {
          console.log(newResult);
          console.log("MCUser successfully deleted");
          res.status(200).json(newResult);
        }
        else {
          res.status(404).json({ error: "Delete failed!" });
        }
      }
    });
  }
  else {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
  }
});

/* log out the user */
router.get('/LogOutMCUser', function (req, res) {
  // checkout req.body
  console.log('LogOutMCUser called ' + JSON.stringify(req.body) +
   'LoggedInUserID ' + LoggedInUserID + 'HoldUserData ' +  HoldUserData);
  // just verify whether the id from result exists
   if (LoggedInUserID !== '' || LoggedInUserID !== null ) {
    LoggedInUserID = "";
    HoldUserData.splice(0, HoldUserData.length);
    // send result to avoid having a pending promise
    res.status(200).send('user logged out successfully');
    console.log('HoldUserData ' + HoldUserData)
  }
  else {
    console.log('REQ.body.id does not match logged in user ID');
    res.status(500).send('REQ.body.id does not match logged in user ID');
  }
  return LoggedInUserID;
});

/* post Google drive client data to McCloud */
router.post('/MCGdClient', function(req, res) {
  console.log("MCGdClient called " + req.body.gdname);

  MCClient.findOne({ usermongoid: req.body.usermongoid }, async (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      if (result) {
        if (req.body.gdname) {
          result.gdname = req.body.gdname
        }
        if (req.body.gdemail) {
          result.gdemail = req.body.gdemail
        }
        const newResult = await result.save();
        if (newResult === result) {
          console.log(newResult);
          res.status(200).json(newResult);
        }
        else {
          console.log('MCClient save FAILED!');
          res.status(404).json({ error: 'MCClient save FAILED!' });
        }
      }
      else {
        let oneNewMCClient = new MCClient({
          gdname: req.body.gdname,
          dbemail: req.body.dbemail,
          usermongoid: req.body.usermongoid
        });
      
        await oneNewMCClient.save((err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          }
          else {
            console.log(result);
            res.status(201).json(result);
          }
        });
      }
    }
  });
});

/* GET all cloud service credentials for user */
router.get('/MCClientData', function(req, res) {
  console.log('MCClientData called');

  MCClient.findOne({ usermongoid: req.body.usermongoid }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      console.log(result);
      res.status(201).json(result);
    }
  });
});

/* DELETE *ALL* of user's cloud service credentials */
router.delete('/MCClientDeleteData', function(req, res) {
  console.log('MCClientDeleteData called ' + JSON.stringify(req.body));

  MCClient.findOne({ usermongoid: req.body.usermongoid }, async (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      const newResult = await MCClient.deleteOne({ usermongoid: result.usermongoid, _id: result.id });
      if (newResult.n == 1 && newResult.ok == 1 && newResult.deleteCount == 1) {
        console.log(newResult);
        console.log('MCClient successfully deleted ALL credentials');
        res,status(200).json(newResult);
      }
      else {
        console.log('MCClient delete FAILED!');
        res.status(404).json({ error: 'Delete failed!'});
      }
    }
  });
});

/* UPDATE user's cloud service credentials */
router.patch('/MCClientUpdateData', function (req, res) {
  console.log('MCClientUpdateData called ' + JSON.stringify(req.body));

  MCClient.findOne({ usermongoid: req.body.usermongoid }, async (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      if (req.body.gdname) {
        result.gdname = req.body.gdname
      }
      if (req.body.gdemail) {
        result.gdemail = req.body.gdemail
      }
      const newResult = await result.save();
      if (newResult === result) {
        console.log(newResult);
        res.status(200).json(newResult);
      }
      else {
        console.log('MCClient update save FAILED!');
        res.status(404).json({ error: 'MCClient update save FAILED!' });
      }
    }
  });
});

/* POST files from local file system when given a path */
router.post('/Files', function(req, res) {
  console.log('Files called');

  fs.readdir(req.body.path, 'buffer', function (err, files) {
    if (err) {
      res.status(500).send(err);
      console.log('Unable to scan directory: ' + err);
    } 
    else {
      let names = [];
      let fileData = [];
      files.forEach(function (file) {
        names.push(file.toString());
        console.log(file.toString()); 
      });
      res.status(201).json({files, names});
    }
  });
});

/* POST add local files */
router.post('/AddFiles', function(req, res) {
  console.log('AddFiles called');
  let path = req.body.filePath + '/' + req.body.fileName;
  fs.open(path, 'w', function(err, fd) {
    if (err) {
        throw 'error opening file: ' + err;
    }
    buf = Buffer.from(req.body.fileData.data)
    fs.write(fd, buf.toString(), null, function(err) {
        if (err) throw 'error writing file: ' + err;
        fs.close(fd, function() {
            console.log(buf.toString())
            res.status(201).send('Local file written');
        });
    });
});
});
router.post('/LfFilePath', function(req, res) {
  console.log('LfFilePath called');
  try {
    getlfPath = req.body.lfStorePath;
    console.log('getlfPath ' + getlfPath);
    res.status(201).json({"success_MSG": 'File path received', "response": getlfPath});
    return getlfPath;
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
router.get('/LfDownload', function(req, res) {
  console.log('LfDownload called');
  try {
    getlfPath = req.body.lfStorePath;
    console.log('getlfPath ' + getlfPath);
     setTimeout(async() => {
       await tpMoveFiletoLocalPath(downloadedFileName,getlfPath);
      },4000);
    res.status(201).json({"success_MSG": 'File successfully stored to the local path', "response": req.body.lfStorePath});
    return getlfPath;
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
router.post('/LfileServer', function(req, res) {
  console.log('LfileServer called');
  let lfToTransfer = req.body.lfTranfer;
  try {
    console.log('getlfPath ' + getlfPath);
     setTimeout(async() => {
       await tpMoveFilefromLocalPath(lfToTransfer,getlfPath);
      },4000);
    res.status(201).json({"success_MSG": 'File successfully stored in AllFile', "response": req.body.lfStorePath});
    return getlfPath;
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
/* POST delete local files */
router.post('/DeleteFiles', function(req, res) {
  console.log('DeleteFiles called');
  try {
    fs.unlinkSync(req.body.filePath + "/" + req.body.fileName);
    res.status(201).json({"success_MSG": 'Local File successfully deleted', "response": req.body.fileName});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

/* POST move local file to AllFiles */
router.post('/MoveFile', function(req, res) {
  console.log('MoveFile called');
  try {
    setTimeout(async () => {
      let moveFileResule = await tpMoveFilestoAllFiles(req.body.fileName);
      res.status(201).json({"success_MSG":'Local File successfully moved', "respponse": req.body.fileName});
    },10000);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

/* POST Dropbox client data to DbCloud */
router.post('/MCDbClient', (req, res) => {
  console.log("MCDbClient calledOne ")
  //console.log("MCDbClient called " + JSON.stringify(req.body));
  
   DbClient.findOne({ usermongoid: req.body.usermongoid }, async (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      if (result) {
        if (req.body.dbname) {
          result.dbname = req.body.dbname
        }
        if (req.body.dbemail) {
          result.dbemail = req.body.dbemail
        }
        const newResult = await result.save();
        if (newResult === result) {
          console.log(newResult);
          res.status(200).json(newResult);
        }
        else {
          console.log('DbClient save FAILED!');
          res.status(404).json({ error: 'DbClient save FAILED!' });
        }
        
      }
      else {
        let oneNewDbClient = new DbClient({
          dbname: req.body.dbname,
          dbemail: req.body.dbemail,
          usermongoid: req.body.usermongoid
        });
      
        await oneNewDbClient.save((err, result) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          }
          else {
            console.log(result);
            res.status(201).json(result);
          }
        });
      } 
    }
  });
});

/* GET all Dropbox service credentials for user */
router.get('/DbClientData', function(req, res) {
  console.log('DbClientData called');

  DbClient.findOne({ usermongoid: req.body.usermongoid }, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      console.log(result);
      res.status(201).json(result);
    }
  });
});

/* DELETE *ALL* of user's Dropbox service credentials */
router.delete('/DbClientDeleteData', function(req, res) {
  console.log('DbClientDeleteData called ' + JSON.stringify(req.body));

  DbClient.findOne({ usermongoid: req.body.usermongoid }, async (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      const newResult = await DbClient.deleteOne({ usermongoid: result.usermongoid, _id: result.id });
      if (newResult.n == 1 && newResult.ok == 1 && newResult.deleteCount == 1) {
        console.log(newResult);
        console.log('DbClient successfully deleted ALL credentials');
        res,status(200).json(newResult);
      }
      else {
        console.log('DbClient delete FAILED!');
        res.status(404).json({ error: 'Delete failed!'});
      }
    }
  });
});

/* UPDATE user's Dropbox service credentials */
router.patch('/DbClientUpdateData', function (req, res) {
  console.log('DbClientUpdateData called ' + JSON.stringify(req.body));

  DbClient.findOne({ usermongoid: req.body.usermongoid }, async (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else {
      if (req.body.dbname) {
        result.dbname = req.body.dbname
      }
      if (req.body.dbemail) {
        result.dbemail = req.body.dbemail
      }
      const newResult = await result.save();
      if (newResult === result) {
        console.log(newResult);
        res.status(200).json(newResult);
      }
      else {
        console.log('DbClient update save FAILED!');
        res.status(404).json({ error: 'DbClient update save FAILED!' });
      }
    }
  });
});

/* Post URl code generated from DropBox to create access_token */
router.post('/ShowData', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  console.log("req body from node " + JSON.stringify(req.body.saveCode))
  let codeData = req.body.saveCode;
  
  child.exec(
      `curl https://api.dropbox.com/oauth2/token \
              -d code=${codeData} \
              -d grant_type=authorization_code \
              -d redirect_uri=http://localhost:4200/cloudmanagement \
              -u 4kbv0so8hjs83lf:hzrap940rcg09t1`
   ,(stdout, stderr) => {       
      if(stderr.length > 0){
          sendToAngular = stderr; 
          //
          sendToAngularAccessToken = stderr.toString()
          console.log("the stdErr is " + stderr)               
      } 
      console.log("the stdOut " + JSON.stringify(sendToAngular))
      res.send((sendToAngular))
    })  
});

router.post('/GDAcessToken', function (req, res)
{
  console.log('google access token')
  let svAccess = req.body.accessTokenDg;
  saveGDAccessToken = svAccess;
  res.send("GD accessToken received" + saveGDAccessToken);   
  return saveGDAccessToken;
})
router.get('/UploadGd', function (req, res)
{
  console.log("downloadedFileName is " + downloadedFileName);
  setTimeout(async () => {
    let moveFileResule = await tpMoveFilestoAllFiles(downloadedFileName);
    console.log("moveFileResule after send " + moveFileResule);
  },30000 );  
  let svAccess = saveGDAccessToken
  let savefileId = '';
  let concatFile = '';
  setTimeout(() => {
    console.log('google drive access token' + svAccess )
    fs.readdirSync( folder ).forEach( file => {
   console.log("inside the folderOne ")
   const extname = path.extname( file );
   const filename = path.basename( file, extname );
   const absolutePath = path.resolve( folder, file );
   const storeFile = file.toString()
   concatFile = (filename + extname)       
   })  
 
   return child.exec(
     `curl --location --request POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id' \
      --header 'Authorization: Bearer ${svAccess}' \
      --header 'Content-Type: application/octet-stream' \
      --data-binary @./routes/AllFiles/${concatFile}`
    ,(stdout, stderr) => {    
     if(stderr.length > 0){
       console.log(JSON.stringify(stderr))
       savefileId = (JSON.stringify(stderr)).toString();
       sendToGd = savefileId.slice(15,savefileId.length - 8) 
         console.log("the stdErr is " + sendToGd)            
     }  
     console.log("the stdOut is " + sendToGd) 
     toDeleteAllFiles()
     
     res.send("Response from Node: File uploaded to Google drive")
      });
  },35000);
   
})
let localFile;
router.post('/UploadGdLocal', function (req, res)
{
  let svAccess = saveGDAccessToken
  let savefileId = '';
  let concatFile = '';
  setTimeout(() => {
    console.log('google drive access token' + svAccess )
    fs.readdirSync( folder ).forEach( file => {
      if(file === req.body.fileName) {
        console.log("inside the folderOne ")
        const extname = path.extname( file );
        const filename = path.basename( file, extname );
        const absolutePath = path.resolve( folder, file );
        const storeFile = file.toString()
        concatFile = (filename + extname)
        localFile = concatFile
      }   
   })  
   console.log("concatFile is " + concatFile)
   return child.exec(
     `curl --location --request POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id' \
      --header 'Authorization: Bearer ${svAccess}' \
      --header 'Content-Type: application/octet-stream' \
      --data-binary @./routes/AllFiles/${concatFile}`
    ,(stdout, stderr) => {    
     if(stderr.length > 0){
       console.log(JSON.stringify(stderr))
       savefileId = (JSON.stringify(stderr)).toString();
       sendToGd = savefileId.slice(15,savefileId.length - 8) 
         console.log("the stdErr is " + sendToGd)            
     }  
     console.log("the stdOut is " + sendToGd) 
     toDeleteAllFiles()
     
     res.send("Response from Node: File uploaded to Google drive")
      });
  },35000);
   
})
router.get('/GDUpdateLocalFile' , (req, res) => {
  console.log("GDUpdateLocalFile called " + sendToGd )
  console.log("saveGDAccessToken from GDUpdateFile " + saveGDAccessToken)
  let svAccess = saveGDAccessToken;
  let updatedMs = '';
 return child.exec(
   `curl --location --request PATCH 'https://www.googleapis.com/drive/v2/files/${sendToGd}' \
   --header 'Authorization: Bearer ${svAccess}' \
   --header "Content-Type: application/json" \
   --header 'Accept: */*' \
   --data '{"title":"${localFile.toString()}"}'`
   ,(stdout, stderr) => {    
     if(stderr.length > 0){
       updatedMs = stderr; 
         console.log("the stdErr is " + updatedMs)            
     }  
     console.log("the stdOut is " + updatedMs) 
     res.send("Response from Node: File Updated in Google drive")
      })  
 })
 router.get('/GDUpdateFile' , (req, res) => {
   console.log("GDUpdateFile called " + downloadedFileName )
   console.log("saveGDAccessToken from GDUpdateFile " + saveGDAccessToken)
   console.log("storeLastPart is " + downloadedFileName);
   let svAccess = saveGDAccessToken;
   let updatedMs = '';
  return child.exec(
    `curl --location --request PATCH 'https://www.googleapis.com/drive/v2/files/${sendToGd}' \
    --header 'Authorization: Bearer ${svAccess}' \
    --header "Content-Type: application/json" \
    --header 'Accept: */*' \
    --data '{"title":"${downloadedFileName.toString()}"}'`
    ,(stdout, stderr) => {    
      if(stderr.length > 0){
        updatedMs = stderr; 
          console.log("the stdErr is " + updatedMs)            
      }  
      console.log("the stdOut is " + updatedMs) 
      res.send("Response from Node: File Updated in Google drive")
       })  
  })
 router.get('/DPUpload', function (req, res)
{
  console.log("DpUpload called ")
  setTimeout(async () => {
    let moveFileResule = await tpMoveFilestoAllFiles(downloadedFileName);
    console.log("moveFileResule " + moveFileResule);
  },30000);
  
  let gth = (sendToAngularAccessToken)
  console.log("gth is " + gth)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = '';
  let newId = uuidv4()
  let concatFile = '';

  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
    setTimeout(( ) => {
      fs.readdirSync( folder ).forEach( file => {
        console.log("inside the folderOne ")
        const extname = path.extname( file );
        const filename = path.basename( file, extname );
        const absolutePath = path.resolve( folder, file );
        concatFile = (filename + extname);   
        }); 
        console.log("concatFile outside " + concatFile) 
        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/upload \
           -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
           -H 'Content-Type: application/octet-stream' \
           -H 'Dropbox-Api-Arg: {"path": "/${concatFile}"}' \
           --data-binary @./routes/AllFiles/${concatFile}`
          ,(stdout, stderr) => {    
            if(stderr.length > 0){
              sendToGd = stderr; 
                console.log("the stdErr is " + stderr)            
            } 
            console.log("the stdOut is " + JSON.stringify(stdout)) 
            toDeleteAllFiles()
            res.send("Response from Node: file uploaded to Dropbox")   
          })
    },35000);  
  }
})
router.post('/DPUploadLocal', function (req, res)
{
  console.log("DpUploadLocal called ")
  let gth = (sendToAngularAccessToken)
  console.log("gth is " + gth)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = '';
  let newId = uuidv4()
  let concatFile = '';

  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
    setTimeout(( ) => {
      fs.readdirSync( folder ).forEach( file => {
        if(file === req.body.fileName) {
          console.log("inside the folderOne ")
          const extname = path.extname( file );
          const filename = path.basename( file, extname );
          const absolutePath = path.resolve( folder, file );
          concatFile = (filename + extname);
        }
        }); 
        console.log("concatFile outside " + concatFile) 
        child.exec(
          `curl -X POST https://content.dropboxapi.com/2/files/upload \
           -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
           -H 'Content-Type: application/octet-stream' \
           -H 'Dropbox-Api-Arg: {"path": "/${concatFile}"}' \
           --data-binary @./routes/AllFiles/${concatFile}`
          ,(stdout, stderr) => {    
            if(stderr.length > 0){
              sendToGd = stderr; 
                console.log("the stdErr is " + stderr)            
            } 
            console.log("the stdOut is " + JSON.stringify(stdout)) 
            toDeleteAllFiles()
            res.send("Response from Node: file uploaded to Dropbox")   
          })
    },35000);  
  }
})
router.post('/DpPath', function (req, res)
{
  console.log("DpPath called")
  let saveDpFilePath = req.body.dpGetFPath
  getDpFilePath = saveDpFilePath
  console.log("dpPath from index is " + getDpFilePath)
  res.send("Dp file path received " + getDpFilePath)
})
router.get('/DPDownload', async function (req, res)
{
  console.log("DPDownload called")
  console.log("getDPPath from DPDownload is " + getDpFilePath )
  let gth = (sendToAngularAccessToken)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = ''
  let lastPart = getDpFilePath.split('/')
  downloadedFileName = lastPart[lastPart.length-1]
  console.log('Last Part is ' + lastPart)
  console.log('downloadedFileName is ' + downloadedFileName)

  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
    console.log('there is "')
    //check it out
    //-H 'Content-Type: application/octet-stream' \
    child.exec(
      `curl -X POST https://content.dropboxapi.com/2/files/download \
       -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
       -H 'Dropbox-Api-Arg: {"path": "${getDpFilePath}"}' \
       -o "${downloadedFileName}"`
      ,(stdout, stderr) => {    
        if(stderr.length > 0){
          sendToGd = stderr;
            console.log("the stdErr is " + stderr);           
        } 
        console.log("the stdOut is " + JSON.stringify(stdout));
      })
        console.log("file transfered");
        res.send("Response from Node: file downloaded");          
  }    
})
router.get('/DPDownloadLocal', async function (req, res)
{
  console.log("DPDownloadLocal called")
  console.log("getDPPath from DPDownload is " + getDpFilePath )
  let gth = (sendToAngularAccessToken)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = ''
  let lastPart = getDpFilePath.split('/')
  downloadedFileName = lastPart[lastPart.length-1]
  console.log('Last Part is ' + lastPart)
  console.log('storeLastPart is ' + storeLastPart)

  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
    console.log('there is "')
    //-H 'Content-Type: application/octet-stream' \
    child.exec(
      `curl -X POST https://content.dropboxapi.com/2/files/download \
       -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
       -H 'Dropbox-Api-Arg: {"path": "${getDpFilePath}"}' \
       -o "${downloadedFileName}"`
      ,(stdout, stderr) => {    
        if(stderr.length > 0){
          sendToGd = stderr;
            console.log("the stdErr is " + stderr);           
        } 
        console.log("the stdOut is " + JSON.stringify(stdout));
        tpMoveFilestoAllFiles(storeLastPart)
      })
        console.log("file transfered");
        res.send("Response from Node: file downloaded");         
  }   
})
router.post('/GdId', function (req, res) {
  console.log("GdId called ")
  Gdrecivedid = req.body.gdSaveId
  GdrecivedName = req.body.gdSaveFileName
  downloadedFileName = GdrecivedName;

  console.log("Gdrecivedid from /GdId " + Gdrecivedid + 'and File Name is ' + GdrecivedName);
  res.send("GdId received " + Gdrecivedid + 'with File name : ' + GdrecivedName);
})
router.get('/DownloadGd', function (req, res)
{
    console.log("DownloadGd called ")
  console.log("GdId from node " + Gdrecivedid)
  console.log("GdrecivedName from node " + GdrecivedName)
  //      --header 'Content-Type: application/json' \
  let sendToGd = ""
  let fileNameCreate = GdrecivedName.toString();
  return child.exec(
     `curl --location --request GET 'https://www.googleapis.com/drive/v2/files/${Gdrecivedid}?alt=media&source=downloadUrl' \
      --header 'Authorization: Bearer ${saveGDAccessToken}' \
      -o "${fileNameCreate}"`
    ,(stdout, stderr) => {    
     if(stderr.length > 0){
       sendToGd = stderr; 
         console.log("the stdErr is " + stderr)            
     } 
     console.log("the stdOut is " + JSON.stringify(sendToGd)) 
     res.send("Response from Node: File downloaded from Google drive")   
   }) 
})
router.get('/DownloadGdLocal', function (req, res)
{
  console.log("DownloadGdLocal called ")
  console.log("GdId from node " + Gdrecivedid)
  console.log("GdrecivedName from node " + GdrecivedName)
  downloadedFileName = GdrecivedName;
  //      --header 'Content-Type: application/json' \
  let sendToGd = "";
  let fileNameCreate = GdrecivedName.toString();
  return child.exec(
     `curl --location --request GET 'https://www.googleapis.com/drive/v2/files/${Gdrecivedid}?alt=media&source=downloadUrl' \
      --header 'Authorization: Bearer ${saveGDAccessToken}' \
      -o "${fileNameCreate}"`
    ,(stdout, stderr) => {    
     if(stderr.length > 0){
       sendToGd = stderr; 
         console.log("the stdErr is " + stderr)            
     } 
     console.log("the stdOut is " + JSON.stringify(sendToGd)) 
     res.send("Response from Node: File downloaded from Google drive")   
   }) 
});
router.post('/BoxCode', function (req,res) {
  console.log("BoxCode called");
  holdBoxCode = req.body.saveCode;
  console.log("holdBoxCode is " + holdBoxCode);
  //if(res.ok){
    res.status(200).json({"issuedCode":`the code is received ${holdBoxCode}`});
    return holdBoxCode;
  ///}
});
router.get('/BoxOauth', (req,res) => {
  console.log("BoxOauth called");
  console.log("holdBoxCode from BoxOath " + holdBoxCode);
  return child.exec(
    `curl POST "https://api.box.com/oauth2/token" \
      -H "Content-Type: application/x-www-form-urlencoded" \
      -d "client_id=cizpnka9apgvmixa683wgv0lk63cbv7q" \
      -d "client_secret=5g7OcCqXqheEdINx3zDeF1jeXnBth137" \
      -d "code=${holdBoxCode}" \
      -d "grant_type=authorization_code"`,
  (err,stdout,stderr) => {
     if(err){
      console.log("err from BoxOath " + err)
    } 
    let obj = stdout;
    let newObj = obj.toString().split(":")[1];
    console.log("the BoxOath stdout is " + newObj.substring( 0, newObj.indexOf(",")));
    console.log("the obj stderr is " + obj);
    
    boxAccessToken = newObj.substring( 0, newObj.indexOf(","));
    
    res.status(200).json({"boxAccesToken": "box_AccessToken_Issued", "access_token": boxAccessToken});
  });
});
router.get('/BoxClientEmail', (req,res) => {
  console.log("BoxClientEmail called" + boxAccessToken);
  return child.exec(
    `curl GET "https://api.box.com/2.0/users/me" \
    -H "Authorization: Bearer ${boxAccessToken}"`
  ,
  (err,stdout,stderr) => {
    if(err){
      console.log("err from BoxClientEmail " + err)
    } 
    console.log("the BoxClientEmail stdout is " + stdout);
    console.log("the BoxClientEmail stderr is " + stderr);
    
    let obj = stdout;
    let boxClientName = obj.toString().split(":")[3];
    let newObj = obj.toString().split(":")[4];
    let boxEmail = newObj.substring( 0, newObj.indexOf(","));
    
    res.status(200).json({"BoxClientEmailMSG": "BoxClientEmail_Issued", "boxEmail": boxEmail.replace(/['"]+/g, ''), "BoxClientName":boxClientName});
  });
});
router.get('/BoxGetFile', (req,res) => {
  console.log("BoxGetFile called");
  return child.exec(
    `curl -X GET "https://api.box.com/2.0/files/12345" \
    -H "Authorization: Bearer ${boxAccessToken}"`,
    (err,stdout,stderr) => {
      if(err){
        console.log("err from BoxGetFile " + err)
      }
      console.log("the BoxGetFile stdout is " + stdout);
      console.log("the BoxGetFile stderr is " + stderr);
      boxFile = stdout;
      res.status(200).json({"BoxGetFileMSG": "BoxGetFile_Received", "boxFile": boxFile});
    }); 
});
router.get('/BoxGetFolders', (req,res) => {
  console.log("BoxGetFolders called");
  return child.exec(
    `curl GET "https://api.box.com/2.0/folders/0" \
     -H "Authorization: Bearer ${boxAccessToken}"`,
    (err,stdout,stderr) => {
      if(err){
        console.log("err from BoxGetFolders " + err)
      }
      console.log("the BoxGetFolders stdout is " + stdout);
      console.log("the BoxGetFolders stderr is " + stderr);
      boxFolders = stdout;
      res.status(200).json({"BoxGetFoldersMSG": "BoxGetFolders_Received", "boxFolders": boxFolders});
    }); 
});
router.post('/BxDownload', (req,res) => {
  console.log("BxDownload called");

  let boxRetreivedId = req.body.boxFileId;
  boxRetreivedName = req.body.boxFileName;
  downloadedFileName = boxRetreivedName;

  console.log("boxRetreivedId " + boxRetreivedId + "boxFileName " + boxRetreivedName);
  return child.exec(
    `curl --location --request GET "https://api.box.com/2.0/files/${boxRetreivedId}/content" \
     -H "Authorization: Bearer ${boxAccessToken}" \
     -o "${downloadedFileName}"`,
    (err,stdout,stderr) => {
      if(err){
        console.log("err from BxDownload " + err)
      }
      console.log("the BxDownload stdout is " + stdout);
      console.log("the BxDownload stderr is " + stderr);
      res.status(200).json({"BxDownloadMSG": "BoxFile_Downloaded"}); 
    }); 
});
router.post('/BxUpload', (req,res) => {
  let boxUploadFileName = req.body.boxUpFileName;
  console.log("BxUpload called");
  console.log("boxUploadFileName from bxUpload " + boxUploadFileName);
   
  downloadedFileName = boxUploadFileName;
  setTimeout(async() => {
    let moveFileResule = await tpMoveFilestoAllFiles(boxUploadFileName);
    console.log("moveFileResule after Boxdownload " + moveFileResule);
  },50000 );  
  setTimeout(( ) => {
    let boxConcatFile = '';
    fs.readdirSync( folder ).forEach( file => {
      if(file === boxUploadFileName) {
        console.log("inside the folderOne ")
        const extname = path.extname( file );
        const filename = path.basename( file, extname );
        const absolutePath = path.resolve( folder, file );
        boxConcatFile = (filename + extname);
      }
      }); 
      return child.exec(
        `curl --location --request POST "https://upload.box.com/api/2.0/files/content" \
        -H "Authorization: Bearer ${boxAccessToken}" \
        -H "Content-Type: multipart/form-data" \
        -F attributes='{"name":"MTC${boxUploadFileName}", "parent":{"id":"0"}}' \
        -F file=@./routes/AllFiles/${boxConcatFile}`,
        (err,stdout,stderr) => {
          if(err){
            console.log("err from BxUpload " + err)
          }
          console.log("the BxUpload stdout is " + stdout);
          console.log("the BxUpload stderr is " + stderr);
          res.status(200).json({"BxUploadMSG": "BoxFile_Uploaded"});
          toDeleteAllFiles();
        }); 
  },55000);

});
router.post('/BxLocalUpload', (req,res) => {
  let boxUploadFileName = req.body.boxUpFileName;
  console.log("BxLocalUpload called");
  console.log("boxUploadFileName from bxLocalUpload " + boxUploadFileName);
 
  setTimeout(( ) => {
    let boxConcatFile = '';
    fs.readdirSync( folder ).forEach( file => {
      if(file === boxUploadFileName) {
        console.log("inside the folderOne ")
        const extname = path.extname( file );
        const filename = path.basename( file, extname );
        const absolutePath = path.resolve( folder, file );
        boxConcatFile = (filename + extname);
      }
      }); 
      return child.exec(
        `curl --location --request POST "https://upload.box.com/api/2.0/files/content" \
        -H "Authorization: Bearer ${boxAccessToken}" \
        -H "Content-Type: multipart/form-data" \
        -F attributes='{"name":"MTC${boxUploadFileName}", "parent":{"id":"0"}}' \
        -F file=@./routes/AllFiles/${boxConcatFile}`,
        (err,stdout,stderr) => {
          if(err){
            console.log("err from BxUpload " + err)
          }
          console.log("the BxLocalUpload stdout is " + stdout);
          console.log("the BxLocalUpload stderr is " + stderr);
          res.status(200).json({"BxLocalUploadMSG": "BoxFile_LocalUploaded"});
          toDeleteAllFiles();
        }); 
  },55000);

});
router.post('/OdAccessToken', (req,res) => {
  console.log("OdAccessToken called");
  res.header('Access-Control-Allow-Origin', '*');

  odAccessToken = req.body.odCode;
  console.log("OdAccessToken is " + odAccessToken);
  res.status(200).json({"OdAccessTokenMSG": "OdAccessToken_Received", "OdAccessToken": odAccessToken});
  return odAccessToken;
 
});
router.get('/OdProfile', (req,res) => {
  console.log("OdProfile called");
  
  return child.exec(
    `curl GET "https://graph.microsoft.com/v1.0/me" \
     -H "Authorization: Bearer ${odAccessToken}"`,
    (err,stdout,stderr) => {
      if(err){
        console.log("err from OdProfile " + err)
      }
      console.log("the OdProfile stdout is " + stdout);
      console.log("the OdProfile stderr is " + stderr);
      
      let obj = stdout;
      let odClientName = obj.toString().split(":")[6];
      console.log("odClientName " + odClientName);
      let newObj = obj.toString().split(":")[7];
      console.log("newObj " + newObj);
      let odEmail = newObj.substring( 0, newObj.indexOf(","));
      console.log("odEmail " + odEmail);
      res.status(200).json({"OdProfileMSG": "OdProfile_ProfileInfo", "OdProfileInfo": odEmail, "odClientName":odClientName});
    }); 
});
router.get('/OdGetFiles', (req,res) => {
  console.log("OdGetFiles called");
  return child.exec(
    `curl GET "https://graph.microsoft.com/v1.0/me/drive/root/children" \
     -H "Authorization: Bearer ${odAccessToken}"`,
    (err,stdout,stderr) => {
      if(err){
        console.log("err from OdGetFiles " + err)
      }
      console.log("the OdGetFiles stdout is " + stdout);
      console.log("the OdGetFiles stderr is " + stderr);
      odFiles = stdout;
      res.status(200).json({"OdGetFilesMSG": "OdFiles_Received", "OdFiles": odFiles});
    }); 
});
router.post('/OdDownload', (req,res) => {
  console.log("OdDownload called");

  let odFileUrl = req.body.odFileUrl;
  let odFileName = req.body.odFileName;
  downloadedFileName = odFileName;

  console.log("OdFileName " + odFileName + "odFileId " + odFileUrl);
  return child.exec(
    `curl --location --request GET ${odFileUrl} \
     -H "Authorization: Bearer ${odAccessToken}" \
     -o "${odFileName}"`,
    (err,stdout,stderr) => {
      if(err){
        console.log("err from OdDownload " + err)
      }
      console.log("the OdDownload stdout is " + stdout);
      console.log("the OdDownload stderr is " + stderr);
      odFileDownload = stdout;
      res.status(200).json({"odDownloadMSG": "odFile_Downloaded", "OdDownload": odFileDownload});
    }); 
});
router.post('/OdUpload', (req,res) => {
  console.log("OdUpload called");
  let odUploadFileName = req.body.odUpFileName;
  console.log("odUpFileName is " + odUploadFileName);

   setTimeout(async() => {
    let moveFileResule = await tpMoveFilestoAllFiles(odUploadFileName);
    console.log("moveFileResule after OdDownload " + moveFileResule);
  },30000 );  

  setTimeout(( ) => {
    let odConcatFile = '';
    fs.readdirSync( folder ).forEach( file => {
        if(file === odUploadFileName) {
        console.log("inside the folderOne ")
        const extname = path.extname( file );
        const filename = path.basename( file, extname );
        const absolutePath = path.resolve( folder, file );
        odConcatFile = (filename + extname);
      } 
    });
      return child.exec(
        `curl --location --request PUT https://graph.microsoft.com/v1.0/me/drive/root:/${odConcatFile}:/content \
        -H "Authorization: Bearer ${odAccessToken}" \
        --data-binary @./routes/AllFiles/${odConcatFile} \
        -H "Content-Type: application/json"`,
        (err,stdout,stderr) => {
          if(err){
            console.log("err from OdUpload " + err)
          }
          console.log("the OdUpload stdout is " + stdout);
          console.log("the OdUpload stderr is " + stderr);
          odFileUpload = stdout;
          res.status(200).json({"odUploadMSG": "odFile_Uploaded", "OdUpload": odFileUpload});
          toDeleteAllFiles();
        }); 
     
  },35000); 
});
router.post('/OdLocalUpload', (req,res) => {
  console.log("OdLocalUpload called");
  let odUploadFileName = req.body.odUpFileName;
  console.log("odLocalUpFileName is " + odUploadFileName);

  setTimeout(( ) => {
    let odConcatFile = '';
    fs.readdirSync( folder ).forEach( file => {
        if(file === odUploadFileName) {
        console.log("inside the folderOne ")
        const extname = path.extname( file );
        const filename = path.basename( file, extname );
        const absolutePath = path.resolve( folder, file );
        odConcatFile = (filename + extname);
      } 
    });
      return child.exec(
        `curl --location --request PUT https://graph.microsoft.com/v1.0/me/drive/root:/${odConcatFile}:/content \
        -H "Authorization: Bearer ${odAccessToken}" \
        --data-binary @./routes/AllFiles/${odConcatFile} \
        -H "Content-Type: application/json"`,
        (err,stdout,stderr) => {
          if(err){
            console.log("err from OdUpload " + err)
          }
          console.log("the OdLocalUpload stdout is " + stdout);
          console.log("the OdLocalUpload stderr is " + stderr);
          odFileUpload = stdout;
          res.status(200).json({"odLocalUploadMSG": "odFile_LocalUploaded", "OdLocalUpload": odFileUpload});
          toDeleteAllFiles();
        }); 
     
  },35000); 
});

function toDeleteAllFiles(){
  return child.exec(`cd ./routes/AllFiles && rm -f * && cd .. && pwd`
   , (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    console.log(`stdout of files ${stdout}`);
   });
}
async function tpMoveFilestoAllFiles(filename){
  return await new Promise((resolve,reject) => {
    console.log("tpMoveFilestoAllFiles called")
  
  console.log('the filename is ' + filename )
  let newAppDir = appDir.toString().substring(0, appDir.toString().lastIndexOf("/") + 1);
  console.log('the newAppDir is ' + newAppDir );
  let singlepathAp = `${newAppDir}routes/AllFiles`
  console.log('the singlepathAp is ' + singlepathAp );

  return child.exec(`mv "${filename}" ${singlepathAp}`,   
  (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      reject(err);
      throw err;
    }
    console.log("stdout of files" +  stdout)
    console.log("stderr of files" +  stderr)
    return resolve(stdout);
    });
  });
}
async function tpMoveFiletoLocalPath(filename,flPath){
  return await new Promise((resolve,reject) => {
    console.log("tpMoveFiletoLocalPath called")
    console.log('the filename is ' + filename )
 
  let singlepathAp = `${flPath}`
  console.log('the singlepathAp is ' + singlepathAp );

  return child.exec(`mv "${filename}" ${singlepathAp} && cd .. && cd ..`,   
  (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      reject(err);
      throw err;
    }
    console.log("stdout of files" +  stdout)
    console.log("stderr of files" +  stderr)
    return resolve(stdout);
    });
  });
}
async function tpMoveFilefromLocalPath(filename,flPath){
  return await new Promise(async(resolve,reject) => {
    console.log("tpMoveFilefromLocalPath called")
    console.log('the filename is ' + filename );

    let newAppDir = appDir.toString().substring(0, appDir.toString().lastIndexOf("/") + 1);
    console.log('the newAppDir is ' + newAppDir );
    let appFileLocalPath = `${newAppDir}routes/AllFiles`
   
    let singlepathAp = `${flPath}`
    let mdOriginFlPath = singlepathAp.split('/');
    console.log('the mdOriginFlPath is ' +  + mdOriginFlPath.length);
    
    let mdAppDir = newAppDir.split('/');
    console.log('the mdAppDir is ' + mdAppDir + mdAppDir.length);
    let displayFound = await findSpecialPath(mdAppDir,mdOriginFlPath);
    console.log("displayFound " + displayFound);
    let searchLFPath = singlepathAp.split(`${displayFound}`).pop();
    console.log('the searchLFPath is ' + searchLFPath );

  return child.exec(`cd && cd .${searchLFPath} && mv "${filename}" ${appFileLocalPath}`,   
  (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      reject(err);
      throw err;
    }
    console.log("stdout of files" +  stdout)
    console.log("stderr of files" +  stderr)
    return resolve(stdout);
    });
  });
}
async function findSpecialPath(arrayOne,arrayTwo){
  return await new Promise((resolve,reject) => {
  let findCommonPath = '';
    for (let index = 0; index < arrayOne.length; index++) {
      if(arrayOne.includes(arrayTwo[index])){
        if(arrayTwo[index] !== "home"){
          findCommonPath = arrayTwo[index];   
        }  
      } 
    };
    console.log("findCommonPath is " + findCommonPath);
    return resolve(findCommonPath);
  })
}
module.exports = router;
