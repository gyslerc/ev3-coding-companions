motors.largeBC.tank(50, 50)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Red)
motors.largeBC.tank(100, 50)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Yellow)
motors.largeBC.tank(50, 100)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Red)
motors.largeBC.tank(50, 50)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Yellow)
motors.largeBC.tank(50, 100)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Red)
motors.stopAll()
forever(function () {
	
})
