import React from 'react'
import { Button, Card, Container, Stack } from 'react-bootstrap'
import './Gallery.css'
const Gallery = () => {
    return (
        <div>
            <div>
                <Container>
                    <div class="wrapper">

                        <section class="columns">

                            <div class="column">
                                <Card className='card74'>
                                    <Stack direction="horizontal" gap={3} className='span344'>

                                        <div className="p-2 ms-auto"><p style={{ background: " #eab716", color: "white", padding: "2px 8px", borderRadius: "30px" }}>05-Apr-2024</p></div>

                                    </Stack>


                                    <img src='./imgs/559661.webp' className='imgss' style={{height:"280px"}} />
                                    <p className='event3'>All India Inter University E sports Tournament</p>   <br></br>
                                    <Button className='event4'>READ MORE</Button>
                                </Card>
                            </div>

                            <div class="column">
                                <Card className='card74'>
                                    <Stack direction="horizontal" gap={3} className='span344'>

                                        <div className="p-2 ms-auto"><p style={{ background: " #eab716", color: "white",
                                         padding: "2px 8px", borderRadius: "30px" }}>04-Feb-2024</p></div>

                                    </Stack>
                                    <img src='./imgs/event1.webp' className='imgss' style={{height:"300px"}} />
                                    <p className='event3 '>Students Choice Awards 2024</p>
                                    <br></br>
                                    <Button className='event4'>READ MORE</Button>
                                </Card>
                            </div>

                            <div class="column">
                                <Card className='card74'>
                                    <Stack direction="horizontal" gap={3} className='span344'>

                                        <div className="p-2 ms-auto"><p style={{ background: " #eab716",
                                         color: "white", padding: "2px 8px", borderRadius: "30px" }}>22-Feb-2024</p></div>

                                    </Stack>
                                    <img src='./imgs/event2.webp' className='imgss' style={{height:"300px"}} />
                                    <p className='event3'>1 Day Entrepreneurship Awareness Training Programme by CEDMAP
                                    </p>
                                    <Button className='event4'>READ MORE</Button>
                                </Card>
                            </div>

                        </section>

                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Gallery