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

    // Test / driver code (temporary). Eventually will get this from the server.
    const data = [{
            "user": {
                "name": "Newton",
                "avatars": "https://i.imgur.com/73hZDYK.png",
                "handle": "@SirIsaac"
            },
            "content": {
                "text": "If I have seen further it is by standing on the shoulders of giants"
            },
            "created_at": 1461116232227
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": "https://i.imgur.com/nlhLi3I.png",
                "handle": "@rd"
            },
            "content": {
                "text": "Je pense , donc je suis"
            },
            "created_at": 1461113959088
        }
    ]

    //===============================
    const renderTweets = function(tweets) {
        for (const tweet of tweets) {
            const $tweet = createTweetElement(tweet);
            $('.tweets-container').append($tweet);
        }

    }
    renderTweets(data);


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
            success: (tweet) => {
                console.log("tweet:", tweet);
                createTweetElement(tweet);
            },
            error: (err) => {
                console.log(`there was an error: ${err}`)
            }
        })
    }



});