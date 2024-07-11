import axios from 'axios';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import AddressP from '../../component/shop/AddressP.jsx';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import { AdminFlagContext } from "../../flag/Flag.jsx";
import Header from '../../component/shop/headside/Header.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../../component/shop/headside/Sidebar.jsx';

const ShopJoin = () => {
  const {role,user,setUser,userId,setUserId,shopId,setShopid}=useContext(AdminFlagContext)
  const location = useLocation();
  //넘어온값
  // const id = location.state?.id;
  const navigate = useNavigate();

  const id = userId;
    


    //상점이름
    const [name,setName]=useState("")
    //주소
    const[address,setAddress]=useState({
        address:'',
    });
    //가게설명
    const[text,setTest]=useState("")
    //이미지
    const[img,setImg]=useState()
        //  x,y좌표
    const [query, setQuery] = useState('');
    const [coordinates, setCoordinates] = useState([]);

    //옵션
    const [category,setcategory]=useState("")

    //후에 해야할거 x,y 좌표 넘기기와 주소받아오기


    //추후  jwt 아이딕값 넘겨야함
    const shopjoin=async(e)=>{
        e.preventDefault();
        handleSearch()
        console.log(address)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("address", address.address);
        formData.append("text", text);
        formData.append("img", img); // 이 부분은 파일 객체여야 합니다.
        formData.append("storeX", coordinates[0].x);
        formData.append("storeY", coordinates[0].y);
        formData.append("category", category);
        formData.append("id", id);
        

        try{
            const rs=await axios.post("http://localhost:8080/store/join", formData)
            if(rs.status==200){
                alert("등록이 요청 되었습니다!")
                navigate("/ShopMain")

            }
        }catch(e){
            console.log("등록실패",e)
        }
    }

    //주소찾기 팝업
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setAddress({
            ...address,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }

    useEffect(()=>{
        handleSearch()


    },[address])



    //x,y좌표 받아오기

    const handleSearch = async () => {

      console.log(address)
      try {
        const response = await axios.get('/api/kakao/v2/local/search/address.json', {
          params: {
            query: address.address,
          },
        });
  
        const coords = response.data.documents.map(doc => ({
          x: doc.x,
          y: doc.y
        }));
  
        setCoordinates(coords);
      } catch (error) {
        console.error('Error fetching data from Kakao API:', error);
      }
    };
  
    
    return (
        <div>
        <Header />
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar id={userId}/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
      
                    <div id="main_container">
    
                <div class="shop_container">
                    <div class="form">
                        <form action="#">
                            <p class="shop_name">
                                <label for="shop_name">업체이름</label>
                                <input type="text" id="shop_name" onChange={(e)=>setName(e.target.value)}/>
                            </p>
                            <p>
                            <label for="shop_name">주소 <Button variant="primary" size="sm" onClick={handleComplete}>주소 찾기</Button>{' '}</label>
                            <input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" onChange={handleInput} value={address.address}/>
                            
                            {popup && <AddressP company={address} setcompany={setAddress}></AddressP>}
                        
                            </p>

                            <p class="shop_text">
                                <label for="shop_text">업체설명</label>
                                <textarea name="postContent" rows={6} onChange={(e)=>setTest(e.target.value)}/>
                            </p>

                            <p class="shop_category">
                            <label for="shop_category">카테고리</label>
                              <Form.Select aria-label="Default select example"  onChange={(e)=>setcategory(e.target.value)}>
                                <option>카테고리 선택</option>
                                <option value="1">한식</option>
                                <option value="2">중식</option>
                                <option value="3">일식</option>
                                <option value="4">치킨</option>
                                <option value="5">피자</option>
                              </Form.Select>
                            </p>

                            <p class="shop_img">
                                <label for="shop_img">업체이미지</label>
                                <input type="file" required="required/" accept="image/*" onChange={(e)=>setImg(e.target.files[0])}/>
                            </p>
                            <div className="d-grid gap-2">
                            <Button variant="primary" type="submit" id="submit_btn" class="submit_btn" onClick={shopjoin}>등록하기</Button>
                            </div>
                        </form>

                        <ul>
                    {coordinates.map((coord, index) => (
                      <li key={index}>
                        X: {coord.x}, Y: {coord.y}
                      </li>

                    ))}
                        </ul> 
                      </div>
                    </div>
                  </div>
                    </Col>
                </Row>
            </Container>

    </div>
    );
};

export default ShopJoin;