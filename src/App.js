import './App.css';
import Header from './header.jsx'
import Footer from './footer.jsx'
import HamSolar from './hamsolar.jsx';
import Menubar from './menubar.jsx';
import ContentsContainer from './contentscontainer.jsx'
function App() {

  return(
    <div className='main' style={{
      height:'100%',
    }}>
      <Header></Header>
      <HamSolar></HamSolar>
      <Menubar></Menubar>
      <ContentsContainer></ContentsContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
