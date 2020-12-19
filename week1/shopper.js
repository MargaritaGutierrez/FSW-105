var shopper = {
    name: "Joe",
    age: "23",
    state: "Kentucky",
    creditCardPayment: false, 
    grocerycart : ["orange", "milk", "pork"],
        
    displayInfo: function() {
       return this.name +" is my name " +"" + this.age + " I am buying " + this.grocerycart
   
    }  
}                                           

console.log(shopper.displayInfo())