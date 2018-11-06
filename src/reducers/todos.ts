import { ActionType, getType } from "typesafe-actions";
import * as todoActions from "../actions/todoActions";
import Todo from "../models/todo";

export type TodosAction = ActionType<typeof todoActions>;

export default function todos(state: Todo[] = [], action: TodosAction): Todo[] {
    switch (action.type) {
        case getType(todoActions.addTodo):
            return [...state, action.payload];
        case getType(todoActions.toggleTodo):
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        default:
            return state;
    }
}
