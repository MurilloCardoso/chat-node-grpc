const grpc = require('@grpc/grpc-js');

// Generated stubs:
const services = require('./chat_grpc_pb');
const os = require('os');
const users = [];

function chat(call) {
    users.push(call);
    call.on('data', function(data) {
        console.log(`(${data.getUser()} - ${data.getTimeStamp()}): ${data.getText()}`);
        users.forEach(user => user.write(data));
    });
}

function main() { const networkInterfaces = os.networkInterfaces();

  var server = new grpc.Server();
  for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];
    for (const addressInfo of addresses) {
        if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
            console.log(`IP Address: ${addressInfo.address}`);
        }
    }
  }
  server.addService(services.SimpleChatService, {chat: chat});
  server.bindAsync('0.0.0.0:50000', grpc.ServerCredentials.createInsecure(), () => {
  console.log("Servidor On!")
    server.start();
  });
}

main();
