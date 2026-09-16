var price = [250, 320, 650, 590]
function taxcalu(price){
    const taxcal = price.map(p => p + p * 0.1);
    return taxcal;
}
function filtering(price){
   const filter = price.filter(p=>p >= 500);
   return filter;
    }

console.log(taxcalu(price));
console.log(filtering(price));