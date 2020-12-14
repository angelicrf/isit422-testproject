
function ToDo(pTitle, pDetail, pPriority) {
    this.title= pTitle;
    this.detail = pDetail;
    this.priority = pPriority;
    this.completed = false;
  }
  var ClientToDos = [];  // don't really need this intermediate array, but if we want to allow
  // edits to existing ones, it would then be useful

document.addEventListener("DOMContentLoaded", function (event) {

    // button event for adding a ToDo
    document.getElementById("submit").addEventListener("click", function () {
        var tTitle = document.getElementById("title").value;
        var tDetail = document.getElementById("detail").value;
        var tPriority = document.getElementById("priority").value;
        var oneToDo = new ToDo(tTitle, tDetail, tPriority);

         // using Fetch:   create request object
         const request = new Request('NewToDo', {
            method: 'POST',
            body: JSON.stringify(oneToDo),
            headers: new Headers({
                'Content-Type': 'application/json'
                })
            });

        // pass request object to `fetch()`
        fetch(request)                                 // wait for 200, 500, etc
            .then(resPromise1 => resPromise1.json())   // now wait for server data response
            
            .then(data =>   console.log("added new note" ),  // clear txt boxes
                document.getElementById("title").value = "",
                document.getElementById("detail").value= "",
                document.getElementById("priority").value= ""
            )
           // .then(data => console.log(data), document.location.href = "index.html#Show" )
            
            .catch(function (err) {
                console.log(err);
            });

        // $.ajax({
        //     url: '/NewToDo' ,
        //     method: 'POST',
        //     dataType: 'json',
        //     contentType: 'application/json',
        //     data: JSON.stringify(oneToDo),
        //     success: function (result) {
        //         console.log("added new note")
        //     }

        // });
    });  // end of add button event

    // button event for listing all ToDo's
    document.getElementById("get").addEventListener("click", function () {
        
        var ul = document.getElementById('listUl');
        ul.innerHTML = "";  // clears existing list so we don't duplicate old ones
        
        //$.get("/ToDos", function(data, status){  // AJAX get

        fetch('/ToDos')          // wait for reply  (200, 500, etc)
        .then(function (response) {     //  now wait for the data
            return response.json();  
        })
        .then(function (data) { 

            ClientNotes = data;  // put the returned server json data into our local array

            // sort array by one property
            ClientNotes.sort(compare);  // see compare method below
            console.log(data);
            //listDiv.appendChild(ul);
            ClientNotes.forEach(ProcessOneToDo); // build one li for each item in array
            function ProcessOneToDo(item, index) {
                var li = document.createElement('li');
                ul.appendChild(li);
    
                li.innerHTML=li.innerHTML + index + ": " + " Priority: " + item.priority + "  " + item.title + ":  " + item.detail + " Done? "+ item.completed;
            }
        });

        // used by javascript's sort method
        function compare(a,b) {
            if (a.completed == false && b.completed== true) {
                return -1;
            }
            if (a.completed == false && b.completed== true) {
                return 1;
            }
            return 0;
        }
    });
  

    // button event for deleting a ToDo
    document.getElementById("delete").addEventListener("click", function () {

        var whichToDo = document.getElementById('deleteTitle').value;
        var idToDelete = "";
        // walk thru array to get the mongoDB _id of item with this title
        // we are having user delete by title, but telling mongo to delete by -id
        for(i=0; i< ClientNotes.length; i++){
            if(ClientNotes[i].title === whichToDo) {
                idToDelete = ClientNotes[i]._id;
           }
        }      
        
        if(idToDelete != "")  // if we found a match
        {
            fetch( "/DeleteToDo/" + idToDelete , {
                method: "DELETE"
            })
            .then(resp => document.getElementById('deleteTitle').value = "") // clear txt box, not using the resp object
            .catch(function (err) {  // if the promise (fetch) gives up and declares error
                console.log(err);
            });

            // $.ajax({  
            //     url: 'DeleteToDo/'+ idToDelete,
            //     type: 'DELETE',  
            //     contentType: 'application/json',  
            //     success: function (response) {  
            //         console.log(response);  
            //     },  
            //     error: function () {  
            //         console.log('Error in Operation');  
            //     }  
            // });  
            
        }
        else {  // if not
            console.log("no matching Subject");
        } 
    });

    // button event for marking a ToDo as complete
    document.getElementById("completed").addEventListener("click", function () {
        
        var whichToDo = document.getElementById('completedTitle').value;
        var itemToChange = null;
        for(i=0; i< ClientNotes.length; i++){
            if(ClientNotes[i].title === whichToDo) {
                itemToChange = ClientNotes[i]
                console.log(itemToChange);
           }
        }
        
        if(itemToChange != null)
        {
            const request = new Request('CompleteToDo', {
                method: 'PUT',
                body: JSON.stringify(itemToChange),
                headers: new Headers({
                    'Content-Type': 'application/json'
                    })
                });
    
            // pass request object to `fetch()`
            fetch(request)                                 // wait for 200, 500, etc
                .then(resPromise1 => resPromise1.json())   // now wait for server data response
                
                .then(data =>   console.log("changed to done" ),  
                )
                
                .catch(function (err) {
                    console.log(err);
                });


            // $.ajax({  // note, this version passed up just the _id, which is not a good model for a PUT
            //     url: 'CompleteToDo/',
            //     type: 'PUT',
            //     contentType: 'application/json',
            //     data: JSON.stringify({id: idToChange}),
            //         success: function (response) {  
            //             console.log(response);  
            //         },  
            //         error: function () {  
            //             console.log('Error in Operation');  
            //         }  
            // });  
            
        }
        else {
            console.log("no matching Subject");
        } 
    });
    
    
   
});

