async function getApi() {
    try {
        const dadosApi = await fetch("https://school-system-spi.onrender.com/api/alunos")
            const dadosJson = await dadosApi.json()
            return dadosJson

    } catch(error) {
        alert(error)
        console.log('não funfo',error)
    }
    
}
const btn = document.getElementById("submit-aluno")
const lista = document.getElementById("lista-aluno")
const formulario = document.getElementById("aluno-get")
async function readApi(){
    await getApi().then((dados) => {
        console.log(dados)
        for(var i in dados){
            
        }
        lista.innerHTML = dados
    })
}


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    readApi()
})
