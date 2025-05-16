async function updateApi(aluno, id){
    try{
        const dadosApi = await fetch(`https://school-system-spi.onrender.com/api/alunos/${id}`, {
            method:"PUT",
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify(aluno)
        }
        
        )
        console.log(dadosApi)
        return dadosApi
        } catch(error){
            console.log("Algo deu errado")
        }
    }
    const id = document.getElementById("atualiza-id")
    const nome = document.getElementById("atualiza-nome")
    const data = document.getElementById("atualiza-data-nasc")
    const nota1 = document.getElementById("atualiza-nota1")
    const nota2 = document.getElementById("atualiza-nota2")
    const turma = document.getElementById("atualiza-id_turma")
    aluno1 = JSON.stringify({
        "nome": "Iago",
        "data_nascimento": "2002-11-23",
        "nota_primeiro_semestre": 9.0,
        "nota_segundo_semestre": 7.4,
        "turma_id": 1
      })
    
    // const formularioUp = document.getElementById("aluno-put")
    // formulario.addEventListener("click", (event)=> {
    //     event.preventDefault()
    //     updateApi(aluno1, 2)
    // })
    