import { Provider } from "react-redux";
import "./App.css";
import Controlled from "./Components/ControlledUncontrolled/Controlled";
import Uncontrolled from "./Components/ControlledUncontrolled/Uncontrolled";
import Parent from "./Components/propDrilling/Parent";
import Ball from "./Components/Redux/Ball";
import Bat from "./Components/Redux/Bat";
import store from "./Components/Redux/store";
import User from "./Components/Redux/User";
import Todo from "./Components/TodoApp/Todo";
import TodoList from "./Components/TodoApp/TodoList";
import Parent2 from "./Components/UseReducer/Parent";
import Parent1 from "./Components/ReRender/Parent";
import List from "./Components/List";
import Dashboard from "./Components/CustomHooks'/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <List></List>
      <Parent1></Parent1>
      <Parent2></Parent2>
      <Controlled></Controlled>
      <Uncontrolled></Uncontrolled>
      <Provider store={store}>
        <User></User>
        <Bat></Bat>
        <Ball></Ball>
      </Provider>
      <TodoList></TodoList>
      <Todo></Todo>
      <Parent></Parent>
    </div>
  );
}

export default App;
