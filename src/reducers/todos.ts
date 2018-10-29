import { BaseAction, ActionTypes, AddTodoAction, ToggleTodoAction } from "../actions/actions";
import Todo from "../models/todo";

export default function todos(state: Todo[] = [], action: BaseAction): Todo[] {
    switch (action.type) {
        case ActionTypes.AddTodo:
            const addAction = action as AddTodoAction;
            return [
                ...state,
                {
                    id: addAction.id,
                    text: addAction.text,
                    completed: false,
                }
            ]
        case ActionTypes.ToggleTodo:
            const toggleAction = action as ToggleTodoAction;
            return state.map(todo => {
                if (todo.id === toggleAction.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
        default:
            return state;
    }
}
