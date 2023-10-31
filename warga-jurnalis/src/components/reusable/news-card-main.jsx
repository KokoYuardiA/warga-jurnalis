import React from 'react';

const NewsCard = ({ title, pubDate, image_url, category }) => {
  const defaultImageUrl = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';

  return (
    <div className="w-full flex bg-white p-4 mb-4 shadow-md">
      <div
        className="w-1/3 h-48"
        style={{
          backgroundImage: `url(${image_url || defaultImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="w-2/3 p-4">
        <h3 className="text-lg text-black font-semibold">{title}</h3>
        <p className="text-sm text-gray-900">{pubDate} | {category}</p>
      </div>
    </div>
  );
};

export default NewsCard;
