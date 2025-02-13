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
import Lesson14 from "lessons/Lesson_14/Lesson14";

// === Homeworks ===
// import Homework08 from "./homeworks/Homework_08/Homework08";
// import Homework09 from "./homeworks/Homework_09/Homework09";
// import Homework10 from "./homeworks/Homework_10/Homework10";
// import Homework12 from "homeworks/Homework_12/Homework_12";
import Clients from "pages/Clients/Clients";
import Tesla from "pages/Clients/components/Tesla/Tesla";
import SpaceX from "pages/Clients/components/SpaceX/SpaceX";
import XAI from "pages/Clients/components/xAI/xAI";

// === Consultations ===
import Consultation06 from "consultations/consultation_06/Consultation06";

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
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/tesla" element={<Tesla />} />
          <Route path="/clients/spacex" element={<SpaceX />} />
          <Route path="/clients/xai" element={<XAI />} />
          {/* Topic: useContext */}
          <Route path="/lesson14" element={<Lesson14 />} />
          <Route path="/consultation06" element={<Consultation06 />} />
          {/* Route * - этот route показывает контент, когда маршрута в перечисленных выше не существует */}
          <Route path="*" element="Page not found" />
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
      {/* <Homework12 /> */}
      {/* --Topic: formik, yup */}
      {/* <Lesson12 /> */}
    </BrowserRouter>
  );
}

export default App;