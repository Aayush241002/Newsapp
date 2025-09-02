import React from 'react'
import defaultImg from './news-default-big.png';

const NewsItem = (props) => {

  const formatIST = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'short',     // e.g., "Wed"
      year: 'numeric',
      month: 'short',       // e.g., "Aug"
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true          // or false for 24-hour format
    });
  }


  let { title, description, imageurl, date, newsurl, source } = props;
  return (
    <div className="my-4">
      <div className="card shadow-sm border-0 overflow-hidden">
        <div className="position-relative">
          <img
            src={imageurl}
            className="card-img-top img-fluid"
            alt="News"
            onError={(e) => { e.target.onerror = null; e.target.src = defaultImg; }}
            style={{ maxHeight: "230px", objectFit: "cover" }}
          />
          <span
            className="position-absolute top-0 start-0 translate-middle-y badge rounded-pill bg-danger"
            style={{ margin: '10px' }}
          >
            {source}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold"><small>{title}..</small></h5>
          <p className="card-text text-muted">
            <small>
              {description}.. <a href={newsurl} className="text-primary text-decoration-none">Read More</a>
            </small>
          </p>
          <span className="text-danger">{formatIST(date)}</span>
        </div>
      </div>
    </div>

  )

}

export default NewsItem