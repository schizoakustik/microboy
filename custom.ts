/**
 * Micro:boy
 */

enum Axis {
    //%block="x"
    x,
    //%block="y"
    y
}

//% weight=100 color=#0fbc11 icon=""
namespace microboy {
    /**
     * Read the position of the joystick
     * @param axis select x or y axis to read
     
     */
    //% block
    export function readJoystick(axis: Axis): void {
        // Add code here
    }
}
