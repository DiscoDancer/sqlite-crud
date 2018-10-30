import VisibilityFilters from "../models/visibilityFilters";

export enum ActionTypes {
    AddTodo,
    ToggleTodo,
    SetVisibilityFilter,
}

export type BaseAction = {
    type: ActionTypes;
};

export type SetVisibilityFilterAction = BaseAction & {filter: VisibilityFilters};

export type ToggleTodoAction = BaseAction & {id: number};

export type AddTodoAction = BaseAction & {id: number, text: string};
