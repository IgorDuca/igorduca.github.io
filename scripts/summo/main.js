function onSignIn(googleUser) {
        const profileImg = document.getElementById('profileImg')

        var profile = googleUser.getBasicProfile();

        profileImg.src = profile.getImageUrl();

        console.log(`Logado como ${profile.getName}`)
        console.log(`Url do ícone: ${profile.getImageUrl()}`)
}
