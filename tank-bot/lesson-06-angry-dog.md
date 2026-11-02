# Tank Bot 6: Angry Dog — Distance and Sound

## Mission: Wake the robot dog! @showdialog

**Goal:** Make your EV3 react when someone approaches: quiet from far away, **growling** when near, and **laughing** when very close, just like our existing program.

**Learn:** ultrasonic distance, variables, nested decisions, thresholds, and pauses.

**You need:** an EV3 brick, speaker, and an ultrasonic sensor connected to **input port 3**. The motors are not used in this activity.

**Time:** about 25–40 minutes.

## Be a distance detective

The ultrasonic sensor measures distance in **centimeters**. In **Sensors**, choose the ultrasonic distance for **port 3**. Create a variable named `nearness` and display it using **Brick**.

```blocks
let nearness = 0
forever(function () {
    nearness = sensors.ultrasonic3.distance()
    brick.showValue("Distance (cm)", nearness, 1)
    pause(200)
})
```

Hold a book in front of the sensor. Try approximately **60 cm**, **40 cm**, and **15 cm**. Does the reading change in the direction you expected? Large, angled, or soft objects may give different measurements.

## Choose your dog's moods

Our dog has **three zones**:

- **50 cm or farther:** quiet.
- **25 cm to less than 50 cm:** growl.
- **Less than 25 cm:** laugh.

**Prediction:** At **20 cm**, should it growl or laugh? How about **35 cm**?

## Teach the dog to growl

In **Logic**, add `||logic:if then||`. Compare `nearness` with **50**. In **Music**, add the **dog growl** sound. Pause **1500 milliseconds** so the sound does not immediately repeat.

```blocks
let nearness = 0
forever(function () {
    nearness = sensors.ultrasonic3.distance()
    if (nearness < 50) {
        brick.showValue("Distance (cm)", nearness, 1)
        music.playSoundEffect(sounds.animalsDogGrowl)
        pause(1500)
        brick.clearScreen()
    }
})
```

Test with an object near **40 cm**, then move it away. Does the sound stop repeating when the object is far enough away?

## Add the VERY close rule

The **closer** rule must be checked first. Use `if` and `else`:

- If distance is **under 25**, play **laughing**.
- Otherwise, if distance is **under 50**, play **dog growl**.
- Otherwise, make **no sound**.

This version keeps the behavior of your original program; it only removes extra quotation marks from the display label.

```blocks
let nearness = 0
forever(function () {
    nearness = sensors.ultrasonic3.distance()
    if (nearness < 25) {
        brick.showValue("Distance (cm)", nearness, 1)
        music.playSoundEffect(sounds.expressionsLaughing1)
        pause(1500)
        brick.clearScreen()
    } else {
        if (nearness < 50) {
            brick.showValue("Distance (cm)", nearness, 1)
            music.playSoundEffect(sounds.animalsDogGrowl)
            pause(1500)
            brick.clearScreen()
        }
    }
})
```

## Test the three zones

Try **65 cm**, **40 cm**, and **15 cm**, one at a time. Keep your object in place long enough for the current sound and **1.5-second pause** to finish. The reading may not respond immediately during that pause.

**Question:** Why do we check `< 25` **before** `< 50`? Would swapping the checks change which sound plays at 20 cm?

## Challenge: Invent a new animal @showhint

Change **one** sound effect. Can you make the dog bark when very close, rather than laugh? Or create a fourth zone at a distance of your choice?

**Hint:** Test the most restrictive distance first, then progressively wider distances. Use one change at a time, and write down your prediction before testing.

## You did it!

You programmed one sensor to choose between **three behaviors**. That is the foundation of reactive robots and automated alarms.
