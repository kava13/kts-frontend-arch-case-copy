import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import NewsItem from './NewsItem';
import { NewsStore } from '../stores/NewsStore';

interface NewsListProps {
  newsStore: NewsStore;
}

const NewsList: React.FC<NewsListProps> = ({ newsStore }) => {
  useEffect(() => {
    newsStore.fetchNews();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      newsStore.fetchNews();
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="news-list">
      {newsStore.news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default observer(NewsList);