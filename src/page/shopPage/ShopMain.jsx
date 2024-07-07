import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import Header from '../../component/shop/headside/Header.jsx';
import Sidebar from '../../component/shop/headside/Sidebar.jsx';
import ShopJoin from './ShopJoin.jsx';
import ShopMenu from './ShopMenu.jsx';
import { useContext } from "react";
import { AdminFlagContext } from "../../flag/Flag.jsx";
import './ShopMain.css';  // CSS 파일 가져오기
import Footer from '../../component/common/Footer.jsx';

const ShopMain = () => {
    const navigate = useNavigate();    

    //상점아이디
    const {role, setRole,user,setUser,userId,setUserId,shopId,setShopid,userDate, setUserDate}=useContext(AdminFlagContext)
    //쿠키에 저장된 jwt를 기반으로 아이디값 받아오기
    useEffect(() => {
        const fetchUserInfo = async () => {

            const token = user
            console.log(token)
            console.log("jwt 불러오는 중")
            try {
                const response = await axios.get('http://localhost:8080/api/api/userinfo', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response.data);
                console.log(response.data.user_id);
                setUserDate(response.data)
                setRole(response.data.authList[0].auth)
                // setUserDate(response.data.user_id)
                //유저아이디를 플래그에 저장
                setUserId(response.data.user_id)
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserInfo();
    }, [user]);
    
// const shoppMenu=async(e)=>{
//     e.preventDefault()
//     //아이디값을 넘겨서 그 아이디값의 상점 주인이 승인 되었는 확인하는 절차

//     //상점 아이디값이 받아오는
//     try {
//         const rs = await axios.get("http://localhost:8080/store/menuRs", {
//             params: { id: userId }
//         });
//         if (rs.status === 200) {
//             console.log(rs.data)
//             if (rs.data != -1) {
//                 navigate("/ShopMenu", { state: { approvalStatus: rs.data } });
//             } else {
//                 console.log("승인받지 못함");
//             }
//         }
//     } catch (e) {
//         console.log("연결실패", e);
//     }}

//     const shopOrder=async(e)=>{
//         e.preventDefault()
//         //아이디값을 넘겨서 그 아이디값의 상점 주인이 승인 되었는 확인하는 절차
    
//         //상점 아이디값이 받아오는
    

//             navigate("/ShopOrder", {state : {id:userId}})




// }
return (
    <div>
        <Header />
        <Container fluid>
            <Row>
                <Col xs={2} id="sidebar-wrapper">
                    <Sidebar id={userId} />
                </Col>
                <Col xs={10} id="page-content-wrapper">
                    <div className="d-flex flex-column align-items-center" style={{ paddingTop: '35px' }}>
                        <Carousel style={{ width: '75%' }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="asset/Default_Vibrant_still_life_of_a_bustling_food_store_homepage_d_2.jpg"
                                    alt="First slide"
                                    style={{ width:"800px",height:"800px" }}/>
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="asset/Default_Vibrant_food_illustrations_in_digital_painting_showcas_2.jpg"
                                    alt="Second slide"
                                    style={{ width:"800px",height:"800px" }}
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="asset/Default_Vibrant_stilllife_photographs_of_savory_meals_and_swee_1.jpg"
                                    alt="Third slide"
                                    style={{ width:"800px",height:"800px" }}
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
);
};

export default ShopMain;