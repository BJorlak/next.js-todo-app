import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dueDateValue, setDueDateValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDateValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
        description: descriptionValue,
        dueDate: dueDateValue,
      },
    ]);
    setInputValue("");
    setDescriptionValue("");
    setDueDateValue("");
  };

  const handleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-indigo-900">
      <div className="max-w-md mx-auto pt-16">
        <h1 className="text-2xl font-bold text-center text-teal-50 mb-8">
          To Do List
        </h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-3 mb-3"
            placeholder="Enter a new task..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-full border-gray-300 rounded-md py-2 px-3 mb-3"
            placeholder="Enter a description..."
            value={descriptionValue}
            onChange={handleDescriptionChange}
          />
          <input
            type="date"
            className="w-full border-gray-300 rounded-md py-2 px-3 mb-3"
            placeholder="Enter a due date..."
            value={dueDateValue}
            onChange={handleDueDateChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Add Task
          </button>
        </form>
        <ul className="space-y-4">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
