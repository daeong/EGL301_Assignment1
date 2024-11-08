const posts = [
    { id: 1, userId: 'user123', likes: 120, comments: 30, shares: 10, content: "Loving #nature!", timestamp: "2024-11-01" },
    { id: 2, userId: 'user123', likes: 85, comments: 15, shares: 5, content: "#Travel is life!", timestamp: "2024-11-03" },
    { id: 3, userId: 'user456', likes: 50, comments: 10, shares: 2, content: "Exploring the city! #travel", timestamp: "2024-11-05" },
    { id: 4, userId: 'user789', likes: 200, comments: 40, shares: 20, content: "Best day ever! #nature #blessed", timestamp: "2024-11-06" }
];

const followersDaily = [1000, 1015, 1030, 1060, 1100];

module.exports = {
    getTopPosts(array, metric, limit) {
        return array.sort((a, b) => b[metric] - a[metric]).slice(0, limit);
    },
    
    // 2. Calculate engagement rate for a post
    calculateEngagementRate(post, totalFollowers) {
        const { likes, comments, shares } = post;
        return ((likes + comments + shares) / totalFollowers) * 100;
    },
    
    // 3. Get a summary of a user's activity
    getUserActivitySummary(postsArray, userId) {
        const userPosts = postsArray.filter(post => post.userId === userId);
        const totalPosts = userPosts.length;
        const avgLikes = userPosts.reduce((acc, post) => acc + post.likes, 0) / totalPosts;
        const avgComments = userPosts.reduce((acc, post) => acc + post.comments, 0) / totalPosts;
        return { totalPosts, avgLikes, avgComments };
    },
    
    // 4. Track usage of a specific hashtag
    trackHashtagUsage(postsArray, hashtag) {
        return postsArray.filter(post => post.content.includes(hashtag)).length;
    },
    
    // 5. Calculate follower growth rate
    getFollowerGrowth(dailyFollowersArray) {
        const start = dailyFollowersArray[0];
        const end = dailyFollowersArray[dailyFollowersArray.length - 1];
        return ((end - start) / start) * 100;
    },
    
    // 6. Calculate average time between posts
    averageTimeBetweenPosts(postsArray) {
        const timestamps = postsArray.map(post => new Date(post.timestamp)).sort((a, b) => a - b);
        let totalInterval = 0;
        for (let i = 1; i < timestamps.length; i++) {
            totalInterval += (timestamps[i] - timestamps[i - 1]) / (1000 * 60 * 60 * 24); // Convert ms to days
        }
        return totalInterval / (timestamps.length - 1);
    },
    
    // 7. Simple sentiment analysis for comments
    sentimentAnalysis(commentsArray) {
        const positiveWords = ['love', 'great', 'best', 'amazing'];
        const negativeWords = ['hate', 'bad', 'worst', 'awful'];
        
        return commentsArray.map(comment => {
            const words = comment.toLowerCase().split(" ");
            const positiveCount = words.filter(word => positiveWords.includes(word)).length;
            const negativeCount = words.filter(word => negativeWords.includes(word)).length;
    
            return positiveCount > negativeCount ? 'positive' :
                   negativeCount > positiveCount ? 'negative' : 'neutral';
        });
    }
};