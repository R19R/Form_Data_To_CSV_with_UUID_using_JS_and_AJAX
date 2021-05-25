document.getElementById("btn").addEventListener("click", getValue); //login page

function getValue(e){
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/login", true); 
    
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var credentials = JSON.stringify({'name':name, 'password':password});
    var c = JSON.stringify(credentials)
    xhr.send(c);

    var login = document.getElementById("login").style.display='none';
    var details = document.getElementById("details").style.display='block';


    document.getElementById("btn1").addEventListener("click", showValue); //input page

    function showValue(e){
        e.preventDefault();
        
        var xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(this.status == 200){
                var obje = JSON.parse(this.responseText);
                console.log(obje);
                var namecsv = obje.name;
                var commentcsv = obje.comment;
                var uid = obje.UID;
                table(namecsv,commentcsv, uid);
            }
        }

        xhr.open("POST", "/inputs", true);
        var name_ser = document.getElementById("name_detail").value;
        var comment_ser = document.getElementById("comments_detail").value;

        var details_obj = JSON.stringify({"name":name_ser, "comment": comment_ser});
        // var det_obj_json = JSON.stringify(details_obj);
        xhr.send(details_obj);
        }

    var row = 1; 

    function table(name,comment, uid){
        var table =  document.getElementById("display");
        var newRow = table.insertRow(row);
                
        var cell0 = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);

        cell0.innerHTML = uid;
        cell1.innerHTML = name;
        cell2.innerHTML = comment;

        console.log(row);

        row++;        
    }
};