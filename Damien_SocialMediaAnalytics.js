// Dummy data for posts
const posts = [
    { postid: 1, userid: 'user0104', likes: 128, comments: 20, shares: 10, commentDetails: [{ text: "Love this post!", sentiment: "Positive" }, { text: "This is awful!", sentiment: "Negative" }]},
    { postid: 2, userid: 'user0104', likes: 85, comments: 15, shares: 5, commentDetails: [{ text: "So cool!", sentiment: "Positive" }, { text: "Not interesting", sentiment: "Negative" }]},
    { postid: 3, userid: 'user2005', likes: 52, comments: 8, shares: 2, commentDetails: [{ text: "Amazing!", sentiment: "Positive" }, { text: "Boring", sentiment: "Negative" }]},
    { postid: 4, userid: 'user2005', likes: 89, comments: 19, shares: 4, commentDetails: [{ text: "Fantastic!", sentiment: "Positive" }, { text: "Very poor", sentiment: "Negative" }]},
    { postid: 5, userid: 'user569', likes: 229, comments: 43, shares: 26, commentDetails: [{ text: "Excellent work!", sentiment: "Positive" }, { text: "Could be better", sentiment: "Neutral" }]},
];



module.exports = {
    getEngagementRate(postid, totalFollowers) {   //Calculates the engagement rate for a specific post
        const post = posts.find(post => post.postid === postid);    //finds the specified postid 
        if (!post) {
            console.log(`Post ${postid} does not exist.`);
            return null;
        }
        const { likes, comments, shares } = post;
        engagementRate = ((likes + comments + shares) / totalFollowers) * 100;    //engagement rate formula
        console.log(`========== Engagement rate for post ${postid} ==========`);
        console.log(`Engagement rate for post ${postid}: ${engagementRate.toFixed(2)}%`);
    },

    getTotalEngagementRate(userid, totalFollowers){     //Calculate total engagement rate by userid
        const userPosts = posts.filter(post => post.userid === userid)
        if(userPosts.length === 0){
            console.log(`No posts can be found for user ${userid}`)
        }else
        totalEngagement = userPosts.reduce((total, post) =>{
            total.likes = total.likes + post.likes;
            total.comments = total.comments + post.comments;
            total.shares = total.shares + post.shares;
            return total;   //returns updated total value
        },
        {likes:0, comments:0, shares:0 });
        const engagementRate = ((totalEngagement.likes + totalEngagement.comments + totalEngagement.shares) / totalFollowers) * 100;
        console.log(`========== Total engagement for ${userid} ==========`);
        console.log(`Total Likes: ${totalEngagement.likes}`);
        console.log(`Total Comments: ${totalEngagement.comments}`);
        console.log(`Total Shares: ${totalEngagement.shares}`);
        console.log(`Total Engagement Rate for ${userid} is ${engagementRate.toFixed(2)}%`);
    },

    getTopPost(userid){     //Get the most liked post for specified user
        const userPosts = posts.filter(post => post.userid === userid);     
        if(userPosts.length === 0){
            console.log(`No posts can be found for user ${userid}`)
        }else
        sortedPosts = userPosts.sort((a, b) => b.likes - a.likes);  //sort posts by descending order through comparing two values at a time
        mostLikedPost = sortedPosts[0];
        console.log(`========== Most Liked Post for ${userid} ==========`);
        console.log(`${userid} most liked post is post: ${mostLikedPost.postid}`);
    },

    getPostCount(){     //Gets the total number post that each user have
        const postCount = posts.reduce((count, post) =>{        //iterates through all post and accumulate the post count
            count[post.userid] = (count[post.userid] || 0)+1;       //0 is default value, add 1 to count if a post is found in the array
            return count;
        }, {});
        console.log(`========== Post Counts for each User ==========`);
        console.log("Post Counts for each user:", postCount)
    },

    getSentimentAnalysis(postid){   //Gets the sentiment analysis based on the specified postid
        const post = posts.find(post => post.postid === postid); 
        if (!post) {
            console.log(`Post ${postid} does not exist.`);
            return null;
        }else
        sentiments = post.commentDetails.reduce((sentimentCount, comment)=>{    //iterates through all commentDetails and accumulate the count value
            sentimentCount[comment.sentiment] = (sentimentCount[comment.sentiment] || 0)+1;
            return sentimentCount
        }, {Positive: 0, Negative: 0, Neutral: 0});
        console.log(`========== Sentiment Analysis for Post ${postid} ==========`);
        console.log(`Positive Comments: ${sentiments.Positive}`);
        console.log(`Negative Comments: ${sentiments.Negative}`);
        console.log(`Neutral Comments: ${sentiments.Neutral}`);
    },

};

