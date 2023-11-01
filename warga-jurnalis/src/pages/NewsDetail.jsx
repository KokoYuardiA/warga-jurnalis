import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar';
import NewsDetailCard from '../components/news-detail-card';
import { Link } from 'react-router-dom';

const NewsDetail = () => {
  const headlineApiKey = 'pub_31678e4ba0925e8206ac778a4f7f1f02922cb';
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    fetch(`https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news?article_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewsDetails(data);
        if (Array.isArray(data) && data.length > 0) {
            // Ambil objek pertama dari array
            setNewsDetails(data[0]);
        }
      });

      fetch(`https://newsdata.io/api/1/news?country=id&category=top&apikey=${headlineApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAdditionalData(data.results);
      });
    
  }, [id]);

  return (
    <div>
      <Header />
      <Navbar />
      <div>
        {newsDetails ? (
          <NewsDetailCard
          title={newsDetails.title}
          pubDate={newsDetails.pubDate}
          image_url={newsDetails.image_url}
          category={newsDetails.category}
          content={newsDetails.content}
        />
        ) : (
          <p>Loading...</p>
        )}
        
      </div>
    </div>
  );
};

export default NewsDetail;
