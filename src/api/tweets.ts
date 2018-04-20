import { Router } from 'express';
import TweetsController from '../controllers/tweetCrawler';

// Declare router variable
let router;

export default () => {
    /**
     * Variable declaration for express router
     */
    router = Router();

    /**
     * Post request 
     * Check if hash is not equal to request payload if so empty array
     * Declare has is request payload
     * Call get tweets function with callback to send a status of 200
     */
    router.post('/tweets', (req, res) => {
        if(TweetsController.hash !== req.body.data) {
            TweetsController.tweets = [];
        }
        TweetsController.hash = req.body.data;
        TweetsController.getTweets(() => {
            res.status(200).json('ok');
        });
    });

    /**
     * Express post function to designated URL
     */
    router.get('/tweets', (req, res) => {
        res.status(200).json(TweetsController.tweets);
    })

    // Return router
    return router;
}