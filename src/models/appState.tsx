import Todo from "./todo";
import VisibilityFilters from "./visibilityFilters";

export type AppState = {
    todos: Todo[];
    visibilityFilter: VisibilityFilters;
};
