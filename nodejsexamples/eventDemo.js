var events=require('events'); //importing modules
var eventEmitter=new events.EventEmitter();

//Create Handler function
var sayHello=function(){
    console.log('hello world...!!')
}

//create event and then associate this event with handler function
eventEmitter.on('greet', sayHello);//greet is the custom event and it will funcction sayHello
//you can use addlistener instead of on also, eventEmitter.addListener()

//eventEmitter.removeListener('greet', sayHello);
//event fire
// eventEmitter.emit('greet');
// eventEmitter.emit('greet');
// eventEmitter.emit('greet');

var sayHelloTo=function(fname){
    console.log('hello world...!!  '+fname);
}

eventEmitter.once('greet',sayHelloTo);

//eventEmitter.addListener('greet',sayHelloTo);
//eventEmitter.emit('greet','sam');
//eventEmitter.emit('greet','sam');

eventEmitter.on('greet1',sayHello);
eventEmitter.on('greet1',sayHelloTo);
eventEmitter.on('greet1',sayHello);
eventEmitter.emit('greet1','tusar')
//here greet1 is the listener and sayHello is the event
console.log(eventEmitter.listenerCount('greet1'));