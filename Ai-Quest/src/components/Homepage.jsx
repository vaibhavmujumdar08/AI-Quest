import React from 'react';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to AIQuest</h1>
        <p>Your platform for efficient knowledge sharing within your organization</p>
      </header>
      
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>AI-generated responses using NLP</li>
          <li>Voting system for ranking answers</li>
          <li>Moderator tools for content verification</li>
          <li>User analytics for engagement tracking</li>
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
