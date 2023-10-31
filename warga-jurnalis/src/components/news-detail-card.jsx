import React from 'react';

const NewsDetailCard = ({ title, pubDate, image_url, content, category }) => {
  const defaultImageUrl = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

  return (
    <div className="p-16 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{pubDate} | {category}</p>
      <div
        className="p-16 border rounded-lg h-80"
        style={{
          backgroundImage: `url(${image_url || defaultImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default NewsDetailCard;
