const battleBackgroundImage = new Image()
battleBackgroundImage.src = './src/images/battleBackground.png'
const battleBackground = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    image: battleBackgroundImage
})

const draggleImage = new Image()
draggleImage.src = './src/images/sprites/monsters/draggleSprite.png'
const draggle = new Sprite({
    position: {
        x: 800,
        y: 100
    },
    image: draggleImage,
    frames: {
        max: 4,
        hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Draggle'
})

const embyImage = new Image()
embyImage.src = './src/images/sprites/monsters/embySprite.png'
const emby = new Sprite({
    position: {
        x: 280,
        y: 325
    },
    image: embyImage,
    frames: {
        max: 4,
        hold: 30
    },
    animate: true,
    name: 'Emby'
})


const renderedSprites = [draggle, emby]
function animateBattle() {
    window.requestAnimationFrame(animateBattle)
    battleBackground.draw()

    renderedSprites.forEach((sprite) => {
        sprite.draw()
    })
}

animateBattle()

const queue = []

//event listeners for buttons
document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const selectedAttack = attacks[e.currentTarget.innerHTML]
        emby.attack({
            attack: selectedAttack,
            recipient: draggle,
            renderedSprites
        })

        queue.push(() => {
            draggle.attack({
                attack: attacks.Tackle,
                recipient: emby,
                renderedSprites
            })
        })
    })
})

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
    if (queue.length > 0) {
        queue[0]()
        queue.shift()
    } else e.currentTarget.style.display = 'none'

})