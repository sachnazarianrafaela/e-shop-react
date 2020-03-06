import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard>
            <MDBCardBody className='mx-4'>
              <div className='text-center'>
                <h3 className='dark-grey-text mb-5'>
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput label='Your email' group type='text' validate />
              <MDBInput label='Your password' group type='password' validate />
              <div className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
                <div className='form-check my-4'>
                  <MDBInput
                    label={
                      <>Accept&nbsp;
                        <a href='!#' className='blue-text'>
                          the Terms and Conditions
                        </a>
                      </>
                    }
                    type='checkbox'
                    id='checkbox1'
                  />
                </div>
              </div>
              <div className="text-center mb-3" >
                <MDBBtn
                  type="button"
                  gradient="pink"
                  color='pink'
                  rounded
                  className="btn-block z-depth-1a" 
                >
                  Sign up
                </MDBBtn>
              </div>
              <MDBRow className='font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2'>
              <p className='font-small dark-grey-text text-center  '>
                    Have an account?
                    <a href='/Login_Sign up' className='blue-text ml-1'>
                      Log in
                    </a>
                  </p>

              </MDBRow>
            </MDBCardBody>
            <div className='footer pt-3'>
            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign up with:
            </p>
<div className="row my-3 d-flex justify-content-center">
<MDBBtn
  type="button"
  color="white"
  rounded
  className="mr-md-3 z-depth-1a"
>
  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
</MDBBtn>
<MDBBtn
  type="button"
  color="white"
  rounded
  className="mr-md-3 z-depth-1a"
>
  <MDBIcon fab icon="twitter" className="blue-text" />
</MDBBtn>
<MDBBtn
  type="button"
  color="white"
  rounded
  className="z-depth-1a"
>
  <MDBIcon fab icon="google-plus-g" className="blue-text" />
</MDBBtn>
</div>
             
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;