import React from 'react';
import Nasir from '../../Assets/Nasir.jpg'
import './About.css'
const About = () => {
    return (
        <div class="container mt-5 mb-5 bg-black">
    <div class="row no-gutters">
        <div class="col-md-4 col-lg-4"> <img className='img-fluid h-100 ' src={Nasir} alt='' /></div>
        <div class="col-md-8 col-lg-8">
            <div class="d-flex flex-column">
                <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                    <h3 class="display-5">Md.Nasir Uddin</h3><i class="fa fa-facebook"></i><i class="fa fa-google"></i><i class="fa fa-youtube-play"></i><i class="fa fa-dribbble"></i><i class="fa fa-linkedin"></i>
                </div>
                <div class="p-3 bg-black text-white">
                    <h6>Font -End Developer</h6>
                </div>
                <div class="d-flex flex-row text-white">
                    <div class="p-4 bg-primary text-center skill-block">
                        <h4>90%</h4>
                        <h6>Bootstrap</h6>
                    </div>
                    <div class="p-3 bg-success text-center skill-block">
                        <h4>70%</h4>
                        <h6>CSS</h6>
                    </div>
                    <div class="p-3 bg-warning text-center skill-block">
                        <h4>90%</h4>
                        <h6>HTML</h6>
                    </div>
                    <div class="p-3 bg-danger text-center skill-block">
                        <h4>50%</h4>
                        <h6>React</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default About;