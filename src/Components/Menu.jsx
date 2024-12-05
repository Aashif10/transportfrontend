import React from 'react'
import {data} from '../RestApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">CARS DELIVERED</h1>
                <p>The car was delivered safely to the buyer's location without any damage. All necessary precautions were taken during transport to ensure its secure arrival.!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                {/* <h3>{element.title}</h3> */}
                                {/* <button>{element.category}</button> */}
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu