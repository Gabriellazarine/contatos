function adicionarContatos(contatos, prompt, callback){
    let id = prompt()('Insira o número id ');
    let nome = prompt()('Insira seu nome ');
    let telefone = prompt()('Insira seu telefone ');
    let email = prompt()('Insira seu email ');
  
    contatos.push ({
        id:id,
        nome:nome,
        telefone:telefone,
        email:email
    })
    console.log('Contato cadastrado com sucesso')
    callback()
  }
module.exports = { adicionarContatos }