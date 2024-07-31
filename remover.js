function removerContatos(contatos, prompt, callback) {
    if(contatos.length === 0) {
      console.log('Nenhum contato cadastrado');
      callback();
    } else {
      for(let i = 0; i < contatos.length; i++) {
        console.log(`${i+1}: ${contatos[i].id}, ${contatos[i].nome}, ${contatos[i].telefone}, ${contatos[i].email}`)
      }
      const numero = prompt()('Digite o número da posição do contato que deseja remover: ');
      const index = parseInt(numero) - 1;
      if (index >= 0 && index < contatos.length) {
        contatos.splice(index, 1)
        console.log('Contato removido com sucesso')
        callback()
      } else {
        console.log('Número inválido')
        removerContatos(contatos, prompt, callback)
      }
    }
}
module.exports = {removerContatos}