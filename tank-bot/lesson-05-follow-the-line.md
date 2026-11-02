# Tank Bot 5: Follow the Line

## Mission: Follow the edge! @showdialog

**Goal:** Make your Tank Bot follow a dark line on a lighter surface using the color sensor.

**Learn:** reflected light, calibration, thresholds, comparisons, steering, and `pause until`.

**You need:** Tank Bot with large drive motors in **B and C**, a downward-facing color sensor in **input port 1**, and a thick dark tape line on a light, flat floor or sheet.

**Time:** about 35–50 minutes. **Safety:** begin with the tracks raised; use a floor, not the edge of a table.

## Investigate light and dark

Before you code, use the **Port View** on the EV3 brick. Select the color sensor on **input port 1** and inspect **reflected light intensity** while holding the sensor at its usual driving height.

1. Put the sensor over the **light background**. Record the number.
2. Move it over the **dark line**. Record the number.
3. Repeat the measurements a few times.

On our robot, light was about **20** and dark was about **7**. Your numbers may be different because of lighting, height, and the surface.

**Prediction:** Should the dark line give a bigger number or a smaller number?

## Pick a number between light and dark

A **threshold** divides the light and dark readings. We measured **7** and **20**, whose midpoint is **13.5**. We will start with **14**.

- Reflected light **below 14**: probably **dark**.
- Reflected light **above 14**: probably **light**.

At exactly 14, neither of our strict tests (`< 14` and `> 14`) is true. The robot may briefly wait until the reading changes.

**Question:** Would `10` or `19` be a better threshold? Why?

## Show the sensor number

In **Loops**, add `||loops:forever||`. In **Sensors**, find reflected light intensity for the color sensor on **port 1**. In **Brick**, show the reading.

```blocks
forever(function () {
    brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
})
```

Download and run. Slide the line under the sensor. Check whether the values still look like **20** and **7** at the robot's driving height.

## Steer toward the dark line

In **Motors**, choose `||motors:steer||` for motors **B+C**. Set steering to **-50** and speed to **20**. Then tell the robot to wait until the sensor sees **dark**, meaning a reflected-light value below **14**.

```blocks
motors.largeBC.steer(-50, 20)
pauseUntil(() => sensors.color1.light(LightIntensityMode.Reflected) < 14)
```

**Test with the tracks raised.** Which track is faster? Which way would the robot curve on the floor?

## Now steer toward the light

After finding dark, steer the other way (**50**) until the sensor reads **above 14**. Put both moves in a `||loops:forever||` loop: the robot will search back and forth across the line's edge.

```blocks
forever(function () {
    motors.largeBC.steer(-50, 20)
    pauseUntil(() => sensors.color1.light(LightIntensityMode.Reflected) < 14)
    motors.largeBC.steer(50, 20)
    pauseUntil(() => sensors.color1.light(LightIntensityMode.Reflected) > 14)
})
```

**Important:** The robot follows an **edge** of the line, not necessarily its middle. If it wanders away, start closer to the correct edge or reverse the steering signs.

## Add the sound clues

Our original program plays **Goodbye** when it detects dark, and **Hello** when it detects light. It also keeps showing the reflected-light number in a **second `forever` loop**.

```blocks
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
```

**Run three trials:** First a straight line, then a gentle curve, then a different room light. Record what changed. If the robot turns the wrong way, check sensor placement and steering direction. If it loses the line at corners, try a slower speed.

## Challenge: Make it more reliable @showhint

Can you make your robot follow the line without making sounds? Then create a variable named `threshold` so you can change only **one number** when you recalibrate.

**Hint:** Replace each `14` with `threshold`, and set `threshold = 14` before the loops. Try values **12**, **14**, and **16** one at a time. Which produces the fewest mistakes?

## You did it!

You measured a real sensor, chose a threshold from your measurements, and built a **feedback loop**: sense, steer, sense again. Your robot will need recalibration on new surfaces.
