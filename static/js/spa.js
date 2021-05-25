


document.getElementById("btn").addEventListener("click", getValue); //login page

function getValue(e){
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/login", true); 
    
    xhr.onload = function(e){
        var name = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
    };

    xhr.send(JSON.stringify(name, password));

    var login = document.getElementById("login").style.display='none';
    var details = document.getElementById("details").style.display='block';


document.getElementById("btn1").addEventListener("click", showValue); //input page

function showValue(e){
    e.preventDefault();


    var xhr = new XMLHttpRequest();

    
    xhr.open("POST", '/inputs', true);

    var namecsv = document.getElementById("name_detail").value; 
    var commentcsv = document.getElementById("comments_detail").value;


    
    //Check responseText; if success then get value of name, comment and uid. pass it front end to display
    // create a common function for table with params, if responseText is success then call the function to display table
   
    xhr.onreadystatechange = function (){
        if(this.status == 200 && this.readyState ==4){
            var data = JSON.parse(this.responseText);
            // var namecsv = data['name'];
            // var commentcsv = data['comment'];
            // // var commentcsv = document.getElementById("comments_detail");
            // var uid = data['UID'];
            console.log(data.UID);
        }
    }
    var obj = JSON.stringify({"name":namecsv, "comment": commentcsv, })
    var myJson = JSON.stringify(obj)
    xhr.send(obj);
    // console.log(obj);
    

    var row = 1;
    var table =  document.getElementById("display");
    var newRow = table.insertRow(row);

    
    
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);

    cell0.innerHTML = this.uid;
    cell1.innerHTML = namecsv;
    cell2.innerHTML = commentcsv;

    row++;
    };
};
