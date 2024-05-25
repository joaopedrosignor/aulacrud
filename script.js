const btnCriar = document.querySelector("#btnCriar")
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')
const inputAno = document.querySelector('#inputAno')
const inputDiretor = document.querySelector('#inputDiretor')

const filmes = [
    {
        nome: "Tropa de Elite",
        ano: 2008,
        diretor: "José Padilha"
    },
    {
        nome:"Carros",
        ano:2006,
        diretor:"John Lasseter"
    },
    {
        nome: "Titanic",
        ano: 1997,
        diretor: "James Cameron"
    }
]

btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault();

    criarFilme()
})
//CREATE
function criarFilme(){
    //1 - Pegar os dados do filme
    let filme = {
        nome: inputUsuario.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    }
    //2 - Armazenar
    filmes.unshift(filme)
    //3 - Atualizar o DOM
    renderizarNaTela()
}
window.onload = renderizarNaTela()
//READ
function renderizarNaTela(){
    listaFilmes.innerHTML=""
    filmes.forEach(filme =>{
        let novoFilme = document.createElement('li')
        novoFilme.innerHTML = `
        <h1>${filme.nome}</h1>
        <p>${filme.ano}</p>
        <p>${filme.diretor}</p>
        <button onclick="editarFilme(${filmes.indexOf(filme)})">Editar</button>
        <button onclick="apagarFilme(${filmes.indexOf(filme)})">Apagar</button>
        `
        listaFilmes.append(novoFilme)
    })

}
//UPDATE
function editarFilme(idFilme){

    //2 - Pegar as informações que a pessoa quer inserir
    let tituloModificado = prompt('Digite o novo nome do filme',filmes[idFilme].nome)
    //3 - Mudar as informações
    filmes[idFilme].nome = tituloModificado
    //4 - Atualizar na tela
    renderizarNaTela()
}
//DELETE
function apagarFilme(idFilme){

    //2 - Apagar o filme
    filmes.splice(idFilme,1)
    //4 - Atualizar na tela
    renderizarNaTela()
}

// filmes.filter(
//     filme =>{
//         filme.categoria === categoria
//     }
// )
const date = new Date()
console.log(date)