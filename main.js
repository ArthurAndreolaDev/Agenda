const form = document.getElementById('event-form')

let linhas = ''

form.addEventListener('submit',function(e){
    e.preventDefault()

    adicionar ();
})

function adicionar (){
    const nome = document.getElementById('nome')
    const numero = document.getElementById('numero')

    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`
    linha += `<td>${numero.value}</td>`
    linha += '</tr>'

    linhas += linha
    const body = document.getElementById('corpo')
    body.innerHTML = linhas

    nome = ''
    numero = ''
} ;