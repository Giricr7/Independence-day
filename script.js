function createPizzaDough(){
     
    setTimeout(()=>{
        console.log(`Dough created`);
        rollPizzaBase();
 
    },3000)    
}

function rollPizzaBase(){
    setTimeout(()=>{
        console.log(`Base created`);
        addSauce();
 
    },2000)  

}

function addSauce(){
    setTimeout(()=>{
        console.log(`Sauce created`);
        addToppings();
 
    },1000)

}

function addToppings(){

    setTimeout(()=>{
        console.log(`Toppings created`);
        bakePizza();
 
    },1000)
}

function bakePizza(){
    setTimeout(()=>{
        console.log(`Baking Done`);
        Pizzadelivered();
 
    },4000)

}

function Pizzadelivered(){
    console.log(`Pizza Delivered`);
}


createPizzaDough();
