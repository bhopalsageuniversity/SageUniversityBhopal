import React from 'react'
import { Card, Container } from 'react-bootstrap';
import { FaLaptopCode, FaMicroscope } from 'react-icons/fa';
import { FaSchoolFlag } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudentBold } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Counter = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12  " style={{ borderRight: "2px solid #af1318" }}>


          <Container>
            <section class="columns">

              <div class="column">
                <div>
                  <FaMicroscope className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "50px", background: "#af1318", borderRadius: "100px", padding: "10px", color: "white" }} />
                  <h4 className="seth4grooming text-center " style={{ fontSize: "34px", fontWeight: "600" }}>
                35,000
                  </h4>
                  <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
               Placement
                  </p>

                </div>
              </div>

              <div class="column">
                <div>

                  <SiGoogleclassroom className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "50px", background: "#af1318", borderRadius: "100px", padding: "10px", color: "white" }} />
                  <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  30000
                  </h4>
                  <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  Company
                  </p >


                </div>	</div>

              <div class="column">
                <div>

                  <FaLaptopCode className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "50px", background: "#af1318", borderRadius: "100px", padding: "10px", color: "white" }} />
                  <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                80000
                  </h4>
                  <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                    Students
                  </p>


                </div>	</div>

            </section>

          </Container>
        </div>
        <div class="col-md-6 my-3 " >
          <Container>
            <Carousel swipeable={false}
              draggable={false}

              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              arrows={false}
              showDots={false}>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l2.png' />
                </Card>
              </div>

              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l3.png' />
                </Card>
              </div>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l18.png' />
                </Card>
              </div>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l20.png' />
                </Card>
              </div>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l22.png' />
                </Card>
              </div>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l23.png' />
                </Card>
              </div>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/l46.png' />
                </Card>
              </div>
              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/masai.webp' />
                </Card>
              </div>

              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/MOU-LOGO.jpeg' />
                </Card>
              </div>

              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/salylor.png' />
                </Card>
              </div>

              <div>
                <Card className="logosgdcard" >
                  <img className="logosgd" src='./recruiter/sunstone.webp' />
                </Card>
              </div>


            </Carousel>
          </Container>
        </div>
      </div>


    </div>
  )
}

export default Counter