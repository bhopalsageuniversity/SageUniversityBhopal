import React, { useState, useEffect } from 'react';
import './Awards.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Container } from 'react-bootstrap';

const Placement = () => {
    //card map item start
    // const [items, setItems] = useState([]);

    // useEffect(() => {

    //   fetch('https://fakestoreapi.com/products')
    //     .then(response => response.json())
    //     .then(data => setItems(data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []); 
    //card map item end
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
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
        <div >

            <div class="row  mt-md-12 row-cols-1 row-cols-sm-1 row-cols-md-12" style={{marginTop:"-35px"}}>
                <Carousel responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    
                    arrows={false}
                    autoPlaySpeed={2000}>

                    {items.map(item => (
                        <div class="col colsm" key={item.id}>
                            <Card className='scholor-thumb'>
                                <img src={item.img} style={{ width: "100%" }} />
                                <div class="scholor-name">
                                    <h3 className='name4'>{item.name}</h3>
                                    <p className='name45'>{item.desc}</p>
                                </div>
                            </Card>
                        </div>


                    ))}
                </Carousel>
            </div>



        </div>
    )
}
const items = [
    {
        img: './imgs/1.jpg',
        name: 'Yashswati',
        desc: 'General Manager, USA'
    },
    {
        img: './imgs/2.jpg',
        name: 'Yashswati',
        desc: 'General Manager, USA'
    },
    {
        img: './imgs/3.jpg',
        name: 'Yashswati',
        desc: 'General Manager, USA'
    },
    {
        img: './imgs/4.jpg',
        name: 'Yashswati',
        desc: 'General Manager, USA'
    },
    {
        img: './imgs/5.jpg',
        name: 'Yashswati',
        desc: 'General Manager, USA'
    },
    {
        img: './imgs/6.jpg',
        name: 'Yashswati',
        desc: 'General Manager, USA'
    },

];

export default Placement