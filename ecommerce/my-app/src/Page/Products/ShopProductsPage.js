import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Uitily/SearchCountResult'
import { Container } from 'react-bootstrap'
import DiscountSection from '../../Components/Home/DiscountSection'
import CategoryContainer from '../../Components/Category/CategoryContainer'


const ShopProductsPage = () => {
  return (
    <div style={{minHeight:'680px'}}>
    <CategoryHeader/>
      <Container>
          <SearchCountResult title="400نتيجة بحث" />
        <DiscountSection/>
        <CategoryContainer/>
        


    
      </Container>

    </div>
  )
}

export default ShopProductsPage
