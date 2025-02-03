import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

// === Lessons ===
// import Lesson06 from './lessons/Lesson_06/Lesson06'
// import Lesson07 from "./lessons/Lesson_07/Lesson07";
// import Lesson08 from "./lessons/Lesson_08/Lesson08";
// import Lesson09 from "./lessons/Lesson_09/Lesson09";
// import Lesson10 from "./lessons/Lesson_10/Lesson10";
// import Lesson12 from "lessons/Lesson_12/Lesson12";
// --- Lesson 13
import Layout from "components/Layout/Layout";
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import User from "pages/Users/components/User/User";

// === Homeworks ===
// import Homework08 from "./homeworks/Homework_08/Homework08";
// import Homework09 from "./homeworks/Homework_09/Homework09";
// import Homework10 from "./homeworks/Homework_10/Homework10";

// === Consultations ===

function App() {
  return (
    // BrowserRouter - компонент из react-router-dom, который позволяет работать с маршрутами по всему приложению
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, который передаётся в маршрут и контент,
          который нужно отрисовать по этому маршруту в Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<User />} />
        </Routes>
      </Layout>
      {/* Topic: TypeScript - Introduction */}
      {/* <Lesson06 /> */}
      {/* Topic: TypeScript - Object  types, enum*/}
      {/* <Lesson07 /> */}
      {/* Topic: Styling components */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* Topic: Control components, useEffect */}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}
      {/* Topic: useEffect, axios */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* --Topic: formik, yup */}
      {/* <Lesson12 /> */}
    </BrowserRouter>
  );
}

export default App;
