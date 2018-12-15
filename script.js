// 1. Pet Store
console.log("This is Exercise 1:")
// Create three new objects. Each object should represent a pet at a pet store. Each object should have:

// A name ("Dennis", "Stacy", "Flapjack", etc)
// A species (bird, lizard, cat, etc)
// An array that contains the pet's favorite things
// A method called vocalize that logs to the console whatever sound you think that animal would make.
// Call the vocalize method for each animal.

var birdObject = {
    name: "Polly",
    species: "bird",
    favoriteThings: ["crackers", "pirates", "seeds"],
    sound: "Polly want a cracker?"
}

var catObject = {
    name: "Felix",
    species: "cat",
    favoriteThings: ["balls of string", "mice", "naps"],
    sound: "Meow!"

}

var hamsterObject = {
    name: "Chuck",
    species: "hamster",
    favoriteThings: ["stuffing his cheeks", "sunflower seeds", "plastic balls"],
    sound: "wheeeee!"
}

function vocalize(animalObject){
    console.log(`The ${animalObject.species} says "${animalObject.sound}"`)
}

vocalize(hamsterObject);


// 2. Calculator
console.log("This is Exercise 2:")
// Copy and paste the following code into your JavaScript file:

var calculator = {
  add: function(x, y) {
   sum = x + y;
   console.log(sum);

  },
  subtract: function(x,y) {
    difference = x-y;
    console.log(difference);
  },
  multiply: function(x,y) {
      product = x*y;
      console.log(product);
  },
  divide: function(x,y){
      quotient = x/y;
      console.log(quotient);
  } 

}

calculator.add(1,2);
calculator.subtract(3,4);
calculator.divide(12,3);
calculator.multiply(6,7);



// var sum = calculator.add(2, 2);
// console.log(sum); // Expected output: 4
// Add three more methods to the calculator object for subtraction, division, and multiplication. Each method should return the result of the calculation.
// Call each method at least twice, passing in different parameters. (Hint: you'll need to store the returned values in variables.)
// 3. Movie Poster
console.log("This is Exercise 3:")

// Copy and paste the following object into your JavaScript file:

var starWarsObject = {
  title: "Star Wars: A New Hope",
  genre: "Science Fiction",
  releaseDate: "May 25, 1977",
  printMoviePoster: function(){
    movieString =`<h2>${starWarsObject.title}</h2>
    <p>${starWarsObject.genre}</p>
    <p>${starWarsObject.releaseDate}</p>`
    document.querySelector("#movie-poster").innerHTML=movieString;
  }
}

starWarsObject.printMoviePoster();

// Copy and paste the following code into your index.html file:

// <section id="movie-poster"></section>
// Fill in the printMoviePoster method to do the following things:
// Create an HTML string with the following elements: - An h2 for the movie's title - A p for the movie's genre - A p for the movie's release date
// Use document.querySelector and .innerHTML to print your HTML string to the "#movie-poster" element in the DOM.
// Call the printMoviePoster method.





// 4. Address Book

console.log("This is Exercise 4:")

