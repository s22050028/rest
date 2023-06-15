enum RadioMessage {
    message1 = 49434
}
pins.servoWritePin(AnalogPin.P0, 10)
let strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.clearScreen()
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendMessage(RadioMessage.message1)
        pins.servoWritePin(AnalogPin.P0, 90)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playMelody("C5 - C5 - C5 - C5 - ", 200)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.clearScreen()
        pins.servoWritePin(AnalogPin.P0, 10)
    }
})
