let nearness = 0
forever(function () {
    nearness = sensors.ultrasonic3.distance()
    if (nearness < 25) {
        brick.showValue("\"Distance (cm)\"", nearness, 1)
        music.playSoundEffect(sounds.expressionsLaughing1)
        pause(1500)
        brick.clearScreen()
    } else {
        if (nearness < 50) {
            brick.showValue("\"Distance (cm)\"", nearness, 1)
            music.playSoundEffect(sounds.animalsDogGrowl)
            pause(1500)
            brick.clearScreen()
        }
    }
})
