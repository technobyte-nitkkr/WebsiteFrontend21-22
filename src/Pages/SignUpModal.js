import React,{ useState } from 'react';
import { Modal, Button } from "react-bootstrap";

export default function SignUpModal(props) {
   
    return(
      
        <div className="modal">
            <Modal
                isOpen={ props.isOpen }
                contentLabel="Example Modal" >
                <h1>Modal Screen</h1>
                <button onClick={props.toggle}>close</button>
            </Modal>  
        </div>     
    )
}
