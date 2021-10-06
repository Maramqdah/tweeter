$(document).ready(function() {
    // --- our code goes here ---
    //console.log( "ready!" );

    $('#tweet-textarea').keyup(() => {
        const tweetlength = $('#tweet-textarea').val().length;
        console.log(tweetlength);
        $('.counter').text(140 - tweetlength);

    })
    $(selector).mouseenter(handlerIn).mouseleave(handlerOut);
});