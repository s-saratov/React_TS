import "./styles.css";

function Button({ name = "SEND", type, onClick }) {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

// Объект props передаётся как параметр в круглые скобки при создании компонента
// const props = {
//   name: <значение свойства будет вызвана при вызове компонента>
// array: []
// }

// Деструктуризация (второй вариант)
// function Button({ name = "SEND" }) {
  // const buttonType = "submit";
  // console.log(props.name);

  // Деструктуризация (первый вариант)
  // const {name} = props;

//   return (
//     <button className="main-button" type={buttonType}>
//       {name}
//     </button>
//   );
// }

// Импорт стилей
// import "./styles.css";

// function Button() {
//   const isGetButton = true;
//   const buttonType = "submit";

//   return (
//     <button className="main-button" type={buttonType}>
//       {isGetButton ? "GET" : "SEND"}
//     </button>
//   );
// }

// Экспорт по умолчанию (он может быть в файле только один)
// export default Button;