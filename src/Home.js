import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Bleeding Hero" />
            </div>
            <div className="home__row">
                <Product 
                id = "15409877"
                title="The Lean Startup" 
                price={29.99} 
                image="https://cf.shopee.co.id/file/81633062d766e8f9874c9ef7b4ee1734" 
                rating = {5}
                 />
                <Product 
                id = "18017004"
                title='Cal 7 22" Complete Mini Cruiser Plastic Skateboard' 
                price={29.95} 
                image="data:image/jpeg;base64,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" 
                rating = {4}
                 />
                
            </div>
            <div className="home__row">
                <Product 
                id = "11144523"
                title="JBL CLIP 3 - Waterproof Portable Bluetooth Speaker - Black
                " 
                price={44.95} 
                image="https://id.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwfffac222/JBL_Clip3_Front_Midnight-Black-1605x1605px.png?sw=537&sfrm=png" 
                rating = {5}
                 />
                <Product 
                id = "14567088"
                title="Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 64MP High Res | 128GB, Phantom Violet (SM-G991UZVAXAA)" 
                price={649.99} 
                image="https://images.samsung.com/is/image/samsung/p6pim/id/galaxy-s21/gallery/id-galaxy-s21-5g-g991-371107-sm-g991bzvdxid-368338116?$720_576_PNG$" 
                rating = {4}
                 />
                <Product 
                id = "12255674"
                title="Polar Bottle Sport Insulated Water Bottle - BPA-Free, Sport & Bike Squeeze Bottle with Handle" 
                price={12.00} 
                image="https://target.scene7.com/is/image/Target/GUEST_16b2290b-fa89-4b80-b4b3-84b19e8c7fa3?wid=488&hei=488&fmt=pjpeg" 
                rating = {4}
                 />
            </div>
            <div className="home__row">
                <Product 
                id = "5576238"
                title="Midea 3.1 Cu. Ft. Compact Refrigerator, WHD-113FSS1 - Stainless Steel" 
                price={199.99} 
                image="https://m.media-amazon.com/images/I/61gf8uBCv6L._AC_SL1500_.jpg" 
                rating = {5}
                 />
            </div>
        </div>
    )
}

export default Home
