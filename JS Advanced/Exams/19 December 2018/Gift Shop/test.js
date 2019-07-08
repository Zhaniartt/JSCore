class Kitchen {
    constructor(budget){
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(array){
        let ourBudget = this.budget;
        let output = []
        for(let arr of array){
            let [product,quantity,price] = arr.split(' ')
            quantity =+quantity;
            price = +price
            if(ourBudget > price){
               if(!this.productsInStock.hasOwnProperty(product)){
                    this.productsInStock[product] = 0
               }
               this.productsInStock[product] += quantity;
               this.budget -= price;
               this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`)

            }else{
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${product}`)
            }
        }
        return this.actionsHistory.join('\n')
    }
    addToMenu(meal,products,price){
        if(this.menu.hasOwnProperty(meal)){
            return `The ${meal} is already in our menu,try something different.`
        }else{
            this.menu[meal] = {
                products,
                price
            }
            let totalRecipes = Object.keys(this.menu)
            return `Great idea! Now with the ${meal} we have ${totalRecipes.length} meals in the menu, other ideas?`
        }
    }
    showTheMenu(){
        let everything = Object.entries(this.menu);
        if (everything.length <= 0){
            return `Our menu is not ready yet, please come later...`
        }
        let output = []
        everything.forEach(x=>{
                output.push(`${x[0]} - $ ${x[1].price}`)
        })
        return output.join('\n')
    }
    makeTheOrder(meal){
        if(!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let neededProducts = this.productsInStock;
        let mealToPrepare = this.menu[meal].products;
        let weHaveIt = true;
        for(let pr of mealToPrepare){
            let [product,quantity] = pr.split(' ');
            
            if(!neededProducts.hasOwnProperty(product)){
                weHaveIt = false;
                
            }
            if(neededProducts[product] < +quantity){
                weHaveIt = false;
                
            }
            neededProducts[product] -= +quantity;
        }
        if(!weHaveIt){
            return `For the time being,we cannot complete yet your order ${meal},we are very sorry...`
        }else{
            return `You order ${meal} will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}`
        }

    }
}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'))