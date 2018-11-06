import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";
import AddTodoForm, { AddTodoFormProps } from "../components/AddTodoForm";

function mapDispatchToProps(dispatch: any): AddTodoFormProps {
    return {
        onAdd: (name) => dispatch(addTodo(name)),
    };
}

export default connect(
    undefined,
    mapDispatchToProps,
)(AddTodoForm);
