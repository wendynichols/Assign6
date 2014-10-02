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


  var cost = items.filter(function(c) {
    return c.price >14.00 && c.price <18.00;
});

  console.log(cost)



//find the item with a "GBP" currency code and print its name and price


// find which items are made of wood

  var mow = items.forEach(function(a) {
     a.materials.forEach(function(b) {
       if (b === 'wood') {
         console.log(a.title);
       };
     });
  });



//find which items are made of eight or more materials

    var ml = items.filter(function(m) {
    return m.materials <=8;

  });

  console.log(ml)


//calculate how many items were made by their sellers

   items.forEach(function(a) {
    a.who_made === 'i_did') {
        console.log(a.title);
      };
  };
