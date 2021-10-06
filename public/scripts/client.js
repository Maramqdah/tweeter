/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function(tweetData) {
    const $tweet = $(`<article class="tweet-article">
                <header class="tweet-header">
                    <div class="img-container"><img src="${tweetData.user.avatars}" alt="user avatar"/></div>
                    <div class="name">${tweetData.user.name}</div>
                    <div class="handle">${tweetData.user.handle}</div>
                </header>
                <div>
                ${tweetData.content.text}
                </div>
                <hr>
                <footer class="tweet-footer">
                    <div class="timeago">${tweetData.created_at}</div>
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
const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.