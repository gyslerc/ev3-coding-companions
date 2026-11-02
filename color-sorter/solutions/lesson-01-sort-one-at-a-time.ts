forever(function () {
    while (!(sensors.touch1.isPressed())) {
        motors.largeD.run(-50)
    }
    motors.largeD.stop()
    while (true) {
        sensors.ultrasonic2.pauseUntil(UltrasonicSensorEvent.ObjectNear)
        brick.showNumber(sensors.color3.color(), 1)
        if (sensors.color3.color() == ColorSensorColor.Blue) {
            brick.showString("blue", 2)
            music.playSoundEffect(sounds.colorsBlue)
            motors.largeD.run(50, 0.25, MoveUnit.Rotations)
            break;
        } else if (sensors.color3.color() == ColorSensorColor.Red) {
            brick.showString("red", 2)
            music.playSoundEffect(sounds.colorsRed)
            motors.largeD.run(50, 0.5, MoveUnit.Rotations)
            break;
        } else if (sensors.color3.color() == ColorSensorColor.Yellow) {
            brick.showString("yellow", 2)
            music.playSoundEffect(sounds.colorsYellow)
            motors.largeD.run(50, 0.75, MoveUnit.Rotations)
            break;
        } else if (sensors.color3.color() == ColorSensorColor.Green) {
            brick.showString("green", 2)
            music.playSoundEffect(sounds.colorsGreen)
            motors.largeD.run(50, 1, MoveUnit.Rotations)
            break;
        } else {
            continue;
        }
    }
    // wait for user to place color into carriage
    pause(5000)
    motors.mediumA.run(-20, 1, MoveUnit.Seconds)
    pause(1000)
    motors.mediumA.run(20, 1, MoveUnit.Seconds)
    pause(1000)
    motors.mediumA.stop()
})
