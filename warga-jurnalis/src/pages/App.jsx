import { useState, useEffect } from 'react'
import '../styles/App.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import HeadlineNews from '../components/headline'
import LatestNews from '../components/latest-news'
import UserNews from '../components/user-news'

function App() {
  const [news, setNews] = useState([]);
  const [headlineNews, setHeadlineNews] = useState([])
  const apiKey = 'pub_31678e4ba0925e8206ac778a4f7f1f02922cb';
  const headlineApiKey = 'pub_31678e4ba0925e8206ac778a4f7f1f02922cb';


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
  //       setHeadlineNews(data.results);
  //     });
  // }, [apiKey, headlineApiKey]);

  useEffect(() => {
    fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/news')
      .then((res) => res.json())
      .then((result) => {
        setNews(result);
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

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <HeadlineNews newsData={headlineNews} />
        <UserNews newsData= {news}/>
        <LatestNews newsData= {news}/>
      </div>
    </>
  )
}

export default App
