async function getApi() {
    const dadosApi = await fetch("https://school-system-spi.onrender.com/api/alunos")
        const dadosJson = await dadosApi.json()
        return dadosJson
    
}

function readApi(){
    getApi().then((dados) => {
        console.log(dados)
    })
}
readApi();
