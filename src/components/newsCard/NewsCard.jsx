import React from 'react';

function NewsCard({article}) {
  return (
    <div className='news-card'>
        {/* Add article image */}
        <img src={article.urlToImage} alt="{article.title}" className='news-card-img'/>

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