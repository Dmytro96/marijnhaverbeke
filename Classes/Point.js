/**
 * Created by dmitry on 03.07.17.
 */

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    plus({x,y}) {
        this.x += x;
        this.y += y;
        return this
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)))
// → Point{x: 3, y: 3}