import React from 'react';

const MoreArticles = () => {
  const moreArticles = [
    {
      id: 8,
      title: 'Eating Disorders',
      description: 'A range of psychological disorders characterized by abnormal or disturbed eating habits.',
      link: 'https://www.nationaleatingdisorders.org/',
    },
    // Add more articles as needed
  ];

  return (
    <div className="more-articles">
      <h2>Read More Articles</h2>
      {moreArticles.map((article) => (
        <div className="article-item" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default MoreArticles;
