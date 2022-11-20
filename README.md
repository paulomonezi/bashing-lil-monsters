# Bashing Li'l Monsters

Welcome, stay awhile and listen :)

<img src="./src/gifs/readme-map.gif" alt="gif showing the game map">
<br><br><br>
<img src="./src/gifs/readme-battle.gif" alt="gif showing the battle system">


## What is this project about?

It's about developing a _2d top-down game pokemon-like turn-based rpg_, from scrach. The main goal was pratice (a lot) of programming logic, solving a lot of problems and issues that i never had a chance to think about before, but all of this, in a fun way.

## How to play?
Use ASDW key to move around, explore the map and when you feel ready, step on the higher grass to encounter the battle.
Click on any attack to fight with your opponent
Have fun

## What i've used
- HTML Canvas
- Sass
- Javascript
- GSAP _to work with animation_
- howler.js _to work with sounds_

## Wich difficulties i've passed through?

The project was made literally from scrach, so, here we go:
#### - Learn how to work with spritesheets.
Spritesheets are pretty common on these kind of games, absolutely bread and butter. But was kinda challenging to think about how to render the character sprite properly, how to create boundaries on the edges of the map, and battlezones (aka high grass hehe).

#### - Make the whole map-battle-map transition
This one was quite hard at the beginning, transitioning from the map from a battle scene, was a little bit more complex than i though, stop all animations related to map and start to render a new scene, with new sprites, attacks and etc. 
Finishing the battle and back to the main map, making sure of restarting every single variable related to battles before we encounter another battle.

## What i've learned
All the above, i assume.<br>
And make scalable code, wich is a awesome time saving on the future.<br>
For example, if i want to add new attacks, i can just create a new animation, add the attacks properties on `attacks.js` and assign to any monster that i want. This is automatically populate the attack buttons when i've enter a battle, just awesome!

### Special Thanks
Huge special thanks to Chris, from https://chriscourses.com to teach me all the stuff i've learned on this project.<br>
You rock, Chris!

#### Yes, on battle ending, that is Victory Fanfare from FF VII!