# Assignment 1
This project consist of the Node module of functions to analyze data from social media to better understand how the content performs.

There is an array that contains all the dummy data: post

Below are the following functions that I implemented for this Node Module:
1) getEngagementRate - This function calculates the engagement rate of a specific post based on its likes, comments and shares relative to the total follower count.
The function will first take in two parameters postid and totalFollowers, followed by finding the specified postid from the post array using the .find() method. If the post is found, it will calculate the engagement rate using a formula ((likes+comments+shares)/totalFollowers)*100 which will give us the engagement rate in %. Else if the post does not exist, an error message appears.

2) getTotalEngagementRate - This function calculates the overall engagement rate for a specified user based on its likes, comments and shares relative to the total follower count.
The function will first take in two parameters userid and totalFollowers,
followed by filtering all posts by the specified userid using the .filter() method. If there are posts found, it will calculate the total likes, comments and shares by using the .reduce() method to accumulate the values across all the posts and then get the total engagement rate using similar methods to the previous method. Else if the post does not exist, an error message appears.

3) getTopPost - This function identifies the most liked post for a specific user.
The function will first take in one parameter userid, followed by filtering all the posts from the post array by the specified user using the .filter() method. If there are posts found, it will sort the filtered posts in descending order using .sort((a,b)=>b.likes - a.likes) method which sorts by comparing two values at a time and the first post in the sorted array will have the most likes. Else if the post does not exist, an error message appears.

4) getPostCount - This function counts the total number of posts each user has.
The function wil first use the .reduce() method to iterate through all the posts and count posts by each user, then for each post by a user found the count increases and outputs it to the second argument which is the initial value of count which set as an empty object {}.

5) getSentimentAnalysis - This function provides a breakdown of the positive, negative and neutral comments for specific post.
The function will first take in one parameter postid, followed by finding the specified post using the .find() method. If the post exists, it uses the .reduce() method to iterate through each commentsDetails and output it to "Positive", "Negative", "Neutral" which are all set to 0 at first and increases the number based on the comment details. Else if the post does not exist, an error message appears.


You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References
1) https://sproutsocial.com/insights/social-media-analytics/
    -used to learn about some of the key functions for social media analytics that could be used in my code
2) ChatGPT
    -used to help me learn other ways of coding the functions and debugging