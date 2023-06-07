import React, { useState, useEffect} from 'react';
import Quote from './components/Quote';


function App() {
  const [quote, setQuote] = useState({
    id: null,
    author: null,
    quote: null
  });

  const fetchQuote = async () => {
    return await fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json());
  }

  const generate = async () => {
    setQuote(await fetchQuote());
  }


  useEffect(() => {
    const fetchData = async () => {
      const newQuote = await fetchQuote();
      setQuote(newQuote);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Quote quote = {quote} />

      <button onClick={generate}>Generate new quote</button>
    </div>
  );
}

export default App;
