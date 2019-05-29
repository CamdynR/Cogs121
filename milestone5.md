# Target User Population 

Our target user population are people who are interested in staying up to date with current politics but want to have a more holistic view of the topics / understand both sides to each issue. These people usually do not have a favorite news source or place to get their relevant news from. They also want to have a way to quickly digest any current happenings without being bombarded with too much extra information. With Both Sides, the user is able to recieve five different news stories periodically and have links to both sides of the issue within a click. They can also search topics they may have heard from word of mouth and want to read more about while identifying which side of the topic they are engaging with. Users can quickly scroll through news stories with BothSides and directly read news from the sources themselves. After reading their chosen articles, they feel satisfied and more up to date with the current political happenings so they can be more engaged citizens.  

# Screenshots of Latest UI




# UI Improvements Explanation 

Our latest UI improved the home page so that tiles include pictures associated with the article and the article's title. This replaced our earlier versions where a description was also displayed. Additionally, the search page is now color coded to indicate the results as either left or right. 

# Data Visualization Screenshots 



# How Data was Implemented / Future Ideas 

The data we displayed came mostly in the form of titles and headlines. Since our app is a news app, we need users to get important info at a glance. We use newsapi to make requests that return a promise object with the desired news articles. We then unwrap the promise and store the articles (now as regular javascript objects) in our firebase database. We put every single article headline through a modified cosine similarity function and select "matching" articles. We then display the title and a thumbnail picture on the home page of our app. These are both provided by the newsapi developers. We also have links to each original article on our homepage. We show the data simply by using jquery to select certain html elements and change their values to the data received by the api calls. Each time the user refreshes, we make new requests though newsapi to get the latest news articles. 

For the future, we were looking into api's with fewer limitations. One big limitation of newsapi is that we cannot have access to the full content of the article. If we found an api that lets us have full access to the article (or made our own), we could display the content directly in our app. This would allow users to view both sides of each story very easily and without leaving the application / switching tabs. Another ambitious data visualization goal would be to check how popular an article is by seeing how many total articles have similar titles, and then displaying that article near the top of the page as a top headline, with some sort of importance indicator.

