function atualizarContatos(contatos, prompt, callback) {
    if (contatos.length === 0) {
      console.log('Nenhum contato cadastrado para atualizar');
      callback();
    } else {
      for(let i = 0; i < contatos.length; i++) {
        console.log(`${i+1}: ${contatos[i].id}, ${contatos[i].nome}, ${contatos[i].telefone}, ${contatos[i].email}`);
      } 

      const numero = prompt()('Digite o número da posição do contato que deseja editar: ');
      const index = parseInt(numero) - 1;
        if (index >= 0 && index < contatos.length) {
          const id = prompt()('Insira o novo id: ');
          const nome = prompt()('Insira o novo nome: ');
          const telefone = prompt()('Insira o novo telefone: ');
          const email = prompt()('Insira o novo email: ');

          contatos[index] = {
            id:id,
            nome:nome,
            telefone:telefone,
            email:email
          }
          console.log('Contato editado com sucesso!')
          callback()
        } else {
          console.log('Número de contato incorreto')
          atualizarContatos(contatos, prompt, callback)
        }
    }
}

module.exports = { atualizarContatos }