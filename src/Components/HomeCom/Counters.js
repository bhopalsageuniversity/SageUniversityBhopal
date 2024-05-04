import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLaptopCode, FaMicroscope } from 'react-icons/fa';
import { FaSchoolFlag } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudentBold } from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
const Counters = () => {
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
          <Carousel swipeable={false}
              draggable={false}

              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2400}
              arrows={false}
              showDots={false}>
              <div>
                <FaMicroscope className='mb-2'
                 style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />
                <h4 className="seth4grooming text-center " 
                style={{ fontSize: "34px", fontWeight: "600" }}>
                  50+
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  State of Art Laboratories
                </p>

              </div>
              <div>

                <SiGoogleclassroom className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />
                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  50+
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  Smart Classrooms
                </p >


              </div>
              <div>

                <FaLaptopCode className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />
                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  75+
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  Programs
                </p>


              </div>
              <div>

                <GiTeacher className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />
                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  1:20
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  Faculty Student Ratio
                </p>


              </div>
              <div>

                <PiStudentBold className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />

                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  17 Years +
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  of Education Experience
                </p>





              </div>
              <div>
                <FaSchoolFlag className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />

                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  75 Acres
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  of Lush Green Campus
                </p>


              </div>
              <div>
                <FaSchoolFlag className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />
                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  15
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  Schools
                </p>



              </div>
              <div>
                <LiaChalkboardTeacherSolid className='mb-2' style={{ marginLeft: "auto", marginRight: "auto", display: "block", fontSize: "80px", border: "2px solid #af1318", borderRadius: "100px", padding: "10px", color: "#af1318" }} />

                <h4 className="seth4grooming text-center" style={{ fontSize: "34px", fontWeight: "600" }}>
                  50+
                </h4>
                <p className="seth4grooming1 text-center" style={{ fontSize: "18px", fontWeight: "500" }}>
                  Disciplines of Study
                </p>

              </div>


            </Carousel>
    </div>
  )
}

export default Counters