import React from "react";

function TodoItem({ todo, index, handleComplete, handleDelete }) {
  if (!todo) {
    return null;
  }

  const { text, completed, description, dueDate } = todo;

  return (
    <li className="flex items-center py-4 bg-teal-100 rounded-md p-6">
      <button
        className={`p-2 rounded-full ${
          completed ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={() => handleComplete(index)}
      >
        {completed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          ""
        )}
      </button>
      <div className="ml-4 flex-grow">
        <div
          className={`text-gray-900 font-bold ${
            completed ? "line-through" : ""
          }`}
        >
          {text}
        </div>
        {description && (
          <div className="text-gray-700 text-sm">{description}</div>
        )}
        {dueDate && (
          <div className="text-gray-700 text-sm">
            Due Date: {dueDate}
          </div>
        )}
      </div>
      <button
        className="p-2 ml-4 rounded-full bg-red-500"
        onClick={() => handleDelete(index)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
