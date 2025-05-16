async function postAluno(aluno){
    try{
        const dadosApi = await fetch("https://school-system-spi.onrender.com/api/alunos", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(aluno)
            
            },
            
        )
        return dadosApi.JSON()
    } catch(error){
        console.log("algo deu errado")
    }
}
    
    const post_nome = document.getElementById("criar-nome")
    const post_data = document.getElementById("criar-data-nasc")
    const post_nota1 = document.getElementById("criar-nota1")
    const post_nota2 = document.getElementById("criar-nota2")
    const post_turma = document.getElementById("criar-id_turma")

    function cheque(){
        if(!post_nome){
            return false
        }
        if(!post_data){
            return false
        }
        if(!post_nota1){
            return false
        }
        if(!post_nota2){
            return false
        }
        if(!post_turma){
            return false
        }
        return true
    }

    const checar = cheque()
    

const formularioPost = document.getElementById("aluno-post")
formularioPost.addEventListener('submit', (event) => {

    event.preventDefault()
    console.log(post_nome.value)
    if(checar){
        aluno1 = {
            "nome": post_nome.value,
            "data_nascimento": post_data.value,
            "nota_primeiro_semestre": post_nota1.value,
            "nota_segundo_semestre": post_nota2.value,
            "turma_id": post_turma.value
          }
          postAluno(aluno1)
    }
    
})


