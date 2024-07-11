import background from '../app/background.jpg';
import Form from './form';

function HomePage() {
    return <div className='relative w-full min-h-screen'>
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${background.src})`}}>
        <Form />
      </div>
    </div>;
  }
  
  export default HomePage;
  