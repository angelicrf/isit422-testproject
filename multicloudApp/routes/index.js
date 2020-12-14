var express = require('express');
var router = express.Router();
var path = require('path');
const {v4 : uuidv4} = require('uuid');
const folder = './routes/AllFiles';
let HoldUserData = [];
let LoggedInUserID = "";
let sendToAngularAccessToken = '';
let saveGDAccessToken = '';
let sendToGd = "";
let Gdrecivedid = '';
let GdrecivedName = '';
let getDpFilePath = '';
let appDir = path.dirname(require.main.filename);
// fs for reading local files
const fs = require('fs');
const child = require('child_process');
// mongoose is a API wrapper overtop of mongodb
const mongoose = require("mongoose");

const MCUsers = require("../McUsers");
const MCClient = require("../McCloud");
const DbClient = require('../DbCloud');

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
//post Google drive client data to McCloud
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
    //handling error
    if (err) {
      res.status(500).send(err);
      console.log('Unable to scan directory: ' + err);
    } 
    else {
      let names = [];
      let fileData = [];
      //listing all files using forEach
      files.forEach(function (file) {
        names.push(file.toString());
        console.log(file.toString()); 
        // fs.readFile(req.body.path + '/' + file, (err, data) => {
        //   if (err) throw err;
        //   fileData.push(data)
        //   console.log(data);
        // });
      });
      res.status(201).json({files, names: names});
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
            console.log('file written');
        })
    });
});
  // try {
  //   fs.writeFile(req.body.fileName, req.body.fileData, () => {
  //     console.log(req.body.fileData);
  //     console.log('The ' + req.body.fileName + ' file has been saved!');
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send(err);
  // }
});

