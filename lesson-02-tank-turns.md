# Tank Bot 2: Turn Your Tank

## Ready to turn? @showdialog

**Goal:** Turn your Tank Bot by making the two tracks move differently.

**Learn:** differential steering, spin turns, and gentle curves.

**Before you start:** Complete Lesson 1, connect the large track motors to B and C, and choose a clear area.

## Remember straight driving

Place a `||brick:on button||` event for the **UP** button. Inside, add the `||motors:tank||` block. Set **both** motor speeds to **30%** and the distance to **1 rotation**.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
})
```

## Make a spin turn

A tank can turn in place when its tracks move in **opposite directions**.

Replace the straight-drive command with speeds **30%** and **-30%**. Start with **0.4 motor rotations**. This is an experiment, not a guaranteed 90-degree turn.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(30, -30, 0.4, MoveUnit.Rotations)
})
```

## Test the spin

Download and run your program. Stand clear and press **UP**.

Which way did the robot turn? Approximately how many **degrees** did the robot's body rotate?

A motor rotation and a robot turning angle are different quantities. Tracks can also slip on the surface.

## Make a gentle curve

Try **30%** on one track and **10%** on the other track. This makes both tracks move forward, but at different speeds.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(30, 10, 1, MoveUnit.Rotations)
})
```

## Predict and compare

Try these three motor-speed combinations, one at a time:

- **30, 30**: straight (if your motors are oriented consistently).
- **30, 10**: curved path.
- **30, -30**: spin in place.

**Question:** What changes when the speeds have different magnitudes? What changes when the signs differ?

## Challenge: turn the other way @showhint

Can you reverse the direction of your spin *without* turning the robot around by hand?

Swap the two speed signs. Start with the tracks raised for safety.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(-30, 30, 0.4, MoveUnit.Rotations)
})
```

## You did it!

You programmed **straight driving**, **curves**, and **spin turns** using the same two motors.

Next: **Tank Bot 3 — Drive a Square**.
