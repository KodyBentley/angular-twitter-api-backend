import TwitterApi from '../utils/apiCall';
import Validator from '../utils/tweetValidator';

export default class TweetCrawler {
    /**
     * Declaration of public static variables
     */
    public static hash: string = '';
    public static tweets: Object[] = [];
    public static interval: number;


    /**
     * Public function to initialize TweetCrawler
     * Check to see if interval is valid
     * Call initial getTweets function
     */
    public static init() {
        if (!TweetCrawler.interval) {
            TweetCrawler.interval = setInterval(() => {
                TweetCrawler.getTweets();
            }, 20000)
            TweetCrawler.getTweets();
        }
    }

    /**
     * Public function to get tweets
     * Declare parameter object
     * Initialize Twitter Api 
     * Declare variable for valid tweets
     * Concat valid tweets
     * Initialize callback function
     * @param cb Callback function
     */
    public static getTweets(cb:Function = null) {
        var params = {
            q: '#' + TweetCrawler.hash,
            count: 1000,
            result_type: 'recent',
            lang: 'en',
            include_entities: true,
            tweet_mode: true
        }

        TwitterApi(params, (err, data) => {
            if (err) {
                return;
            } else {
                let validTweets = Validator(data, TweetCrawler.tweets);
                TweetCrawler.tweets = TweetCrawler.tweets.concat(validTweets);
            }
            if(cb) {
                cb()
            }
        });
    }
}