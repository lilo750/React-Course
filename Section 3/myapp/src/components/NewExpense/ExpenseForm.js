import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
	// now we make a state for every input (this called indvitaul state)

	/*
  const [enteredTitle, setInteredTitle] = useState('');
	const [enteredAmount, setInteredAmount] = useState('');
	const [enteredDate, setInteredDate] = useState('');
  */

	// All state in one state approch

	const [interedInput, setInteredInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	function saveTitleHandler(event) {
		// console.log('changed!');
		// console.log(event.target.value);

		// setInteredTitle(event.target.value);

		setInteredInput((prevState) => {
			return {
				...prevState,
				enteredTitle: event.target.value,
			};
		});
	}

	function saveAmountHandler(event) {
		// setInteredAmount(event.target.value);

		setInteredInput((prevState) => {
			return {
				...prevState,
				enteredAmount: event.target.value,
			};
		});
	}

	function saveDateHandler(event) {
		// setInteredDate(event.target.value);

		setInteredInput((prevState) => {
			return {
				...prevState,
				enteredDate: event.target.value,
			};
		});
	}

	function submitHandler(event) {
		// stop the defult browser behvoir that the page reload after submit
		event.preventDefault();

		//save the inputed data in an object and log it

		/*
		const enteredData = {
			title: enteredTitle,
			cost: enteredAmount,
			date: new Date(enteredDate),
		};
    */

		// console.log(enteredData);
		console.log(interedInput);

		// clear the input fields after submit done and collected data in an object

		/*
   setInteredTitle('');
   setInteredAmount('');
   setInteredDate('');
   */

		setInteredInput({
			enteredTitle: '',
			enteredAmount: '',
			enteredDate: '',
		});
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						onChange={saveTitleHandler}
						value={interedInput.enteredTitle}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={saveAmountHandler}
						value={interedInput.enteredAmount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2018-01-01'
						max='2023-10-06'
						onChange={saveDateHandler}
						value={interedInput.enteredDate}
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
