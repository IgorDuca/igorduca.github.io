$(document).ready(function() {
    function onSignIn(googleUser) {
        const profileImg = document.getElementById('profileImg')

        var profile = googleUser.getBasicProfile();

        profileImg.src = profile.getImageUrl();
    }
})