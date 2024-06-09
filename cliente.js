const grpc = require('@grpc/grpc-js');
const messages = require('./chat_pb');
const services = require('./chat_grpc_pb');
const question = require('./question');

const users = new Set(); // Conjunto para armazenar usuários online
const messagesHistory = []; // Array para armazenar histórico de mensagens

async function main() {

  const ipServer= await question('Digite o IP do Servidor: ');
  const target = ipServer+":50000";
  const client = new services.SimpleChatClient(target, grpc.credentials.createInsecure());

  const user = await question('Digite seu nome para entrar no chat: ');
  users.add(user); // Adiciona o usuário atual à lista de usuários online

  const channel = client.chat();

  channel.on('data', function(data) {
    const isOwnMessage = data.getUser() === user;
    if (isOwnMessage) return;

    console.log(`(${data.getUser()} - ${data.getTimestamp()}): ${data.getText()}`);
    messagesHistory.push(`(${data.getUser()} - ${data.getTimestamp()}): ${data.getText()}`);
  });

  for (;;) {


    const text = await question("Mensagem> ");
    const message = new messages.ChatMessage();

    //Definindo objeto para enviar
    message.setUser(user);
    message.setText(text);  
    let options = { hour: '2-digit', minute: '2-digit', hour12: false };
    const timestamp = new Date().toLocaleString('pt-BR', options);
    message.setTimestamp(timestamp);
  

    if (text.startsWith('/users')) { // Comando para listar usuários online
      console.log("Usuários online: " + Array.from(users).join(', '));
    } else if (text.startsWith('/clear')) { // Comando para limpar o histórico de mensagens
      messagesHistory.length = 0;
      console.log("Histórico de mensagens limpo.");
    } else {
     //Escreve e manda pro server
      channel.write(message);
      //Registra no Historico do Cliente
      messagesHistory.push(`(USER: ${user}) - ${timestamp}): ${text}`);
    }
  }
}

main();
