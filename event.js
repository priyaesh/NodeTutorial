const events =require('events');

const myEmitter=new events.EventEmitter();



myEmitter.addListener('listener',()=>{
    console.log('This is my new listerner');
})
setTimeout(()=>{
    myEmitter.emit("listener");
},2000)
