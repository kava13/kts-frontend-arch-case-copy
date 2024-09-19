import React, { useEffect } from "react";

interface InfiniteScrollProps {
  loadMore: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default InfiniteScroll;
