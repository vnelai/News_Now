import React from 'react'
import NewsCard from '../newsCard/NewsCard'

function NewsList({newsData}) {
  return (
    <div className='news-list'>
        {newsData.map((article, index) => (
            <NewsCard key={index} article={article} /> //Passing article as prop to NewsCard
        ))}
    </div>
  );
}

export default NewsList