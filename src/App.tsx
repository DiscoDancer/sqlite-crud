import * as React from "react";
import { hot } from "react-hot-loader";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
    </div>
);

export default hot(module)(App);
