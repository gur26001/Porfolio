import logo from './logo.png';
import './App.css';
import { Link,Routes,Route} from 'react-router-dom';
import Work from './Routes/Work'
import Contact from './Routes/Contact'
import About from './Routes/About'


function App() {
  const skillsData=["React​","JavaScript​","CSS​","HTML","jQuery" ,"Python","C++","Java","OpenCV"];
  const projectsData= [
    {name:"Youtube Frontend", des:"Youtube frontend page created using React" ,  thumbnail:"https://1.bp.blogspot.com/-RP5m-XGk7aU/Xd-ailWVZnI/AAAAAAAAKgo/gC24DrIKNEY1DutP3bR7TqfcqNY-SCp4gCLcBGAsYHQ/s1600/youtube-home-page-c.jpg", url:"https://github.com/gur26001/youtube-frontend.git"},
    {name:"Car e-commerce", des:" Simple E-commerce  website's frontend created using HTML,CSS,JS, Jquery and mockAPI " , thumbnail:"https://themeforest.net/category/ecommerce?term=car", url:"https://github.com/gur26001/car-ec.git"  }
  ];
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
        <Routes>
          <Route path='/work' element={<Work skills={skillsData} projects={projectsData} />} />
          <Route path='/about' element={<About  />} />
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
