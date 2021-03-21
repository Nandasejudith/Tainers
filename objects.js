var fruit =  {
name : 'orange',
price : 30.00 ,
quantity : 2 ,
totalCost :function(price,quantity){
    ttl = price*quantity
    return this.ttl
  }
};
fruit.totalCost(30,2)
console.log(fruit.quantity + " " + fruit.name + " for KES " +ttl.toFixed(2))
