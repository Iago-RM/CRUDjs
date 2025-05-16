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
    aluno1 = JSON.stringify({
        "nome": "Iago",
        "data_nascimento": "2002-11-23",
        "nota_primeiro_semestre": 9.0,
        "nota_segundo_semestre": 7.4,
        "turma_id": 1
      })
    
    updateApi(aluno1, 2)