import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  setUpDrop(ev) {
  ev.preventDefault();
  let twoDrags = ['dragenter', 'dragover']
  let twoDrops = ['dragleave', 'drop']
  let dropArea = document.getElementById('dropOne')
  twoDrags.forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  })
  twoDrops.forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  })
  function highlight(e) {
    dropArea.classList.add('highlight')
  }
  function unhighlight(e) {
    dropArea.classList.remove('highlight')
  }
}
drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id); 
}
drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  let filesToUpload = ev.dataTransfer.files
  this.uploadFile(filesToUpload)
  ev.target.appendChild(document.getElementById(data));
}
uploadFile(file) {
  let url = '/api/HandleDrDrp'
  let formData = new FormData()
  //"multipart/form-data"
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', "application/x-www-form-urlencoded");
  //myHeaders.append('Content-Type', "multipart/form-data");
  formData.append('file', file)
  for(var pair of formData.entries()) {
    console.log(JSON.stringify(pair[0]) + ', '+ pair[1]); 
 }
  fetch(url, {
    method: 'POST',
    headers: myHeaders,
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(() => { console.log('there is an error') })
}
}
