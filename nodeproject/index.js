const express = require('express');
let path = require('path');
const child = require('child_process');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;
let sendToAngular = ""
let sendToAngularAccessToken = ""
let saveGDAccessToken = ''
let Gdrecivedid = ''
let getDpFilePath = ''
const folder = './AllFiles'
const fs = require( 'fs' )

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.get('/' , (req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({
        title: "new Message from Node",
        snedMessage: 'Successful'
    })
})
app.get('/StoreData' , (req,res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({
        title: "new Message from Node Store Data",
        snedMessage: 'Successful from StoreData'
    })
})

app.post('/ShowData', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("req body from node " + JSON.stringify(req.body.saveCode))
    let codeData = req.body.saveCode;
    
    child.exec(
        `curl https://api.dropbox.com/oauth2/token \
                -d code=${codeData} \
                -d grant_type=authorization_code \
                -d redirect_uri=http://localhost:4200/features \
                -u m69dopii079t806:g13y18s5ikbv79s`
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
})
app.post('/GDAcessToken', function (req, res)
{
  console.log('google access token')
  let svAccess = req.body.accessTokenDg
  saveGDAccessToken = svAccess
  res.send("GD accessToken received" + saveGDAccessToken)   
})
app.post('/GdId', function (req, res) {
  Gdrecivedid = req.body.gdSaveId
  res.send("GdId received " + Gdrecivedid)
})
app.get('/DownloadGd', function (req, res)
{
  console.log("GdId from node " + Gdrecivedid)
  //1R0eDNeswZBjOMrq0l3f2qE0EdCFfNQSW
  let sendToGd = ""
  return child.exec(
     `curl --location --request GET 'https://www.googleapis.com/drive/v2/files/${Gdrecivedid}?alt=media&source=downloadUrl' \
      --header 'Authorization: Bearer ${saveGDAccessToken}' \
      --header 'Content-Type: application/json' \
      -o newimage.png`
    ,(stdout, stderr) => {    
     if(stderr.length > 0){
       sendToGd = stderr; 
         console.log("the stdErr is " + stderr)            
     } 
     console.log("the stdOut is " + JSON.stringify(sendToGd)) 
     res.send("Response from Node: File downloaded from Google drive")   
   }) 
})
app.get('/UploadGd', function (req, res)
{
  console.log("GoogleDriveAccessToken in Upload " + saveGDAccessToken)
  console.log('google access token')
  let svAccess = saveGDAccessToken
  console.log('google drive access token' + svAccess )
  let sendToGd = ""
 
   fs.readdirSync( folder ).forEach( file => {
    const extname = path.extname( file );
    const filename = path.basename( file, extname );
    const absolutePath = path.resolve( folder, file );
    const storeFile = file.toString()
    const concatFile = (filename + extname)
    console.log("storeFile " + storeFile)
    console.log("concatFile " + concatFile)

    console.log( "File : ", file );
    console.log( "filename : ", filename );
    console.log( "extname : ", extname );
    console.log( "absolutePath : ", absolutePath); 
    
    return child.exec(
      `curl --location --request POST 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id' \
       --header 'Authorization: Bearer ${saveGDAccessToken}' \
       --header 'Content-Type: application/octet-stream' \
       --data-binary @'${concatFile}'`
     ,(stdout, stderr) => {    
      if(stderr.length > 0){
        sendToGd = stderr; 
          console.log("the stdErr is " + stderr)            
      }  
      console.log("the stdOut is " + JSON.stringify(sendToGd)) 
      res.send("Response from Node: File downloaded from Google drive")   
    })   
 })
  //application/octet-stream 
})
app.post('/DpPath', function (req, res)
{
  let saveDpFilePath = req.body.dpGetFPath
  getDpFilePath = saveDpFilePath
  console.log("dpPath from index is " + getDpFilePath)
  res.send("Gd file path received " + getDpFilePath)
})
 app.get('/DPUpload', function (req, res)
{
  let gth = (sendToAngularAccessToken)
  let modifyGth = (gth.split(" "))
  let saveAccess = (modifyGth[1])
  let sendToGd = '';
  //tpMoveFilestoAllFiles()
  if(saveAccess.charAt(0) == '"' || saveAccess.charAt(saveAccess.length - 1) == '"'){
     fs.readdirSync( folder ).forEach( file => {
      const extname = path.extname( file );
      const filename = path.basename( file, extname );
      const absolutePath = path.resolve( folder, file );
      const concatFile = (filename + extname)
   
      child.exec(
        `curl -X POST https://content.dropboxapi.com/2/files/upload \
         -H 'Authorization: Bearer ${saveAccess.substr(1,saveAccess.length - 3)}' \
         -H 'Content-Type: application/octet-stream' \
         -H 'Dropbox-Api-Arg: {"path":"/yellowTeam22"}' \
         --data-binary @'./AllFiles/${concatFile}'`
        ,(stdout, stderr) => {    
          if(stderr.length > 0){
            sendToGd = stderr; 
              console.log("the stdErr is " + stderr)            
          } 
          console.log("the stdOut is " + JSON.stringify(stdout)) 
          toDeleteAllFiles()
          res.send("Response from Node: file uploaded to Dropbox")   
        })    
      })   
  }
})
app.get('/DPDownload', function (req, res)
{
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
            console.log("the stdErr is " + stderr)            
        } 
        console.log("the stdOut is " + JSON.stringify(stdout))
      })
      tpMoveFilestoAllFiles(storeLastPart)
        console.log("file transfered")
        res.send("Response from Node: file downloaded")    
  }   
})
function tpMoveFilestoAllFiles(fileName){
child.exec(`cd && find Git/angularPrj/isit422-testproject/nodeproject -iname '${fileName}' -exec mv {} ~/Git/angularPrj/isit422-testproject/nodeproject/AllFiles \;`)   
, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    console.log(`Number of files ${stdout}`);
  }
}
function toDeleteAllFiles(){
  return child.exec("cd && cd ./Git/angularPrj/isit422-testproject/nodeproject/AllFiles && rm -f * && cd ..")
   , (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }
    console.log(`Number of files `);
   } 
}

app.listen(PORT, () => {
  console.log(`express is listenning to ${PORT}`)
})


