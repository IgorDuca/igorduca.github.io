function confirm(){
    const champName = document.getElementById('champName').value

    console.log(`Campeão pesquisado: ${champName}`)

    const Wallpaper = document.getElementById('champImg')

    const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`

    window.open(url)
}