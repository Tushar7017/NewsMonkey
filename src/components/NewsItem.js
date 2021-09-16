import React from 'react'
import './NewsItem.css'

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    const desc = "Since the farmers' agitation involves the issue of human rights where the right to agitate in a peaceful manner is also to be respected, said the Commission, it has taken some other actions too";
    return (
        <div className="my-1">
            <div className="card">
                <div style={{
                    display: "flex",
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span className="badge rounded-pill bg-danger crd">{source}
                    </span>
                </div>
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
