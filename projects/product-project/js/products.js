/* global $ _ opspark*/
$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
  $.getJSON('/projects/product-project/data/product.json', function (allProduct){
  
 //////////////////////////////////////////////////////////////////////
    // make your sections pretty here//
    
    $('body').css({
      'background': "linear-gradient(#ffb3ff, #000000)",
      'font-color': '#ffffff',
    });
    
    $('nav').css({
      'border-radius': '10px',
      'padding': '15px'
    });
    
    $('main').css({
      'border-radius': '10px',
      'font-family': '"Nova Mono", "Courier New", Courier, monospace',
      'font-size': 'small',
      'color': 'white',
    });
    
    // $('div').css({
    //   'font-color':'#',
    // });
    
    $('h1').css({
      'font-family': "'Atomic Age'",
      'color': 'white'
    });
    
    // $('.stock').css({
    //     'color': 'red',
    // });
    
    // $('.prodThmb').css({
    //   'border-radius': '10px',
    // });
    
    $('.flex-row').css({
      'display': 'flex',
      'flex-wrap': 'wrap',
      'flex-direction': 'row',
      'justify-content': 'space-between',
      'margin': '20px',
      'padding': '4px'
       
    });
    
    $('#section-product').css({
      'border-radius': '10px',
      'padding': '15px',
    });
    
    $('#all-items').css({
      'font-size': 'small',
      'display': 'flex',
      'flex-wrap': 'wrap',
      'flex-direction': 'row',
      'justify-content': 'space-between',
      'margin': '20px',
      'padding': '4px'
      
    });
    
 //////////////////////////////////////////////////////////////////////////
    
    // declaring a var to hold data address //
   
    var productData = allProduct; //creating a var to hold the JSON info
     console.log(productData);
    
    // make your data show here //
    $('<div>').attr('id', 'section-product').appendTo('main');
    
    /////////////////////////////////////////////////////////////////////////
// making search bar and buttons //
   $('nav').addClass('nav-bar').append($('<div>')).attr('id', 'section-search');
   $('<header>').attr('id', 'search-case').appendTo('.nav-bar');

   var $searchBar = $('<input>').attr({
    'id': 'search-input',
    'type': 'text',
    'size': '50%',
   });
  
   var $searchButton = $('<input>').attr({
    'id': 'search-submit',
    'type': 'button',
    'value': 'search'
   
   });
  
   var $phonesOnly = $('<button>').attr({
    'class': 'filter',
    'id': 'phone',
    'href': '#',
    'role': 'button'
   }).text('Phones');
  
   var $casesOnly = $('<button>').attr({
    'class': 'filter',
    'id': 'case',
    'href': '#',
    'role': 'button'
   }).text('Cases');
  
   var $allItems = $('<button>').attr({
    'id': 'all-items',
    'class': 'filter active',
    'href': '#',
    'role': 'button'
   }).text('Show All');
   
  
//   var $priceLowToHigh = $('<button>').attr({
//      'class': 'btnfilter',
//      'id': 'price',      
//      'href': '#',
//      'role': 'button'
//   }).text('Price Low to High')
//   .click(function(){
//       makeList(lowToHigh, 'price-sort').appendTo('#section-product');
//   });
  
  
  /// PUT THOSE BUTTONS IN THEIR PLACE ///
   $('#search-case').append($searchBar, $searchButton).css({'padding': '8px',});
   $('#section-search').append($phonesOnly, $casesOnly, $allItems);
//////////////////////////////////////////////////////////////////////////////  

  /// build some functionality for the filter buttons ///
 var $btnAction = $('.filter').on('click', function(){
   if(this.id === 'all-items'){ // if the id all-items is selected
   
     $('#all-items > div').fadeIn(450); //these elements under the parent id to fade in
  } else { //the below code 
     
     var $select = $('.' + this.id).fadeIn(450); //select items with a class same as 'this'.id 
     $('#all-items > div').not($select).hide();
   }
   $btnAction.removeClass('active');
   $(this).addClass('active');
 });
 
   /// end of filter button functionality ///
/////// PRICE FILTER //////////////////////////////
// var lowToHigh = function(){
//             return productData.sort(function(a, b) {
//                 return parseFloat(a.price) - parseFloat(b.price);
//             });
//         };
//   console.log(lowToHigh());    
//   console.log(makeList(lowToHigh)); 
 ////////////////////////////////////////////////////////////////////////////
   
   

//////////////////////////////////////////////////////////////////////////////    
    //building a function to make lists//
 /////////////////////////////////////////////////////////////////////////
    function makeList(products, idName){
            $('#section-product').empty(); //empty the section
            var $productList = $('<div>').attr('id', idName); //this makes an <div> with id
            
            _.each(products, function(item){ //looping through whatever we give it
              var $listItem = $('<div>')
                .addClass('product')
                .attr({'id': item.type })
                .css({'padding': '10px'})
                .appendTo($productList);
                $listItem.data('product', item);
              var $productThumb = $('<img>')
               .attr({'id': 'prodThmb','src': 'img/product/thumbs/' + item.image})
               .css({'border-radius':'5px'});
                
                $('<div>').attr('class', 'thumb').append($productThumb).appendTo($listItem);
                $('<div>').attr('class', 'desc').text(item.desc).appendTo($listItem);
                $('<div>').attr('class', 'price').text('Price: $' + item.price).appendTo($listItem); 
               var $priceStock = $('<div>').attr({'class': 'stock'}).text(item.stock + 'remaining').css({'color': 'red'}).appendTo($listItem); //new div for current stock
               var productStock = item.stock;
              if(productStock < 10){
                  $priceStock.text('Just ' + item.stock + ' remaining!');
                 } else {$priceStock.hide();}
                 
            }); //appends to the var $list
           
           
            return $productList;
        }
    
 /////////////////////////////////////////////////////////////////////

   
    ///// making a list of all products /////
makeList(productData, 'all-items').appendTo('#section-product');

 /////////////////////////////////////////////////////////////////////
 /// making all product images respond to click ///
 ////////////////////////////////////////////////////////////////////
 $('.product').on('click', function(event) {
     const
     // wrap list item in jQuery //
     $li = $(event.currentTarget),
     
     // get the data we assigned to this list item //
     product = $li.data('product');
     
     // empty the modal body, then append the details //
     const $modalBody = $('#modal-product-detail-body')
     .empty()
     .append(createProductDetailsView(product))
    $('#modal-product-detail').modal('show');
 });
 
 function createProductDetailsView(product) {
    
     
     var $productDetailsPop = $('<div>').attr('id', 'details-holder');
      $('<div>').text(product.desc).css({'padding': '10px'}).appendTo($productDetailsPop);
     var $imageHold = $('<div>').attr('id', 'image-holder').prependTo($productDetailsPop);
      $('<img>').attr({'src': 'img/product/thumbs/' + product.image }).appendTo($imageHold);
      $('<div>').text(product.specs).appendTo($productDetailsPop);
      console.log($productDetailsPop);
     return $productDetailsPop;
 }

    
/////////////////////////////////////////////////////////////////////////
/// making a search function ///
/////////////////////////////////////////////////////////////////////////
$('#search-submit').click(function(event){
  const query = $('#search-input')[0].value; //selecting the value in the $searchBar
 let filteredProducts =  search(productData, query);
 //this is where the page clear and repopulation occurs
 makeList(_.unique(filteredProducts), 'search-results').appendTo('#section-product');
//  console.log(_.unique(filteredProducts));
});

var search = function(collection, query){
  var filteredItems = []; //products containing the query we are looking for
 
  _.each(collection, function(value, index, array){
   // console.log('current index in $productData:' + index);
    if (typeof value === 'string') { //value will always be an object
      // console.log('index of value in query:' + value.indexOf(query));
      if(value.indexOf(query) > -1) {
        filteredItems.push(array);
      }
    } else if (typeof value === 'object'){
     //this is recursion, using the search function to search inside the object in the collection
    // matching values will be concat into the filteredItems array
      _.each(search(value, query), function(value, i, a){
        if (Array.isArray(value)){
          filteredItems.push(array);
        }
        else {
          filteredItems.push(value);
        }
      });

    }
  });
  return filteredItems; //returns an array of found items
};
/** $('#search-input')[0].value === the input value string
 * 
* we can use a recursive loop to search through all keys on each object
* and find the search-input value
* we can then take any objects with matching values and return them
* as results
* 
* search() {
  loops through all data
  runs search on every individually
}

individualSearch (object, string) {
  loop over objects key/value pairs
  if value is a string
  check if query inside string
  else if value is object
   run individual search on object
}
* 
* if the object you are looping over contains the string you are looking for
* you want to return it AND ALL OTHERS that contain the string, so you will
* need to keep track of these in some way (an array?)
* 
*/


 
    
    

  
    
    
    
    
  }).fail(function() { //in case the JSON file does not load
    console.log('getJSON on failed!'); 
    
  });
  // ALL YOUR CODE GOES ABOVE HERE //
});