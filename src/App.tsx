import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm'

function App() {
  return (
    <div className="App">
      <div className='home-page__title-wrapper'>
        <div className='home-page__logo-wrapper'>
          <div className='home-page__logo'></div>
        </div>
        {/* <img className='home-page__logo' src="./img/Logo.png" alt="logo" /> */}
        <h2 className='home-page__title'><a className='home-page__title--link' href='/'>Sign Up</a> and find the best place to rest while traveling</h2>
      </div>
      <div className='registration-form-wrapper'>
        <RegistrationForm />
      </div>
      <div className='home-page__title-wrapper--footer'>
        <h4 className='home-page__title home-page__logo-title--footer '>If you have an account, <a className='home-page__title--link' href='/'>Log In</a></h4>
      </div>
    </div>
  );
}

export default App;
