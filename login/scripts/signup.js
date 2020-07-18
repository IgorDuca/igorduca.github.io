function signup(){
    var ajaxhhtp = new XMLHttpRequest();
    var json_file = "../database/people.json"

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    console.log(`Username = ${username}`)
    console.log(`Password = ${password}`)

    var config = {
        body:{
            "username":`${username}`,
            "password":`${password}`
        }
    }

    ajaxhhtp.open("POST", json_file, );
    ajaxhhtp.setRequestHeader("content-type","application/json");
    ajaxhhtp.onreadystatechange = function (){
        if(ajaxhhtp.readyState == 4 && ajaxhhtp.status == 200){
            var jcontent = ajaxhhtp;
            console.log(jcontent);
        }
    }
    ajaxhhtp.send(null);
}