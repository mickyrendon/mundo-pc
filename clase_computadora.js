class Computer{
    static counter = 0;

    constructor(){
        this._idCompu  = ++Computer.counter;
        this._name     = name; //relacionar los parametros con los objetos creados de las otras clases
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
        id: ${this._idCompu},
        nombre: ${this._name},
        monitor: ${this._monitor},
        teclado: ${this._keyboard},
        raton: ${this._mouse}
        `;
    }
}

let compu1 = new Computer('ideapad', 'lenovo', 'mecanico', 'optico');
console.log(compu1.toString());












