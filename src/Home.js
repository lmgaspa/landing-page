import React from 'react';
import './Home.css';
import img from '../src/images/v954-mo-02.jpg'

function Home() {
    return (
        <section>
            <div className="home">
                <div className='divleft'>
                    <h1>Create Stunning Websites and Artwork</h1>
                    <h2>Contact Us to Get Started</h2>
                    <form>
                        <div>
                            <input type="text" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="E-mail" required />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='divright'>
                <img src={img} alt="image of site" />
                <p>Image by rawpixel.com on Freepik</p>
                </div>
            </div>
        </section>
    );
}

export default Home
