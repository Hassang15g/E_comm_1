import React from 'react'

import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const LoginPage = () => {
  return (
    <div style={{minHeight:"83vh"}}>
       <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">تسجيل الدخول</label>
                    <input
                        value={""}
                        onChange={""}
                        placeholder="الايميل..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                        value={""}
                        onChange={""}
                        placeholder="كلمه السر..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button onClick={""} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                    <label className="mx-auto my-4">
                        ليس لديك حساب ؟{" "}
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                اضغط هنا
                            </span>
                        </Link>
                    </label>

                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default LoginPage