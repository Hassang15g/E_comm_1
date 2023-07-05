import React from 'react'
import { Container, Row } from 'react-bootstrap'

import CategoryCard from './CategoryCard'
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png" ;
import sale from "../../images/sale.png";
import pic from "../../images/pic.png"

const CategoryContainer = () => {
  return (
    <Container>
    <div className='admin-content-text mt-5'>كل التصنيفات</div>
      <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="اجهزه منزلية " img={clothe} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={cat2} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={labtop} background ="#0034FF" />
            <CategoryCard title="اجهزه منزلية " img={sale} background ="#FF6262" />
            <CategoryCard title="اجهزه منزلية " img={pic} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={clothe} background ="#FF6262" />
            <CategoryCard title="اجهزه منزلية " img={clothe} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={cat2} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={labtop} background ="#0034FF" />
            <CategoryCard title="اجهزه منزلية " img={sale} background ="#FF6262" />
            <CategoryCard title="اجهزه منزلية " img={pic} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={clothe} background ="#FF6262" />
            <CategoryCard title="اجهزه منزلية " img={clothe} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={cat2} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={labtop} background ="#0034FF" />
            <CategoryCard title="اجهزه منزلية " img={sale} background ="#FF6262" />
            <CategoryCard title="اجهزه منزلية " img={pic} background ="#F4DBA4" />
            <CategoryCard title="اجهزه منزلية " img={clothe} background ="#FF6262" />
        
          

      </Row>
    </Container>
  )
}

export default CategoryContainer
