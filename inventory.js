class Train{
    constructor(manufacturer,model,price){
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
    }
}

let trainStock = [];
let p42 = new Train("Atlas","P42DC",399.99);
console.log(p42);