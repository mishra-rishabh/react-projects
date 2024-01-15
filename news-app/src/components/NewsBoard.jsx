/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const URL = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${100}&apiKey=9a5ce7cfbcf14577848f0160fdf9006c`;

        fetch(URL).then(resp => resp.json())
            .then(data => setArticles(data.articles));


    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-dark">News</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url} />
            })}
        </div>
    );
}

export default NewsBoard;