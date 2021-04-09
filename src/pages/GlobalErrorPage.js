import React from 'react';
import { Link } from 'react-router-dom';

function GlobalErrorPage() {
  return (
    <section className="error-page section section-middle">
      <div className="error-container">
        <h1>Oops! Something went wrong. Please try again...</h1>
        <div>
          <img
            className="errorImg"
            src="https://image.freepik.com/free-vector/error-404-page-found-page-found-text-oops-looks-like-something-went-wrong_143407-2.jpg"
            alt="Oops something went wrong"
          />
        </div>
        <Link to="/" className="btn btn-danger">
          back home
        </Link>
      </div>
    </section>
  );
}

export default GlobalErrorPage;
