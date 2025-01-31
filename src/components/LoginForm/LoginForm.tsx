// import { ChangeEvent, useState, FormEvent } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
import { LoginFormValues } from "./types";

function LoginForm() {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // console.log(event);
  //   setEmail(event.target.value);
  // };

  // const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const onLogin = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(email);
  //   console.log(password);
  // };

  // --- Создание валидационной схемы с помощью Yup
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .max(20, "Max 20 symbols") // предельное количество символов
      .min(10, "Min 10 symbols") // минимальное количество символов
      .typeError("Email must be string"),
    password: Yup.number()
      .required("Field password is required")
      .typeError("Password must be number")
      .test(
        "Check min password length",
        "Min 10 symbols",
        (value) => String(value).length >= 10
      )
      .test(
        "Check max password length",
        "Max 20 symbols",
        (value) => String(value).length <= 20
      ),
  });

  // --- Настройка формы
  // useFormik как аргумент принимает объект настройки для определённой формы
  // При вызове useFormik возвращается объект, в котором хранятся значения из полей, ошибки,
  // различные методы для работы с формами
  const formik = useFormik({
    // У объекта два обязательных свойства: initialValues и onSubmit
    // initialValues - объект, в котором ключом является name из поля, а значением initialValue
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    // validationSchema - свойство, в значение которого нужно передать схему для валидации
    validationSchema: schema,
    // Свойство validationOnChange по умолчанию true, значит валидация будет происходить при каждом изменении в форме
    validateOnChange: false,
    // onSubmit - функция, которая будет вызвана, когда произойдёт событие submit для формы
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    // <LoginFormContainer onSubmit={onLogin}>
    // Для выполнения функции, которая прописана в свойстве onSubmit в настройке formik в атрибут onSubmit
    // для формы передаём formik.handleSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        {/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}
        {/* Для контроля полей необходимо передать значения в prop value и onChange
      для value - formik.values.<name>
      для onChange - formik.handleChange */}
        <Input
          name="email"
          label="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          error={formik.errors.email}
        />
        <Input
          name="password"
          label="Password*"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}
export default LoginForm;
