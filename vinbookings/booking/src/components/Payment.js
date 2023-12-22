import React from "react";
import Popup from "reactjs-popup";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import './Payment.css';

export default function Payment() {
  return (
    <div className="payte">
    <MDBContainer fluid className="py-5 ">
      <MDBRow className="d-flex  gradient-custom ">
        <h2>Payment</h2>
        <MDBCol md="7" lg="5" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <MDBRow className="d-fle align-items-center justify-content-center">
                <MDBCol size="9">
                  <MDBInput
                    
                    id="form1"
                    type="text"
                    placeholder="Card Number"
                  />
                </MDBCol>
                <MDBCol size="9">
                  <MDBInput
                    
                    id="form2"
                    type="text"
                    placeholder="Cardholder's Name"
                  />
                </MDBCol>

                <MDBCol size="6">
                  <MDBInput
                   
                    id="form2"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                   
                    id="form2"
                    type="text"
                    placeholder="CVV"
                  />
                </MDBCol>
                <MDBCol >
              
                  <Popup trigger=
                {<button> OK </button>}
                position="right center">
                <div className="co">Your Ticket is booked.....</div>
                
            </Popup>
                
                 
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}