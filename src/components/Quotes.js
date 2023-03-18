import React, { useState, useEffect } from 'react';

import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';

const Quotes = () => {
  const [body, setQuote] = useState('');
  const [title, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(res => res.json())
      .then(data => {//console.log(data))
        let dataQuotes = data;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.body);
        setAuthor(randomQuote.title);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div id="quote-box">
      <div id="text"><p>{body}</p></div>
      <div id="author"><p>{title}</p></div>

      <div id="buttons">
        {/* <div className="social-media">
          <a href="#" id="twet-quote">
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a href="#" id="tumlr-quote">
            <span><img src={tumblrIcon} alt="" /></span>
          </a>
        </div> */}
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;