import React, { useState, useEffect } from 'react';
import NewsCard from './reusable/news-card-main';
import { Link } from 'react-router-dom';

const UserNews = ({ newsData }) => {
  const [loading, setLoading] = useState(false);
  const [displayedNews, setDisplayedNews] = useState(5); // Jumlah berita yang ditampilkan pada awalnya
  const newsPerLoad = 5; // Jumlah berita yang akan ditambahkan setiap kali tombol "Load More" ditekan

  const loadMoreNews = () => {
    setDisplayedNews(displayedNews + newsPerLoad);
  };
  const reversedNewsData = [...newsData].reverse();

  return (
    <div className="p-16 bg-slate-300">
      <h2 className="text-2xl font-bold mb-4">People's News</h2>
      <div className="flex flex-col">
        {reversedNewsData.slice(0, displayedNews).map((news, index) => (
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
        {!loading && displayedNews < newsData.length && (
          <button
            onClick={loadMoreNews}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          >
            Load More
          </button>
        )}
        {!loading && displayedNews >= newsData.length && (
          <p>No more news available.</p>
        )}
      </div>
    </div>
  );
};

export default UserNews;
