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

function exists(arr: Array<any>, obj: any) {
    for (let i of arr) {
        if (i.id === obj.id) {
            return true;
        }
    }
    return false;
}