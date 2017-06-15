class SuperMarket {
  constructor(name) {
    this.name = name;
    this.aisle = [];
  }

  createAisle(type) {
    this.aisle.push(new Aisle(this.aisle.length+1, type))
  }

  viewAllAisle() {
    this.aisle.map(function(obj) {
      console.log(obj);
    })
  }
}


class Aisle {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.products = [];
  }

  createProduct(name) {
    this.products.push(new Product(name))
  }
}

class Product {
  constructor(name) {
    this.name = name;
  }
}

let superMarket = new SuperMarket();

let hallways = {
  vegetables: [
    'la acelga.',
    'el ajo.',
    'la alcachofa',
    'el alcaucil',
    'el apio.',
    'la arveja',
    'la batata',
    'la berenjena'
  ],
  vegetables2: [
    'la acelga.',
    'el ajo.',
    'la alcachofa',
    'el alcaucil',
    'el apio.',
    'la arveja',
    'la batata',
    'la berenjena'
  ],
}

for (let key in hallways){
  superMarket.createAisle(key)
  hallways[key].map((obj) => {
    superMarket.aisle[superMarket.aisle.length - 1].createProduct(obj);
  })
}

superMarket.viewAllAisle()
