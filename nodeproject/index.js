const express = require('express');
const child = require('child_process');
const { stdout, stderr } = require('process');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;

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
    let sendToAngular = ""
    child.exec(
        `curl https://api.dropbox.com/oauth2/token \
                -d code=${codeData} \
                -d grant_type=authorization_code \
                -d redirect_uri=http://localhost:4200/features \
                -u m69dopii079t806:g13y18s5ikbv79s`
     , (stdout, stderr) => {
        
        if(stderr.length > 0){
            sendToAngular = stderr; 
            console.log("the stdErr is " + stderr)            
        } 
        console.log("the stdOut is " + JSON.stringify(sendToAngular))
        res.send((sendToAngular))
  }) 
  
})
app.listen(PORT, () => {
    console.log(`express is listenning to ${PORT}`)
})
/* child.exec('mkdir newFolderTest', (stdout, stderr) => {
    console.log(stdout)
    if(stderr.length > 0){
        console.log(stderr)
    }
}) */


