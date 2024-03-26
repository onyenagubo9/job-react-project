import React, {useState} from 'react';
import CardFilter from './CardFilter';
import './card.css'

function Card({card}) {

    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className='col-xxl-4 col-md-3'>
        <div className="card info-card sales-card ">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title text-orange-500">
                    <span className='text-orange-500'>{card.name}</span>
                </h5>

                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className={card.icon}></i>
                    </div>
                    <div className="ps-3">
                        <h6>
                            {card.name == 'Revenue'
                                ? '$' + card.amount.toLocaleString('en-US')
                                : card.amount.toLocaleString('en-US')}
                            
                        </h6>

                        
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card;
