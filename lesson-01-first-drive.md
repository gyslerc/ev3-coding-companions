# Tank Bot 1: First Drive

## Meet your Tank Bot! @showdialog

**Goal:** Make your Tank Bot move a short distance when you press the **UP** button on the EV3 brick.

**Learn:** motor ports, speed, rotations, and button events.

**You need:** your built Tank Bot, two large motors, the EV3 brick, and a clear space.

## Check the motor cables

Find the two cables that connect the track motors to your EV3 brick. For this lesson, connect them to **output ports B and C**. Does your robot have both large motors connected?

**Safety check:** Lift the tracks clear of the table or floor for your first test. Keep fingers and loose objects away from the tracks.

## Make a button start the motors

In **Brick**, find the `||brick:on button||` block. Set it to **UP** and **pressed**.

We will use UP rather than the center button so selecting the program doesn't intentionally start driving.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
})
```

## Add a Tank motor block

In **Motors**, place `||motors:tank large motors B+C||` inside the button event.

Set the left and right speeds to **30%**. Add the distance option and choose **1 rotation**. This is one *motor rotation*, not one full turn of the entire robot.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(30, 30, 1, MoveUnit.Rotations)
})
```

## Test with the tracks raised

Download your code to the EV3 brick. Open the program on the brick. With the tracks clear of the ground, press **UP** once.

**Look closely:** Do both tracks rotate? Do they stop after the motor has turned approximately one rotation?

If only one track moves, check the cable connections and the selected motor ports.

## Drive on the floor

Place the Tank Bot on a clear, level surface. Stand clear of the tracks and press **UP** once.

Does it move straight? If it moves backward, the physical motor/track direction may be opposite to our assumption. Make a note of the result before changing your program.

## Change one number

**Prediction:** What will happen if you change the two speeds from `30` to `50` but keep the distance at `1` rotation?

Change the numbers and test. Then restore both speeds to `30` and try `2` rotations.

**Question:** Which change mainly affects speed, and which mainly affects distance?

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(50, 50, 1, MoveUnit.Rotations)
})
```

## Challenge! @showhint

Make the Tank Bot drive **backward** for one motor rotation.

A negative speed reverses a motor. Try `-30` for **both** motors. Test with the tracks raised first.

```blocks
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    motors.largeBC.tank(-30, -30, 1, MoveUnit.Rotations)
})
```

## You did it!

You used a button **event** to tell two motors what to do. You also compared **speed** with **rotations**.

Next: **Tank Bot 2 — Turn Your Tank**.
