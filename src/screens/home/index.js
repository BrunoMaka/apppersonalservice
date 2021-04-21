import React, { Fragment } from 'react';
import { Carousel, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import first from '../../assets/images/1.png'
import second from '../../assets/images/2.png'
import third from '../../assets/images/3.png'
import { Link } from 'react-router-dom';


const Home = () => ( 
    <Fragment>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block min-vh-100"
                    src={first}                    
                    alt="First slide"                />
                <Carousel.Caption>
                    <Link to="/choice">
                        <Button variant="outline-light">Começar</Button>
                    </Link>
                    <h3>Treine em casa</h3>
                    <p>Aulas ao vivo com os melhores profissionais do Brasil</p>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    
                    className="d-block min-vh-100"
                    src={second}
                    alt="Second slide"                    
                />

                <Carousel.Caption>
                    <Link to="/choice">
                        <Button variant="outline-light">Começar</Button>
                    </Link>
                    <h3>Treine em sua academia</h3>
                    <p>Contrate o melhor porfissional para te acompanhar em sua academia de preferência</p>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vh-100"
                    src={third}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Link to="/choice">
                        <Button variant="outline-light">Começar</Button>
                    </Link>
                    <h3>Treine em qualquer lugar</h3>
                    <p>O importante é não ficar parado! </p>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>  
    </Fragment>          
)
export default Home;