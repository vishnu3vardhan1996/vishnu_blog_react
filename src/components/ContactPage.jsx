import React from 'react';
import { MenuBarContact } from './MenuBarContact';
import { Footer } from './Footer';
import "../App.css";

function ContactPage() {

    return (
        <div>
            <MenuBarContact />

            <div className='contactfont'>
                <div className='contactfonttitle'>
                    <h1>Contact Information</h1>
                </div>
            </div>

            <div>
                <div className='cotactdetails'>
                    <p>Email:- fit.tech.v2@gmail.com</p>
                    <p>Phone:- 6380688602</p>
                    <p>Address:- Vijaya Bank Layout, Bangalore</p>
                </div>
            </div>

            <Footer />

        </div>
    )

}

export { ContactPage };