import Carousel from 'react-bootstrap/Carousel';

function Landing() {
      return (
            <Carousel className='carousel'>
                  <Carousel.Item>
                        <img 
                              src='/taj mahal landing.jpg' 
                              text="First slide" 
                              width='100%'
                        />
                        <Carousel.Caption>
                              <h1>Taj Mahal</h1>
                              <p>The Taj Mahal in Agra is a UNESCO World Heritage site and a major tourist attraction, known for its stunning architecture and historical significance..</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img 
                              src='/temple landing.jpeg' 
                              text="Second slide" 
                              width='100%'
                        />
                        <Carousel.Caption>
                              <h1>Second slide label</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img 
                              src='/kasi landing.jpg' 
                              text="Third slide"
                              width='100%' 
                        />
                        <Carousel.Caption>
                              <h1>Temples</h1>
                              <p>
                                    India is home to iconic temples like the Kashi Vishwanath and Golden Temple.
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                        <img 
                              src='/kerala landing.jpg' 
                              text="Third slide"
                              width='100%' 
                        />
                        <Carousel.Caption>
                              <h1>Kerala</h1>
                              <p>
                                    Kerala, "God's Own Country," is renowned for its backwaters, beaches, and vibrant culture.                              
                              </p>
                        </Carousel.Caption>
                  </Carousel.Item>
            </Carousel>
      );
}

export default Landing