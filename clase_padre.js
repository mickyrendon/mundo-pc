// clase padre
class InputDevice{
    constructor(inputTipe, brand){
        this._inputTipe = inputTipe;
        this._brand     = brand;
    }
    get inputTipe(){
        return this._inputTipe;
    }
    set inputTipe(inputTipe){
        this._inputTipe = inputTipe;
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }

    toString(){
        return `
        entrada: ${this._inputTipe}
        marca: ${this._brand}
        `;
    }
}
// probando la clase inputDevice;
let input1 = new InputDevice('mouse', 'apple');
console.log(input1.toString());


// CLASES HIJAS

// clase mouse
class Mouse extends InputDevice{
    static counter = 0;

    constructor(inputTipe, brand){
        super(inputTipe, brand);
        this._idMouse = ++Mouse.counter;
    }
    toString(){
        return `
        id mouse: ${this._idMouse}, 
        entrada: ${this._inputTipe},
        marca: ${this._brand}
        `;
    }
}
let mouse1 = new Mouse('usb', 'giru');
console.log(mouse1.toString());
let mouse2 = new Mouse('hdmi', 'phantom');
console.log(mouse2.toString());

//clase keyboard
class Keyboard extends InputDevice{
    static counter = 0;

    constructor(input, brand){
        super(input, brand)
        this._idKeyboard = ++Keyboard.counter;
    }
    toString(){
        return `
        id teclado: ${this._idKeyboard}
        entrada: ${this._inputTipe}
        marca: ${this._brand}
        `;
    }
}

let keyboard1 = new Keyboard('usb', 'redragon');
console.log(keyboard1.toString());
let keyboard2 = new Keyboard('optico', 'hitachi');
console.log(keyboard2.toString());