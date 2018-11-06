import { connect } from "react-redux";
import { toggleTodo } from "../actions/todoActions";
import TodoList from "../components/TodoList";
import { AppState } from "../models/appState";
import Todo from "../models/todo";
import VisibilityFilters from "../models/visibilityFilters";

// container defines how the component should react on state change
// container fires action creators in response to component`s callback calls

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
    switch (filter) {
        case VisibilityFilters.ShowAll:
            return todos;
        case VisibilityFilters.ShowComplete:
            return todos.filter((t) => t.completed);
        case VisibilityFilters.ShowActive:
            return todos.filter((t) => !t.completed);
        default:
            throw new Error("Unknown filter: " + filter);
    }
};

const mapStateToProps = (state: AppState) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: any) => ({
    toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
