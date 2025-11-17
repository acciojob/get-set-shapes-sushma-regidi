class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this._side = side; // optional, not required but fine
    }

    getPerimeter() {
        return this._side * 4;
    }
}

// 🔥 IMPORTANT — expose to window so Cypress can access them
window.Rectangle = Rectangle;
window.Square = Square;

