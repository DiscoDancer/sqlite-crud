import { connect } from "react-redux";
import { toggleTodo } from "../actions/actionCreators";
import TodoList, { ArgProps, CallbackProps } from "../components/TodoList";
import { AppState } from "../models/appState";
import Todo from "../models/todo";
import VisibilityFilters from "../models/visibilityFilters";

function getVisibleTodos(todos: Todo[], filter: VisibilityFilters): Todo[] {
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
}

function mapStateToProps(state: AppState): ArgProps {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
    };
}

function mapDispatchToProps(dispatch: any): CallbackProps {
    return {
        toggleTodo: (id) => dispatch(toggleTodo(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
