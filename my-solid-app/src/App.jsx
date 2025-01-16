import { createSignal } from "solid-js";

function App() {
  const [todos, setTodos] = createSignal([]);
  let input;

  const addTodo = () => {
    if (input.value.trim()) {
      setTodos([...todos(), { text: input.value, completed: false }]);
      input.value = "";
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos().map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos(todos().filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input ref={input} type="text" placeholder="Add a todo" />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos().map((todo, index) => (
          <li
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "green" : "black",
            }}
          >
            <span>{todo.text}</span>
            <button onClick={() => toggleTodo(index)}>Completed</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;