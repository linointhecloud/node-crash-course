// create an environment variable called TWITTER_BEARER_TOKEN
const token = process.env["TWITTER_BEARER_TOKEN"];

// create a variable to hold a screen name
let screenName = "cloudcatwannabe";

// fetch a tweets from the Twitter API
const tweets = await fetch(
  `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=2`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

