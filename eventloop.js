// node myFile.js

const pendingTimers=[];
const pendingOSTask=[];
const pendingOperations=[];

//New Timers, tasks, operations are recorded from myFile running.
myFile.runContents();

function shouldContinue(){
    // Check#1: Any pending setTimeout, setInterval, setImmediate ?

    // Check#2:Any pending OS tasks? (Ex: listening to a port)

    // Check#3: Any pending long running operations ?  (Like fs module reading HDD)

    return pendingTimers.length || pendingOSTask.length || pendingOperations.length; 
}
//one iteration = one tick
while(shouldContinue()){

    // #1 Node looks at pendingTimers and sees if any functions
    // are ready to be called. setTimeout, setInterval

    //# 2 Node looks at pendingOSTasks and pendingOperations and 
    // calls relevant callbacks

    //# 3 Pauses execution.  Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperation is done
    // -a timer is about to complete

    //# 4  Look at pendingTimers. Call any setImmediate

    //# 5  Handle any 'close' events. (Cleanup code like closing streams)
}

// exit back to terminal

