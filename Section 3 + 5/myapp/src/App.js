import React from 'react';
import './App.css';
import ExpenseCalls from './components/expenses/ExpenseCalls';
import NewExpense from './components/NewExpense/NewExpense';
import data from './components/NewExpense/ExpenseForm';

function App(props) {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	//this how my jsx code transformed by react
	/*
	return React.createElement(
		'div',
		{},
		React.createElement('h2', { className: 'lilo' }, "Let's get started"),
		React.createElement(ExpenseCalls, { expenses: expenses })
	);
	*/

	function reciveFormDataHandler(formData) {
		const myFormData = {
			...formData,
		};

		console.log(myFormData);
	}

	return (
		<div>
			<NewExpense onReceivedFormData={reciveFormDataHandler} />
			<ExpenseCalls expenses={expenses}></ExpenseCalls>
		</div>
	);
}

export default App;
