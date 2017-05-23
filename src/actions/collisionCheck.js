import Phaser from 'phaser'

export function mouseOverlap(target){
    return Phaser.Rectangle.contains( target.getBounds(), this.game.input.x, this.game.input.y)
}

export function bodyOverlap(target){
    return Phaser.Rectangle.intersects(this.getBounds(), target.getBounds())
}