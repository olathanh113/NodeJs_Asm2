import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel className=' text-danger p-5 '>
            <Carousel.Item >
                <img
                    height={450}
                    className="d-block w-100"
                    src="/img1.png"
                    alt="First slide"
                />
                <Carousel.Caption className='text-danger'>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height={450}
                    className="d-block w-100"
                    src="/img2.png"
                    alt="Second slide"
                />
                <Carousel.Caption className='text-danger'>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    height={450}
                    className="d-block w-100"
                    src="/img2.png"
                    alt="Third slide"
                />
                <Carousel.Caption className='text-danger'>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;