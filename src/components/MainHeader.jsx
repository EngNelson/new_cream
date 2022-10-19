import {Link} from 'react-router-dom'
import Image from '../images/cream_main.png'

const MainHeader = () => {
    return (
      <header className='main__header'>
          <div className="container main__header-container">
              <div className="main__header-left">
                  <h4>CREAM</h4>
                  <h1>Join The Legends that makes kids life's better.</h1>
                  <p>
                    Children Reasurrance Ministry is an NGO, that is set to reachout.
                    To many across the globe with the focus of equiping, empowering,
                    human life. Every Childs destiny counts!!! 
                  </p>
                  <Link to="/plans" className='btn lg'>Get Started</Link>
              </div>
              <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                    <img src={Image} alt="Main Header" />
                </div>
              </div>
          </div>
      </header>
    )
  }
  
  export default MainHeader