/**
* Declaration of Twitter NPM Module
*/
import * as Twitter from 'twitter'

export default (params: Object, cb: Function) => {
    /**
     * Declaration of new Twitter object with parameters from twitter app passed in
     */
    let client = new Twitter({
        consumer_key: 'mnTvqfWZeXEYug3zbNR0HU1pz',
        consumer_secret: 'kOt2PBWSxK4cKNrcVwVQCoF8pbOXMZu2wkmCnFhSIMXdaGVqh6',
        access_token_key: '1210186566-2XbsiqKCVveRIDBfFLv88Y0lk9vmRXhwfnrlvRL',
        access_token_secret: 'chO2mTREIE7sFZAPrT55ned4ZXuYTG9tcMd9lIUiwiNPU'
    });

    /**
     * Twitter NPM Module get function
     */
    client.get('search/tweets', params, function (error, tweets, response) {
        /**
         * Callback to handle error, as well as data
         */
        cb(error, tweets.statuses);
    });

}