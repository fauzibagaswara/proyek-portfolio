   import {Link , useLocation } from 'react-router-dom'
  import "../styles/Nav.css"
 import email from "../assets/emailnav.png"
 import listnav from '../assets/listnav.png';
 import man from '../assets/man.png';
 import   mail from '../assets/mail.png'

const Nav  = () => { 

    const location = useLocation();

    const getnavpositionclass = () => {

        switch (location.pathname) {
           case"/" :
           return 'nav-about';
           case "/skills":

           return "nav-skills";
           case "/projects" :

           return "nav-projects";
           case "/contact":
            return "nav-contact ";
            default :
            return "";


        }
    }
    const getPagetTitle  = () => {

        switch (location.pathname) {
           case"/" :
           return 'ABOUT';
           case "/skills":

           return "SKILL";
           case "/projects" :

           return "PROJECT";
           case "/contact":
            return "Contact ";

            default :
            return "";


        }
    }

    const navbarpositionclass = getnavpositionclass();
    const pageTittle = getPagetTitle();

    const isCurrnetPage = (navClass) =>  {

         return navClass === navbarpositionclass
    };

    const renderNavlink = (to ,imgsrc , altText , navClass)=> {
        const isCurrent = isCurrnetPage(navClass);
        const linkClass = isCurrent ? "nav-link current ": "nav-link";
        return (

             <Link to = {to} className  ={linkClass}>
             <img src = {imgsrc} alt = {altText}></img>
             {isCurrent && <h1 className = "page-title">{pageTittle}</h1>}
             </Link>
        )
    }

    return (
      <nav className={`nav ${navbarpositionclass}`}>
        {renderNavlink(
             '/',
             man,
             "email icon ",
             "nav-about"
        )} 
        {renderNavlink("/skills",email,"dead icon ","nav-skills"  )}
        {renderNavlink("/projects",listnav,"stack icon ","nav-projects"  )}
        {renderNavlink("/contact",mail,"envelope icon ","nav-contact"  )}
      </nav>
          
    ) 
}




export default Nav