import { connect } from "react-redux";
import { toggleTodo } from "../actions/todoActions";
import TodoList from "../components/TodoList";
import Todo from "../models/todo";
import VisibilityFilters from "../models/visibilityFilters";
import { AppState } from "../store/appState";

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
