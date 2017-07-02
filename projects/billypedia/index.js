/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // TODO #3 - make your sections pretty
        // $('#body').css('background', 'linear-gradient(#d4fc79, #96e6a1)'); //trying to make background gradient
        $('body').css({
            'background': "linear-gradient(#ccffff, #000000)", 
        });
        
        $('nav').css({
            'background': 'linear-gradient(#66ccff, #ccffff)',
            'border-radius': '10px',
        });
        
         $('ul li').css({
            'font-style': 'italic',
            'font-size': '40px'
        });
        
        $('main').css({
            'background': 'rgba(245, 238, 219, 0.5)',
            'border-radius': '10px',
            
        });
        
        $('#header-top-rated').css({
            'padding': '40px',
        });
       
        $('#header-recordings').css({
            'padding': '40px',
        });
       
        
        $('#section-bio').css({
            "background-color": '#95dee3',
            "border-radius": '10px',
            "padding": '10px'
            
        });
        $('#section-quotes').css({
            'background-color':'#95dee3',
            'border-radius': '10px',
            'padding': '10px'
        });
        
       
        
      
        
    //////////////////////////////////////////////////////////////////////////////////////        
        // building a function to build lists
        function makeList(content, idName, className){
            var $list = $('<ul>').attr('id', idName); //this makes an <ul> with id
            //we want a new <li> for every album
            _.each(content, function(recording){ //looping through whatever we give it
               var $listItem = $('<li>').attr('class', className).appendTo($list);
                 $('<div>').attr('class', 'title').text(recording.title).appendTo($listItem);
                 $('<div>').attr('class', 'artist').text('Artist: ' + recording.artist).appendTo($listItem);
                 $('<div>').attr('class', 'year').text('Year: ' + recording.year).appendTo($listItem);//.text(recording.title).appendTo($list);//creates a li from the title
                // console.log(className);
            });                                //appends to the var $list
            return $list;
        }
    //////////////////////////////////////////////////////////////////////////////////////   
        
        // TODO #4 - populate the unordered list $('#list-top-rated') with the data
        // at 'data.discography.topRated'
        
        //create a var for topRated object inside the discography object in the data array
        //make a var to hold the general recordings
        
        var topRated = data.discography.topRated;
        
        var recordings = data.discography.recordings;
        
        // make new list
        $('#sidebar').append(makeList(topRated, 'list-top-rated', 'top-recording'));
        
        
        // TODO #5 - Create a new section containing a new <ul>
        var $recordsSection = $('<section>').addClass('section-recordings'); //created a section with id "recordings"
          $('#sidebar').append($recordsSection);
        
    
        
          $('<header>').text('Recordings').attr('id', 'header-recordings').appendTo('#sidebar');
        
        //make new list
          $('#sidebar').append(makeList(recordings, 'list-recordings', 'recording')); 
        
        
        
        // TODO #6 - add an image to the top of the sections for top rated and recordings. 
        // By default, show the image that corresponds to the first recording in each list.
        
        //creating a div for top-album-image
        var $topArtContainer =  $('<div>')
         .attr('id', 'top-album-image')
         .appendTo('#header-top-rated');
        
        
        //creating a div for listImage
        var $listArtContainer = $('<div>')
         .attr('id', 'list-album-image')
         .appendTo('#header-recordings');
        
         // var testCat = 'https://s-media-cache-ak0.pinimg.com/736x/7a/f6/66/7af666b4ac7e96bd262ec27e5e7461a4.jpg'
        
        var $topImage = $('<img>').attr('src', topRated[0].art);
          // console.log(topRated[0].art);
        var $listImage = $('<img>').attr('src', recordings[0].art);
          // console.log(recordings[0].art);
          //the top rated albums image
         $('#top-album-image').append($topImage); 
        //the first album in list image
         $('#list-album-image').prepend($listImage);
          
        // TODO #7 - build out a feature for the image of Billy such that when the user clicks 
        // on his picture, we swap out the source of the image to the next available image in 
        // the list of Billy images at data.images.billy
        let counter = 0;
        $('#image-container-billy').click(function(){ //this is the event handler
            counter++; //iterating the counter
            if(counter === 4){ //we need the counter to make sure the image still switches
                counter = 0; //even after it reaches the end of the array
            }
            $('#image-billy').fadeOut(10);
            $('#image-billy').attr('src', data.images.billy[counter]); //changing the image src to reflect
            $('#image-billy').fadeIn();                               // the current array element in the counter
            
        });
        
        // TODO #8 - Build out a feature for the list items of both the top rated and recordings lists 
        // such that when the user clicks on one of the <li>, we swap out the source of the image for 
        // the feature based on the art url associated with the recording.
        
       //this is the code for click handling on top rated image
        _.each($('.top-recording'), function(value, index){
            $('.top-recording').eq(index).click(function(){
                $($topImage).attr('src', topRated[index].art);
            });
        });
        
        //this is the code for click handling on general recordings image
        _.each($('.recording'), function(value, index){
            $('.recording').eq(index).click(function(){
                $($listImage).attr('src', recordings[index].art);
            });
        });
        
        // TODO #9 - Build an HTML table using jQuery to hold all of Billy's rider data
       //Modelled on the table built in the instructions 
          //making a section tag to hold all sections
        $('<section>').attr('id', 'section-rider').appendTo('#sections');
       
        //making a section to hold the rider table
        $('#section-rider').append($('<h3>').text('Billy\'s Rider'));
       
        var rider = data.rider;  //should create a var holding all the rider 
        var createTable = function(rider){
        var createRow = function(rider){
                var $row = $('<tr>'); //new row tag
                var $itemType = $('<td>').text(rider.type); // creates a table holding text at rider.type
                var $itemDesc = $('<td>').text(rider.desc); // creates a table holding text at rider.desc
                $row.append($itemType);
                $row.append($itemDesc);
                return $row;
            };
            var $table = $('<table>');
            var $rows = rider.map(createRow);
            $table.append($rows);
            return $table;
        };
      createTable(rider).appendTo('#section-rider'); //should append the table to the site body
        
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


