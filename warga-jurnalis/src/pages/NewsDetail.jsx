import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Navbar from '../components/navbar';
import NewsDetailCard from '../components/news-detail-card';
import { Link } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState(null);

  useEffect(() => {
    fetch(`https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewsDetails(data);
        if (Array.isArray(data) && data.length > 0) {
            // Ambil objek pertama dari array
            setNewsDetails(data[0]);
        }
      });
  }, [id]);

  return (
    <div className='bg-white h-screen'>
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
