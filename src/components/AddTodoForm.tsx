import * as React from "react";

export interface AddTodoFormProps {
    onAdd: (name: string) => any;
}

export default class AddTodoForm extends React.Component<AddTodoFormProps, {}> {
    private inputRef = React.createRef<HTMLInputElement>();

    constructor(props: AddTodoFormProps) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.inputRef} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        );
    }

    private handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const name = this.inputRef.current.value.trim();

        if (!name) {
            return;
        }

        this.props.onAdd(name);

        this.inputRef.current.value = "";
    }
}
