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
        id    : ${this._idMonitor}, 
        Marca : ${this._brand}, 
        tamano: ${this._size}
        `;
    }
}

let monitor1 = new Monitor('lenovo', '16 pulgadas');
console.log(monitor1.toString());