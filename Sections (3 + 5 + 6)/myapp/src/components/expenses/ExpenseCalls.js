import React, { useState } from 'react';
import Expense from './ExpenseItem';
import './ExpenseCalls.css';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpenseFilter';

const ExpensesCalls = (props) => {
	const [year, setYear] = useState('2023');
	function expenseFilterHandler(yearChosen) {
		setYear(yearChosen);
	}

	const filteredDate = props.expenses.filter((item) => {
		return year === item.date.getFullYear().toString();
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onSaveFilter={expenseFilterHandler}
					selectedYear={year}
				/>

				{/* this code is equal to all the code below and this the correct way */}
				{filteredDate.map((item) => (
					<Expense
						title={item.title}
						price={item.amount}
						date={item.date}
						key={item.id}
					/>
				))}

				{/* 				
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
					date={props.expenses[3].date}></Expense> */}
			</Card>
		</div>
	);
};

export default ExpensesCalls;
