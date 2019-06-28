class Kitchen{
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(arr){
        for(let ar of arr){
            let [productName,productQuantity,productPrice] = ar.split(' ');
            productQuantity = +productQuantity;
            productPrice = +productPrice;
            if(this.budget >= productPrice){
                if(!this.productsInStock.hasOwnProperty(productName)){
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
            this.budget -= productPrice;
            this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            }else{
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.actionsHistory.join('\n');
    }
    addToMenu(meal,neededProducts,price){        
        if(Object.keys(this.menu).hasOwnProperty(meal)){
            return `The ${meal} is already in our menu, try something different.`;
        }else{
            this.menu[meal] = {
                meal,
                neededProducts,
                price
              }              
              return  (`Great idea! Now with the ${meal} we have ` +
                `${Object.keys(this.menu).length} ` +
                'meals in the menu, other ideas?')
        }
    }
    showTheMenu(){
        if(Object.keys(this.menu).length<= 0){
            return "Our menu is not ready yet, please come later...";

        }else{
            let output = []
        Object.entries(this.menu).forEach(m=>{
        output.push(`${m[1].meal} - $ ${m[1].price}`);
        });
            output.map(x=> x.trim());
            return output.join('\n')
        }
    }
    makeTheOrder (meal) {
        if (!this.menu.hasOwnProperty(meal)) {
          return (
            `There is not ${meal} yet in our menu, ` +
            'do you want to order something else?'
          )
        }
    
        let products = this.menu[meal].neededProducts
    
        if (
          products.some(p => {
            let [productName, productQuantity] = p.split(' ')
            return (
              !this.productsInStock.hasOwnProperty(productName) ||
              this.productsInStock[productName] < productQuantity
            )
          })
        ) {
          return (
            'For the time being, we cannot complete your order ' +
            `(${meal}), we are very sorry...`
          )
        }
    
        products.forEach(product => {
          let [productName, productQuantity] = product.split(' ')
          this.productsInStock[productName] -= productQuantity
        })
    
        let price = this.menu[meal].price
        this.budget += price
    
        return (
          `Your order (${meal}) will be completed ` +
          `in the next 30 minutes and will cost you ${price}.`
        )
    }
}
let kitchen = new Kitchen (1000);console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99)); console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());