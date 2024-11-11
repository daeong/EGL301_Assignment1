const posts = [
    { postid: 1, userid: 'user0104', likes: 128, comments: 20, shares: 10, content: "Loving #nature!", timestamp: "2024-11-01" },
    { postid: 2, userid: 'user0104', likes: 85, comments: 15, shares: 5, content: "#Travel is life!", timestamp: "2024-11-03" },
    { postid: 3, userid: 'user2005', likes: 52, comments: 8, shares: 2, content: "Exploring the city! #travel", timestamp: "2024-11-05" },
    { postid: 4, userid: 'user569', likes: 229, comments: 43, shares: 26, content: "Best day ever! #nature #blessed", timestamp: "2024-11-06" }
];

const followersDaily = [1000, 1015, 1030, 1060, 1100];
module.exports = {
    userActivitySummary(postArray, userid){

    },

    calculateEngagementRate(posts, totalFollowers) {
        //const { likes, comments, shares } = post;
        const engagementRate = ((likes + comments + shares) / totalFollowers) * 100;    //formula to calculate engagement rate - total interations/total followers * 100
        console.log(`Engagement rate for post ${posts.id}: ${engagementRate.toFixed(2)}%`);  //log it and keep it to 2 decimal place
        return engagementRate;
    },
};