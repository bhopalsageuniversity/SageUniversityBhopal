


import React, { useState, useEffect } from 'react';
import './Awards.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, Container } from 'react-bootstrap';
const Event = () => {
    //card map item start
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from your API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs only once after the initial render
    //card map item end
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
        <div >
            <Container>
                <div class="row  mt-md-12 row-cols-1 row-cols-sm-1 row-cols-md-12 justify-content-center advertisers-service-sec">
                    <Carousel responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        showArrows={false} // Here we hide the arrow buttons
                        autoPlaySpeed={2000}>

                        {items.map(item => (
                            <div class="col colsm" key={item.id}>
                               <img src='./imgs/559661.webp' className='imaget' />
                               <div className='bgdhjw3'>
                                <p>All India Inter University E sports Tournament</p>
                                <Button>Read More</Button>
                                </div>
                            </div>


                        ))}
                    </Carousel>
                </div>
            </Container>


        </div>
    )
}
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 3' },
    { id: 5, name: 'Item 3' },
    { id: 6, name: 'Item 3' }
];
export default Event