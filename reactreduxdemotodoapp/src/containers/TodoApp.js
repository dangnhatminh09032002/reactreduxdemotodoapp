import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { addTodo, setTodos, fetchTodos } from "../redux/todo";

// key: todos đầu chính là props mà mình muốn truyền vào Component dc khai báo ở bên dưới
// value: state.todo.items chính là nhánh trong redux
const mapStateToProps = (state) => {
  return {
    todos: state.todo.items
  };
};

const mapActionsToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  setTodos: (items) => dispatch(setTodos(items)),
  // fetchTodos: async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //   dispatch(setTodos(res.data));
  // }
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapActionsToProps)(TodoApp);
// concect sẽ trả về component
