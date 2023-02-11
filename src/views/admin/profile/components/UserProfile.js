import React from 'react'
import { Formik, Field, Form } from 'formik';
import 'assets/css/userProfile.css';
import { useEffect,useState } from 'react';
import {getUserInfo} from '../../../../service/api'




function UserProfile() {
 const [user, setUser] = useState({});


  useEffect(() => {
    const initial = async()=>{
      let token = localStorage.getItem('token');
      console.log(token);
      const userData = await getUserInfo(token);
      console.log(userData);
      if(userData.status === 200);
      setUser(userData.data);
       
    }
   
  
  }, [])
  return (
    <div className='userDetail'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className='headField'>
            <div className='field'>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="Jane" />
            </div>
            <div className='field'>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className='field'>
            <label htmlFor="email">Email</label>
          
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserProfile