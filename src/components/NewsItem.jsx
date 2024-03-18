import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg"
          }
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title ? title : "N/A"}...</h5>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "N/A"} on {date ? new Date(date).toDateString() : "N/A"}{" "}
            </small>
          </p>
          <h5>
            <span className="badge text-bg-danger">{source}</span>
          </h5>
          <p className="card-text">{description ? description : "N/A"}...</p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
