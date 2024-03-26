import React from 'react';
import './pageTitle.css';

function PageTitle({page}) {
  return (
    <div className='pagetitle'>   
      <h1>{page}</h1>
      <nav>
        <ol className='breadcrumb'>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="bi-house-door"></i>
            </a>
          </li>
          <div className="breadcrumb-item active">{page}</div>
        </ol>
      
      </nav>        
      
    </div>
  )
}

export default PageTitle;
