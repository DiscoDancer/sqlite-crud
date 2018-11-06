import Todo from "./todo";
import VisibilityFilters from "./visibilityFilters";

export interface AppState {
    todos: Todo[];
    visibilityFilter: VisibilityFilters;
}
