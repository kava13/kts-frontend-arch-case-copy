import React from "react";
import "../styles/NewsItem.css";

interface NewsItemProps {
  article: any;
}

const NewsItem: React.FC<NewsItemProps> = ({ article }) => {
  const handleClick = () => {
    window.location.href = `/news?title=${article.title}&content=${article.content}`;
  };

  return (
    <div className="news-item" onClick={handleClick}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
};

export default NewsItem;
