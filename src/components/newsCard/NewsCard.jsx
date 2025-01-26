import React from 'react';
import './NewsCard.css'

function NewsCard({article}) {
  return (
    <div className='news-card'>
        {/* Add article image or fallback image */}
        <img
        src={article.urlToImage && article.urlToImage !== "" ? article.urlToImage : "public/images/news-fallback-img.jpeg"}
        alt={article.title}
        className="news-card-image"
        />
        {/* Add article details */}
        <div className='news-card-details'>
            <h2 className='news-card-title'>{article.title}</h2>
            <p className='news-card-description'>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className='read-more-btn'>Read More</a>
        </div>
    </div>
  );
}

export default NewsCard;