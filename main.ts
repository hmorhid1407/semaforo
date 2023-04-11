/**
 * S2A
 * 
 * Héctor Moreno Hidalgo
 * 
 * semáforo
 * 
 * R rojo 0
 * 
 * Y amarillo 1
 * 
 * G verde 2
 */
input.onButtonPressed(Button.A, function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        encender_las_leds(1, 0, 0)
    } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        encender_las_leds(0, 1, 0)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        encender_las_leds(0, 0, 1)
    } else {
        encender_las_leds(1, 0, 0)
    }
})
function encender_las_leds (P0: number, P1: number, P2: number) {
    pins.digitalWritePin(DigitalPin.P0, P0)
    pins.digitalWritePin(DigitalPin.P1, P1)
    pins.digitalWritePin(DigitalPin.P2, P2)
}
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        encender_las_leds(1, 0, 0)
        basic.pause(2000)
        encender_las_leds(0, 1, 0)
        basic.pause(2000)
        encender_las_leds(0, 0, 1)
        basic.pause(2000)
        encender_las_leds(1, 0, 0)
    }
})
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . # . #
    . # # # .
    # # # # #
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . # . .
    # # # # #
    # # # # #
    `)
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
