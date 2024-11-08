// Import the custom social media analytics module
const socialMediaAnalytics = require('./Damien_SocialMediaAnalytics.js');

// Sample data (already in Damien_socialMediaAnalytics.js but duplicated here for clarity)
const posts = [
    { id: 1, userId: 'user123', likes: 120, comments: 30, shares: 10, content: "Loving #nature!", timestamp: "2024-11-01" },
    { id: 2, userId: 'user123', likes: 85, comments: 15, shares: 5, content: "#Travel is life!", timestamp: "2024-11-03" },
    { id: 3, userId: 'user456', likes: 50, comments: 10, shares: 2, content: "Exploring the city! #travel", timestamp: "2024-11-05" },
    { id: 4, userId: 'user789', likes: 200, comments: 40, shares: 20, content: "Best day ever! #nature #blessed", timestamp: "2024-11-06" }
];

const followersDaily = [1000, 1015, 1030, 1060, 1100];
const comments = ["This is the best!", "I hate this", "Amazing content!", "Not bad"];

// Call functions and log results

// Get top 2 posts by likes
const topPosts = socialMediaAnalytics.getTopPosts(posts, 'likes', 2);
console.log("Top 2 posts by likes:", topPosts);

// Calculate engagement rate for the first post
const engagementRate = socialMediaAnalytics.calculateEngagementRate(posts[0], 1500).toFixed(2);
console.log("Engagement rate for post 1:", `${engagementRate}%`);

// Get user activity summary for user123
const userSummary = socialMediaAnalytics.getUserActivitySummary(posts, 'user123');
console.log("User activity summary for user123:", userSummary);

// Track hashtag usage for #travel
const hashtagUsage = socialMediaAnalytics.trackHashtagUsage(posts, '#travel');
console.log("Hashtag #travel usage:", hashtagUsage);

// Calculate follower growth rate
const followerGrowthRate = socialMediaAnalytics.getFollowerGrowth(followersDaily).toFixed(2);
console.log("Follower growth rate:", `${followerGrowthRate}%`);

// Calculate average time between posts
const avgTimeBetweenPosts = socialMediaAnalytics.averageTimeBetweenPosts(posts).toFixed(2);
console.log("Average time between posts:", `${avgTimeBetweenPosts} days`);

// Perform sentiment analysis on comments
const sentimentAnalysisResults = socialMediaAnalytics.sentimentAnalysis(comments);
console.log("Sentiment analysis results:", sentimentAnalysisResults);
