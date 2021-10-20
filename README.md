node index.js

All code, and require() are executed.

Enters event loop.

##### Begin Event Loop Condition Check

    Do we still have work to do ?
    Any timers? OS Tasks ? Anything inside thread Pool ? Yes => continue. Else =>Exit()

##### Event Loop

    Run setTimeout, setInterval
    Run Callbacks for any tasks or threadpool
    Pause and wait for timeer/task to complete
    Run setImmediate
    Handle close/cleanup
    Repat Loop until False
