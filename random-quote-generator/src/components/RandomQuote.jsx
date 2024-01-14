import { useState } from "react";
import { RiRefreshLine } from "react-icons/ri";
import "./RandomQuote.css";

const RandomQuote = () => {
    let quotes = [];

    const loadQuotes = async () => {
        const resp = await fetch("https://type.fit/api/quotes");
        quotes = await resp.json();
    };

    loadQuotes();
    
    const selectRandomQuote = () => {
        const length = quotes.length;
        const selectedQuote = quotes[Math.floor(Math.random() * length)];

        setQuote(selectedQuote);
    }

    const [quote, setQuote] = useState({
        text: "Calmness, gentleness, silence, self-restraint, and purity. These are the disciplines of mind!!",
        author: "Bhagvad Geeta"
    });

    
    return (
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author.split(",")[0]}</div>
                    <div className="icons">
                        <RiRefreshLine className="icon" onClick={selectRandomQuote} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandomQuote;