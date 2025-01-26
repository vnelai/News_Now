import React, {useState, useEffect} from 'react'; // Import React modules
import Header from './components/header/Header'; // Import Header component 
import NewsList from './components/newsList/NewsList';

import './App.css';

function App() {
  // Create state to hold news data
  const [newsData, setNewsData] = useState([]);

  // Set up useEffect to handle fetch the news data 
  useEffect( ()=> { 
    const QUERY = 'technology'; // Query example
    const API_KEY = import.meta.env.VITE_API_KEY // Importing API_KEY from .env file;

    const fetchNewsData = async () => {
      try {
        // Fetch data from API
        const res = await fetch(`https://newsapi.org/v2/everything?q=${QUERY}&apiKey=${API_KEY}`)
        if (!res.ok) {
          throw new Error("Failed to fetch data from server"); // Handle error for failing to fetch data from API
        }
        const data = await res.json();  // Convert new fetch data to json format
        setNewsData(data.articles); // Set the fetched data (articles) to the state
      } catch (error) {
        console.error(error); // Log error in console
      }
    };
    fetchNewsData(); //Calling function to fetch data from api
  }, []); // Empty dependency since we want the useEffect to run once when component mounts

  return (
    <>
      <Header/>
      <NewsList newsData={newsData}/> {/* Pass newsData as prop to NewsList */}
    </>
  )
}

export default App
