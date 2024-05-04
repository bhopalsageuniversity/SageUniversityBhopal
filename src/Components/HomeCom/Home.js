import React from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css'

import Awards from './Awards';

import Mous from './Mous';
import Counter from './Counter';
import Gallery from './Gallery';

import Testmonial from './Testmonial';
import { BiSolidSchool } from 'react-icons/bi';
import Counters from './Counters';

import Placement from './Placement';

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div className='back1'>
        <Carousel

          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}

        >
          <div style={{ background: 'url(./imgs/slider_bg.png)' }} className='bg67'>
            <div className='bg6'>
              <h1 className='text2'>Navigating Success <br></br>On <span style={{ color: " #af1318 " }}>  Strategy at a <br></br> Time Life</span>   </h1>
              <p>We have been operating for over a decade, providing top-notch  our <br></br> clients and building a strong track record in the industry.</p>
              <Button className="bhngh">
                Contact Us
              </Button>
            </div></div>
          <div style={{ background: 'url(./imgs/slider_bg.png)' }} className='bg67'>
            <div className='bg6'>
              <h1 className='text2'>Navigating Success <br></br>On <span style={{ color: " #af1318 " }}>  Strategy at a <br></br> Time Life</span>   </h1>
              <p>We have been operating for over a decade, providing top-notch  our <br></br> clients and building a strong track record in the industry.</p>
              <Button className="bhngh">
                Contact Us
              </Button>
            </div></div>
          <div style={{ background: 'url(./imgs/slider_bg.png)' }} className='bg67'>
            <div className='bg6'>
              <h1 className='text2'>Navigating Success <br></br>On <span style={{ color: " #af1318 " }}>  Strategy at a <br></br> Time Life</span>   </h1>
              <p>We have been operating for over a decade, providing top-notch  our <br></br> clients and building a strong track record in the industry.</p>
              <Button className="bhngh">
                Contact Us
              </Button>
            </div>

          </div>
        </Carousel>
      </div>

      <div className='bg2y'>
        <Container>
          <section class="columns">
            <div class="column border4y ">
              <img src='./imgs/t11.png' className='t1imgt' />
            </div>
            <div class="column border4y ">
              <img src='./imgs/t22.png' className='t1imgt1' />
            </div>
            <div class="column border4y ">
              <img src='./imgs/t33.png' className='t1imgt2' />
            </div>
            <div class="column border4y ">
              <img src='./imgs/t44.png' className='t1imgt4' />
            </div>
          </section>
        </Container>

      </div>

      <div>
        <div className='backgroundimg' style={{ background: "url('./imgs/SAGE-university-bhopal-open-theater.webp')" }}>

          <div className='backbg'>
            <Row>
              <Col>
              {/* quora
              pint */}
              </Col>
              <Col>
                <div class="column3">
                  <h2 class="wow fadeInDown2 setmob-heading set-h2-se">
                    Why SAGE University ?
                  </h2>
                  <h2 class="wow fadeInUp setmob-data text-white">
                    Grooming young minds to become Entrepreneurs with ethical values of life.
                  </h2>
                  <p class="wow fadeInDown text-white " style={{ fontSize: "20px" }}>
                    This is why we are
                    consistently ranked
                  </p>
                  <h1 class="text_why2 wow text-white" style={{ fontSize: "80px" }}>
                    no.1
                  </h1>
                  <Button className='btn78'>Read More About SAGE</Button>

                </div>
              </Col>
            </Row>
          </div>

        </div>


      </div>
      <div className='vcbv'>
        <section>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 hm_abt_lft " style={{ background: "url('./imgs/campus-main.jpg')" }}>
              <div class="abt_tab_wrap animated fadeInUpShort go">
                <Stack direction="horizontal" gap={3}>

                  <div className="ms-auto" >
                    <p className='aboutrgt'>About Us</p>
                    <p className='aboutrgt1'>Why Us?</p>
                  </div>

                </Stack>

              </div>
            </div>
            <div class="col-md-6 hm_abt_cont animatedParent  ">
              <h3 className='privafte'>Top Private University in India</h3>
              <p className='p674 mb-2'>Sage University is a thriving hub of 21st century higher education.It is a UGC-approved University in India, located in Nashik, Maharashtra. The University is set in a picturesque lush green Wi-Fi enabled campus spanning acard75622 oss 250+ acard75622 es and is home to cutting-edge infrastructure for a holistic student experience.
              </p><p className='p674 mb-3'>
                As a best private university in Nashik, Maharashtra, Sage University attuned to the pulse of global educational standards, and so provides students with an education that takes them places. Our placement cell trains students through mock interviews and helps them write a dynamic resume. Sage University prepares students of today to become leaders of tomorrow on the global stage.</p>
              <Button style={{ background: "#b91c1c", border: "none", borderRadius: "0px", fontSize: "15px" }}>
                KNOW MORE
              </Button>
            </div>
          </div>

        </section>

      </div>
      <div className='vcbv1'>
        <section>
          <div class="row">

            <div class="col-md-6 hm_abt_cont animatedParent " >
              <div className='bgf'><h3 className='privafte ' >Top Private University in India</h3>
                <p className='p674 mb-2'>Sage University is a thriving hub of 21st century higher education.It is a UGC-approved University in India, located in Nashik, Maharashtra. The University is set in a picturesque lush green Wi-Fi enabled campus spanning acard75622 oss 250+ acard75622 es and is home to cutting-edge infrastructure for a holistic student experience.
                </p><p className='p674 mb-3 '>
                  As a best private university in Nashik, Maharashtra, Sage University attuned to the pulse of global educational standards, and so provides students with an education that takes them places. Our placement cell trains students through mock interviews and helps them write a dynamic resume. Sage University prepares students of today to become leaders of tomorrow on the global stage.</p>
                <Button style={{ background: "#b91c1c", border: "none", borderRadius: "0px", fontSize: "15px" }}>
                  KNOW MORE
                </Button></div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 hm_abt_lft " style={{ background: "url('./imgs/campus-main.jpg')" }}>
              <div class="abt_tab_wrap animated fadeInUpShort go">
                <Stack direction="horizontal" gap={3}>

                  <div className="ms-auto" >
                    <p className='aboutrgt'>About Us</p>
                    <p className='aboutrgt1'>Why Us?</p>
                  </div>

                </Stack>

              </div>
            </div>
          </div>

        </section>

      </div>

