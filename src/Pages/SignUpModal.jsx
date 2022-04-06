import React,{ useState, useContext } from 'react';
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Keys from "../config.keys";
import Store from "../Store/Store";
import { LOGIN } from "../Store/Types";

export default function SignUpModal(props) {
    const [state, dispatch] = useContext(Store);

    const [formData, setFormData] = useState({
        college: "",
        year: "",
        phone: "",
      });
    
    const [feedback, setFeedback] = useState({
        feedback: "",
      });  

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
       console.log(formData);
       send(formData);
        setFormData({
            college: "",
            year: "",
            phone: "",
        });
        props.onHide();
      }; 

      const handleFeedback = (msg) => {
        setFeedback({
          feedback: msg,
        });
      };
      
      const send = async (formData) => {
        try {
          // validate the fields
          if (formData.college === "") {
            // handleFeedback("Please enter your college name");
            // show alert
            alert("Please enter your college name");
            return;
          }

          if (formData.year === "") {
            // handleFeedback("Please enter your year");
            // show alert
            alert("Please enter your year");
            return;
          }

          if (formData.phone === "") {
            handleFeedback("Please enter your phone number");
            return;
          }
          
          const config = {
            headers: {
              "Content-Type": "application/json",
              authorization: state.token,
            },
          };
          const body = JSON.stringify(formData);
          console.log(body);
          const response = await axios.put(`${Keys.BASE_API}/user`, body, config);
    
          console.log(response.data); 
    
           dispatch({
             type: LOGIN,
             payload: response.data.data,
           });
          dispatch({
            type: "ADD_ERROR",
            payload: { msg: "signUp done." },
          });
          handleFeedback("signUp done");
          setTimeout(() => {
            dispatch({
              type: "REMOVE_ERRORS",
            });
            handleFeedback("");
          }, 2000);
        } catch (error) {
          console.log(error);
          dispatch({
            type: "ADD_ERROR",
            payload: { msg: "Something went wrong." },
          });
          handleFeedback("Something went wrong, Try Again.");
          setTimeout(() => {
            dispatch({
              type: "REMOVE_ERRORS",
            });
            handleFeedback("");
          }, 2000);
        }
      };

    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style= {{alignItems: "center"}}>
            Signup for Techspardha
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style= {{textAlign : "center"}}>Hi {props.user.name} !</h5>
          <h6 style= {{textAlign : "center"}}>Please enter the following details.</h6>
          <form style ={{textAlign : "center", padding : "10px"}} onSubmit={handleSubmit} method="POST">
                <div style ={{padding : "10px"}}>
                  <input
                   className="ModalInput"
                    name="college"
                    required="true"
                    type="string"
                    placeholder="College Name"
                    onChange={handleChange}
                  />
                </div>
                <div style ={{padding : "10px"}}>
                    <input
                className="ModalInput"
                    name="phone"
                    required="true"
                    type="tel"
                    // mobile no validation
                    
                    placeholder="Mobile Number"
                    onChange={handleChange}
                  />
                </div>
                <div style ={{padding : "10px"}}>

              <select onChange={handleChange} className="ModalInput" name="year" required="required" type="string">
                      <option value="" disabled selected>Study Year</option>
                      <option value="Fresher">Fresher</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Prefinal Year">Prefinal Year</option>
                      <option value="Final Year">Final Year</option>
                    </select>
                </div>
                <div style ={{padding : "10px"}}>
                  <button style={{color: "white", backgroundColor: "#4890ff", borderRadius: "5px", border: "2px solid #4890ff", fontSize: "20px"}} type="submit" onClick={handleSubmit} >
                    Register 
                  </button>
                </div>
              </form>
        </Modal.Body>
      </Modal>
    );
  }
