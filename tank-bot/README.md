A progressive EV3 Tank Bot series designed for children learning programming concepts through experiments.

**Hardware:** LEGO EV3 Tank Bot with two large drive motors on output ports B/C. Lesson 4 also uses a forward-facing ultrasonic sensor on input port 4; a downward-facing color sensor on port 3 is optional.

| Lesson | Goal | Key idea |
|---|---|---|
| [1. First Drive](lesson-01-first-drive.md) | Move after pressing UP | Events, motors, rotations |
| [2. Tank Turns](lesson-02-tank-turns.md) | Drive in curves and spin | Differential steering |
| [3. Drive a Square](lesson-03-drive-square.md) | Drive four sides | Loops, variables, calibration |
| [4. Escape the Maze](lesson-04-escape-the-maze.md) | Avoid obstacles in a simple maze | Sensors, `if/else`, feedback |

### Interactive tutorials (your BrickCode fork)

- [Lesson 1](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-01-first-drive)
- [Lesson 2](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-02-tank-turns)
- [Lesson 3](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-03-drive-square)
- [Lesson 4](https://gyslerc.github.io/pxt-ev3/#tutorial:https://github.com/gyslerc/ev3-coding-companions/tank-bot/lesson-04-escape-the-maze)

These links become usable after the files are committed to the public repository and the CDN cache has refreshed. Test in a fresh incognito session. The project relies on a fork of BrickCode with a temporary Microsoft tutorial API redirect.

### Reference solutions

The `solutions/` directory holds optional adult reference code. Do **not** add these files to the root `pxt.json` `files` array: the tutorials should start with an empty workspace and build up the solution interactively.

**Safety:** Use a clear floor area, low speeds, and adult supervision. The ultrasonic sensor is not a failsafe collision-avoidance system. Lesson 4's first strategy may get stuck in a maze.
