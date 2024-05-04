import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TopBar from './TopBar'
import { FaAddressBook, FaAward, FaBookOpenReader, FaChalkboardUser, FaDesktop, FaHandHoldingDollar, FaRegClipboard, FaRegFilePdf, FaSchool, FaServicestack, FaUserPen } from 'react-icons/fa6'
import { AiFillCodeSandboxSquare, AiFillSwitcher, AiOutlineBlock } from 'react-icons/ai'
import { TiMessages, TiShoppingCart } from 'react-icons/ti'
import { GiArchiveRegister } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { TbDeviceDesktopCog, TbSchema } from 'react-icons/tb'
import { FaCheckCircle, FaLaptopCode } from 'react-icons/fa'
import { HiLightBulb, HiOutlineAcademicCap, HiUserGroup } from 'react-icons/hi'
import { MdCalendarMonth, MdLibraryBooks, MdOutlineContentPasteSearch, MdOutlineDesignServices, MdOutlinePermMedia, MdOutlinePictureAsPdf, MdOutlineViewTimeline, MdVideoSettings } from 'react-icons/md'
import { LiaIndustrySolid, LiaUserNurseSolid } from 'react-icons/lia'
import { PiNotepadBold, PiPlantFill } from 'react-icons/pi'
import { VscFileMedia, VscFilePdf } from 'react-icons/vsc'
import { BiSolidFilePdf } from 'react-icons/bi'
import { RiCloseFill, RiComputerLine, RiFunctionLine, RiHospitalLine, RiMiniProgramLine } from 'react-icons/ri'
import { GrCloudComputer, GrUserSettings } from 'react-icons/gr'
import { IoColorPaletteSharp } from 'react-icons/io5'
import { ImLab } from 'react-icons/im'
import { GoLaw } from 'react-icons/go'
import { HiMiniBars3 } from 'react-icons/hi2'
const Header = () => {
  return (
    <div>
      <div className='fixed-top'>
        <TopBar />
        <nav className='nav4 '>
          <div class="wrapperm1">
            <div class="">

              <Link className='a22' to="#">
                <img src='./imgs/sage-university-bhopal-logo.webp' className='img67' />
              </Link>
            </div>
            <input type="radio" name="slider" id="menu-btn" className='inpou3' />
            <input type="radio" name="slider" id="close-btn" className='inpou3' />
            <ul class="nav-links navlinks my-4">
              <label for="close-btn" class="btn close-btn"><RiCloseFill class="fas fa-times" /></label>
              <li className='li89'>
                <Link className='a222 desktop-item' to="#" >About Sage</Link>

                <input type="checkbox" id="showMega" className='inpou3' />


                <ul class="drop-menum11">
                  <section class="row">
                    <div class="col-sm-12">
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaUserPen className='icon1' /> About Us</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaDesktop className='icon1' />Why Join SAGE University</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><AiOutlineBlock className='icon1' />Chancellor Corner</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaServicestack className='icon1' />Vice Chancellor Corner</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><TiMessages className='icon1' />Pro Vice Chancellor Message</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><GiArchiveRegister className='icon1' />Registrar Message</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaChalkboardUser className='icon1' />Exclusive Advisory Board</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaAward className='icon1' />Awards & Recognition</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><BsFillPeopleFill className='icon1' />Eminent Personalities</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><TbDeviceDesktopCog className='icon1' />SAGE Atmamanthan</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><AiFillCodeSandboxSquare className='icon1' />SAGE MOUs</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaRegClipboard className='icon1' />SAGE SOP's & Proctorial Board</Link></li>
                    </div>


                  </section>
                </ul>

              </li>
              <li className='li89'>
                <Link className='a222 desktop-item' to="#" >School</Link>
                <input type="checkbox" id="showDrop" className='inpou3' />

                <ul class="drop-menum1">
                  <section class="row">

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <li className='li89 btmbor'><Link className='a223' to="#"><GrCloudComputer className='icon2' />SAGE School of Advanced Computing</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><PiPlantFill className='icon2' />SAGE School of Agriculture</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><IoColorPaletteSharp className='icon2' />SAGE School of Arts, Humanities and Social Science</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><TiShoppingCart className='icon2' />SAGE School of Commerce</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><RiComputerLine className='icon2' />SAGE School of Computer Application</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><MdOutlineDesignServices className='icon2' />SAGE School of Design</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><FaLaptopCode className='icon2' />SAGE School of Engineering and Technology</Link></li>

                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                      <li className='li89 btmbor'><Link className='a223' to="#"><HiUserGroup className='icon2' /> SAGE School of Journalism and Mass Communication</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><GrUserSettings className='icon2' />SAGE School of Management</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><ImLab className='icon2' /> SAGE School of Performing Arts</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><IoColorPaletteSharp className='icon2' />  SAGE School of Sciences</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><GoLaw className='icon2' />  SAGE School of Law & Legal Studies</Link></li>
                      <li className='li89 btmbor'><Link className='a223' to="#"><RiHospitalLine className='icon2' /> SIRT Pharmacy</Link></li>

                      <li className='li89 btmbor'><Link className='a223' to="#"><FaCheckCircle className='icon2' />  SAGE College of Nursing</Link></li>


                    </div>
                  </section>
                </ul>
              </li>

              <li className='li89'>
                <Link className='a222 desktop-item' to="#" >Academic</Link>
                <input type="checkbox" id="showMega" className='inpou3' />

                <ul class="drop-menum11">
                  <section class="row">
                    <div class="col-sm-12">
                      <li className='li89 btmbor'><Link className='a22' to="#"><HiOutlineAcademicCap className='icon1' /> Academic Model</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><HiLightBulb className='icon1' /> Pedagogy</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><MdOutlineContentPasteSearch className='icon1' /> A Unique Approch Of Learning</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><LiaIndustrySolid className='icon1' /> Industry Linked Academic Program </Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><MdCalendarMonth className='icon1' /> Academic Calender</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaBookOpenReader className='icon1' /> Exam-Regulations</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><MdLibraryBooks className='icon1' />  Value Added Course New</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><AiFillSwitcher className='icon1' />  NEP Curriculum</Link></li>    </div>


                  </section>
                </ul>

              </li>
              <li className='li89'>
                <Link className='a222 desktop-item' to="#" >PhD</Link>
                <input type="checkbox" id="showMega" className='inpou3' />

                <ul class="drop-menum2">
                  <section class="row">
                    <div class="col-sm-12">

                      <li className='li89 btmbor'><Link className='a22' to="#"><PiNotepadBold className='icon1' />  Regulations</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaRegFilePdf className='icon1' />  Syllabus PhD Entrance Exam</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><TbSchema className='icon1' /> Course Work Scheme & Syllabus</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><MdOutlineViewTimeline className='icon1' /> Time Table For Course Work</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><MdOutlinePictureAsPdf className='icon1' /> PhD Admission Guideline & Registration Link</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><VscFilePdf className='icon1' /> PhD Mid Semester Test Spring 2023-24</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"> <BiSolidFilePdf className='icon1' />PhD Academic Calendar Of SPRING Semester 2024-25</Link></li>
                    </div>


                  </section>
                </ul>

              </li>
              <li className='li89 desktop2'><Link className='a222' to="#">R&D</Link></li>
              <li className='li89'>
                <Link className='a222 desktop-item' to="#" >Admission</Link>
                <input type="checkbox" id="showMega" className='inpou3' />

                <ul class="drop-menum11">
                  <section class="row">
                    <div class="col-sm-12">
                      <li className='li89 btmbor'><Link className='a22' to="#"><RiMiniProgramLine className='icon1' /> Programs Offered</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaAddressBook className='icon1' /> Admission Procedure</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaHandHoldingDollar className='icon1' />   Scholarship</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><RiFunctionLine className='icon1' />  Online Application & Enquiry</Link></li>
                      <li className='li89 btmbor'><Link className='a22' to="#"><FaSchool className='icon1' />  Visit Campus Virtual Tour</Link></li>

                    </div>


                  </section>
                </ul>

              </li>
              <li className='li89 desktop2'><Link className='a222' to="#">Publications</Link></li>
              <li className='li89 desktop2'><Link className='a222' to="#">Notices</Link></li>
              <li className='li89 desktop2'><Link className='a222' to="#">Life@SUB</Link></li>
              <li className='li89 desktop2'><Link className='a222' to="#">Career</Link></li>
              <li className='li89 '>
                <Link className='a222 desktop-item' to="#" >Media</Link>
                <input type="checkbox" id="showDrop" className='inpou3' />

                <ul class="drop-menum3">
                  <li className='li89 btmbor'><Link className='a22' to="#"><VscFileMedia className='icon1' />  Print Media
                  </Link></li>
                  <li className='li89 btmbor'><Link className='a22' to="#"><MdOutlinePermMedia className='icon1' /> Online Media</Link></li>
                  <li className='li89 btmbor'><Link className='a22' to="#"><MdVideoSettings className='icon1' />
                    Video Gallery</Link></li>

                </ul>

              </li>


              {/* mobile menu */}
              <div class="mobile-item">
                <img src='./imgs/site_menu_logo.png' />
                <ul class="mdn-accordion indigo-accordion-theme ul9">
                  <li class="sub-level li9">
                    <input class="accordion-toggle" type="checkbox" name="group-1" id="group-1" />
                    <label class="accordion-title1" for="group-1">About Sage</label>
                    <ul class="ul9">

                      <li className="li999"><Link className=' li99' to="#"><FaUserPen className='icon1 li99' /> About Us</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><FaDesktop className='icon1 li99' />Why Join SAGE University</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><AiOutlineBlock className='icon1 li99' />Chancellor Corner</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><FaServicestack className='icon1 li99' />Vice Chancellor Corner</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><TiMessages className='icon1 li99' />Pro Vice Chancellor Message</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><GiArchiveRegister className='icon li991' /> Registrar Message</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><FaChalkboardUser className='icon1 li99' />Exclusive Advisory Board</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><FaAward className='icon1 li99' />Awards & Recognition</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><BsFillPeopleFill className='icon1 li99' />Eminent Personalities</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><TbDeviceDesktopCog className='icon1 li99' />SAGE Atmamanthan</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><AiFillCodeSandboxSquare className='icon1 li99' />SAGE MOUs</Link></li>
                      <li className="li999"><Link className=' li99' to="#"><FaRegClipboard className='icon1 li99' />SAGE SOP's & Proctorial Board</Link></li>

                    </ul>
                  </li>


                  <li class="sub-level li9">
                    <input class="accordion-toggle" type="checkbox" name="group-2" id="group-2" />
                    <label class="accordion-title1" for="group-2">School</label>
                    <ul class="ul9">
                      <li className='li999'><Link className='li99' to="#"><GrCloudComputer className='icon2 li99' />SAGE School of Advanced Computing</Link></li>
                      <li className='li999'><Link className='li99' to="#"><PiPlantFill className='icon2 li99' />SAGE School of Agriculture</Link></li>
                      <li className='li999'><Link className='li99' to="#"><IoColorPaletteSharp className='icon2 li99' />SAGE School of Arts, Humanities and Social Science</Link></li>
                      <li className='li999'><Link className='li99' to="#"><TiShoppingCart className='icon2 li99' />SAGE School of Commerce</Link></li>
                      <li className='li999'><Link className='li99' to="#"><RiComputerLine className='icon2 li99' />SAGE School of Computer Application</Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdOutlineDesignServices className='icon2 li99' />SAGE School of Design</Link></li>
                      <li className='li999'><Link className='li99' to="#"><FaLaptopCode className='icon2 li99' />SAGE School of Engineering and Technology</Link></li>

                    </ul>
                  </li>

                  <li class="sub-level li9">
                    <input class="accordion-toggle" type="checkbox" name="group-3" id="group-3" />
                    <label class="accordion-title1" for="group-3"><i class="fa fa-microphone"></i> Academic</label>
                    <ul class="ul9">
                      <li className='li999'><Link className='li99' to="#"><HiOutlineAcademicCap className='icon2 li99' /> Academic Model</Link></li>
                      <li className='li999'><Link className='li99' to="#"><HiLightBulb className='icon2 li99' /> Pedagogy</Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdOutlineContentPasteSearch className='icon2 li99' /> A Unique Approch Of Learning</Link></li>
                      <li className='li999'><Link className='li99' to="#"><LiaIndustrySolid className='icon2 li99' /> Industry Linked Academic Program </Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdCalendarMonth className='icon2 li99' /> Academic Calender</Link></li>
                      <li className='li999'><Link className='li99' to="#"><FaBookOpenReader className='icon2 li99' /> Exam-Regulations</Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdLibraryBooks className='icon2 li99' />  Value Added Course New</Link></li>
                      <li className='li999'><Link className='li99' to="#"><AiFillSwitcher className='icon2 li99' />  NEP Curriculum</Link></li>

                    </ul>
                  </li>

                  <li class="sub-level li9">
                    <input class="accordion-toggle" type="checkbox" name="group-4" id="group-4" />
                    <label class="accordion-title1" for="group-4"><i class="fa fa-folder-open"></i> PhD</label>
                    <ul class="ul9">

                      <li className='li999'><Link className='li99' to="#"><PiNotepadBold className='icon1 li99' />  Regulations</Link></li>
                      <li className='li999'><Link className='li99' to="#"><FaRegFilePdf className='icon1 li99' />  Syllabus PhD Entrance Exam</Link></li>
                      <li className='li999'><Link className='li99' to="#"><TbSchema className='icon1 li99' /> Course Work Scheme & Syllabus</Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdOutlineViewTimeline className='icon1 li99' /> Time Table For Course Work</Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdOutlinePictureAsPdf className='icon1 li99' /> PhD Admission Guideline & Registration Link</Link></li>
                      <li className='li999'><Link className='li99' to="#"><VscFilePdf className='icon1 li99' /> PhD Mid Semester Test Spring 2023-24</Link></li>
                      <li className='li999'><Link className='li99' to="#"> <BiSolidFilePdf className='icon1 li99' />PhD Academic Calendar Of SPRING Semester 2024-25</Link></li>


                    </ul>
                  </li>

                  <li className='sub-level li9'> <label class="accordion-title1"><Link to="#" className="li9"> R&D </Link > </label></li>
                  <li class="sub-level li9">
                    <input class="accordion-toggle" type="checkbox" name="group-6" id="group-6" />
                    <label class="accordion-title1" for="group-6">Admission</label>
                    <ul class="ul9">
                      <li className='li999'><Link className='li99' to="#"><RiMiniProgramLine className='icon1 li99' /> Programs Offered</Link></li>
                      <li className='li999'><Link className='li99' to="#"><FaAddressBook className='icon1 li99' /> Admission Procedure</Link></li>
                      <li className='li999'><Link className='li99' to="#"><FaHandHoldingDollar className='icon1 li99' />   Scholarship</Link></li>
                      <li className='li999'><Link className='li99' to="#"><RiFunctionLine className='icon1 li99' />  Online Application & Enquiry</Link></li>
                      <li className='li999'><Link className='li99' to="#"><FaSchool className='icon1 li99' />  Visit Campus Virtual Tour</Link></li>

                    </ul>
                  </li>
                  <li className='sub-level li9 '> <label class="accordion-title1"><Link to="#" className="li9"> Publications </Link > </label></li>

                  <li className='sub-level li9'> <label class="accordion-title1"><Link to="#" className="li9"> Notices </Link > </label></li>
                  <li className='sub-level li9'> <label class="accordion-title1"><Link to="#" className="li9"> Life@SUB </Link > </label></li>
                  <li className='sub-level li9'> <label class="accordion-title1"><Link to="#" className="li9"> Career </Link > </label></li>
                  <li class="sub-level li9">
                    <input class="accordion-toggle" type="checkbox" name="group-5" id="group-5" />
                    <label class="accordion-title1" for="group-5">Media</label>
                    <ul class="ul9">
                      <li className='li999'><Link className='li99' to="#"><VscFileMedia className='icon1 li99' />  Print Media </Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdOutlinePermMedia className='icon1 li99' /> Online Media</Link></li>
                      <li className='li999'><Link className='li99' to="#"><MdVideoSettings className='icon1 li99' />Video Gallery</Link></li>
                    </ul>
                  </li>

                </ul>


              </div>

            </ul>
            <Link to="#" className="li9" class="btn323">
              <span class="btn3212"></span>
              <span class="btn3212"></span>
              <span class="btn3212"></span>
              <span class="btn3212"></span>
              <div><Link className='adf' to="#">Admissions Open</Link></div>
              <div className='bnfdhyer1'><Link className='adf' to="#">2024</Link></div>
            </Link >


            <label for="menu-btn" class="btn menu-btn"><HiMiniBars3 class="fas fa-bars " /></label>
          </div>
        </nav>
      </div>



    </div>
  )
}

export default Header
