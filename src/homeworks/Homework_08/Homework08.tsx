// import AnimalCard from "../../components/AnimalCard/AnimalCard";
// import { animalsData } from "../Homework_07/data";
// import Counter from "../../components/Counter/Counter";
// import Feedback from "../../components/Feedback/Feedback";
// import Input from "../../components/Input/Input";
// import { products } from "./data";
// import Product from "../../components/Product/Product";
import Button from "../../components/Button/Button";
import { ButtonsContainer, ButtonWrapper, HomeworkWrapper } from "./styles";

function Homework08() {
  return (
    <HomeworkWrapper>
      {/* Проверяем корректность работы компонента AnimalCard */}
      {/* <AnimalCard
        animalName={animalsData[0].name}
        animalSpecies={animalsData[0].species}
        animalImg={animalsData[0].image}
      /> */}
      {/* Проверяем корректность работы компонента Counter */}
      {/* <Counter /> */}
      {/* Проверяем корректность работы компонента Feedback */}
      {/* <Feedback /> */}
      {/* Проверяем корректность работы компонента Input */}
      {/* <Input
        name="email"
        type="email"
        placeholder="example@example.com"
        label="Enter your email"
        id="email-input"
      /> */}
      {/* Проверяем корректность работы компонента Product */}
      {/* <Product
        productName={products[0].name}
        productPrice={products[0].price}
        productImg={products[0].image}
      /> */}
      {/* Создаём и размещаем действующую и отключенную кнопки */}
      <ButtonsContainer>
        <ButtonWrapper>
          <Button
            name="Enabled button"
            type="button"
            onClick={() => console.log("Click on enabled button")}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            name="Disabled button"
            type="button"
            isDisabled={true}
            onClick={() => {}}
          />
        </ButtonWrapper>
      </ButtonsContainer>
    </HomeworkWrapper>
  );
}

export default Homework08;