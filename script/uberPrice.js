class UberPriceCalculator {
   
    constructor(baseFare, costPerKm) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
    }

    calculatePrice(distanceInKm){
        return this.baseFare + this.costPerKm * distanceInKm;
    }
}

//Base fare of 50 and cost of 10 per km 
let calculator = new UberPriceCalculator(50, 10); 
// Distance traveled in km
let distance = 5; 
let price = calculator.calculatePrice(distance);
console.log(`The price for a ${distance} km Uber ride is ${price} rupees.`);
