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
        marca  : ${this._brand}
        `;
    }
}
// probando la clase inputDevice;
let input1 = new InputDevice('mouse', 'apple');
console.log(input1.toString());

/////////////////////////////////////////////////////

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
        entrada : ${this._inputTipe},
        marca   : ${this._brand}
        `;
    }
}
let mouse1 = new Mouse('usb', 'giru');
console.log(mouse1.toString());
let mouse2 = new Mouse('hdmi', 'phantom');
console.log(mouse2.toString());
let mouse3 = new Mouse('optica', 'apple');
let mouse4 = new Mouse('bluetooth', 'asus');
let mouse5 = new Mouse('usb', 'xperia');


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
        entrada   : ${this._inputTipe}
        marca     : ${this._brand}
        `;
    }
}

let keyboard1 = new Keyboard('usb', 'redragon');
console.log(keyboard1.toString());
let keyboard2 = new Keyboard('optico', 'hitachi');
console.log(keyboard2.toString());
let keyboard3 = new Keyboard('usb', 'casio');
let keyboard4 = new Keyboard('jacks', 'rino');
let keyboard5 = new Keyboard('inalambrico', 'xgame');

/////////////////////////////////////////////////////////////

// CLASE MONITOR
class Monitor{
    static counter = 0;

    constructor(brand, size){
        this._idMonitor = ++Monitor.counter;
        this._brand     = brand;
        this._size      = size;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }
    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }

    toString(){
        return  `
        id monitor   : ${this._idMonitor}, 
        Marca        : ${this._brand}, 
        tamano       : ${this._size}
        `;
    }
}

let monitor1 = new Monitor('lenovo', '16 pulgadas');
console.log(monitor1.toString());
let monitor2 = new Monitor('dell', '13 pulgadas');
console.log(monitor2.toString());
let monitor3 = new Monitor('asus', '15 pulgadas');
console.log(monitor3.toString());
let monitor4 = new Monitor('sony', '10 pulgadas');
let monitor5 = new Monitor('samsung', '18 pulgadas');

////////////////////////////////////////////////////////
// CLASE COMPUTER
// esta clase es para unificar todas las anteriores y asi mostrar los datod detallados de cada id
class Computer{
    static counter = 0;
// parametros para inicializar los atr de las otras clases por medio de agregacion
    constructor(name, monitor, keyboard, mouse){
        this._idCompu  = ++Computer.counter;
        // atributos de las otras clases/ relacion de agregacion
        this._name     = name; 
        this._monitor  = monitor;
        this._keyboard = keyboard; 
        this._mouse    = mouse;
    }
    get idCompu(){
        return this._idCompu;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get keyboard(){
        return this._keyboard;
    }
    set keyboard(keyboard){
        this._keyboard = keyboard;
    }
    get mouse(){
        return this._mouse;
    }
    set mouse(mouse){
        this._mouse = mouse;
    }

    toString(){
        return `
        id compu: ${this._idCompu}: ${this._name}\n
        monitor  : ${this._monitor}\n
        teclado  : ${this._keyboard}\n
        raton    : ${this._mouse}\n
        `;
    }
}
//usando los objetos de cada id para mostrar una tabla detallada
let compu1 = new Computer('lenovo', monitor1, keyboard1, mouse1);
console.log(compu1.toString());

let compu2 = new Computer('hp', monitor2, keyboard2, mouse2);
console.log(compu2.toString());

let compu3 = new Computer('sony', monitor3, keyboard3, mouse3);
console.log(compu3.toString());

let compu4 = new Computer('apple', monitor4, keyboard4, mouse4);
console.log(compu4.toString());

let compu5 = new Computer('samsung', monitor5, keyboard5, mouse5);
// usando template string en vez de usar el metodo toString, funcionan igual...
console.log(`${compu1}`);

console.log(Computer.counter);

/////////////////////////////////////////////////////
// CLASE ORDEN
class Order{
    static counter = 0;

    constructor(){
        this._idOrder = ++Order.counter;
        this._computers  = [];
    }

    get idOrder(){
        return this._idOrder;
    }
// metodo para recorrer o pushear el array/ permite relacionar la clase order con la clase computadoras
    addComputers(computer){
        this._computers.push(computer);
    }
// equivalente a toString
    showOrders(){
        let compuOrders = '';
        for(let i of this._computers){
            compuOrders += `\n ${i}`;
        }
        console.log(`orden: ${this._idOrder}, computadoras: ${compuOrders}`);
        return compuOrders;
    }

}

let order1 = new Order();
// agregando objetos a la orden por medio del metodo addcomputer/ tambien se pueden crear nuevos objetos con nuevo contenido
order1.addComputers(compu1);
order1.addComputers(compu5);
order1.showOrders()

let order2 = new Order();
order2.addComputers(compu2);
order2.addComputers(compu3);
order2.addComputers(compu2);
order2.addComputers(compu4);
order2.showOrders()