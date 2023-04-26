import {
  AiOutlineCheckCircle,
  AiOutlineDelete,
} from "react-icons/ai";

export default function TodoItem({
  todo,
  index,
  handleComplete,
  handleDelete,
}) {
  return (
    <li
      className={`flex justify-between items-center py-2 px-3 rounded-md ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <div className="flex-1">
        <span
          className={`text-lg ${todo.completed && "line-through"}`}
        >
          {todo.text}
        </span>
        {todo.description && (
          <p className="text-gray-500">{todo.description}</p>
        )}
        {todo.dueDate && (
          <p className="text-red-500">{todo.dueDate}</p>
        )}
      </div>
      <div>
        {!todo.completed && (
          <button
            className="text-green-500 hover:text-green-600 mr-4"
            onClick={() => handleComplete(index)}
          >
            <AiOutlineCheckCircle />
          </button>
        )}
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => handleDelete(index)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  );
}
