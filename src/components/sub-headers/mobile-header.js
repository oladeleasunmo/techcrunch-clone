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
        document.getElementById('logo').style.color = 'white'
    }else {
        setToggler_icon(< FiAlignJustify />)
        document.getElementById('logo').style.color = '#00a562'
    }
  };

  return (
    <>
        <nav className="mobile show-mobile">
            <div expand="md col-12">
                <div className="row j-c-b">
                    <Link to="/" className="logo index-100" id="logo" style={{color: "#00a562"}}><span>TC</span></Link>
                    <button className="nav-toggler" onClick={toggle}>
                            {toggler_icon}
                    </button>
                </div>
                <Collapse isOpen={isOpen} className="nav-menu">
                    <div className="head">
                        <div className="row">
                            <div className="col-6"><Link to="" className="join_extra">Join Extra Crunch</Link></div>
                            <div className="col-6"><Link to="" className="login">login</Link></div>
                        </div>
                    </div>
                    <div className="body">
                        <div>
                            <form>
                                <fieldset>
                                    <div className="row">
                                        <div className="search-icon"><FiSearch/></div>
                                        <input type="text" className="search" placeholder="search techcrunch"/>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
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