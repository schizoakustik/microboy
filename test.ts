basic.forever(function () {
    basic.showString("x")
    basic.showNumber(microboy.readJoystick(Axis.X))  
    basic.pause(1000)
    basic.showString("y")
    basic.showNumber(microboy.readJoystick(Axis.Y))  
    basic.pause(1000)
})
