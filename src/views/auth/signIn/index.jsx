import React from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { Formik } from 'formik';

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DefaultAuth>
      <div m="36px" w="70%">

        <Heading color={textColor} fontSize='36px' mb='10px'>
          Sign In
        </Heading>
        <Text
          mb='36px'
          ms='4px'
          color={textColorSecondary}
          fontWeight='400'
          fontSize='md'>
          Enter your email and password to sign in!
        </Text>




        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Text>Email</Text>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                borderRadius='5px'
              />
              {errors.email && touched.email && errors.email}
              <Text>Password</Text>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                border='1px' borderColor='gray.200' borderRadius='5px'
              />
              {errors.password && touched.password && errors.password}
              <Button fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='40%'
                h='50'
                ml="0px"
                mb='24px' type="submit" disabled={isSubmitting}>
                Sign In
              </Button>
            </form>
          )}
        </Formik>
        {/* <Button
          fontSize='sm'
          variant='brand'
          fontWeight='500'
          w='100%'
          h='50'
          mb='24px'>
          Sign In
        </Button> */}


        <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
          Not registered yet?
          <NavLink to='/auth/sign-up'>
            <Text
              color={textColorBrand}
              as='span'
              ms='5px'
              fontWeight='500'>
              Create an Account
            </Text>
          </NavLink>
        </Text>

      </div>
    </DefaultAuth>
  );
}

export default SignIn;