import Header from '../../components/Header'
import HeaderImage from '../../images/family-header.png'
import StoryImage from '../../images/kid-header.png'
import VisionImage from '../../images/kid-header.png'
import MissionImage from '../../images/kid-header.png'
import './about.css'


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our History" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
          <p>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
          <p>
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
          <p>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
          <p>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
          <p>
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About