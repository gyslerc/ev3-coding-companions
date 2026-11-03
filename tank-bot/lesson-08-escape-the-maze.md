# Tank Bot 4: Escape the Maze

## Mission: Escape the maze! @showdialog

**Your mission:** Build a maze from books and boxes. Program your Tank Bot to explore it **without crashing**. When the robot sees an obstacle, it must stop, back up, and turn to find another way.

**Learn:** sensor readings, `if`/`else` decisions, a `forever` loop, variables, and testing a strategy.

**Time:** about 40–60 minutes. **Challenge:** reach a red finish marker using your color sensor.

## Build your maze

Make an **easy first maze** with books or sturdy cardboard boxes on the floor. Leave corridors much wider than the robot. Use a flat floor, not a tabletop.

Point your ultrasonic sensor **straight ahead**, not toward a side wall. Connect it to **input port 4**. Connect the two large track motors to **output ports B and C**. The optional downward-facing color sensor uses **input port 3**.

**Safety:** Start with both tracks raised. When testing on the floor, use **20%** motor speed and keep a hand nearby to stop the robot or lift it clear. Stay away from stairs, pets, and breakable objects.

## Be a distance detective

The ultrasonic sensor measures how far away an object is, in **centimeters**.  We would like to display the distance in cm on line 1 of your screen. 
<br>
<br>
From **Loops**, add a `||loops:forever||` block. 
In **Brick**, add `||brick:show value||`. 
In **Sensors**, find ultrasonic distance for **port 4**. 
<br>
You can store the distance measured in a variable by creating a new `||variables:Make|` called "distance".
How frequently does the distance value get updated? We can set a `||loops:pause||` to slow down the frequency of update. 
For now you can set it to 100ms. Think about how the update rate impacts your program?

```blocks
forever(function () {
    let distance = sensors.ultrasonic4.distance()
    brick.showValue("cm", distance, 1)
    pause(100)
})
```

Download and run your program with the tracks raised. Hold a book in front of the sensor: what happens to the number when you move the book closer? Try **40 cm**, **25 cm**, and **15 cm**.

## Choose your danger distance

Imagine an invisible safety bubble around your robot. Our first rule is:

**If an obstacle is closer than 25 cm, stop. Otherwise, move forward.**

Why not wait until 5 cm? The robot needs room to stop and turn. Predict how a change to **35 cm** would affect its behavior.

## Add START and STOP buttons

When Exploring, we would like to update the distance measurement and display it on the screen. 
If we are stopped, we would like to stop moving the tank bot.
<br>
Create a variable named `exploring`, set initially to`false`. Pressing **UP** changes it to `true`. Pressing **DOWN** changes it to `false` and stops the motors.
To stop the motors use  `||motors:stop:largeBC||`.
```blocks
let exploring = false
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    exploring = true
})
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    exploring = false
    motors.largeBC.stop()
})
forever(function () {
    if (exploring) {
        let distance = sensors.ultrasonic4.distance()
        brick.showValue("cm", distance, 1)
    } else {
        motors.largeBC.stop()
    }
    pause(100)
})
```

**Question:** Why is it helpful to start only when we press a button?

## Make your first decision

Inside the `||loops:forever||` loop, use `||logic:if then else||`. Check `distance` each time around the loop.

- If the sensor reads **0 or less**, stop; that reading may be invalid.
- If the distance is **less than 25 cm**, stop.
- Otherwise, drive both tracks at **20%**. Use `||motors:Tank:motors:large||`

```blocks
let exploring = false
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    exploring = true
})
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    exploring = false
    motors.largeBC.stop()
})
forever(function () {
    if (exploring) {
        let distance = sensors.ultrasonic4.distance()
        brick.showValue("cm", distance, 1)
        if (distance <= 0) {
            motors.largeBC.stop()
            exploring = false
        } else if (distance < 25) {
            motors.largeBC.stop()
        } else {
            motors.largeBC.tank(20, 20)
        }
    } else {
        motors.largeBC.stop()
    }
    pause(100)
})
```

**Test:** Put a box in front of the robot, then press UP. Does it stop *before* touching the box? If not, use a larger distance or a lower speed.

## Teach the Tank Bot to turn

Stopping is useful, but explorers need another direction. When the obstacle is closer than **25 cm**, stop and spin right using the `||motors:Tank:motors:largeBC||` block.

Try **20** for the left track and **-20** for the right track, for **0.4 rotations**.

```blocks
motors.largeBC.stop()
motors.largeBC.tank(20, -20, 0.4, MoveUnit.Rotations)
```

