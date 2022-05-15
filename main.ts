input.onButtonPressed(Button.A, function () {
	
})
let nl = 2
for (let index = 0; index < nl; index++) {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . # . . #
        # . # . #
        . # . . #
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    basic.pause(2000)
    basic.clearScreen()
}
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.pause(2000)
basic.showString("FIN")
basic.forever(function () {
	
})
