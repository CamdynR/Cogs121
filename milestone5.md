# Target User Population 

Our target user population are people who are interested in staying up to date with current politics but want to have a more holistic view of the topics / understand both sides to each issue. These people usually do not have a favorite news source or place to get their relevant news from. They also want to have a way to quickly digest any current happenings without being bombarded with too much extra information. With Both Sides, the user is able to recieve five different news stories periodically and have links to both sides of the issue within a click. They can also search topics they may have heard from word of mouth and want to read more about while identifying which side of the topic they are engaging with. Users can quickly scroll through news stories with BothSides and directly read news from the sources themselves. After reading their chosen articles, they feel satisfied and more up to date with the current political happenings so they can be more engaged citizens.  

# Screenshots of Latest UI
![Image of Home Page](https://github.com/CamdynR/Cogs121/blob/master/Screenshots/Screen%20Shot%202019-05-29%20at%201.04.37%20AM.png)


![Image of Search Page1](https://github.com/CamdynR/Cogs121/blob/master/Screenshots/Screen%20Shot%202019-05-29%20at%201.04.53%20AM.png)



![Image of Search Page2](https://github.com/CamdynR/Cogs121/blob/master/Screenshots/Screen%20Shot%202019-05-29%20at%201.05.06%20AM.png)


# UI Improvements Explanation 

Our latest UI improved the home page so that tiles include pictures associated with the article and the article's title. This replaced our earlier versions where a description was also displayed. Once users click on an aritcle, they are lead to the article source that is opened in a new tab. Additionally, the search page now indicates whether articles or left, right, neutral, or unknown based by displaying symbols (democratic logo, republican logo, equal sign, and question mark respeectively).

# Data Visualization Screenshots 

![Image of Home Page](https://github.com/CamdynR/Cogs121/blob/master/Screenshots/Screen%20Shot%202019-05-29%20at%201.04.37%20AM.png)


# How Data was Implemented / Future Ideas 

The data we displayed came mostly in the form of titles and headlines. Since our app is a news app, we need users to get important info at a glance. We use newsapi to make requests that return a promise object with the desired news articles. We then unwrap the promise and store the articles (now as regular javascript objects) in our firebase database. We put every single article headline through a modified cosine similarity function and select "matching" articles. We then display the title and a thumbnail picture on the home page of our app. These are both provided by the newsapi developers. We also have links to each original article on our homepage. We show the data simply by using jquery to select certain html elements and change their values to the data received by the api calls. Each time the user refreshes, we make new requests though newsapi to get the latest news articles. 

For the future, we were looking into api's with fewer limitations. One big limitation of newsapi is that we cannot have access to the full content of the article. If we found an api that lets us have full access to the article (or made our own), we could display the content directly in our app. This would allow users to view both sides of each story very easily and without leaving the application / switching tabs. Another ambitious data visualization goal would be to check how popular an article is by seeing how many total articles have similar titles, and then displaying that article near the top of the page as a top headline, with some sort of importance indicator.


