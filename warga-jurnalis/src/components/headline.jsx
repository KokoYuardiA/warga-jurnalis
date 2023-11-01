import React, { useEffect, useState } from 'react';
import NewsCard from './reusable/card-news';
import { Link } from 'react-router-dom';
import Button from './reusable/button'
 
const HeadlineNews = ({ newsData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = window.innerWidth > 768 ? 3 : 1;

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (endIndex < newsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-16">
      <h2 className="text-2xl font-bold mb-4">Headline News - Indonesia</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 rounded">
        {newsData.slice(startIndex, endIndex).map((headlineNews, index) => (
          <Link key={index} to={`/news/${headlineNews.article_id}`}>
            <NewsCard
              key={index}
              title={headlineNews.title}
              pubDate={headlineNews.pubDate}
              image_url={headlineNews.image_url}
              category={headlineNews.category}
            />
          </Link>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <Button 
          label="Previous"
          onClick={handlePrevClick}
          disabled={currentPage === 0} />
        <Button 
          label="Next"
          onClick={handleNextClick}
          disabled={endIndex >= newsData.length} />
      </div>
    </div>
  );
};

export default HeadlineNews;
