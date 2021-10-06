/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {

    const createTweetElement = function(tweet) {
        const $tweet = $(`<article class="tweet-article">
                <header class="tweet-header">
                    <div class="img-container"><img src="${tweet.user.avatars}" alt="user avatar"/></div>
                    <div class="name">${tweet.user.name}</div>
                    <div class="handle">${tweet.user.handle}</div>
                </header>
                <div>
                ${tweet.content.text}
                </div>
                <hr>
                <footer class="tweet-footer">
                    <div class="timeago">${tweet.created_at}</div>
                    <div class="footer-elements">
                        <i class="fas fa-flag"></i>
                        <i class="fas fa-retweet"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </footer>
            </article>`);
        return $tweet;

    }


    const renderTweets = function(tweets) {
        for (const tweet of tweets) {
            const $tweet = createTweetElement(tweet);
            $('.tweets-container').append($tweet);
        }

    }


    const $form = $(".new-tweet-form");
    $form.on("submit", function(event) {
        event.preventDefault();
        console.log('form was submitted');
        const serializedData = $(this).serialize();
        console.log("serialized", serializedData)

    })

    //Fetching tweets with Ajax
    const loadTweets = () => {
        $.ajax({
            url: "/tweets",
            method: "GET",
            dataType: "json",
            success: (tweets) => {
                console.log("tweet:", tweets);
                renderTweets(tweets);
            },
            error: (err) => {
                console.log(`there was an error: ${err}`)
            }
        })
    }

    loadTweets();

});