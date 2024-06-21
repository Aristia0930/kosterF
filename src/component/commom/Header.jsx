import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Search from './Search';
import UserInfo from './UserInfo';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();  
    
    const userlogin=(e)=>{
        e.preventDefault()
        navigate("/UserLogin")

    }

    const userjoin=(e)=>{
        e.preventDefault()
        navigate("/UserJoin")

    }

    const main=(e)=>{
        e.preventDefault()
        navigate("/")

    }


    return (
        
        <Navbar expand="xl" className="navbar">
            <Container>
                <Link to="/"><h2>Delivery.Oracle</h2></Link>

                <Search/>
                <Form className="d-flex">
                    <Button onClick={userlogin}>로그인</Button>
                    <Button onClick={userjoin}>회원가입</Button>
                </Form>
                <UserInfo />
            </Container>


        </Navbar >

    );
};

export default Header;