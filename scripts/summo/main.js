const profileImg = document.getElementById('profileImg')

var profile = googleUser.getBasicProfile();

const profileImage = profile.getImageUrl();

profileImg.src = `${profileImage}`;