/* POST delete local files */
router.post('/DeleteFiles', function(req, res) {
  console.log('DeleteFiles called');
  try {
    fs.unlinkSync(req.body.filePath + "/" + req.body.fileName);
    console.log('successfully deleted ' + req.body.fileName);
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
              -d redirect_uri=http://localhost:4200/filetransfer \
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
  let svAccess = saveGDAccessToken
  let savefileId = ''
  console.log('google drive access token' + svAccess )

   /*  fs.readdirSync( folder ).forEach( file => {
    console.log("inside the folderOne ")
    const extname = path.extname( file );
    const filename = path.basename( file, extname );
    const absolutePath = path.resolve( folder, file );
    const storeFile = file.toString()
    const concatFile = (filename + extname)
    console.log("inside the folderTwo ")
    console.log("concatFile is " + concatFile)  */
    const concatFile2 = 'pdffile.pdf';
    return child.exec(
      `curl --location --request POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id' \
       --header 'Authorization: Bearer ${svAccess}' \
       --header 'Content-Type: application/octet-stream' \
       --data-binary @${concatFile2}`
     ,(stdout, stderr) => {    
      if(stderr.length > 0){
        console.log(JSON.stringify(stderr))
        savefileId = (JSON.stringify(stderr)).toString();
        sendToGd = savefileId.slice(15,savefileId.length - 8) 
          console.log("the stdErr is " + sendToGd)            
      }  
      console.log("the stdOut is " + sendToGd) 
      //toDeleteAllFiles()
      res.send("Response from Node: File uploaded to Google drive")
       })         
    })   
// })
 router.get('/GDUpdateFile' , (req, res) => {
   console.log("GDUpdateFile called " + sendToGd )
   console.log("saveGDAccessToken from GDUpdateFile " + saveGDAccessToken)
  let svAccess = saveGDAccessToken

  let updatedMs = ''
  return child.exec(
    `curl --location --request PATCH 'https://www.googleapis.com/drive/v2/files/${sendToGd}' \
    --header 'Authorization: Bearer ${svAccess}' \
    --header "Content-Type: application/json" \
    --header 'Accept: */*' \
    --data '{"title":"newPdfOneFile","fileExtension": "pdf"}'`
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
  let gth = (sendToAngularAccessToken)
  console.log("gth is " + gth)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = '';
  let newId = uuidv4()
  let concatFile = '';
  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
    fs.readdirSync( folder ).forEach( file => {
      console.log("inside the folderOne ")
      const extname = path.extname( file );
      const filename = path.basename( file, extname );
      const absolutePath = path.resolve( folder, file );
      concatFile = (filename + extname);
      console.log("concatFile is " + concatFile)   
     // const concatFile = "pdffile.pdf";
      }); 
      console.log("concatFile outside " + concatFile) 
      child.exec(
        `curl -X POST https://content.dropboxapi.com/2/files/upload \
         -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
         -H 'Content-Type: application/octet-stream' \
         -H 'Dropbox-Api-Arg: {"path": "/tMultiCloud${newId}"}' \
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
router.get('/DPDownload', function (req, res)
{
  console.log("DPDownload called")
  console.log("getDPPath from DPDownload is " + getDpFilePath )
  let gth = (sendToAngularAccessToken)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = ''
  let lastPart = getDpFilePath.split('/')
  let storeLastPart = lastPart[lastPart.length-1]
  console.log('Last Part is ' + lastPart)
  console.log('storeLastPart is ' + storeLastPart)

  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
    console.log('there is "')
    //check it out
    //-H 'Content-Type: application/octet-stream' \
    child.exec(
      `curl -X POST https://content.dropboxapi.com/2/files/download \
       -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
       -H 'Dropbox-Api-Arg: {"path": "${getDpFilePath}"}' \
       -o ${storeLastPart}`
      ,(stdout, stderr) => {    
        if(stderr.length > 0){
          sendToGd = stderr;
         // tpMoveFilestoAllFiles(storeLastPart) 
            console.log("the stdErr is " + stderr)            
        } 
        console.log("the stdOut is " + JSON.stringify(stdout))
      })   
        console.log("file transfered")
        
        res.send("Response from Node: file downloaded")             
  }  
   
})
router.post('/GdId', function (req, res) {
  console.log("GdId called ")
  Gdrecivedid = req.body.gdSaveId
  GdrecivedName = req.body.gdSaveFileName
  console.log("Gdrecivedid from /GdId " + Gdrecivedid + 'and File Name is ' + GdrecivedName);
  res.send("GdId received " + Gdrecivedid + 'with File name : ' + GdrecivedName);
})
router.get('/DownloadGd', function (req, res)
{
  //get gd file name
  console.log("DownloadGd called ")
  console.log("GdId from node " + Gdrecivedid)
  console.log("GdrecivedName from node " + GdrecivedName)
  //      --header 'Content-Type: application/json' \
  let sendToGd = ""
  let fileNameCreate = GdrecivedName.toString();
  return child.exec(
     `curl --location --request GET 'https://www.googleapis.com/drive/v2/files/${Gdrecivedid}?alt=media&source=downloadUrl' \
      --header 'Authorization: Bearer ${saveGDAccessToken}' \
      -o ${fileNameCreate}`
    ,(stdout, stderr) => {    
     if(stderr.length > 0){
       sendToGd = stderr; 
         console.log("the stdErr is " + stderr)            
     } 
     console.log("the stdOut is " + JSON.stringify(sendToGd)) 
      // move file to AllFiles
     tpMoveFilestoAllFiles(GdrecivedName)
     res.send("Response from Node: File downloaded from Google drive")   
   }) 
})
function tpMoveFilestoAllFiles(filename){
  console.log("tpMoveFilestoAllFiles called")
  
  console.log('the filename is ' + filename )
  let newAppDir = appDir.toString().substring(0, appDir.toString().lastIndexOf("/") + 1);
  console.log('the newAppDir is ' + newAppDir )
  //find . -name '${filename}' -exec mv {} /AllFiles \;
  return child.exec(`mv ${filename} ${newAppDir}/routes/AllFiles`)   
  , (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    console.log(`Number of files ${stdout}`);
  }
}
function toDeleteAllFiles(){
  return child.exec(`cd ./routes/AllFiles && rm -f * && cd ..`)
   , (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    console.log(`Number of files `);
   } 
}


module.exports = router;
