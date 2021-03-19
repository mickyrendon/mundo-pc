// clase mouse
class Mouse{
    static counter = 0;

    constructor(){
        return this._idMouse = ++Mouse.counter;
    }
    toString(){
        return this._idMouse;
    }
}
let mouse1 = new Mouse();
console.log(mouse1.toString());
let mouse2 = new Mouse();
console.log(mouse2.toString());

//clase keyboard
class Keyboard{
    static counter = 0;

    constructor(){
        return this._idKeyboard = ++Keyboard.counter;
    }
    toString(){
        return this._idKeyboard;
    }
}

let keyboard1 = new Keyboard();
console.log(keyboard1.toString());
let keyboard2 = new Keyboard();
console.log(keyboard2.toString());