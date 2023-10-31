import React from 'react';


const NewsCard = ({ title, pubDate, image_url, category }) => {
  // Tautan gambar default jika image_url kosong
  const defaultImageUrl = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'; // Ganti dengan URL gambar default Anda

  return (
    <div className="bg-transparent rounded p-4 mb-4 mr-4 flex-shrink-0">
      <div
        className="relative transition-transform transform hover:scale-110 rounded-lg"
        style={{
          backgroundImage: `url(${image_url || defaultImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          width: '300px' // Sesuaikan tinggi sesuai kebutuhan
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h3 className="text-lg font-semibold text-white overflow-ellipsis whitespace-nowrap overflow-hidden">{title}</h3>
          <p className="text-sm text-gray-300">{pubDate} | {category}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
