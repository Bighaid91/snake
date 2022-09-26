let direction = 0
let snake_x = 0
let snake_y = 0
input.onButtonPressed(Button.A, function () {
    direction += 1
})
input.onButtonPressed(Button.AB, function () {
    snake_x = 0
    snake_y = 0
})
loops.everyInterval(500, function () {
    if (direction == 1) {
        basic.clearScreen()
        snake_x += 1
        snake_y += 0
    }
    if (direction == 2) {
        basic.clearScreen()
        snake_x += 0
        snake_y += 1
    }
    if (direction == 3) {
        basic.clearScreen()
        snake_x += -1
        snake_y += 0
    }
    if (direction == 4) {
        basic.clearScreen()
        snake_x += 0
        snake_y += -1
    }
    if (direction > 4) {
        basic.clearScreen()
        snake_x = 0
        snake_y = 0
        direction = 1
    }
    if (snake_x > 4 || snake_x < 0 || (snake_y > 4 || snake_y < 0)) {
        basic.clearScreen()
    }
    led.plot(snake_x, snake_y)
})
basic.forever(function () {
	
})
