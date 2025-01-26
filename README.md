News App

This is a simple News App built with React that fetches articles from an external API (NewsAPI) and displays them in a user-friendly interface. The app is responsive, with a dynamic header allowing users to navigate between different categories, and a search bar to find specific news articles.


Technologies Used

React.js: For building the user interface, utilizing hooks like useState and useEffect.
NewsAPI: For fetching real-time news data based on specific queries like technology, sports, health, etc.
CSS: For styling components and ensuring a responsive, visually appealing layout.
Vite: A fast and modern build tool for React applications.


Approach

1. Fetching News Data:
The app makes a call to the NewsAPI to fetch articles related to a query (e.g., "technology").
The fetched data is stored in the state using useState and passed down to child components.
2. Components:
App: The main component that fetches news data and renders the Header and NewsList components.
Header: Contains the app's title and navigation for different news categories (Technology, Sports, Entertainment, etc.), along with a search bar for news queries.
NewsList: Displays a list of NewsCard components, where each card shows details like an image, title, description, and a link to the full article.
NewsCard: A card component that displays each article's image (or fallback), title, description, and a link to the full article.
3. Styling:
Simple and clean layout with a focus on readability.
Media queries used for responsiveness to adapt to different screen sizes.


Live Site

You can view the live version of the News App here:
(https://news-now-mt0z.onrender.com)


Usage Instructions

Clone the repository:
git clone https://github.com/vnelai/News_Now.git
Install dependencies:
cd news-app
npm install
Create a .env file in the root of the project and add your NewsAPI key:
VITE_API_KEY=your-api-key-here
Run the app:
npm run dev
This will start the app in development mode, and you can view it in your browser at http://localhost:3000.


Unsolved Problems / Future Improvements
API-free tier limitations: After completing the project and deploying site on render, i noticed that the api data was not populating. Unfortunately, noticed too late that the news-api doesn't allow deployment on free tier. You can view full site by downloading github repo on local host. The live site will only display the header component which did not require an api for its elements. 
Error Handling: Although the API fetch is wrapped in a try-catch block, we can further improve error handling by displaying user-friendly messages when the API fails to load or if no articles match the query.
Search Functionality: Currently, the search bar does not have full functionality. Implementing a dynamic search query where users can type in and search for specific news articles would enhance the user experience.
Pagination: With a large number of articles, pagination would be useful to limit the number of articles displayed on a single page.
Infinite Scroll: Alternatively, implementing infinite scroll to load more articles as users scroll down could also improve user engagement.


License

This project is licensed under the MIT License - see the LICENSE file for details.