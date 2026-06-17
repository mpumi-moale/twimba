import { tweetsData } from "./data";

const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function() {
  console.log(tweetInput.value)
})

function getFeedHtml() {
  let feedHtml = ``

  tweetsData.forEach(function(tweetData) {
    feedHtml += `
            <div class="tweet">
              <div class="tweet-inner">
                <img src="${tweetData.profilePic}" class="profile-pic">
                  <div>
                      <p class="handle">${tweetData.handle}</p>
                      <p class="tweet-text">${tweetData.tweetText}}</p>
                      <div class="tweet-details">
                          <span class="tweet-detail">
                              ${tweetData.replies.length}
                          </span>
                          <span class="tweet-detail">
                              ${tweetData.likes}
                          </span>
                          <span class="tweet-detail">
                              ${tweetData.retweets}
                          </span>
                      </div>   
                  </div>            
              </div>
          </div>
        `
  })
  console.log(feedHtml) 
}

getFeedHtml()