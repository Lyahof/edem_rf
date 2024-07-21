import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './styles/App.scss'

function App() {
  return (
    <div className='container'>
		<Header/>
			<MainContent/>
		<Footer/>
	 </div>
  );
}

export default App;
