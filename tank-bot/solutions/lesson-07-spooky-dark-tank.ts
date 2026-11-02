let amblight = 0
let x = 0
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.showNumber(amblight, 1)
    music.playSoundEffect(sounds.expressionsLaughing2)
})
x = 0
forever(function () {
    amblight = sensors.color1.light(LightIntensityMode.Ambient)
    if (amblight > 0) {
        motors.stopAll()
        if (x == 0) {
            music.playSoundEffect(sounds.systemPowerDown)
            x = 17
        }
    } else {
        motors.largeBC.tank(30, 30)
        music.playSoundEffect(sounds.expressionsLaughing2)
        x = 0
        pause(2000)
    }
})
