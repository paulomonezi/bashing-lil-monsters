# Bashing Li'l Monsters

_Languages:_ 
<br>
- Também disponível em pt-BR aqui 👉 [Aqui](https://github.com/paulomonezi/clashinglilmonsters/blob/main/README.ptBR.md)

<br><br>
Welcome, stay awhile and listen :)

<img src="./src/gifs/readme-map.gif" alt="gif showing the game map">
<br><br><br>
<img src="./src/gifs/readme-battle.gif" alt="gif showing the battle system">


## What is this project about?

It's about developing a _2d top-down game pokemon-like (gb/gba) turn-based_, from scrach. The main goal was pratice (a lot) of programming logic, solving a lot of problems and issues that i never had a chance to think about before, but all of this, in a fun way.

## How to Play?
-  **Link**: <br>
👉 https://paulomonezi.github.io/bashinglilmonsters/ <br><br>
-  **Commands**: <br>
Use ASDW key to move around, explore the map and when you feel ready, step on the higher grass (the darker one) to encounter the battle.<br>
Click on any attack to fight with your opponent<br><br>
- **Have Fun!**<br><br>

## Techs used
<<<<<<< HEAD
- Assets from https://itch.io/game-assets
- Tiled _to create map layers_
=======
>>>>>>> b134f69bfd5ab635f0fe74096b1a4be7c96b4064
- HTML Canvas
- Sass
- Javascript
- GSAP - _to work with animation_
- howler.js - _to work with sounds_
<br>
## Wich difficulties i've passed through?

The project was made literally from scrach, so, here we go:
#### - Learn how to work with spritesheets.
Spritesheets are pretty common on these kind of games, absolutely bread and butter. But was kinda challenging to think about how to render the character sprite properly, how to create boundaries on the edges of the map, and battlezones (aka high grass hehe).

#### - Make the whole map-battle-map transition
This one was quite hard at the beginning, transitioning from the map from a battle scene was a little bit more complex than i though, stop all animations related to map and start to render a new scene, with new sprites, attacks and etc. 
Finishing the battle and back to the main map, making sure of restarting every single variable related to battles before we encounter another battle.
GSAPjs lb was pretty useful here :D

## What i've learned
Besides those mentions up there.<br>
Make scalable and solid code, wich is a awesome time saving on the future.<br>
For example, if i want to add new attacks, i can just create a new animation, add the attacks properties on `attacks.js` and assign to any monster that i want. This is automatically populate the attack buttons when i've enter a battle, just awesome!

### Special Thanks
Huge special thanks to Chris, from https://chriscourses.com to teach me all the stuff i've learned on this project.<br>
Link to this tutorial: https://www.youtube.com/watch?v=yP5DKzriqXA <br>
You rock, Chris!

#### Yes, on battle ending, that is Victory Fanfare from FF VII!
<<<<<<< HEAD

### WIP
I'm still working on this project, planning to add more random wild encounters, plenty of attacks, effectiveness and etc.
=======
>>>>>>> b134f69bfd5ab635f0fe74096b1a4be7c96b4064
