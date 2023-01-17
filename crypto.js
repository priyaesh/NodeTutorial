const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("add your name",(input)=>{
    const encryptedName= crypto.createHmac("hsks",'lsls').update(input).digest('binary');
    console.log("EncryptedName  "+encryptedName);
   // rl.close();
})

rl.on('close',()=>{
    console.log('successful');
})