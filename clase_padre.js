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
}
// probando la clase inputDevice;
let input1 = new InputDevice('mouse', 'apple');
console.log(input1);