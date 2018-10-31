import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions/actionCreators";
import Link, { ArgProps, CallbackProps } from "../components/Link";
import { AppState } from "../models/appState";
import VisibilityFilters from "../models/visibilityFilters";

type Props = {
    filter: VisibilityFilters;
};

function mapStateToProps(state: AppState, ownProps: Props): ArgProps {
    return {
        active: ownProps.filter === state.visibilityFilter,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: Props): CallbackProps {
    return {
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);
