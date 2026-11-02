# Tank Bot 8: Spooky Tank — Move in the Dark

## Mission: The lights are watching! @showdialog

**Goal:** Make your Tank Bot roll and laugh **in darkness**, then stop and play a power-down sound when light returns.

**Learn:** ambient light versus reflected light, `if/else`, variables that remember state, button events, and timing.

**You need:** Tank Bot large motors in **B and C**, color sensor in **input port 1**, and a clear space on the floor. The sensor is measuring **ambient light** (light in the room), not reflected light from a line.

**Time:** about 30–45 minutes. **Safety:** the robot can drive continuously in darkness. Use a small, clear test area and have a way to stop it. Never run this near stairs.

## Measure the room's light

Create a variable called `amblight`. Read the **ambient** light value from the color sensor on **port 1**, then show it on the brick.

```blocks
let amblight = 0
forever(function () {
    amblight = sensors.color1.light(LightIntensityMode.Ambient)
    brick.showNumber(amblight, 1)
    pause(100)
})
```

Measure in normal room light and then when you cover the sensor. **Prediction:** Does the number get larger or smaller when you cover it?

## Make the Tank Bot move only in darkness

Your original program uses the rule **`amblight > 0` means light**. It drives only when the reading is **exactly 0**. That is a very strict rule: in some rooms, the sensor may never show 0.

```blocks
let amblight = 0
forever(function () {
    amblight = sensors.color1.light(LightIntensityMode.Ambient)
    if (amblight > 0) {
        motors.stopAll()
    } else {
        motors.largeBC.tank(30, 30)
    }
})
```

**First test:** Lift the tracks clear of the floor, cover and uncover the sensor, and check that the motors stop as expected.

## Make the darkness sound spooky

When it is dark, add a laughing sound and then pause for **2000 milliseconds** (2 seconds). The pause stops the laugh from repeating too quickly.

```blocks
let amblight = 0
forever(function () {
    amblight = sensors.color1.light(LightIntensityMode.Ambient)
    if (amblight > 0) {
        motors.stopAll()
    } else {
        motors.largeBC.tank(30, 30)
        music.playSoundEffect(sounds.expressionsLaughing2)
        pause(2000)
    }
})
```

What happens if the light turns on **during** the 2-second pause? The program cannot make a new light-based decision until it goes around the loop again.

## Make the power-down sound play only once

The original program uses a variable named `x` as a **memory flag**:

- `x = 0`: the power-down sound has **not yet** played since the robot was dark.
- `x = 17`: the power-down sound **has** played; do not repeat it while the light stays on.

The number 17 is just a marker, not a motor speed or light measurement. When darkness returns, set `x` back to 0.

```blocks
let amblight = 0
let x = 0
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
```

**Question:** Without `x`, how many times would the power-down sound play while the room stays bright?

## Add the ENTER button

Your original program also displays the latest ambient-light measurement and laughs when you press **ENTER** on the EV3 brick. This is handy for debugging.

```blocks
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
```

## Challenge: Invent a better darkness threshold @showhint

If your sensor reads **3** when covered, the original rule `amblight > 0` will never let the robot move. Change it to something like `amblight > 5` and test again.

**Hint:** Measure first. Choose a threshold **between** your covered and uncovered values, just as you did in the line-following lesson. Keep the threshold adjustable so the robot works in different rooms.

**Bonus:** Can you replace the mysterious variable `x` with a more descriptive variable such as `powerDownPlayed`?

## You did it!

You used a sensor to change motor behavior and a **state variable** to remember whether an action already happened. That is a useful idea for alarms, games, and robots.
