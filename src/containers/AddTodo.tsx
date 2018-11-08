import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { addTodo } from "../actions/todoActions";
import AddTodoForm from "../components/AddTodoForm";
import { TodosAction } from "../reducers/todos";

const mapDispatchToProps = (dispatch: Dispatch<TodosAction>) => bindActionCreators({
    onAdd: addTodo,
}, dispatch);

export default connect(
    undefined,
    mapDispatchToProps,
)(AddTodoForm);