**Test with the tracks raised first.** A robot's body turning 90 degrees is not the same as a motor turning 0.4 rotations. Adjust the number until your Tank Bot turns roughly one quarter turn. Your track orientation might require swapping the signs.

## Add the turn to your decision

Put the turn command after `||motors:stop||`, inside the `distance < 25` branch.

```blocks
let exploring = false
let turnRotations = 0.4
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    exploring = true
})
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    exploring = false
    motors.largeBC.stop()
})
forever(function () {
    if (exploring) {
        let distance = sensors.ultrasonic4.distance()
        brick.showValue("cm", distance, 1)
        if (distance <= 0) {
            motors.largeBC.stop()
            exploring = false
        } else if (distance < 25) {
            motors.largeBC.stop()
            motors.largeBC.tank(20, -20, turnRotations, MoveUnit.Rotations)
        } else {
            motors.largeBC.tank(20, 20)
        }
    } else {
        motors.largeBC.stop()
    }
    pause(100)
})
```

Try the robot in an **open area with one box**, before trying the maze. Can it notice the box and turn? If the robot gets too close while spinning, move the safety threshold farther away.

## Give yourself more room

A tank may need to back away from a wall before turning. Add a short backward movement **before** the turn:

```blocks
let turnRotations = 0.4
motors.largeBC.stop()
motors.largeBC.tank(-20, -20, 0.2, MoveUnit.Rotations)
motors.largeBC.tank(20, -20, turnRotations, MoveUnit.Rotations)
```

Start with **0.2 rotations backward**. Predict what happens if you use 0.4 instead. Check behind the robot before testing this step.

## Explore the maze!

Now use your complete obstacle-avoidance strategy. Replace `turnRotations` with your own calibrated number if needed.

```blocks
let exploring = false
let turnRotations = 0.4
brick.buttonUp.onEvent(ButtonEvent.Pressed, function () {
    exploring = true
})
brick.buttonDown.onEvent(ButtonEvent.Pressed, function () {
    exploring = false
    motors.largeBC.stop()
})
forever(function () {
    if (exploring) {
        let distance = sensors.ultrasonic4.distance()
        brick.showValue("cm", distance, 1)
        if (distance <= 0) {
            motors.largeBC.stop()
            exploring = false
        } else if (distance < 25) {
            motors.largeBC.stop()
            motors.largeBC.tank(-20, -20, 0.2, MoveUnit.Rotations)
            motors.largeBC.tank(20, -20, turnRotations, MoveUnit.Rotations)
        } else {
            motors.largeBC.tank(20, 20)
        }
    } else {
        motors.largeBC.stop()
    }
    pause(100)
})
```

**Run three trials.** Did the robot reach the other side? Did it get stuck making the same turn over and over? This strategy **avoids obstacles**, but it doesn't guarantee escape from every maze.

## Challenge: Make a smarter explorer! @showhint

Your robot always turns right. Can you create a variable `turnRight` that alternates between `true` and `false` whenever an obstacle is found? The next time it gets blocked, it can try the other direction.

```blocks
let turnRight = true
let turnRotations = 0.4
if (turnRight) {
    motors.largeBC.tank(20, -20, turnRotations, MoveUnit.Rotations)
} else {
    motors.largeBC.tank(-20, 20, turnRotations, MoveUnit.Rotations)
}
turnRight = !turnRight
```

**Parent hint:** Add these lines *in place of* the fixed right-turn command inside the obstacle branch, with `turnRight` created before the loop. They are a hint, not a second program to run on their own.

**Question:** Is alternating turns better than always turning right? Try each strategy three times.

## Bonus mission: Find the red exit! @showhint

If your color sensor points down and is plugged into **port 3**, place a wide **red** paper marker near the exit. Test first that your sensor recognizes it as red.

Before the ultrasonic distance decision, check for the red marker:

```blocks
let exploring = true
if (sensors.color3.color() == ColorSensorColor.Red) {
    exploring = false
    motors.largeBC.stop()
    brick.showString("MAZE ESCAPED!", 2)
} else {
    // Put the ultrasonic distance decision here.
}
```

When you add this, keep the ultrasonic decision **inside the `else`** so the robot does not start driving again after finding red. This snippet is an optional extension, not a complete separate program.

## Mission complete!

You built a simple robot explorer using a **sensor**, a **variable**, a **decision**, and a **loop**.

**Engineering questions:** What happened when you moved the boxes? Which safety distance worked best? Why does a robot need to measure again after turning?

**Next project idea:** Add a sensor-scanning strategy so the robot can compare two possible directions *before* choosing a turn.
