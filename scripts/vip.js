function vip() {
    event.preventDefault()

    var profile = googleUser.getBasicProfile();

    var accId = profile.getId()

    var req = new XMLHttpRequest();
    req.open('POST', '/accvip');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({ accId: accId }))

    req.addEventListener('load', () => {
        console.log(req.responseText);
        console.log(`Agora ${accId} é um usuário VIP!`);
    })

    req.addEventListener('error', () => {
        console.log(`Algo de errado aconteceu e ${accId} não pôde se tornar VIP`);
        console.log(e);
    })
}