import React, { useEffect, useState } from 'react';
import NewsCard from './reusable/card-news';

const HeadlineNews = () => {
  const [news, setNews] = useState([]);
  const apiKey = 'pub_31678e4ba0925e8206ac778a4f7f1f02922cb'; // Ganti dengan kunci API Anda
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = window.innerWidth > 768 ? 3 : 1;

  useEffect(() => {
    // Panggil API untuk mendapatkan berita Indonesia
    fetch(`https://newsdata.io/api/1/news?country=id&category=top&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      });
  }, [apiKey]);

  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (endIndex < news.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="px-16">
      <h2 className="text-2xl font-bold mb-4">Headline News - Indonesia</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {news.slice(startIndex, endIndex).map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            published={news.published}
            image_url={news.image_url}
            category={news.category}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevClick}
          disabled={currentPage === 0}
          className="px-2 py-1 bg-gray-200 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={endIndex >= news.length}
          className="px-2 py-1 bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HeadlineNews;
