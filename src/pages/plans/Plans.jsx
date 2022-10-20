import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_4.jpg"
import Card from "../../UI/Card"
import {plans} from "../../data"


import './plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Memebership Plans" image={HeaderImage}>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return<Card key={id} className='plan'>
             <h3>{name}</h3>
             <small>{desc}</small>
             <h1>{`$${price}`}</h1><h2>/mo</h2>
             <h4>Features</h4>
             {
              features.map(({features,available}, index) =>{
                return <p key={index} className={!available ? 'disabled' : ''}>{features}</p>
              })
             }
              <button className="btn lg">Choose Plan</button>
            </Card>
          })
        }  
      </div>
    </section>
    </>
  )
}

export default Plans