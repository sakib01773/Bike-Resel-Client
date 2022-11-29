import React from 'react';

const Footers = () => {
    return (
        <div>
            <div className='' >


                <footer className="footer p-16 bg-dark text-white bg-gray-400 shadow-lg rounded-lg">
                    <div>
                        <img className='w-20' src="https://deshibiker.com/wp-content/uploads/2022/03/Speeder.jpg" alt="" />
                        <p>Bike RESELL Industries Ltd.<br />Providing reliable tech since 1998</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a href="/" className="link link-hover">Branding</a>
                        <a href="/" className="link link-hover">Design</a>
                        <a href="/" className="link link-hover">Marketing</a>
                        <a href="/" className="link link-hover">Advertisement</a>
                    </div>

                    <div>
                        <span className="footer-title">Legal</span>
                        <a href="/" className="link link-hover">Terms of use</a>
                        <a href="/" className="link link-hover">Privacy policy</a>
                        <a href="/" className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div >

        </div>
    );
};

export default Footers;