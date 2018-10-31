import VisibilityFilters from "../models/visibilityFilters";
import { ActionTypes, AddTodoAction, SetVisibilityFilterAction, ToggleTodoAction } from "./actions";

let count = 0;

export function setVisibilityFilter(filter: VisibilityFilters): SetVisibilityFilterAction {
    return {
        filter,
        type: ActionTypes.SetVisibilityFilter,
    };
}

export function toggleTodo(id: number): ToggleTodoAction {
    return {
        id,
        type: ActionTypes.ToggleTodo,
    };
}

export function addTodo(text: string): AddTodoAction {
    return {
        id: ++count,
        text,
        type: ActionTypes.AddTodo,
    };
}