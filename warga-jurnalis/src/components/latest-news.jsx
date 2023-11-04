import React, { useState, useEffect } from 'react';
import NewsCard from './reusable/news-card-main';
import { Link } from 'react-router-dom';

const LatestNews = ({ newsData}) => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [displayedNews, setDisplayedNews] = useState(5); // Jumlah berita yang ditampilkan pada awalnya
  const newsPerLoad = 5; // Jumlah berita yang akan ditambahkan setiap kali tombol "Load More" ditekan

  const loadMoreNews = () => {
    setDisplayedNews(displayedNews + newsPerLoad);
  };

  return (
    <div className='p-16 bg-slate-200'>
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="flex flex-col">
        {newsData.slice(0, displayedNews).map((news, index) => (
          <Link key={index} to={`/news/${news.id}`}>
          <NewsCard
            title={news.title}
            pubDate={news.pubDate}
            image_url={news.image_url}
            category={news.category}
          />
        </Link>
        ))}
        {loading && <p>Loading...</p>}
        {!hasMore && !loading && <p>No more news available.</p>}
        {hasMore && displayedNews < 10 && (
        <button
          onClick={loadMoreNews}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        >
          Load More
        </button>
      )}
      </div>
    </div>
    
  );
};

export default LatestNews;
