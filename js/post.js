async function postAluno(aluno){
    try{
        const dadosApi = await fetch("https://school-system-spi.onrender.com/api/alunos", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(aluno)
            }
        )
    } catch(error){
        console.log("algo deu errado")
    }
}
aluno1 = {
    "nome": "Iago",
    "data_nascimento": "2002-11-23",
    "nota_primeiro_semestre": 8.0,
    "nota_segundo_semestre": 7.4,
    "turma_id": 1
  }
const formulario = document.getElementById("aluno-post")
formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    postAluno(aluno1)
})


