import { Link } from 'react-router-dom';

const Tips = () => {
    return (
      <section className='section'>
        <Link to='/' className='btn btn-primary'>
            Back Home
        </Link>
        <h2>Tips</h2>
        <ul class='list-group'>
        <li class='list-group-item'> Budget to zero before the month begins. 
This means before the month even starts, you’re making a plan and giving every dollar a name. It’s called a zero-based budget. Now that doesn’t mean you have zero dollars in your bank account. It just means your income minus all your expenses equals zero.
        </li>
        <li class='list-group-item'>Do the budget together. 
If you’re married, sit down once a month and have a family budgeting night. Make it fun! Grab some of your favorite snacks and put on a good playlist to help you focus.</li>
        <li class='list-group-item'>  Remember that every month is different. 
Some months you’ll have to budget for things like back-to-school supplies or routine car maintenance. Other months you’ll be saving for things like vacations, birthdays and holidays. Regardless of the occasion, make sure you prepare for those expenses in the budget. Keep those special occasions from sneaking up on you by pulling up your calendar while you’re creating your budget. Hint: Christmas is in December again this year, guys!
</li>
</ul>
      </section>
    );
  };
  export default Tips;