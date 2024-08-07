// function Main() {
//   let name = "Alice";
//   let str = "this is Main";

//   const url = "https://google.com";
//   const linkTitle = "Google";
//   return (
//     <div>
//       {str} {name} {(10 * 402) / 7}
//       <a href={url}>{linkTitle}</a>
//     </div>
//   );
// }

// export default Main;

// function Main() {
//   const myFriends = ["Tom", "Mikl", "Joe", "Alice"];

//   return (
//     <ul>
//       {/* <li>Tom</li> // это мы добавили в ручную
//       <li>Mikl</li>
//       <li>Joe</li> */}

//       {myFriends.map((el) => {
//         // это мы добавили динамически
//         return <li>{el}</li>;
//       })}
//     </ul>
//   );
// }

// export default Main;
//==================================обработчик событий на кнопку
// function Main() {
//   function render() {
// return "Hello";
//     console.log("hello");
//   }
//   return <p>{render()}</p>;

//   return <button onClick={render}>Click me</button>;
// }

// export default Main;

// =========================  ПРОПСЫ

// function Main(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>{props.text}</h1>
//       <h2>
//         {" "}
//         name:{props.name}, age:{props.age}
//       </h2>
//     </div>
//   );
// }

// export default Main;

// диструктуризация объектов

function Main({ text, name, age, friends }) {
  return (
    <div>
      <h1>{text}</h1>
      name: {name}, age: {age}
    </div>
  );
}
export default Main;
