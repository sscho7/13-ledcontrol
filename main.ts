let a = 0
input.onButtonPressed(Button.A, function () {
    a = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(a)
        a += 1
    }
})
basic.forever(function () {
	
})
