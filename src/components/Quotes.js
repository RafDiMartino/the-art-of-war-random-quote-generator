import { useState, useEffect } from "react";
import { CgQuote } from "react-icons/cg";
import { ImTwitter } from "react-icons/im";


function Quotes() {

    const [quote, setQuote] = useState("");
    const [book, setBook] = useState("")

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        fetch("https://gist.githubusercontent.com/RafDiMartino/6260f573e81788f4accc6a2ef5b1177d/raw/a23831326f8f29b76bd97fb3dd69c3824c7c4cb9/quotes.json")
            .then(res => res.json())
            .then(data => { 
                let dataQuotes = data.quotes;
                let randomNumber = Math.floor(Math.random() * dataQuotes.length)
                let randomQuote = dataQuotes[randomNumber] 

                setQuote(randomQuote.quote)
                setBook(randomQuote.book)
            })
    }

    const handleClick = () => {
        getQuote();
    }

    return (
        <div className="quoteContainer">
            <main className="text">
                <p className="quote"><CgQuote className="quoteIcon" />{quote}<CgQuote className="quoteIcon" /></p>
            </main>
            <div className="author">
                <p>- {book}</p>
                <p className="book">- The Art Of War - Sun Tzu</p>
            </div> 
            <div className="btns-container">
                <a href={`https://twitter.com/intent/tweet?text="${quote}" -The Art of War -${book}`} target="blank" className="twitter-share-button" data-show-count="false"><button aria-label="twitter"><ImTwitter className="twitter" /></button></a>
                <button onClick={handleClick} className="new-quote">New Quote</button>
            </div>     
        </div>
    )
}

export default Quotes
