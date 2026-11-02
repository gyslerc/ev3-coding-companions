# Color Sorter 1: Sort One Piece at a Time

## Mission: A helpful color sorter! @showdialog

**Goal:** Adapt the basic LEGO EV3 color-sorter build so it sorts **one piece at a time**. The ultrasonic sensor notices a piece, the color sensor identifies it, the sorter positions itself, and you load the piece into the moving arm before it tips into the correct pile.

**Learn:** multiple sensors, homing, motor rotations, `if/else`, nested loops, `break`, and a timed human–robot handoff.

**You need:** the basic EV3 color-sorter build, **plus an ultrasonic sensor** positioned to detect the presented piece. Your program expects:

- **Input 1:** touch sensor at the sorter's **home position**.
- **Input 2:** ultrasonic sensor to notice that a piece is present.
- **Input 3:** color sensor aimed at the piece while it is being identified.
- **Output D:** large motor that moves the sorter between color positions.
- **Output A:** medium motor that tips and returns the carriage.

**Time:** about 45–60 minutes. **Safety:** keep fingers away from gearing, rotating arms, and the tipper. Check that the home switch stops motor D **before** the mechanism jams.

## Understand the new sorting game

Traditional sorter lessons may **scan several pieces first**, then sort that batch. This robot uses a different routine:

1. Move the rotating mechanism **home** until the touch sensor is pressed.
2. **Wait** for the ultrasonic sensor to notice a piece.
3. **Read** the color and rotate to that color's destination.
4. Give the human **5 seconds** to place the piece in the moving carriage.
5. **Tip** the carriage to dump the piece, then return it.
6. Start over from home for the **next single piece**.

**Prediction:** Why should the sorter go home between pieces?

## Test the three sensors

Before moving the mechanism, use the EV3 **Port View** to check the touch sensor in **port 1**, ultrasonic distance in **port 2**, and detected color in **port 3**. Make sure the ultrasonic and color sensors are looking at the **same presented piece**.

A quick optional color-display test:

```blocks
forever(function () {
    brick.showNumber(sensors.color3.color(), 1)
    pause(200)
})
```

Test **blue, red, yellow, and green** individually. Remove a piece before bringing up the next one.

## Find the home position

The touch switch gives the sorter a **known starting position**. Run motor **D** backward at **-50** while the touch switch is **not pressed**. Stop as soon as it is pressed.

```blocks
while (!(sensors.touch1.isPressed())) {
    motors.largeD.run(-50)
}
motors.largeD.stop()
```

**Safety test:** Run the motor without a piece and watch the mechanism. If it moves **away from** the home switch, stop and correct its direction before continuing. Make sure the switch is activated reliably without stalling the motor.

## Wait until a piece is presented

In **Sensors**, find the ultrasonic sensor on **port 2**. Use its **object near** event to pause until something is detected. Show the color number as a first check.

```blocks
sensors.ultrasonic2.pauseUntil(UltrasonicSensorEvent.ObjectNear)
brick.showNumber(sensors.color3.color(), 1)
```

The code **does not automatically load the piece into the moving carriage**. At this point the robot has only detected and identified the piece.

## Make four color decisions

Each recognized color sends the large motor **D** to a different rotation position at **50%** speed:

| Color | Motor D rotation from home |
|---|---:|
| Blue | 0.25 rotation |
| Red | 0.50 rotation |
| Yellow | 0.75 rotation |
| Green | 1.00 rotation |

**Important:** These are **motor rotations**, not degrees of the entire sorter. The correct pile positions depend on the build and gear train. Test each position with an **empty** carriage first.

Start with one case:

```blocks
if (sensors.color3.color() == ColorSensorColor.Blue) {
    brick.showString("blue", 2)
    music.playSoundEffect(sounds.colorsBlue)
    motors.largeD.run(50, 0.25, MoveUnit.Rotations)
}
```

Now use `||logic:if then else||` to add the other colors. The original routine has an inner `while (true)` loop: it only leaves this loop using **`break`** after a valid color has been recognized. For unrecognized colors, it uses **`continue`** to wait for another presentation.