// Create an object that represents your contact information. Use the code below as an example:
var sydneyContactInfo = {
  name: "Sydney Wait",
  cell: "(304) xxx-0456",
  email: "sydneyxxxx@gmail.com",
  address: "4154 Sesame St",
  callCellPhone(phoneNumberParameter){
    console.log(`${this.name} is now calling ${phoneNumberParameter}`);
  },

  // Give each object two more methods:
// A method called sendEmail (which should accept a parameter of emailAddress)
// A method called sendMail (which should accept a parameter called mailingAddress)
  sendEmail(emailParameter){
    console.log(`${this.name} is now emailing ${emailParameter}`);
  },
  sendMail(addressParameter){
      console.log(`${this.name} is sending a letter to ${addressParameter}`)
  }
}
// Create another object that represents your one of your friend's contact information. Example:
var isaacContactInfo = {
  name: "Isaac Wait",
  cell: "(304) xxx-0599",
  email: "Isaac@gmail.com",
  address: "4154 Belle Ave",

  callCellPhone(phoneNumberParameter){
    console.log(`${this.name} is now calling ${phoneNumberParameter}`);
  },
  sendEmail(emailParameter){
    console.log(`${this.name} is now emailing ${emailParameter}`);
  },
  sendMail(addressParameter){
      console.log(`${this.name} is sending a letter to ${addressParameter}`)
  }
}
// Now give each of your objects a method called callCellPhone. It should accept a parameter of phoneNumber. For example, my object would now look like this:
// var jordanContactInfo = {
//   name: "Jordan Castelloe",
//   cell: "(999) 999-9999",
//   email: "jordan.123@gmail.com",
//   address: "123 Sesame St",
//   callCellPhone: function(phoneNumberParameter){
//     console.log(`${this.name} is now calling ${phoneNumberParameter}`);
//   }
// }

// Don't worry to much about what the methods do- just logging something to the console is fine.
// Invoke your callCellPhone method and pass in your friend's phone number as a parameter. (In this example, my expected output would be "Jordan Castelloe is now calling (888) 888-8888").

sydneyContactInfo.callCellPhone(isaacContactInfo.cell);

// Invoke your friend's sendEmail method and pass in your email address as a parameter.
isaacContactInfo.sendEmail(sydneyContactInfo.email);

// Invoke your sendMail method and pass in your friend's mailing address as a parameter.
sydneyContactInfo.sendMail(isaacContactInfo.address);


// Challenge: Shopping Cart
// Your job is to fill in the three empty methods in the shoppingCart object. (Hint: you can access the items array from inside the object with this.items.)
// Copy and paste the following code into your JavaScript file:

var shoppingCart = {
  items: [
    {
      name: "Bananas",
      totalPrice: 2.75
    },
    {
      name: "English Muffins",
      totalPrice: 3.99
    },
    {
      name: "Peanut Butter",
      totalPrice: 2.99
    }
  ],

  // The addToCart method should take in a parameter of an object that represents a new item and add it to the shopping cart array. Hint: look up .push()
  addToCart: function(objectToAdd){
    this.items.push(objectToAdd);
    console.log(shoppingCart);
    //   return shoppingCart;
    },
    
        
//   },
  // The calculateTotal method should calculate and return a total for all the items in your shopping cart.
  calculateTotal: function(){
      console.log(shoppingCart);
      
      totalCost=0;
      for(i=0;i<this.items.length; i++){
        totalCost= totalCost + this.items[i].totalPrice;
        console.log(totalCost);
        }

    // return totalCost;  
  },

  // The printShoppingCart method should loop over all the items in the cart, build up an HTML string that represents the data, and print them to the "#shopping-cart" element in the DOM. You can use any HTML elements you want as long as all of the data is represented.
  printShoppingCart: function(){
    
    cartHtmlString="";
    for(i=0;i<this.items.length; i++){
cartHtmlString=cartHtmlString+
`<h2>${this.items[i].name}</h2>
<h3>$${this.items[i].totalPrice}</h2>
`
console.log(cartHtmlString);
    }

    cartHtmlString=`${cartHtmlString} 
    <p>=========================</>
    <h2>Total cost =$${totalCost}</h2>`
document.querySelector("#shopping-cart").innerHTML=cartHtmlString;
  }
}

var addOranges= {
    name: "Oranges", 
    totalPrice: 2.99
}

var addApples={
    name: "Apples",
    totalPrice: 1.75 
}

shoppingCart.addToCart(addOranges);
shoppingCart.addToCart(addApples);

shoppingCart.calculateTotal();
shoppingCart.printShoppingCart();

// shoppingCart.calculateTotal(shoppingCart);



// Copy and paste the following code into your index.html file:

// <div id="shopping-cart"></div>





// Call each method.