import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    // let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    const desc = "Since the farmers' agitation involves the issue of human rights where the right to agitate in a peaceful manner is also to be respected, said the Commission, it has taken some other actions too";
    return (
        <div className="my-1 media">
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger crd" style={{ left: "90%", zIndex: 1 }}>{source}</span>
                <img src={!imageUrl ? "https://elegalmetrology.jharkhand.gov.in/japnet/images/news.jpg" : imageUrl}
                    style={{ width: "100%", height: "240px" }}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h6 className="card-title">{title}...</h6>
                    <p className="card-text">{!description ? desc.slice(0, 80) : description}...</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toDateString()}</small></p>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={newsUrl}
                            className="btn btn-sm btn-dark"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
