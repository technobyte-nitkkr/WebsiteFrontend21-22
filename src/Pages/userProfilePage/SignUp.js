import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Keys from "../../config.keys";
import Store from "../../Store/Store";
import { ONBOARD } from "../../Store/Types";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useContext(Store);
  const navigate = useNavigate();
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

  const handleFeedback = (msg) => {
    setFeedback({
      feedback: msg,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(formData);
    setFormData({
        college: "",
        year: "",
        phone: "",
    });
  };

  const [message, setMessage] = useState(null);

  const send = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          authorization: state.token,
        },
      };
      const body = JSON.stringify(formData);
      const response = await axios.put(`${Keys.BASE_API}/user`, body, config).then (async(data)=>{
        console.log(data.data);
        await dispatch({
          type: ONBOARD,
          payload: data.data.user
        });
        navigate("/user");

      })
      
      console.log("this it check" + response.data.toString());
     
      setOpen = false;
      dispatch({
        type: "ADD_ERROR",
        payload: { msg: "query added." },
      });
      handleFeedback("Query submitted");
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
    <div className="float">
      {message && (
        <div className="message">
          <div>
            <p>{message}</p>
          </div>
        </div>
      )}
      <div>
        {open ? (
          <div className="query-box">
            <center>
              <h1 className="guestheading">Signup for Techspardha'22</h1>
            </center>
            <div className="query-feedback-box"> {feedback.feedback} </div>
            <div className="form-container">
              <form onSubmit={handleSubmit} method="POST">
                <div className="form-ele">
                  <input
                    name="college"
                    required="required"
                    type="string"
                    placeholder="College name"
                    onChange={handleChange}
                  />{" "}
                </div>{" "}
                <div className="form-ele">
                    <input
                    name="phone"
                    required="required"
                    type="string"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                  />{" "}
                </div>{" "}
                <div className="form-ele">
                    <input
                    name="Year"
                    required="required"
                    type="string"
                    placeholder="Year"
                    onChange={handleChange}
                  />{" "}
                </div>{" "}
                <div className="query-send">
                  <button type="submit" className="query-send-btn">
                    Submit{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex-end">
        {!open ? (
          <div
            className="floating"
            onClick={() => {
              if (state.isAuth) {
                setOpen(true);
              } else {
                setMessage("Please login to ask query.");
                setTimeout(() => {
                  setMessage(null);
                }, 2000);
              }
            }}
          >
            <div>
              <i className="fas fa-question"></i>
            </div>
          </div>
        ) : (
          <div className="floating" onClick={() => setOpen(false)}>
            <div>
                hehehehheeeeeeeeeeeee
              <i className="fas fa-times"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default  SignUp ;