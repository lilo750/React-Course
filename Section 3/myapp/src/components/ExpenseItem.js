import './ExpenseItem.css';

function Expense(props) {
	const month = props.date.toLocaleString('en-US', { month: 'long' });
	const Year = props.date.getFullYear();
	const day = props.date.toLocaleString('en-US', { month: '2-digit' });

	return (
		<div className='expense-item'>
			<div>
				<div>{month}</div>
				<div>{Year}</div>
				<div>{day}</div>
			</div>
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.price}</div>
			</div>
		</div>
	);
}

export default Expense;
