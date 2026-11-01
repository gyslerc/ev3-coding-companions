// Tank Bot 4: Escape the Maze — reference solution (not auto-loaded).
// EV3: motors B and C, forward-facing ultrasonic sensor on port 4.
// This program uses a simple turn-right obstacle-avoidance policy.
// It is not a guaranteed general-purpose maze solver.

let exploring = false
let turnRotations = 0.4 // Calibrate for the actual Tank Bot and floor.

brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    exploring = true
})

brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    exploring = false
    motors.largeBC.stop()
})

forever(function () {
    if (exploring) {
        let distance = sensors.ultrasonic4.distance()
        brick.showValue("cm", distance, 1)

        if (distance <= 0) {
            // Stop if the sensor reports a nonpositive distance.
            motors.largeBC.stop()
            exploring = false
        } else if (distance < 25) {
            motors.largeBC.stop()
            motors.largeBC.tank(-20, -20, 0.2, MoveUnit.Rotations)
            motors.largeBC.tank(20, -20, turnRotations, MoveUnit.Rotations)
        } else {
            motors.largeBC.tank(20, 20)
        }
    } else {
        motors.largeBC.stop()
    }
    pause(100)
})