```blocks
while (true) {
    sensors.ultrasonic2.pauseUntil(UltrasonicSensorEvent.ObjectNear)
    brick.showNumber(sensors.color3.color(), 1)
    if (sensors.color3.color() == ColorSensorColor.Blue) {
        brick.showString("blue", 2)
        music.playSoundEffect(sounds.colorsBlue)
        motors.largeD.run(50, 0.25, MoveUnit.Rotations)
        break;
    } else if (sensors.color3.color() == ColorSensorColor.Red) {
        brick.showString("red", 2)
        music.playSoundEffect(sounds.colorsRed)
        motors.largeD.run(50, 0.5, MoveUnit.Rotations)
        break;
    } else if (sensors.color3.color() == ColorSensorColor.Yellow) {
        brick.showString("yellow", 2)
        music.playSoundEffect(sounds.colorsYellow)
        motors.largeD.run(50, 0.75, MoveUnit.Rotations)
        break;
    } else if (sensors.color3.color() == ColorSensorColor.Green) {
        brick.showString("green", 2)
        music.playSoundEffect(sounds.colorsGreen)
        motors.largeD.run(50, 1, MoveUnit.Rotations)
        break;
    } else {
        continue;
    }
}
```

**Question:** Why does the robot not dump a piece immediately when the color is unknown?

## Give the human five seconds to load the carriage

After the sorter rotates, the user puts the recognized piece into the **moving carriage**. A `pause(5000)` gives you **5 seconds**. Then motor **A** tips backward for **1 second** at **-20**, pauses, and runs forward at **20** for **1 second** to return.

```blocks
// Wait for a person to put the piece into the carriage.
pause(5000)
motors.mediumA.run(-20, 1, MoveUnit.Seconds)
pause(1000)
motors.mediumA.run(20, 1, MoveUnit.Seconds)
pause(1000)
motors.mediumA.stop()
```

Before testing with a real piece, run the **tipper empty**. Adjust motor direction or duration if necessary to avoid mechanical collisions.

## Put the entire routine in a forever loop

The full program homes motor D, waits for a valid color, positions the sorter, pauses for loading, dumps the piece, and then returns to the home-finding step for the next piece.

```blocks
forever(function () {
    while (!(sensors.touch1.isPressed())) {
        motors.largeD.run(-50)
    }
    motors.largeD.stop()
    while (true) {
        sensors.ultrasonic2.pauseUntil(UltrasonicSensorEvent.ObjectNear)
        brick.showNumber(sensors.color3.color(), 1)
        if (sensors.color3.color() == ColorSensorColor.Blue) {
            brick.showString("blue", 2)
            music.playSoundEffect(sounds.colorsBlue)
            motors.largeD.run(50, 0.25, MoveUnit.Rotations)
            break;
        } else if (sensors.color3.color() == ColorSensorColor.Red) {
            brick.showString("red", 2)
            music.playSoundEffect(sounds.colorsRed)
            motors.largeD.run(50, 0.5, MoveUnit.Rotations)
            break;
        } else if (sensors.color3.color() == ColorSensorColor.Yellow) {
            brick.showString("yellow", 2)
            music.playSoundEffect(sounds.colorsYellow)
            motors.largeD.run(50, 0.75, MoveUnit.Rotations)
            break;
        } else if (sensors.color3.color() == ColorSensorColor.Green) {
            brick.showString("green", 2)
            music.playSoundEffect(sounds.colorsGreen)
            motors.largeD.run(50, 1, MoveUnit.Rotations)
            break;
        } else {
            continue;
        }
    }
    // Wait for a person to place the piece in the carriage.
    pause(5000)
    motors.mediumA.run(-20, 1, MoveUnit.Seconds)
    pause(1000)
    motors.mediumA.run(20, 1, MoveUnit.Seconds)
    pause(1000)
    motors.mediumA.stop()
})
```

## Test four pieces, one at a time

Use **one piece of each color**. For each piece, check whether the robot recognizes the color, moves to the expected pile, gives you time to load, dumps into the correct pile, and returns home.

**Keep a simple record:** Which colors worked? Was 5 seconds enough time? Did a motor stop in the right position? Remove the piece from the detection area after it is recognized so the next detection happens cleanly.

## Challenge: Improve the human–robot handoff @showhint

Can you replace the **5-second wait** with **3 seconds**, or show a countdown before the carriage tips? Make sure the person can remove their hand **before any motor moves**.

**Engineering challenge:** What happens if an ultrasonic object-near event happens but the color sensor sees no supported color? Think about how to avoid a loop that waits forever if an unrecognized piece is never removed and presented again.

## You did it!

You combined **three sensors**, **two motors**, a **home switch**, **color decisions**, and a **human loading step** to build a one-piece-at-a-time sorting machine.
