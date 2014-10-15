items.forEach( function (i) {
console.log(i)
});


//Q1 calculate the average price of all items

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
    console.log(avg.tofixed(2));




  //CLASS REVIEW
  //all of the prices
    var all_prices = items.map(function (item) {
      return item.price;
    });
      console.log(all_prices);

    //add them all together
    var added_together = all_prices.reduce(function(initial, current) {
      return initial + current;
    });
      console.log(added_together);

    var sum = added_together / items.length;
      console.log(sum.toFixed(2));





//Q2 get an array of items that cost between $14.00 and $18.00 USD


  var cost = items.filter(function(c) {
    return c.price >14.00 && c.price <18.00;
  });
      console.log(cost);



    //CLASS REVIEW
    var mid_price_items = items.filter(function(item) {
      return item.price >14.00 && item.price <18.00 && item.currency_code === 'USD';
    });
      console.log(mid_price_items);

              //OR//
      mid_price_items.forEach( function (item) {
        console.log(item.title);
      });

              //OR//
    var titles = [];
      items.forEach(function (item) {
      return titles.push(item.title);
    });
      console.log(titles);


//Q3 find the item with a "GBP" currency code and print its name and price

  var cur = items.filter(function(c) {
      if ('GBP' === c.currency_code) {
          return true;
        } else {
          return false;
        }
      });

      console.log(cur)




//Q4 find which items are made of wood

      items.forEach(function(a) {
        a.materials.forEach(function(b) {
          if (b === 'wood') {
         console.log(a.title);
       };
     });
  });



//Q5 find which items are made of eight or more materials

    var ml = items.filter(function(m) {
      return m.materials <=8;
    });

  console.log(ml)


//Q6 calculate how many items were made by their sellers

var whomade = items.filter(function(a) {
    if ('i_did' === a.who_made) {
        return true;
      } else {
        return false;
      }
    });

  console.log(whomade)
