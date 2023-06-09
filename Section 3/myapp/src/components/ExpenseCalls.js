import React from 'react';
import Expense from './ExpenseItem';
import './ExpenseCalls.css';
import Card from './Card';

const ExpenseCalls = (props) => {
	return (
		<Card className='expenses'>
			<Expense
				title={props.expenses[0].title}
				price={props.expenses[0].amount}
				date={props.expenses[0].date}></Expense>
			<Expense
				title={props.expenses[1].title}
				price={props.expenses[1].amount}
				date={props.expenses[1].date}></Expense>
			<Expense
				title={props.expenses[2].title}
				price={props.expenses[2].amount}
				date={props.expenses[2].date}></Expense>
			<Expense
				title={props.expenses[3].title}
				price={props.expenses[3].amount}
				date={props.expenses[3].date}></Expense>
		</Card>
	);
};

export default ExpenseCalls;
