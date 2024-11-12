import React, { useState } from 'react';
import '../styles/Homepage.css';

function Homepage() {
  const [question, setQuestion] = useState("");

  const handleInputChange = (e) => setQuestion(e.target.value);

  const handleSubmit = () => {
    console.log("Submitted question:", question);
    setQuestion(""); // Clear the input after submission
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1>AIQuest Knowledge Hub</h1>
        <p>AI-powered internal knowledge-sharing platform for your organization</p>
      </header>

      <section className="chat-interface">
        <input
          type="text"
          value={question}
          onChange={handleInputChange}
          placeholder="Type your question here..."
          className="chat-input"
        />
        <button onClick={handleSubmit} className="send-button">Ask</button>
      </section>
    </div>
  );
}

export default Homepage;
