import React from 'react'
import { MdRocketLaunch } from 'react-icons/md';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Testmonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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
        <div style={{ margin: "50px 0px 0px 0px" }}>

            <div>
                <div >
                    <div class="row">
                        <Carousel swipeable={false}
                            draggable={false}

                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2400}
                            arrows={false}
                            showDots={true}
                        >
                            {items.map(item => (
                                <div key={item.id} className='rotu6'>

                                    <div class="col-xs-12 col-sm-4">
                                        <div class="box">

                                            <MdRocketLaunch className='recket' />
                                            <img src={item.img} className='textimoniala' />
                                        </div>
                                    </div>


                                    <div class="col-xs-12 col-sm-8 ">
                                        <div class="box56">
                                            <h2 style={{ fontWeight: "600" }}>{item.name}</h2>
                                            <p style={{ fontSize: "17px" }} className='p90998'>{item.desc}</p>
                                        </div>
                                    </div>
                                </div >
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            



        </div>
    )
}
const items = [
    {
        img: './imgs/palak.jpg',
        name: 'Palak Verma (Student)',
        desc: '"Palak Verma, school of management at SAGE University Bhopal, known as one of the best universities in MP, Central India, shared her phenomenal academi"'
    },
    {
        img: './imgs/anu.png',
        name: 'Swami Anubhavananda',
        desc: ' "Sage University is Going To be a Centre Of Attraction & Energy In Top University in Central India."'
    },
    {
        img: './imgs/ramdev.png',
        name: 'Baba Ramdev Ji',
        desc: '" After Visiting Sage University (Private University in Bhopal) I am thinking of opening my ashram here in the campus such a peaceful place."'
    }


];
export default Testmonial