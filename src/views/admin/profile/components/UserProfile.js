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
      console.log(user);

    }
    initial();


  }, [])
  return (
    <div className='userDetail'>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          contact:'',
          degree:'',
          branch:'',
          skills:'',
          
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
              <Field id="firstName" name="firstName" placeholder="" value={user.firstName} disabled />
            </div>
            <div className='field'>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="" value={user.lastName}  disabled />
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
            <div className='field'>
              <label htmlFor="email">Skills</label>
              {/* {user.skills && user.skills.map((skill) => {
                return (
                  <div className='skill'>
                    <p>{skill}</p>
                  </div>
                )
              })
              } */}
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default UserProfile