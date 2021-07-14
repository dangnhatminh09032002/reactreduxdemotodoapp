import { connect } from "react-redux";
import Login from "../components/Login";
import { login } from "../redux/auth";

const mapActionsToProps = (dispatch) => {
  return {
    login
  };
};

export default connect(null, mapActionsToProps)(Login);
