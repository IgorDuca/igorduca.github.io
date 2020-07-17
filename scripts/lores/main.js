function lores(){
    const champName = document.getElementById('champName').value

    const url = `https://ddragon.leagueoflegends.com/cdn/10.11.1/data/pt_BR/champion/${champName}.json`

    const loreTitle = document.getElementById('loreTitle')
    const loreText = document.getElementById('loreText')

    fetch(url)
    .then(res => res.json())
    .then(lores => {
        const lore = lores.data[champName].lore

        loreTitle.innerHTML = (`Lore de ${champName}`)
        loreTitle.hidden = false;

        loreText.innerHTML = (`${lore}`)
        loreText.hidden = false;
    })
}