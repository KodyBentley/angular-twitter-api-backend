export default (data, currentTweets) => {

    /**
     * Declare valid tweet array
     * Loop over data and filter if there is no media
     * Check if tweet already exists and if not push to valid array
     * Return validTweet array
     */
    let validTweet:Array<any> = [];
    for (let i of data) {
        if (i.entities.media !== undefined) {
            if (!exists(currentTweets, i)) {
                validTweet.push(i);
            }
        }
    }
    return validTweet;
}

/**
 * Function to compare existing tweet data against new tweet data
 * return true if exists, or false if is unique
 * @param arr array of current tweets
 * @param obj new data for comparison
 */
function exists(arr: Array<any>, obj: any) {
    for (let i of arr) {
        if (i.id === obj.id) {
            return true;
        }
    }
    return false;
}