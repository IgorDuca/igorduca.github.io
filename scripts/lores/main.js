function lores(){
    const champName = document.getElementById('champName').value

    const url = `https://ddragon.leagueoflegends.com/cdn/10.11.1/data/pt_BR/champion/${champName}.json`

    const loreTitle = document.getElementById('loreTitle')
    const loreText = document.getElementById('loreText')

    const options = {
        method: 'GET'
    }

    fetch(url, options)
    .then(res => res.json())
    .then(lores => {
        console.log(lores)
    })
}