/**
 * Micro:boy
 */

enum Axis {
    //% block="x"
    X,
    //% block="y"
    Y
}
//% blockNamespace=microboy

//% weight=100 color=#0fbc11 icon="\uf11b"
namespace microboy {
    /**
     * Read the position of the joystick
     * @param axis select x or y axis to read
     
     */
    //% block
    export function readJoystick(axis: Axis): number {
        let p = [AnalogPin.P0, AnalogPin.P1]
        return pins.analogReadPin(p[axis])
    }
}
