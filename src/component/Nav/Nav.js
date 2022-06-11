import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Nav.css";

export default function Nav() {
    const [menuBtnClicked, setMenuBtnClicked] = useState(false)
    const [activeBtn, setActiveBtn] = useState("")
    useEffect(() => {
        setActiveBtn("home")
    },[])

    const menuClicked = () => {
        if(menuBtnClicked) {
            setMenuBtnClicked(false)
        } else{
            setMenuBtnClicked(true)
        }
    }
    const navClick = (v) =>{
        setActiveBtn(v)
    }
    
    return (
    <div className='main'>
        <div className='logoContainer'>
            <Link to="/" className='logo'>Logo</Link>
        </div>
        <div className='menu-icon'>
            <i className={menuBtnClicked ? "fa-solid fa-xmark": "fa-solid fa-bars-staggered"} onClick={()=>menuClicked()}></i>
        </div>
        <nav className={menuBtnClicked ? "navOpen":"navClose" }>
            <Link to="/" className={activeBtn ==="home" ? "activeNavBtn":"navBtn"} onClick={()=>navClick("home")}>Home</Link>
            <Link to="/about" className={activeBtn ==="about" ? "activeNavBtn":"navBtn"} onClick={()=>navClick("about")}>About</Link>
            <Link to="/properties" className={activeBtn ==="properties" ? "activeNavBtn":"navBtn"} onClick={()=>navClick("properties")}>Properties</Link>
            <Link to="/sell" className={activeBtn ==="sell" ? "activeNavBtn":"navBtn"} onClick={()=>navClick("sell")}>Sell</Link>
        </nav>
        <Outlet />
    </div>
  )
}
