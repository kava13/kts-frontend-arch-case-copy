import React, { useEffect, useState } from 'react';

const NewsDetails: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const contentParam = params.get('content');
    setContent(contentParam || '');
  }, []);

  return (
    <div className="news-details">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default NewsDetails;