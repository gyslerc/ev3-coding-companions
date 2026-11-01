# Tank Bot 3: Drive a Square

## Can a robot draw a square? @showdialog

**Goal:** Make your Tank Bot travel around a square-shaped route.

**Learn:** sequences, loops, variables, and calibration.

**You need:** the built Tank Bot with large motors on B and C, an open floor, four removable corner markers, and Lesson 2 experience.

## Make one straight side

Use an **UP** button event and a `||motors:tank||` block to drive both motors **1 rotation** at **30%** speed.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
})
```

## Add one spin turn

After the straight-drive block, add a second `||motors:tank||` block.

Try speeds **30** and **-30** for **0.4 rotations**. The correct value for a 90-degree body turn depends on your robot and surface.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
    motors.largeBC.tank(30, -30, 0.4, MoveUnit.Rotations)
})
```

## Calibrate your turn

Test the robot. Did it turn **90 degrees**, less, or more?

Change **0.4** to a larger or smaller number until you get close to a right angle. Test several times.

**Keep your best number.** We will call it `turnRotations`. For now, the example still shows 0.4; replace it with your own measurement.

## Repeat the pattern four times

A square has **four sides** and **four corners**. From **Loops**, put a `||loops:repeat||` block inside the UP button event.

Move the straight-drive and spin-turn commands into the repeat block. Set the loop to repeat **4** times.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
        motors.largeBC.tank(30, -30, 0.4, MoveUnit.Rotations)
    }
})
```

## Use a variable for the turn

Create a variable called `turnRotations`. Set it to **your calibrated number** before the button event. Replace the number in the spin-turn block with your variable.

The example uses 0.4 as a placeholder. Your value may differ.

```blocks
let turnRotations = 0.4
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
        motors.largeBC.tank(30, -30, turnRotations, MoveUnit.Rotations)
    }
})
```

## Check the square

Place four removable floor markers where you expect the corners to be. Download, run, and press **UP**. Keep clear of the moving robot.

- Is each side approximately straight?
- Does the robot turn close to 90 degrees at each corner?
- Does it return close to its starting position and direction?

If not, try adjusting **turnRotations** and retesting. Tracks may slip, so perfect accuracy is not expected.

## Challenge: a rectangle! @showhint

Can you make a **rectangle** instead of a square? One approach is to use different drive distances on alternating sides.

You may start by experimenting with the block sequence before introducing any new variables.

## You did it!

You used a **loop** to repeat a **drive-and-turn sequence**, and a **variable** to store a measurement.
