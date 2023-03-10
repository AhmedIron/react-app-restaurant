import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import NavBar from '../components/Navbar';
import { useState } from 'react';
import axios from "axios";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Onloading from '../components/onLoading';

function Login(e) {
  window.scrollTo(0, 0);

  const navigate = useNavigate()

  const [namez, setNamez] = useState();
  const [Passwordz, setPasswordz] = useState();


  console.log(namez);
  console.log(Passwordz);

  const onSubmiting = async (e) => {

  

    //if you want no RELOAD page
    e.preventDefault();

    let data = {
      user_name : namez,
      password : Passwordz
    }
    
      
    await axios.post("https://am-restaurant-backend.onrender.com/api/users/login", data)
        .then((res) => {
            localStorage.setItem('login', JSON.stringify({
                token : res.data.data.token,
                name : res.data.data,
                Login : true,
            }))
        }).then(() => {
          if (localStorage != null){
            navigate("/")
          }
        })
    }
    // const accessTokenObj = JSON.parse(localStorage.getItem("login"));

    

        
  return (
    <div>
      <Onloading />
      <NavBar />
    <Container style={{ marginTop: "200px"}}>
    <div style={{marginBottom:"-18", textAlign: "-webkit-center"}}>
            <p className="title1">Login</p>
            <div className="line"></div>
      </div> 
      {/* <p className={accessTokenObj ? "showWelcome":"hideWelcome"}> 
      {accessTokenObj ? (
        <span>Hello : {accessTokenObj.name.user.user_name}</span>
      ) : (
        <span>please</span>
      )}      
      </p> */}
      
    <Form style={{marginTop: "25px"}} onSubmit={onSubmiting}>

      <Form.Group className="mb-3" name="user_name" onChange={(e)=> {
        setNamez(e.target.value);
      }}>
        <Form.Label>User Name</Form.Label>
        <Form.Control name="user_name" type="text" placeholder="User Name" />
      </Form.Group>

      <Form.Group className="mb-3" name="password" onChange={(e)=>{
        setPasswordz(e.target.value);
      }}>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    <p style={{marginTop:"10px", color:"gray"}}>Use this account to be admin with full access to ADD and REMOVE products. </p>
    <p style={{color:"gray"}}>User Name : dodo</p>
    <p style={{color:"gray"}}>Password : 123456</p>
    </Container>
    <div style={{marginTop:"200px"}}><Footer /></div>
    
    </div>
  );
}

export default Login;