// Import the custom social media analytics module
const socialMediaAnalytics = require('./Damien_SocialMediaAnalytics.js');

socialMediaAnalytics.getEngagementRate(1, 1500);
socialMediaAnalytics.getTotalEngagementRate('user0104', 780);
socialMediaAnalytics.getTopPost('user2005');
socialMediaAnalytics.getPostCount();
socialMediaAnalytics.getSentimentAnalysis(2);
socialMediaAnalytics.getSentimentAnalysisByUser('user0104');

