import { Router } from 'express';
import TweetsController from '../controllers/tweetCrawler';

let router;

export default () => {
    /**
     * Variable declaration for express router
     */
    router = Router();

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

    return router;
}