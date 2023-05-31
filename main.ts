let bFunction = false
let aFunction = false
let elapsed = 0
let start = 0
input.onButtonPressed(Button.AB, function () {
    if (IsButtonHeld.held(5000, Button.AB)) {
        bFunction = true
        aFunction = false
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (aFunction) {
        elapsed = input.runningTime() - start
        basic.clearScreen()
        basic.showNumber(elapsed, 90)
    }
})
basic.forever(function () {
    if (IsButtonHeld.held(3000, Button.A)) {
        aFunction = true
        bFunction = false
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(randint(1000, 5000))
        start = input.runningTime()
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
})
