function champ(){
    
    const champName = document.getElementById('champ-name').value
    const button = document.getElementById('confirm')

    const champImgg = document.getElementById('champImg')

    const champPresentation = document.getElementById('champPresentation')

    const howtowin = document.getElementById('howtowinw')
    const allytips = document.getElementById('allytips')
    const howtowinagainst = document.getElementById('howtowina')
    const enemytips = document.getElementById('enemytips')
    const Tpassive = document.getElementById('Tpassive')
    const passiveName = document.getElementById('passiveName')
    const passiveDesc = document.getElementById('passiveDesc')

    const backBtn = document.getElementById('backBtn')

    button.hidden = true;

    var champRequest = [`${champName}`]

    console.log(`Campeão pesquisado: ${champRequest}`)

    const url = `http://ddragon.leagueoflegends.com/cdn/10.14.1/data/pt_BR/champion/${champName}.json`
    const champImg = `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${champName}.png`

    champImgg.src=url;
    champImgg.hidden = false;

    fetch(url)
    .then(res => res.json())
    .then(champ => {
        const RchampName = champ.data[champName].id
        const RTitle = champ.data[champName].title
        const RAllyTips = champ.data[champName].allytips
        const REnemyTips = champ.data[champName].enemytips
        const PassiveName = champ.data[champName].passive.name
        const PassiveDesc = champ.data[champName].passive.description

        champImgg.src = champImg
        champImgg.hidden = false

        champPresentation.innerHTML = (`${RchampName}, ${RTitle}`)
        champPresentation.hidden = false;

        howtowin.innerHTML = (`Como jogar de ${RchampName} 🔮`)
        howtowin.hidden = false;

        allytips.innerHTML = (`${RAllyTips}`)
        allytips.hidden = false;

        howtowinagainst.innerHTML = (`Como ganhar contra um ${RchampName} 🎯`)
        howtowinagainst.hidden = false;

        enemytips.innerHTML = (`${REnemyTips}`)
        enemytips.hidden = false;
        
        Tpassive.innerHTML = (`Sobre a passiva de ${RchampName} 🌌`)
        Tpassive.hidden = false;

        passiveName.innerHTML = (`Nome da passiva: ${PassiveName}`)
        passiveName.hidden = false;

        passiveDesc.innerHTML = (`${PassiveDesc}`)
        passiveDesc.hidden = false;

        backBtn.hidden = false;

        console.log(RchampName)
        console.log(RTitle)
    })
}