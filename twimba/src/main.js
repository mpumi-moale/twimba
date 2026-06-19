import { tweetsData } from "./data";

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function() {
  console.log(tweetInput.value)
})

// listens to any click on the browser
document.addEventListener('click',function(e) {
  // targets only the heart icon using html data-attributes
  if(e.target.dataset.heart) {
    handleLikeClick(e.target.dataset.heart)
  } else if(e.target.dataset.retweet) {
    handleRetweetClick(e.target.dataset.retweet)
  }

})

function handleLikeClick(tweetId) {
  // gets the first object from the array
  const targetTweetObj = tweetsData.filter(function(tweet) {
    return tweet.uuid === tweetId
  })[0]

  if(targetTweetObj.isLiked) {
    targetTweetObj.likes--
  }
  else {
    targetTweetObj.likes++
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked
 
  render()
}

function handleRetweetClick(tweetId){
  
  const targetTweetObj = tweetsData.filter(function(tweet) {
    return tweet.uuid === tweetId
  })[0]

  if(targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--
  } else {
    targetTweetObj.retweets++
  }
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted

  render()  
}

function getFeedHtml() {
  let feedHtml = ``

  tweetsData.forEach(function(tweet) {
    feedHtml += `
            <div class="tweet">
              <div class="tweet-inner">
                <img src="${tweet.profilePic}" class="profile-pic">
                  <div>
                      <p class="handle">${tweet.handle}</p>
                      <p class="tweet-text">${tweet.tweetText}}</p>
                      <div class="tweet-details">
                          <span class="tweet-detail">
                          <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                              ${tweet.replies.length}
                          </span>
                          <span class="tweet-detail">
                          <i class="fa-solid fa-heart" data-heart="${tweet.uuid}"></i>
                              ${tweet.likes}
                          </span>
                          <span class="tweet-detail">
                          <i class="fa-solid fa-retweet" data-retweet=${tweet.uuid}></i>
                              ${tweet.retweets}
                          </span>
                      </div>   
                  </div>            
              </div>
          </div>
        `
  })
  return feedHtml
}

// show on the browser
function render() {
  const feed = document.getElementById('feed')

  feed.innerHTML = getFeedHtml()
}

render()