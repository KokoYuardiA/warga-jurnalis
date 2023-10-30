import React, { useEffect, useState } from 'react';
import NewsCard from './reusable/card-news';

const HeadlineNews = () => {
  const [news, setNews] = useState([]);
  const apiKey = 'pub_31678e4ba0925e8206ac778a4f7f1f02922cb'; // Ganti dengan kunci API Anda

  useEffect(() => {
    // Panggil API untuk mendapatkan berita Indonesia
    fetch(`https://newsdata.io/api/1/news?country=id&category=top&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      });
  }, [apiKey]);

  return (
    <div className='px-16'>
      <h2 className="text-2xl font-bold mb-4">Headline News - Indonesia</h2>
      <div className="flex overflow-x-auto gap-2">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            published={item.pubDate}
            image_url={item.image_url}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadlineNews;
