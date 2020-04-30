import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Typography, Row, Col, Button } from "antd";
import { addFoodApi } from "../../../../util/service";
import "./AddFood.scss";

const { Title } = Typography;

const AddfoodSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "*ชื่อสั้นไป")
    .max(50, "*นี่ก็ยาวไป")
    .required("*ใส่ชื่ออาหารด้วย"),
  price: Yup.number()
    .min(1, "*ถูกไป")
    .positive()
    .integer()
    .required("*ใส่ราคาด้วย")
    .max(10000, "*แพงไปไหม"),
});

const AddFood = () => {
  const history = useHistory();
  return (
    <div className="addfood-container">
      <div className="addfood-item card">
        <div className="text-title">
          <Title level={2}>เพิ่มรายการอาหาร</Title>
        </div>
        <Formik
          initialValues={{
            name: "",
            price: "",
          }}
          validationSchema={AddfoodSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            addFoodApi(values).then(() => history.push("/foods"));
          }}
        >
          <Form>
            <Row type="flex" justify="center">
              <Col>
                <Field name="name">
                  {({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      style={{ width: 300 }}
                      placeholder="ชื่ออาหาร"
                    ></Input>
                  )}
                </Field>
                <ErrorMessage name="name">
                  {(msg) => <div className="pl validate-red">{msg}</div>}
                </ErrorMessage>
              </Col>
            </Row>

            <Row type="flex" justify="center" className="mt">
              <Col>
                <Field name="price">
                  {({ field }) => (
                    <Input
                      {...field}
                      type="number"
                      style={{ width: 300 }}
                      placeholder="ราคา"
                    ></Input>
                  )}
                </Field>
                <ErrorMessage name="price">
                  {(msg) => <div className="pl validate-red">{msg}</div>}
                </ErrorMessage>
              </Col>
            </Row>

            <Row type="flex" justify="center" className="mt mb">
              <Button htmlType="submit">Submit</Button>
            </Row>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddFood;
