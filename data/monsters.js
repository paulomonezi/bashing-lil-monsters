const monsters = {
    Emby: {
        position: {
            x: 280,
            y: 325
        },
        image: {
            src: './src/images/sprites/monsters/embySprite.png'
        },
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        name: 'Emby',
        attacks: [attacks.Tackle, attacks.Fireball]
    },

    Draggle: {
        position: {
            x: 800,
            y: 100
        },
        image: {
            src: './src/images/sprites/monsters/draggleSprite.png'
        },
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        attacks: [attacks.Tackle, attacks.Fireball]
    }
}

