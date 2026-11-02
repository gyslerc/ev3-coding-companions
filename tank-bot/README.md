A progressive EV3 Tank Bot series designed for children learning programming concepts through experiments.

**Hardware:** LEGO EV3 Tank Bot with two large drive motors on output ports B/C. Ultrasound and color sensors are used in some codes. The EV3 is hosted on a Tankbot built per instructions from LEGO. Additional color sensor and ultrasound sensors are mounted at the front of the tank. 

| Lesson | Goal | Key idea |
|---|---|---|
| [1. First Drive](lesson-01-first-drive.md) | Move after pressing UP | Events, motors, rotations |
| [2. Tank Turns](lesson-02-tank-turns.md) | Drive in curves and spin | Differential steering |
| [3. Drive a Square](lesson-03-drive-square.md) | Drive four sides | Loops, variables, calibration |
| [4. Red light yellow light](lesson-04-red-yellow-light.md) |  Red/yellow steering; challenge: loop forever | color sensing, loops |
| [5. Follow the line](lesson-05-follow-the-line.md) | Follow a dark line on a light background | Light sensor, bang-bang control, sensor threshold calibration|
| [6. Angry dog](lesson-06-angry-dog.md) | make a sound when something is near | ultrasound sensor, loops|
| [7. Spooky dark tank](lesson-07-spooky-dark-tank.md) | sneak around only in the dark  | ambient light sensor, loops, calibration|
| [8. Escape the Maze](lesson-08-escape-the-maze.md) | Avoid obstacles in a simple maze | Sensors, `if/else`, feedback |

### Interactive tutorials (your BrickCode fork)

- [Lesson 1](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-01-first-drive)
- [Lesson 2](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-02-tank-turns)
- [Lesson 3](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-03-drive-square)
- [Lesson 4](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-04-red-yellow-light)
- [Lesson 5](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-05-follow-the-line)
- [Lesson 6](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-06-angry-dog)
- [Lesson 7](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-07-spooky-dark-tank)
- [Lesson 8](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-08-escape-the-maze)

These links become usable after the files are committed to the public repository and the CDN cache has refreshed. Test in a fresh incognito session. The project relies on a fork of BrickCode with a temporary Microsoft tutorial API redirect.

### Reference solutions

**Safety:** Use a clear floor area, low speeds, and adult supervision. The ultrasonic sensor is not a failsafe collision-avoidance system. Lesson 8's first strategy may get stuck in a maze.
