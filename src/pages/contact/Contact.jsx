import Header from '../../components/Header'
import HeaderImage from '../../images/values.png'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
      Children Reasurrance Ministry is an NGO, that is set to reachout.
      To many across the globe with the focus of equiping, empowering,
      human life. Every Childs destiny counts!!! 
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@bechem200.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+23767251082" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact