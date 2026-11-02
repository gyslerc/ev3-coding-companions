forever(function () {
    motors.largeBC.steer(-50, 20)
    pauseUntil(() => sensors.color1.light(LightIntensityMode.Reflected) < 14)
    music.playSoundEffect(sounds.communicationGoodbye)
    motors.largeBC.steer(50, 20)
    pauseUntil(() => sensors.color1.light(LightIntensityMode.Reflected) > 14)
    music.playSoundEffect(sounds.communicationHello)
})
forever(function () {
    brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
})
