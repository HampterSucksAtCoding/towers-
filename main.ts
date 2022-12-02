namespace SpriteKind {
    export const Human = SpriteKind.create()
    export const Cow = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
}
function doSomething3 () {
    cow = sprites.create(img`
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .................................................
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        .........bbbbbbbbbbbb.......bbbbbbbbbbbbb........
        `, SpriteKind.Cow)
    cow.setPosition(50, 80)
    cow.say("some normal two towers")
}
sprites.onOverlap(SpriteKind.Asteroid, SpriteKind.Cow, function (sprite, otherSprite) {
    asteroid.startEffect(effects.fire)
    pause(1000)
    game.over(true)
})
function doSomething2 () {
    asteroid = sprites.createProjectile(sprites.vehicle.plane5, -10, 10, SpriteKind.Asteroid)
}
let asteroid: Sprite = null
let cow: Sprite = null
doSomething2()
doSomething3()
