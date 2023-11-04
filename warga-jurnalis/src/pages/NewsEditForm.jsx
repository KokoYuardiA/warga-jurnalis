import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../utils/api/auth/api';
import { Input, TextArea, Select } from '../components/reusable/input';
import Button from '../components/reusable/button'; 
import Header from '../components/header';

const NewsEditForm = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image_url: '',
    category: '',
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    content: '',
    image_url: '',
    category: '',
  });
  

  useEffect(() => {
    if (auth !== 'authenticated') {
      navigate('/login'); // Redirect to the login page if the user is not authenticated
    }
  }, [auth, navigate]);

  useEffect(() => {
    // Ambil data berita dengan ID yang sesuai dengan yang ada dalam URL
    fetch(`https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Isi formData dengan data berita yang diambil
        setFormData({
          title: data.title,
          content: data.content,
          image_url: data.image_url,
          category: data.category,
        });
        if (Array.isArray(data) && data.length > 0) {
            // Ambil objek pertama dari array
            setFormData(data[0]);
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan saat mengambil data berita', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (formData.title.trim() === '') {
      errors.title = 'Judul tidak boleh kosong';
    }

    if (formData.content.trim() === '') {
      errors.content = 'Konten tidak boleh kosong';
    }

    if (formData.image_url.trim() === '') {
      errors.image_url = 'URL Gambar tidak boleh kosong';
    }

    if (formData.category.trim() === '') {
      errors.category = 'Kategori tidak boleh kosong';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Buat objek data berita yang akan dikirim ke API
    const newsData = {
      title: formData.title,
      content: formData.content,
      image_url: formData.image_url,
      category: formData.category,
    };

    // Kirim data berita ke API untuk mengupdate berita
    fetch(`https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Tambahkan logika untuk menangani respons API jika diperlukan
        console.log('Berita berhasil diupdate', data);
        alert('Berita berhasil diupdate'); // Tampilkan alert
        navigate(`/news/${id}`); // Redirect ke halaman detail berita setelah berhasil mengedit
      })
      .catch((error) => {
        // Tambahkan logika untuk menangani kesalahan jika diperlukan
        console.error('Terjadi kesalahan', error);
        alert('Terjadi kesalahan');
      });
  };

  return (
    <div className='bg-white'>
      <Header />
      <div className='p-14'>
        <Link to={`/news/${id}`}>
          <Button label="Back to News" />
        </Link>
        <h2 className="text-2xl text-black font-bold mb-4 pt-6">Edit Berita</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              label="Judul"
              type="text"
              name="title"
              defaultValue={formData.title}
              onChange={handleChange}
            />
            {formErrors.title && <div className="text-red-500">{formErrors.title}</div>}

            <Select
              label="Kategori"
              options={["Tech", "Social", "Entertainment"]}
              name="category"
              selected={formData.category}
              onChange={handleChange}
            />
            {formErrors.category && <div className="text-red-500">{formErrors.category}</div>}

            <Input
              label="URL Gambar"
              type="text"
              name="image_url"
              defaultValue={formData.image_url}
              onChange={handleChange}
            />
            {formErrors.image_url && <div className="text-red-500">{formErrors.image_url}</div>}

            <TextArea
              label="Konten"
              name="content"
              defaultValue={formData.content}
              onChange={handleChange}
            />
            {formErrors.content && <div className="text-red-500">{formErrors.content}</div>}

            <Button label="Simpan" type="submit"/>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default NewsEditForm;
