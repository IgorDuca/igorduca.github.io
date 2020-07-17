function lores(){
    const champName = document.getElementById('champName').value

    const url = `https://github.com/IgorDuca/igorduca.github.io/blob/master/database/champs.json`

    const loreTitle = document.getElementById('loreTitle')
    const loreText = document.getElementById('loreText')

    fetch(url)
    .then(res => res.json())
    .then(hist =>{
        const lore = hist.data

        console.log(lore)

        // loreTitle.innerHTML = (`Lore de ${champName}`)
        // loreTitle.hidden = false;

        // loreText.innerHTML = (`${lore}`)
        // loreText.hidden = false;
    })
}