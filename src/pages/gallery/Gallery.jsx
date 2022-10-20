import Header from '../../components/Header'
import HeaderImage from '../../images/gallery1.jpg'

import './gallery.css'

const Gallery = () => {
  const galleryLength = 30;
  const images = []

  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
 

  return (
    <>
    <Header  title="Our Gallery" image={HeaderImage}>
    Children Reasurrance Ministry is an NGO, that is set to reachout.
    To many across the globe with the focus of equiping, empowering,
    human life. Every Childs destiny counts!!! 
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image, index) => {
            return <article key={index}>
              <img src={image} alt={`Gallery Img ${index + 1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery