import React from 'react'
import { Navbar } from 'react-bootstrap'
import Silder from '../../Components/Home/Silder';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import HomeCategory from '../../Components/Home/HameCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from '../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';





const HomePage = () => {
  return (
    <div className='font' style={{maxHeight:'670px'}}>
        <Silder/>
        <HomeCategory/>
        <CardProductsContainer title="لاكثر مبيعا" btntitle="المزيد" pathText="/products "/>
        <DiscountSection/>
        <CardProductsContainer title="احدث الازياء " btntitle="المزيد" pathText="/products "/>
        <BrandFeatured title=" اشهر الماركات " btntitle="المزيد"/>
      
      
      
    </div>
  )
}

export default HomePage