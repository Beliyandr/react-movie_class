import React from "react";

export function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbId: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src="https://placehold.jp/30/dd6699/ffffff/300x400.png?text=Картинка"
          />
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}
