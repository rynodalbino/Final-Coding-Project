import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
        <section className='section'>
          <h2 class='text-center'>Welcome</h2>
            <p class='text-center'>Thank you for using my budget tracker!</p>
          <Link to='/tips' className='btn btn-primary'>
            Budget Tips
          </Link>
          <Link to='/dave' className='btn btn-primary'>
            Dave Ramsey
          </Link>
        </section>
      </>
    );
  };
  
  export default Home;