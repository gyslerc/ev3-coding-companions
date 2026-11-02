# Tank Bot 7: Red and Yellow Light — Color-Controlled Driving

## Mission: Drive by color! @showdialog

**Goal:** Make your Tank Bot change direction whenever it crosses a **red** or **yellow** floor marker, then stop at the final red marker.

**Learn:** color detection events, motor-speed differences, sequences, and the difference between repeating steps and a `forever` loop.

**You need:** Tank Bot motors on **B and C**, downward-facing color sensor on **input port 3**, and red and yellow markers that the sensor can recognize.

**Time:** about 30–45 minutes. **Safety:** the original program uses **100%** on one motor; test with tracks raised first, then lower both speeds for floor testing if needed. Keep the robot away from stairs or table edges.

**Note:** Despite the original filename, this version responds to **red and yellow**, not green. Red and yellow **change steering**; red does not automatically mean stop until the final marker.

## See the colors

Open the EV3 brick's **Port View** for the color sensor on **port 3**, or use a short test program to display the detected color number:

```blocks
forever(function () {
    brick.showNumber(sensors.color3.color(), 1)
})
```

Move the sensor above the **red** and **yellow** markers at its driving height. If a marker is not recognized reliably, try more saturated colors and steadier lighting.

## Start driving straight

In **Motors**, choose `||motors:tank||` for the large motors **B+C**. When the motors have equal speeds, the Tank Bot should move approximately straight.

```blocks
motors.largeBC.tank(50, 50)
```

For a first floor test, you may lower **both** speeds to **20** without changing the idea of the lesson.

## Wait for a red marker

Use the sensor block to **pause until red is detected**. When the red marker passes under the sensor, change the speeds so that one track moves faster than the other.

```blocks
motors.largeBC.tank(50, 50)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Red)
motors.largeBC.tank(100, 50)
```

**Prediction:** Which way will the Tank Bot curve when one track moves at 100 and the other at 50? Observe with the tracks raised before testing on the floor.

## Wait for yellow and turn the other way

After seeing red, wait for **yellow**. Swap which motor is faster.

```blocks
motors.largeBC.tank(50, 50)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Red)
motors.largeBC.tank(100, 50)
sensors.color3.pauseUntilColorDetected(ColorSensorColor.Yellow)
motors.largeBC.tank(50, 100)
```

**Test:** Put red and yellow markers **far enough apart** for the sensor to leave one color before finding the next. What happens if the robot never reaches yellow?

## Build the complete marker sequence

Your original program waits for **red, yellow, red, yellow, red**. It changes speeds after each detection, and finally stops all motors.

```blocks
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
```

The original file also has an **empty `forever` loop** afterward. It does not add any driving behavior, so we leave it out of the lesson.

## Challenge: Can you make it run forever? @showhint

Instead of writing out red and yellow detection over and over, use **one** `||loops:forever||` loop. Challenge yourself to make the Tank Bot keep responding to an **unlimited sequence** of red and yellow markers.

**Hint:** Start driving before the `forever` loop. Put these four instructions **inside** the loop: wait for red; steer one way; wait for yellow; steer the other way.

```blocks
motors.largeBC.tank(30, 30)
forever(function () {
    sensors.color3.pauseUntilColorDetected(ColorSensorColor.Red)
    motors.largeBC.tank(40, 20)
    sensors.color3.pauseUntilColorDetected(ColorSensorColor.Yellow)
    motors.largeBC.tank(20, 40)
})
```

The challenge version uses **lower speeds**. Unlike the original finite sequence, it **does not stop at the fifth marker**. Be ready to stop the program on the EV3 brick, or add a separate stop control as a later project.

## You did it!

You built a robot that **waits for a sensor event** before changing its behavior. You also saw how a `forever` loop replaces a long, fixed sequence when a task needs to repeat indefinitely.
