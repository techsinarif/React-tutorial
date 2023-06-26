import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} />
			))}
		</ul>
	);
};

export default TodoList;