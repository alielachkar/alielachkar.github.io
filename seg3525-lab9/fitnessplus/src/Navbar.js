import logo from './logo.png';
import './navbar.css';

const Navbar = () => {
    return (
        <div className= "container-lg" id="page-top">
            <ul class="nav navbar-expand-lg" id="navbar">
                <a href="/"><img src={logo} width="50" height="50" /></a>
                <li class="nav-item">
                    <h4><a class="nav-link" href="#services">Services</a></h4>
                </li>
                <li class="nav-item">
                    <h4><a class="nav-link" href="#physicians">Our Team</a></h4>
                </li>
                <li class="nav-item">
                    <h4><a class="nav-link" href="#appointments">Find Us</a></h4>
                </li>
            </ul> 
        </div>
    );
}
 
export default Navbar;