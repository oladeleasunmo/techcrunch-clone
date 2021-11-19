// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';
// import {NavLink , Link} from 'react-router-dom'
// import {FiAlignJustify} from 'react-icons/fi'

// const Header = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div className="header">
//         <Navbar expand="md">
//             <div className="container">
//                 <Link to='/' className="navbar-brand">Logo</Link>
//                 {/* <NavbarToggler onClick={toggle} /> */}
//                 <button className="navbar-toggler" onClick={toggle}>
//                         <FiAlignJustify />
//                 </button>
//                 <Collapse isOpen={isOpen} navbar>
//                     <Nav className="ml-auto" navbar>
//                         <NavItem>
//                             <NavLink to='' className="nav-link">link 1</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink to="" className="nav-link">link 2</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink to='' className="nav-link">link 3</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink to='' className="nav-link">link 4</NavLink>
//                         </NavItem>
//                     </Nav>
//                 </Collapse>
//             </div>
//         </Navbar>
//     </div>
//   );
// }

// export default Header;