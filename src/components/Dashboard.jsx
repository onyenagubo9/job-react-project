import React, {useState, useEffect} from 'react'
import './dashboard.css'
import Card from './Card'
import Table from './Table'

function Dashboard() {
    const [cards, setCards] = useState ([])

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
           .then(res => res.json())
           .then(data => {
            setCards(data);
           })
           .catch( e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <section className="dashboard section">
        <div className="row">
            <div className="">
                <div className="row">
                    {
                        cards && cards.length>0 &&
                        cards.map(card=><Card  key={card._id} card={card} />)
                    }
                </div>
            </div>
            <div className="pt-4 min-h-screen ">
                <Table/>
            </div>
        </div>
    </section>
  )
}

export default Dashboard
