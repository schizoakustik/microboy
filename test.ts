pins.analogWritePin(AnalogPin.P0, 1)
basic.showNumber(microboy.readJoystick(Axis.X))  
pins.analogWritePin(AnalogPin.P1, 1024)
basic.showNumber(microboy.readJoystick(Axis.Y))  
