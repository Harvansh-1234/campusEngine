import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'assets/css/userProfile.css';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../../../service/api'




function UserProfile() {
  const [user, setUser] = useState("");


  useEffect(() => {
    const initial = async () => {
      let token = localStorage.getItem('token');
      // console.log(token);
      const userData = await getUserInfo(token);
      // console.log(userData);
      if (userData.status === 200);
      setUser(userData.data.data);
      

    }
    initial();


  }, [])
  return (
    <div className='userDetail'>
      <Formik
        initialValues={{
          companyName: '',
          
          email: '',
          contact:'',
          address:'',
          
        }}
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className='headField'>
            <div className='field'>
              <label htmlFor="companyName">Name</label>
              <Field id="companyName" name="companyName" placeholder="" value={user.companyName} disabled />
            </div>
            
          </div>
          <div className='headField'>
            <div className='field'>
              <label htmlFor="email">Email</label>

              <Field
                id="email"
                name="email"
                placeholder=""
                type="email"
                value={user.email}
                disabled 
              />
            </div>
            <div className='field'>
              <label htmlFor="contact_no">Contact No</label>

              <Field
                id="contact"
                name="contactNo"
                placeholder=""
                type="contactNo"
                disabled 
                value={user.contactNo}
              />
            </div>
           
          </div>
          <div className='headField'>
          <div className='fieldFull'>
              <label htmlFor="address">Address</label>

              <Field
                id="address"
                name="address"
                placeholder="address"
                type="address"
                disabled 
                value={user.address}
              />
            </div>
            </div>
          
        </Form>
      </Formik>
    </div>
  )
}

export default UserProfile