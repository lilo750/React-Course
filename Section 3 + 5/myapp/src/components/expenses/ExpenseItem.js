import React, { useState } from 'react';
import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function Expense(props) {
	const [title, setTitle] = useState(props.title);

	function changeTitle() {
		setTitle('title changed now');
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.price}</div>
			</div>
			<button onClick={changeTitle}>Click me to change title</button>
		</Card>
	);
}

export default Expense;
