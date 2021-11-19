import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {NavLink , Link} from 'react-router-dom'
import {FiAlignJustify , FiSearch , FiX} from 'react-icons/fi'

const Desktop_Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggler_icon , setToggler_icon] = useState(< FiAlignJustify />)

  const toggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
        setToggler_icon(< FiX />)
    }else {
        setToggler_icon(< FiAlignJustify />)
    }
  };

  return (
    <>
        <nav className="desktop hide-mobile">
            <div expand="md col-12">
                <div className="row j-c-b">
                    <Link to="/" className="logo" style={{color: "#00a562"}} ><span>TC</span></Link>
                    <button className="nav-toggler" onClick={toggle}>
                            {toggler_icon}
                    </button>
                </div>
                <Collapse isOpen={isOpen} className="nav-menu">
                    <div className="head">
                        <div><Link to="" className="join_extra">Join Extra Crunch</Link></div>
                        <div><Link to="">login</Link></div>
                    </div>
                    <div className="body">
                        <div><Link to="" className="search">search<span><FiSearch/></span></Link></div>
                        <div><Link to="" className="_hover">TC Early Stage 2021</Link></div>
                        <div><Link to="" className="_hover">Startups</Link></div>
                        <div><Link to="" className="_hover">Videos</Link></div>
                        <div><Link to="" className="_hover">Audio</Link></div>
                        <div><Link to="" className="_hover">Newsletters</Link></div>
                        <div><Link to="" className="_hover">Extra Crunch</Link></div>
                        <div><Link to="" className="_hover">The TC List</Link></div>
                        <div><Link to="" className="_hover">Advertise</Link></div>
                        <div><Link to="" className="_hover">Events</Link></div>
                        <div><Link to="" className="_hover">__</Link></div>
                        <div><Link to="" className="_hover">More</Link></div>
                    </div>
                </Collapse>
            </div>
        </nav>
    </>
  );
}

export default Desktop_Header;