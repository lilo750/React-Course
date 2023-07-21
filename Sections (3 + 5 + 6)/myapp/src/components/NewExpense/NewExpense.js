import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	function formDataHandler(formDataObj) {
		const formData = {
			id: Math.random().toString(),
			...formDataObj,
		};

		props.onReceivedFormData(formData);
		// console.log(formData);
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveFormData={formDataHandler} />
		</div>
	);
}

export default NewExpense;
