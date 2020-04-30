import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { actions } from "../../../user";
import auth from "../../../../firebase";
import * as Yup from "yup";
import "./Register.scss";

const registerSchema = Yup.object({
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

const Register = () => {
  const [state, setState] = useState({ errMsg: null });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = async ({ email, password }) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      history.push("/foods");
      // dispatch(actions.registerRequest(user));
    } catch (error) {
      // dispatch(actions.registerError(error));
      setState({ ...state, errMsg: error.message });
    }
  };

  return (
    <div className="regiscon">
      <div className="regiscard">
        <div className="regisinputLogin">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              handleRegister(values);
            }}
          >
            <Form>
              <Field name="email">
                {({ field }) => (
                  <Input {...field} type="email" placeholder="Email" />
                )}
              </Field>
              <ErrorMessage name="email">
                {(msg) => <div className="registextValidate">{msg}</div>}
              </ErrorMessage>

              <div className="regismt">
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
                {(msg) => <div className="registextValidate">{msg}</div>}
              </ErrorMessage>

              <Button
                type="primary"
                htmlType="submit"
                className="regismTopDown"
              >
                Sign Up
              </Button>
            </Form>
          </Formik>
          {!!state.errMsg && <h2>{state.errMsg}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Register;
