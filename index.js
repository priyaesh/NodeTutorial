const readline = require('readline');

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Whats your name ?",(ans)=>{
    if(ans==='priya'){
        console.log("Welcome " +ans);
        r1.close();
    }else{

    r1.setPrompt('Enter your name');
    r1.prompt();
    r1.on('Hi this is an event ',(inp)=>{
        if(inp==='priya'){
            console.log('Welcome back '+ans);
           r1.close();
        }
        else{
            r1.setPrompt("Sorry Next time");
            r1.prompt();
        }
    })
    }
})

r1.on('close',()=>{
    console.log(' correct!!!')
})