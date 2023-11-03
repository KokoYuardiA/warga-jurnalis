import { useState, useEffect } from 'react'
import '../styles/App.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import HeadlineNews from '../components/headline'
import LatestNews from '../components/latest-news'
import UserNews from '../components/user-news'

function App() {
  const [news, setNews] = useState([]);
  const [userNews, setUserNews] = useState([]);
  const [headlineNews, setHeadlineNews] = useState([])


  // useEffect(() => {
  //   // Panggil API untuk mendapatkan berita Indonesia
  //   fetch(`https://newsdata.io/api/1/news?country=id&apikey=${apiKey}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setNews(data.results);
  //     });

  //     fetch(`https://newsdata.io/api/1/news?country=id&category=top&apikey=${headlineApiKey}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setHeadlineNews(data.results);
  //     });
  // }, [apiKey, headlineApiKey]);

  useEffect(() => {
    fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUserNews(result);
      });
  }, []);

  useEffect(() => {
    fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news?category=top')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setHeadlineNews(result);
      });
  }, []);

  useEffect(() => {
    fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setNews(result);
      });
  }, []);

  return (
    <>
      <div className='bg-gray'>
        <Header />
        <Navbar />
        <HeadlineNews newsData={headlineNews} />
        <UserNews newsData= {userNews}/>
        <LatestNews newsData= {news}/>
      </div>
    </>
  )
}

export default App
