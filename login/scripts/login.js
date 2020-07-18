import { fs } from 'fs'

function login(){
    var ajaxhhtp = new XMLHttpRequestUpload();
    var json_file = "../database/people.json"

    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    console.log(`Username = ${username}`)
    console.log(`Password = ${password}`)

    const id = Math.floor(Math.random() * 1000)

    console.log(json_file)
}