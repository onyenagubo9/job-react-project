import React from 'react'

function CardFilter( {filterChange}) {
  return (
    <div className='filter'>
        <a href="#" className="icon" data-bs-toggle='dropdown'>
            <i className="bi bi-three-dots"></i>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
                <h6>filter</h6>
            </li>
            <li>
                <a href="#" className="dropdown-item" onClick={() => filterChange('')}>
                    
                </a>
            </li>
            <li>
                <a href="#" onClick={() => filterChange('This Month')} className="dropdow-item">
                    This month
                </a>
            </li>
            <li>
                <a href="#" className="dropdown-item" onClick={() => filterChange('this year')}>
                    This year
                </a>
            </li>
        </ul>
      
    </div>
  )
}

export default CardFilter
