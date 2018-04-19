export default (data, currentTweets) => {
    let validTweet = [];
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