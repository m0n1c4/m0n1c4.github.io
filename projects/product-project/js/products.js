/* global $ _ */
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('/projects/product-project/data/product.json', function (product){
    // make your sections pretty here//
    $('body').css({
      'background': "linear-gradient(#ffb3ff, #000000)",
    });
    
    $('nav').css({
      'border-radius': '10px',
    });
    
    $('main').css({
      'border-radius': '10px',
    });
    
    $('#section-product').css({
      'border-radius': '10px',
      'padding': '15px',
      
    });
    
    ///////////////////////////////////
    
    // declaring a var to hold product data address //
   
    var $productData = product; //does this refer to the JSON or what??
    
    
    // make your product data show here //
    $('<div>').attr('id', 'section-product').appendTo('body');
    
    //building a function to make product lists//
    function makeList(product, idName, className){
            var $list = $('<ul>').attr('id', idName); //this makes an <ul> with id
            //we want a new <li> for every album
            _.each(product, function(item){ //looping through whatever we give it
               var $listItem = $('<li>').attr('class', className).appendTo($list);
              // var $productThumb = $('<img>').attr('src', product.image);
              //   $('<div>').attr('class', 'thumb').append($productThumb).appendTo($listItem);
                 $('<div>').attr('class', 'desc').text('Description: ' + product.desc).appendTo($listItem);
                 $('<div>').attr('class', 'price').text('price: ' + product.price).appendTo($listItem);//.text(recording.title).appendTo($list);//creates a li from the title
               
            }); //appends to the var $list
            return $list;
        }
    console.log(makeList(product, 'testList', 'testClass'));
    
    ///// making a list of all products /////
    makeList($productData, 'all-items', 'inventory').appendTo('#section-product');
    
    //////////////////////////////////////
    
    
    
    
    
  }).fail(function() { //in case the JSON file does not load
    console.log('getJSON on product failed!'); 
    
  });
  // ALL YOUR CODE GOES ABOVE HERE //
});