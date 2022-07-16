import logo from './logo.png';
import './App.css';
import { Link,Routes,Route} from 'react-router-dom';
import Work from './Routes/Work'
import Contact from './Routes/Contact'
import About from './Routes/About'


function App() {
  return (
    <div>
          <div className="App">
      <header className='Navbar'>  
        <div className='navlogo'>
        <Link className='Link' to='/work'>
          <img src={logo} />
        </Link>
        </div>
        <div className='navbuttons'>
          <Link className='Link navbtn' to='/work'>
            Work
          </Link>
          <Link className='Link navbtn' to='/about'>
            About
          </Link>
          <Link className='Link navbtn' to='/contact'>
            Contact
          </Link>
          <Link className='Link navbtn' to='/resume'>
            Resume
          </Link>
        </div>
      </header>
      <main>
        efefefe<br/>
        efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>efefefe<br/>
        <Routes>
          <Route path='/work' element={<Work/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

      </main>
    </div>
      <footer className='footer'>

        <div className='lefts'>

          <Link className='Link' to='/work'>
              <img src={logo} />
            </Link>

        </div>
        <div className='rights'>
            <p>
              Working with talented and driven people is my passion; <br/>
              i'll love to build something great together.
            </p>

            <Link className='Cont' to='/contact'>
              Work with me
            </Link>
        </div>

      </footer>
    </div>
      

    
  );
}

export default App;
