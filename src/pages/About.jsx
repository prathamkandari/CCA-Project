import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="title">
                    <h1>About Us</h1>
                </div>
                <div className="content">
                    <div className="article">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ab, facere ad dolorum tenetur repellat iste. Similique minus in incidunt dolorem sapiente aliquid vel sint error. Porro ab reprehenderit expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolores sapiente iste, ipsum enim hic vel eaque, voluptate dolorem, delectus error eum rem odit. Amet perferendis nulla eveniet dolore placeat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid, aut assumenda dolorum nihil, quaerat consectetur commodi quibusdam.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptate ipsa sapiente dolore natus ipsam eius aliquid incidunt esse harum quis! Asperiores earum nihil suscipit fuga voluptas quam ipsum tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto ullam vel culpa, rem distinctio dignissimos eum sapiente? Dolorem excepturi ipsam nobis possimus ex, eligendi dolore quas sed earum. Minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quos hic, numquam voluptatem fuga similique saepe non? Natus, earum quos necessitatibus eius totam inventore vitae error pariatur blanditiis qui explicabo!</p>
                        <div className="button">
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <img src="./Uttarakhand_Police_Logo.png" alt="" />
                </div>
                <div className="social">
                    <a href=""><i className='fab fa-facebook-f'></i></a>
                    <a href=""><i className='fab fa-twitter'></i></a>
                    <a href=""><i className='fab fa-instagram'></i></a>

                </div>
            </div>
        </div>
    );
};

export default About;