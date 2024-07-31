const prompt = require('prompt-sync')
const {adicionarContatos} = require('./adicionar');
const {listarContatos} = require('./listar');
const {removerContatos} = require('./remover');
const {atualizarContatos} = require('./atualizar');

let contatos = [
    { id: 1, nome: 'Alice', telefone: '1234-5678', email: 'alice@example.com' },
    { id: 2, nome: 'Bob', telefone: '8765-4321', email: 'bob@example.com' },
    { id: 3, nome: 'Carol', telefone: '5678-1234', email: 'carol@example.com' }
  ];
  
exibirMenu()

function exibirMenu() {
console.log(`
      1. Adicionar contato
      2. Listar contato
      3. Atualizar contato
      4. Remover contato
      5. Sair
`)
     
  let opcao = prompt()('Escolha uma opção: ')
    switch(opcao) {
        case '1':
          adicionarContatos(contatos, prompt, exibirMenu);
            break;
        case '2':
          listarContatos(contatos, prompt, exibirMenu);
          exibirMenu()
            break;
        case '3':
          atualizarContatos(contatos, prompt, exibirMenu);
            break;
        case '4':
          removerContatos(contatos, prompt, exibirMenu);
            break;
        case '5':
          console.log('Até mais!')
         break;
            default:
                console.log('Opção invalida');
                exibirMenu();
                break;
 }
}