import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
	// now we make a state for every input
	const [enteredTitle, setInteredTitle] = useState('');
	const [enteredAmount, setInteredAmount] = useState('');
	const [enteredDate, setInteredDate] = useState('');

	function saveTitleHandler(event) {
		// console.log('changed!');
		// console.log(event.target.value);

		setInteredTitle(event.target.value);
	}

	function saveAmountHandler(event) {
		setInteredAmount(event.target.value);
	}

	function saveDateHandler(event) {
		setInteredDate(event.target.value);
	}

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={saveTitleHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={saveAmountHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2018-01-01'
						max='2023-10-06'
						onChange={saveDateHandler}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
}

export default ExpenseForm;
