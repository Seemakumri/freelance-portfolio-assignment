
import React from 'react';
import '../style/Blog.css';

import img1 from '../assets/image 21.svg';
import img2 from '../assets/blackImage.png';
import img3 from '../assets/image 22.svg';

const blogPosts = [
  {
    id: 1,
    image: img1,
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
  },
  {
    id: 2,
    image: img2,
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
  },
  {
    id: 3,
    image: img3,
    date: 'Feb 16, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB'],
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>✺ Blog</h2>
        <a href="#">view all</a>
      </div>

      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          <img src={post.image} alt={post.title} className="blog-img" />
          <div className="blog-content">
            <p className="blog-date">{post.date}</p>
            <h3 className="blog-title">{post.title}</h3>
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <button className="read-btn">Read</button>
        </div>
      ))}
    </section>
  );
};

export default Blog;
