![Ludum logo](extra/logo_1.png)

Link to [**Ludum Game Engine Demo**](https://ElPolloLoco007.github.io/LudumGameEngine/)

### Games developed with Ludum Game Engine:

Link to [**flappy bird**](https://ElPolloLoco007.github.io/LudumFlappy/)

Link to [**dinosaur**](https://ElPolloLoco007.github.io/LudumDino/)

Link to [**tetris**](https://ElPolloLoco007.github.io/LudumTetris/) (developed in a 5 hour competition - !not finished!)

---

# How to use Ludum Game Engine

## Install Ludum game engine

### Requirements:

- vscode
- nodejs
- npm or yarn
- jest

### Installation:

Open terminal in vscode. Go to project folder via terminal and type:

- npm i
- npm start

## Structure

The folder structure in our game engine is like this.

- LudumGameEngine
  - .circleci (setup for continuous integration)
  - extra (diagram etc.)
  - HowTo (setup and help)
  - ~~node_modules (react library)~~
  - src
    - \_\_tests\_\_
    - game (demo)
    - gameEngine
      - components
      - entity.js
    - resource
      - images
      - audio
    - style (.css)
    - utils
  - packages and more

---

## Components

## Entity

All objects that the user wants to create get created via the Entity class.

The constructor of Entity takes these arguments:

- name
- body
- physics
- collisionDetection
- audioManager
- sprite
- imageRender

***Example of how to create a *Entity*:***

```
class Box {
  constructor(x, y, height, width) {
    this.entity = new Entity(
      "Ludum",
      new Body(this, x, y, height, width),
      new Physics(this, 10, -6),
      new CollisionDetection(this),
      null,
      null,
      new ImageRender(this, ResourceManager.getImagePath("logo.png"))
    );
  }
}
```

Entity has these methods. These methods return either the component or null.

- getEntity() returns entity
- getName() returns name of entity as a string
- getBody() returns body
- getPhysics() return physics
- getCollisionDetection() return CollisionDetection
- getAudioManager() returns audioManager
- getSprite() returns sprite
- getImgae() returns image
- getUpdate() updates body of entity through physics
- getEntityProps() returns the newest value in body and physics

## Body

Body class is the body of the entity.

The constructor of Body takes these arguments:

- entity
- left
- top
- height
- width

The body class contains only setters and getters for these parameters.

```
class Object {
  constructor() {
    this.entity = new Entity(
      "Object",
      new Body(this, 300, 540, 100, 100),
      }
}
```

**_Example of how to move the entity bird:_**

```
if (this.getBody().getTop() > 1040) {
      this.getBody().setTop(400);
      this.getBody().setLeft(300);
    }
```

## CollisionDetection

To check for collitionDectection use:

```
  checkForCollision(otherEntity)
```

**_Example of this can be:_**

```
let hasPlayerCollided = player
          .getCollisionDetection()
          .checkForCollision(this.state.playerArr[index].getEntity());
```

## Physics

Physics takes 3 arguments:

- entity
- left
- top

Physics has setters for these items, while getters for left and top.

Physics also has a update arrow function. This arrow function is used to update the physics of the object from old to new position.

This method is used in Entity update.

**_Example:_**

```
 placeholder[0].getPhysics()
.setTop(this.state.playerArr[0].getPhysics().getTop() * -1);
```

This example is about changing the vertical direction of an object with physics.

## AudioManager

**_example to use audioManager:_**

Object:

```
    new AudioManager([
        ResMan.getAudioPath("soundEffect1.mp3"),
        ResMan.getAudioPath("soundEffect2.mp3"),
        ResMan.getAudioPath("soundEffect3.mp3")
      ]),
    this.enum = {
      BIRD_JUMPS: 0,
      BIRD_SCORE: 1,
      BIRD_DIES: 2
};
```

Then if something happens:

```
object.getAudioManager().play(2); // testing!!!
```

## Sprite

The Sprite component has these variables:

- entity
- spriteSheet
- rows
- columns
- spriteHeight
- spriteWidth
- speed

**_Example how to use a 2x4 spritesheet in a entity:_**

```
new Sprite(this, ResourceManager.getSpritePath("birds.png"), 2, 4, 75, 75, 12)
```

To get this to work, you need to add:

```
getSprite() {
    return this.entity.getSprite();
  }
  // rendering this class
  // rendering this class
  render() {
    return this.getSprite().render(); // rendering sprite animation
  }
```

To the object file.

## ImageRender

To use ImageRender, simply add:

```
new ImageRender(this, ResourceManager.getImagePath("logo.png"))
```

To an entity.

**_Example:_**

```
class Box {
  constructor(x, y, height, width) {
    this.entity = new Entity(
      "Ludum",
      new Body(this, x, y, height, width),
      new Physics(this, 10, -6),
      new CollisionDetection(this),
      null,
      null,
      new ImageRender(this, ResourceManager.getImagePath("logo.png"))
    );
  }
```

To get this to work, you need to add:

```
 getImage() {
    return this.entity.getImage();
  }
  // rendering this class
  render() {
    return <span className="frame">{this.getImage().render()}</span>;
  }
```

To the object file.

## ResourceManager

To use the ResourceManager simply import the class and use it like this:

```
ResourceManager.getImagePath("background.png")
```

```
ResourceManager.getAudioPath("one.mp3")
```

```
ResourceManager.getSpritePath("birds.png")
```

The _ResourceManager_ uses a default paths:

- ../resources/image/
- ../resources/audio/
- ../resources/sprite/

You can change these paths in the _resourceManager_ file

## Background

To use the _Background_ component, simply add it to the component.

```
<Background
              height={1080}
              width={1920}
              speed={0.5}
              image={ResourceManager.getImagePath("background.png")}
            >
              {" "}
            </Background>{" "}
```

_Background_ contains _defaultProps_, so it is not needed to set _height_, _width_ and _speed_. To set a image you can either use the _ResourceManager_ or simply import a image.

## HUD

To use the HUD simply add the HUD component

```
<HUD score={this.state.score} position={"tc"} />{" "}
```

Where score is a score variable from the game.

## Menu

To use the menu, simply import the component into the file you want.

```
<Menu showMenu={this.state.showMenu}
```

Using _{this.state.showMenu}_ gives you the option of toggling it on and off, depending of a boolean $showMenu$.

To add more menu options, simply add more items into the _menuItems_, and use _handleClick(e)_ for the event.

## ScoreBoard

To use scoreboard simply add:

```
<ScoreBoard />
```

To get the score from the game, _context_ is recommended, as it is shown in the _flappy_ demo, since normally a _menuItem_ shows a scoreboard.

## Logger

To use the logger simply use:

```
Logger.setText("flappy.js", `score: ${this.state.score}`);
```

where first argument is the name of file and second argument is what you want to log.

Then you can add this to the game:

```
<LoggerManager />
```

---

### Ludum **ad infinitum**

Fróði H. **_Joensen_**, Bergur I. **_Johansen_**, Herborg **_Kristoffersen_**, Lív **_Olsen_**, Helgi **_Poulsen_**
