import { connect } from "react-redux";
import { addTodo } from "../actions/actionCreators";
import AddTodoForm, { CallbackProps } from "../components/AddTodoForm";

function mapDispatchToProps(dispatch: any): CallbackProps {
    return {
        onAdd: (name) => dispatch(addTodo(name)),
    };
}

export default connect(
    undefined,
    mapDispatchToProps,
)(AddTodoForm);
