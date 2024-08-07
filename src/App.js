// Задача 1
// Создание компонента Приветствия

// Создайте новый проект React при помощи create-react-app.

// Подготовьте проект к работе.

// Создайте функциональный компонент с именем Greeting

// Этот компонент должен принимать проп name, после чего выводить приветственное сообщение в формате: "Привет, [name]!", где [name] — это значение переданного пропа.

// Импортируйте компонент в App для его отображения.

// Запустите программу, проверьте работоспособность.

// import Greeting from "./components/Greeting";

// function App() {

//  return (
//     <div className="App">
//       <Greeting name="Anna" />
//     </div>
//   );
// }

// export default App;

//------ Задача 2  Компонент Списка Покупок

// В компоненте App определите массив, содержащий названия любых товаров.

// Создайте компонент ShoppingList.

// Компонент должен принимать массив с названиями товаров через проп items.

// Также ShoppingList должен отображать каждый элемент из массива в виде <li> элемента <ul> списка.

// Если массив пуст, должно отображаться сообщение: "Список покупок пуст".

// Импортируйте ShoppingList в App, запустите приложение.

// Проверьте, выводится ли сообщение, если список покупок пуст.

import ShoppingList from "./components/ShoppingList";

function App() {
  const menu = ["Milk", "Banana", "Raspberry", "Lemon"];

  return (
    <div className="App">
      <ShoppingList items={menu} />
    </div>
  );
}

export default App;

//------------------------------------------------------------------------------------------
// Задача 3
// Компонент Статуса Заказа

// В компоненте App определите массив, содержащий информацию о заказах в формате [{orderId: 123, status: ‘в пути’}].

// Создайте компонент OrderStatus который принимает два пропа: orderId (номер заказа) и status (статус заказа, например, "обработан", "в пути", "доставлен").

// Компонент должен отображать информацию в следующем формате: "Заказ #[orderId]: [status]".

// Импортируйте компонент в App, проверьте его работоспособ
// import OrderStatus from "./components/OrderStatus";

// const orders = [
//   {
//     orderId: 123,
//     status: "в пути",
//   },
//   {
//     orderId: 124,
//     status: "заказ в обработке",
//   },
//   {
//     orderId: 125,
//     status: "заказ обработан",
//   },
//   {
//     orderId: 126,
//     status: "заказ доставлен",
//   },
// ];

// function App() {
//   return (
//     <div>
//       <OrderStatus items={orders} />
//     </div>
//   );
// }

// export default App;

// ---------------классная работа Лекция 2
// import "./App.css";
// import Main from "./components/Main.jsx";

// function App() {
// let username = "Alice";
// let userage = 23;
// const userFriends = ["Max", "Bob"];

// return (
// <div className="App">

/* <Main
        text={"this is props object"}
        name={username}
        age={userage}
        friends={userFriends}
      />
      <Nav menu={menu} /> */

//       <Greeting name="Anna" />
//       <ShoppingList items={menu} />
//     </div>
//   );
// }

// export default App;

// диструктуризация объектов

// const user = {
//   name: "Alice",
//   age: 57,
//   isAdmin: true,
// };

// const { name, age, isAdmin } = user; // этот способ сокращенный более удобный

// const name = user.name; // этот способ объемный
// const age = user.age;
// const isAdmin = user.isAdmin;

// console.log(isAdmin);
