// import { ChangeEvent, useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormContainer, Title, InputsContainer } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  // Создание валидационной схемы с помощью Yup
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Field email is required")
      .max(50, "Max length is 50 symbols")
      .min(5, "Min length is 5 symbols")
      .typeError("Name must be string"),
    age: Yup.number()
      .required("Field age is required")
      .typeError("Age must be number")
      .test("Check min age", "Min 18 y.o.", (value) => value >= 18)
      .test("Check max age", "Max 80 y.o.", (value) => value <= 80),
    jobTitle: Yup.string()
      .max(30, "Max length is 30 symbols")
      .typeError("Job title must be string"),
    agreeToTerms: Yup.boolean()
      .required("To proceed you must agree with the terms of use")
      .test(
        "Agree with the terms of use",
        "To proceed you must agree with the terms of use",
        (value) => value === true
      ),
  });

  // Настройка формы
  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      jobTitle: "",
      agreeToTerms: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Title>Employee form</Title>
      <InputsContainer>
        <Input
          name="fullName"
          label="Full Name*"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="Enter your full name"
          error={formik.errors.fullName}
        />
        <Input
          name="age"
          label="Age*"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter your age"
          error={formik.errors.age}
        />
        <Input
          name="jobTitle"
          label="Job Title"
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
          placeholder="Enter your job title"
          error={formik.errors.jobTitle}
        />
        <Input
          name="agreeToTerms"
          type="checkbox"
          label="I agree with the terms of use*"
          checked={formik.values.agreeToTerms}
          onChange={formik.handleChange}
          error={formik.errors.agreeToTerms}
        />
      </InputsContainer>
      <Button type="submit" name="Submit" />
    </EmployeeFormContainer>
  );
}
export default EmployeeForm;
