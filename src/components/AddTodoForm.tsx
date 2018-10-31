import * as React from "react";

export type CallbackProps = {
    onAdd: (name: string) => void;
};

export default class AddTodoForm extends React.Component<CallbackProps, {}> {
    private inputRef = React.createRef<HTMLInputElement>();

    constructor(props: CallbackProps) {
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
