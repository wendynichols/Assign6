items.forEach( function (i) {
console.log(i)
});


//calculate the average price of all items

  var price = [];

  var push = items.forEach(function(p) {
    price.push(p.price);
});

  console.log(price);

  var sum = price.reduce(function(a, b){
  return a + b;
});

  console.log(sum);

  var avg = sum / price.length;

  console.log(avg);

  



//get an array of items that cost between $14.00 and $18.00 USD

    //items.price(function (items) {
    //return
    //});



  items.reduce(function(currentValue) {
    return currentValue;
  });

  console.log(items);

//find the item with a "GBP" currency code and print its name and price


// find which items are made of wood

  //var mow = ['']


//find which items are made of eight or more materials


//calculate how many items were made by their sellers