{/* 
      <div>
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-2">

            </div>

            <div class="col-xs-12 col-sm-6 col-md-8">
              <div class="box09">
                <Counters />
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-2">

            </div>

          </div>
        </div>
      </div> */}
      {/* <div className='backgroundy6'>
      </div> */}
      <div className='bg01' style={{ background: "url(./imgs/sage-university-bhopal.webp)" }}>
        <Container>
          <h4 className='awarde5 text-center'> Awards & Recognitions</h4>
          <Awards />

        </Container>
      </div>
      <div className='bg011' style={{ background: "url(./imgs/INTERNATIONAL.webp)" }} >
        <Container>
          <h4 className='awarde5 text-center my-5'> MOUs & Tie Up</h4>
          <Mous />
          <Button className='bhngh' style={{
            marginLeft: " auto",
            marginRight: "auto",
            display: " block"
          }}>View More</Button>
        </Container>
      </div>
      <div className='bg019'>
        <Container>
          <h4 className='awarde5 text-center'> Research & Innovation</h4>
          <div class="img-wrapper ">


            <div class="thumbnail">
              <div className='div1'>The hovered text!</div>
              <img className="imgh p-2" src="./imgs/RI-1.png" />

            </div>
          </div>


          <div class="img-wrapper">
            <div class="thumbnail">
              <div className='div1'>The hovered text!</div>
              <img className="imgh p-2" src="./imgs/RI-2.png" />

            </div>

          </div>

          <div class="img-wrapper">
            <div class="thumbnail">
              <div className='div1'>The hovered text!</div>
              <img className="imgh p-2 imhgsd " src="./imgs/reserchevents.png" />

            </div>

          </div>
          <div class="img-wrapper">
            <div class="thumbnail">
              <div className='div1'>The hovered text!</div>
              <img className="imgh p-2" src="./imgs/RI-5.png" />

            </div>

          </div>
          <div class="img-wrapper">
            <div class="thumbnail">
              <div className='div1'>The hovered text!</div>
              <img className="imgh p-2" src="./imgs/RI-3.png" />

            </div>

          </div>
          <div class="img-wrapper">
            <div class="thumbnail">
              <div className='div1'>The hovered text!</div>
              <img className="imgh p-2 imghh" src="./imgs/ResearchUG.jpg" />

            </div>

          </div>

        </Container>
      </div>
      <div className='bgevent'  >
        <Container>
          <b className='eventer'>EVENTS</b>
          <h4 className='awarde5' style={{ marginTop: "-40px" }}>Current Events</h4>

          <Gallery />


        </Container>
      </div>
   
      
      <div className='gjhghg my-5'  >


        <h4 className='awarde5 text-center'>Life at SUB University
        </h4>
        <hr></hr>

        <section class="columns">
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/hostel.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>Hostels</h3></div>
            </div>

          </div>
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/canteen.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>Hygienic Canteens</h3></div>
            </div>

          </div>
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/campus-2.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>High-tech Classrooms</h3></div>
            </div>

          </div>
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/sallon.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>Salon</h3></div>
            </div>

          </div>
        </section>

        <section class="columns">
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/gym.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>Gymnasium</h3></div>
            </div>

          </div>
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/library-img.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>Library</h3></div>
            </div>

          </div>
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/security.jpg" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>24x7 Security</h3></div>
            </div>

          </div>
          <div class="column ">
            <div class="card card75622  ">
              <div class="why-batch1 text-white">
                <BiSolidSchool className='why-batch' style={{ color: "white ", fontSize: "40px" }} />
              </div>
              <img src="./imgs/ambulance.png" className='imaget345 ' />

              <div className='fdgf'> <h3 className='btn786'>On-campus Ambulance</h3></div>
            </div>

          </div>
        </section>




      </div>
      
      <div className='Ourplacement'  >


        <h4 className='awarde5 text-center'>Our Students Placed Globally
        </h4>
        <Placement />
        <section className='bjg67' style={{
          border: "2px solid #d8d8d8",
          padding: "60px 30px",
          margin: " 0px 0px"
        }}>
          <Counter />
        </section>
      </div>
      <div className='bgevent1'  >
        <Container>

          <h4 className='awarde5 text-center'>Testimonials</h4>
          <hr></hr>

          <Testmonial />


        </Container>
      </div>
      <div id="ee-floating-control-container-ee-form-4-form-4"
        class="ee-floating-control-container custom-floating-control-container right">
        <button id="ee-floating-control-button-form-4-applyNow" aria-label="Enquire Now 2024-25"

          class="btn ee-floating-control-button ee-apply-now-1">Enquire Now 2024-25</button></div>


    </div>
  )
}

export default Home
