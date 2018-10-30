import * as React from "react";
import { hot } from "react-hot-loader";
import VisibleTodoList from "./containers/VisibleTodoList";

const App = () => (
    <div>
        <VisibleTodoList />
    </div>
);

export default hot(module)(App);
