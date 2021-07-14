import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = (state) => ({
  auth: state.loign
});

export default connect(null, null)(App);
