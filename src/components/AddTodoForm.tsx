import * as React from "react";

export interface AddTodoFormProps {
    onAdd: (name: string) => any;
}

export const AddTodoForm: React.SFC<AddTodoFormProps> = (props) => {
    const { onAdd } = props;
    const inputRef = React.createRef<HTMLInputElement>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const name = inputRef.current.value.trim();
        if (!name) {
            return;
        }

        onAdd(name);
        inputRef.current.value = "";
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodoForm;
