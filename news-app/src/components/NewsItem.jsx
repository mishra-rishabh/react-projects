/* eslint-disable react/prop-types */
const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-4 mx-4 px-2 py-2" style={{maxWidth: "345px"}}>
            <img src={src} className="card-img-top" alt="news-card" style={{height: "200px"}} />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 50)}</h5>
                    <p className="card-text">{description? description.slice(0, 90): "Click below to read more..."}</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
        </div>
    );
}

export default NewsItem;