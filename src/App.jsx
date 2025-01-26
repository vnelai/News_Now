import React, {useState, useEffect} from 'react'; // Import React modules
import Header from './components/header/Header'; // Import Header component 
import NewsCard from './components/newsCard/NewsCard'; // Import NewsCard component
import './App.css';

function App() {
  // Create state to hold news data
  const [newsData, setNewsData] = useState([]);


  return (
    <>
      <Header/>
      <NewsCard/>
    </>
  )
}

export default App
