import './ExpenseItem.css';

function Expense() {
	return (
		<div className='expense-item'>
			<div className='expense-item__description'>June, 04, 2023</div>
			<h2>car insurauce</h2>
			<div className='expense-item__price'>$544.23</div>
		</div>
	);
}

export default Expense;
