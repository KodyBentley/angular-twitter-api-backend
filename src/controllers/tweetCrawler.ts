import TwitterApi from '../utils/apiCall';
import Validator from '../utils/tweetValidator';

export default class TweetCrawler {
    /**
     * Declaration of public static variables
     */
    public static hash: string = '';
    public static tweets: Object[] = [];
    public static interval: number;


    public static init() {
        if (!TweetCrawler.interval) {
            TweetCrawler.interval = setInterval(() => {
                TweetCrawler.getTweets();
            }, 20000)
            TweetCrawler.getTweets();
        }
    }

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
            console.log(TweetCrawler.tweets.length);
            if(cb) {
                cb()
            }
        });
    }
}