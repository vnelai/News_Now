import React from 'react';
import NewsCard from '../newsCard/NewsCard';
import './NewsList.css';

function NewsList({newsData}) {
  return (
    <div className='news-list'>
        {newsData.map((article, index) => (
            <NewsCard key={index} article={article} /> //Passing article and index as prop to NewsCard
        ))}
    </div>
  );
}

export default NewsList;