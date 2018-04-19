import { Router } from 'express';
import TwitterApi from '../utils/apiCall';
import Validator from '../utils/tweetValidator';

let router;
let savedArr = [];

export default () => {
    /**
     * Variable declaration for express router
     */
    router = Router();

    /**
     * Express post function to designated URL
     */
    router.post('/tweets', (req, res) => {
        /**
         * Parameters that are passed to Twitter get function
         */
        var params = {
            q: '#' + req.body.data,
            count: 1000,
            result_type: 'recent',
            lang: 'en',
            include_entities: true,
            tweet_mode: true
        }

        TwitterApi(params, (err, data) => {
            if(err) {
                console.log('Twitter API ERROR');
                res.status(500).send('Twitter API ERROR');
                return;
            } else {
                let validTweets = Validator(data, savedArr);
                savedArr = savedArr.concat(validTweets);
                res.status(200).json(savedArr);
            }
        });
    })

    return router;
}