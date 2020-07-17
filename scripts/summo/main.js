function summo(){
    const summoName = document.getElementById('summoName').value

    const api_key = 'RGAPI-7d3ac3c4-1d6a-407f-b96e-e883c42c8439'

    const url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoName}?api_key=${api_key}`

    console.log(url)

    var fetchConfig = {
        mode:'no-cors'
    }

    fetch(url, fetchConfig)
    .then(res => res.json())
    .then(summoner => {
        console.log(summoner)
    })
}