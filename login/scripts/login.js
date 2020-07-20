function onSignIn(){
    var profile = googleUser.getBasicProfile();

    const loginStatus = document.getElementById('loginStatus')

    const profilePic = document.getElementById('profilePic')

    profilePic.src = profile.getImageUrl
    profilePic.hidden = false;

    loginStatus.innerHTML = "Agora me lembro de você!"

    var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
}