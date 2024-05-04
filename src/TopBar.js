import React from 'react'
import { Dropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './TobBar.css'
import { FaBars, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaPinterestSquare, FaTwitter } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoYoutube } from 'react-icons/io'
import { BsQuora } from 'react-icons/bs'
const TopBar = () => {
  return (
    <div>
      <div>

      </div>
      <div className='navb22'>
        <div class="">
          <div class="row rowdes" >

            <div class="col-xs-12 col-sm-3 navb2">
              <div className='navb45'>
                <Link to=''> <FaFacebookF className='iconmedia1' style={{background:"#4267b2",color:"white",padding:"3px"}}/></Link>
                <Link to=''><FaTwitter className='iconmedia1' style={{background:"#1c9be9",color:"white",padding:"3px"}}/></Link>
                <Link to=''> <FaInstagram className='iconmedia1 instagram-color' style={{  
                  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" , 
                  color:"white",padding:"3px"
  }}/> </Link>
                <Link to=''> <FaLinkedinIn className='iconmedia1' style={{background:"#4267b2",color:"white",padding:"3px"}}/></Link>
                <Link to=''> <IoLogoYoutube className='iconmedia1' style={{color:"white",background:"#f70000",padding:"3px"}} /></Link>
                <Link to=''> <BsQuora className='iconmedia1' style={{color:"white",background:"#b32a26",padding:"3px"}}/></Link>
                <Link to=''> <FaPinterestP className='iconmedia1' style={{background:"#df0022",color:"white",padding:"3px"}}/></Link>

              </div>

            </div>

            <div class="col-xs-12 col-sm-9 navb1">
              <Dropdown className='desktop23'>
                <Dropdown.Toggle className="dro9j" id="dropdown-basic" style={{ background: "transparent", margin: "0px 0px 0px 20px" }}>
                  <FaBars />

                </Dropdown.Toggle>

                <Dropdown.Menu className='dropgh6'>
              
                  <Dropdown.Item href="#/action-1"><Link href="#home" className='link2'> Consultancy</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-2"> <Link href="#home" className='link2'> Training & Placement</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><Link href="#home" className='link2'> Sports</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-3">  <Link href="#home" className='link2'> Events</Link></Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <Link href="#home" className='link2'> Contact US</Link></Dropdown.Item>
                  <Dropdown.Item> <Link href="#home" className='link2' > Student Login</Link>
                  </Dropdown.Item>
                  <Dropdown.Item >  <Link href="#home" className='link2'> Staff Login</Link></Dropdown.Item>
                  <Dropdown.Item >  <Link href="#home" className='link2' style={{background:"#eab716",borderRadius:"30px",padding:"4px 10px"}}>   Meri Marzi 2024</Link></Dropdown.Item>
                  <Dropdown.Item >  <Link href="#home" className='link2' style={{background:"#eab716",borderRadius:"30px",padding:"4px 10px"}}> Admissions Open 2024</Link></Dropdown.Item>
                  
                
                </Dropdown.Menu>
              </Dropdown>
              <Nav className="me-auto navb  desktop1">

                <a href="#" class="btn32">
                  <span class="btn321"></span>
                  <span class="btn321"></span>
                  <span class="btn321"></span>
                  <span class="btn321"></span>
                  Meri Marzi 2024
                </a>


                <Link href="#home" className='link2'> Consultancy</Link>

                <Link href="#home" className='link2'> Training & Placement</Link>

                <Link href="#home" className='link2'> Sports</Link>
                <Link href="#home" className='link2'> Events</Link>

                <Link href="#home" className='link2'> Contact US</Link>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic " className='drop21 link2'>
                    ERP
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='menut'>
                    <Dropdown.Item> <Link href="#home" className='link23'> Student Login</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className='borfert'>  <Link href="#home" className='link23'> Staff Login</Link></Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>


              </Nav>
            </div>

          </div>
        </div>

      </div>



    </div>




  )
}

export default TopBar
