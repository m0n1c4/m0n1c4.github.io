/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // TODO #3 - make your sections pretty
        $('#section-bio').css('background-color','#ffad99').css('border-radius', '10px').css('padding', '10px');
        $('#section-quotes').css('background-color','#ffad99').css('border-radius', '10px').css('padding', '10px');
        
        // TODO #4 - populate the unordered list $('#list-top-rated') with the data
        // at 'data.discography.topRated'
        let topRated = data.discography.topRated;
        _.map(topRated, function(topRated){
            _.each(object, function(value, key, object){
                $('<li>')//unfinished
            })
        });
        
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


