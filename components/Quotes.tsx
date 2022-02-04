import React from 'react';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaSync, FaQuoteLeft } from 'react-icons/fa';

const API =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class App extends React.Component {
  state = {
    quotes: [
      {
        quote:
          'Life isn’t about getting and having, it’s about giving and being.',
        author: 'Kevin Kruse'
      }
    ],
    index: 0
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios
      .get(API)
      .then((res) => {
        this.setState(
          {
            quotes: res.data.quotes
          },
          this.getRandomIndex
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getRandomIndex = () => {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index
      });
    }
  };

  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;

    const facebookURL =
      'https://www.facebook.com/sharer/sharer.php?u=https://aspire-to-inspire.netlify.app/';

    return (
      <body className="flex flex-col min-h-screen">
        <header className="flex flex-col items-center justify-center p-8">
          <img
            className="shadow-lg rounded-full inline-block w-40 h-40 m-8"
            src={`https://picsum.photos/600?grayscale&random=${index}`}
            alt="logo"
          />
          <h1 className="font-bold capitalize text-gray-500 dark:text-gray-400 text-center text-lg pt-4">
            Aspire to Inspire
          </h1>
        </header>

        <main className="flex-grow">
          <div
            className="container text-gray-500 dark:text-gray-400 flex flex-col items-center justify-center gap-4 p-4 md:p-8"
            id="quote-box"
          >
            {quote && (
              <div className="">
                <p id="text">
                  <FaQuoteLeft />
                  &nbsp; {quote.quote}
                </p>
                <cite id="author" className="float-right">
                  -{quote.author}
                </cite>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8">
              <a
                id="tweet-quote"
                className="flex items-center justify-center border-2 rounded-full py-1 px-6"
                target="_blank"
                rel="noreferrer"
                href={tweetURL}
              >
                <FaTwitter />
                &nbsp; Tweet
              </a>

              <a
                id="fb-quote"
                className="flex items-center justify-center border-2 rounded-full py-1 px-6"
                target="_blank"
                rel="noreferrer"
                href={facebookURL}
              >
                <FaFacebook />
                &nbsp; Share
              </a>

              <button
                className="flex items-center justify-center bg-gray-800 border-2 rounded-full py-1 px-6"
                onClick={this.getRandomIndex}
                id="new-quote"
              >
                <FaSync />
                &nbsp; Get Quote
              </button>
            </div>
          </div>
        </main>
        <footer className="text-gray-500 dark:text-gray-400">
          <div className="text-center text-xs p-2">
            Made with TailwindCSS by{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://hellojuninguyen.netlify.app/"
            >
              juniNguyen.
            </a>
          </div>
        </footer>
      </body>
    );
  }
}

export default App;
