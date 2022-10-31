const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

const playerImage = new Image()
playerImage.src = './src/images/sprites/player/playerDown.png'

const image = new Image()
image.src = './src/images/PelletTown.png'


image.onload = () => {
    c.drawImage(image, -735, -600)
    c.drawImage( //Those 4 first args determine the x, y axis from where to start and where to finish cropping the image (its a spritesheet, with four images)
        playerImage,
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        // Those 4 last args, determine the actual position of the player
        canvas.width / 2 - playerImage.width / 4 / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
    )
}


