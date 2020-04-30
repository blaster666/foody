import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInRequest, signInError } from "../../../user/action";
import { Input, Button } from "antd";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import auth from "../../../../firebase";
import "./signin.scss";

const siginInSchema = Yup.object({
  email: Yup.string()
    .email()
    .min(3, "อย่างต่ำ 3 character")
    .max(255, "น้อยกว่า 255 character")
    .required("Required"),
  password: Yup.string()
    .min(6, "อย่างต่ำ 6 character")
    .max(255, "น้อยกว่า 255 character")
    .required("Required"),
});

const Signin = () => {
  const [state, setState] = useState({ errMsg: null });
  const history = useHistory();
  // const dispatch = useDispatch();

  const handleSignIn = async ({ email, password }) => {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      // dispatch(signInRequest(user));
      history.push("/foods");
    } catch (error) {
      // dispatch(signInError(error));
      setState({ ...state, errMsg: error.message });
    }
  };

  return (
    <div className="signin-con">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={siginInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          handleSignIn(values);
        }}
      >
        <div className="signin-input">
          <Form>
            <Field name="email">
              {({ field }) => (
                <Input {...field} type="email" placeholder="Email" />
              )}
            </Field>
            <ErrorMessage name="email">
              {(msg) => <div className="text-validate">{msg}</div>}
            </ErrorMessage>

            <div className="signin-mt">
              <Field name="password">
                {({ field }) => (
                  <Input.Password
                    {...field}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Field>
            </div>
            <ErrorMessage name="password">
              {(msg) => <div className="text-validate">{msg}</div>}
            </ErrorMessage>

            <Button
              type="primary"
              htmlType="submit"
              className="signin-mTopDown"
            >
              Sign In
            </Button>
          </Form>
        </div>
      </Formik>
      {!!state.errMsg && <h2>{state.errMsg}</h2>}
    </div>
  );
};

export default Signin;
