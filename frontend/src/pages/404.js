import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <main className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light p-4">
      <div className="d-flex flex-column align-items-center space-y-4">
        <h1 class="bi bi-link-45deg display-2"></h1>
        <h1 className="display-1">404</h1>
        <h2 className="display-5 fw-bold text-muted">Oops, page not found.</h2>
        <p className="text-muted">
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <button className="btn btn-dark btn-lg" onClick={() => window.location.assign('/')}>
            <Link className='text-decoration-none text-white' to="/home">
                Go back home
            </Link>
        </button>
      </div>
    </main>
  )
}