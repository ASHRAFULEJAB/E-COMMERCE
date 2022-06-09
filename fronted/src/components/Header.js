// import React from 'react'
// import { Router } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { Navbar, Nav, Container, NavDropdown ,NavLink} from 'react-bootstrap'
// import { logout } from '../actions/userActions'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavDropdown} from 'react-bootstrap'
import { Navbar,Nav,Container, NavbarBrand } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Link }  from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <header>
     <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
       <Container> 
         <Link to='/' style={{ textDecoration: 'none' }} >
            <Navbar.Brand  className='text-white  fs-1 
             d-flex justify-content-between align-items-center 
         py-5 px-3' > E_COMMERCE</Navbar.Brand>
            </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>

         <Nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
           <i className="navbar-nav ml-auto"/>
           <Link to='/cart' className='text-white text-decoration-none fs-3 me-4'>
             <NavLink>
           <i className='fas fa-shopping-cart text-white text-decoration-none fs-3 me-4'></i>
             </NavLink> 
            Cart</Link>

            { userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                
                  <NavDropdown.Item><Link to='/profile'>Profile</Link>

                  </NavDropdown.Item>
                
                <NavDropdown.Item onClick={logoutHandler}> Logout</NavDropdown.Item>
              </NavDropdown>
            ) :

       <Link to='/login' className='text-white text-decoration-none fs-3 me-4'> 
        <NavLink><i className='fas fa-user text-white text-decoration-none fs-3 me-4'>
          </i></NavLink>
          Sign In

         </Link>
           }

           
         </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>    
      </header>
  )
}


export default Header ;






//     return (
//         <header className='bg-dark text-white py-5 px-3'>
//            {/* <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect> */}
//   <Container>
//     <div className='d-flex justify-content-between align-items-center'>
//     <div><NavLink to="/" className='text-white text-decoration-none fs-1'>E_COMMERCE</NavLink></div>
//     {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />  */}
//     <div>
//       {/* <Navbar.Collapse id="basic-navbar-nav"> */}
//       {/* <Nav  > */}
//         <NavLink to="/cart" className='text-white text-decoration-none fs-3 me-4'>
//           <i className= 'fas fa-shopping-cart me-1'>
//           </i>Cart</NavLink>
//           <Link>
//           {userInfo ? (
//                 <NavDropdown title={userInfo.name} id='username'>
//                   <Link to='/profile'>
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </Link>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : 
//                 <Link to='/login'>
//                   <Nav.Link>
//                     <i className='fas fa-user'></i> Sign In
//                   </Nav.Link>
//                 </Link>
//               }
//               </Link>
//         <NavLink to ="/logIn "className='text-white text-decoration-none fs-3'>
//            <i className='fas fa-user me-1'></i>Sign In</NavLink>
        
//       {/* </Nav> */}
//     {/* </Navbar.Collapse> */}
//     </div>
//     </div>
//   </Container>
// {/* </Navbar> */}
//              </header>
//     )
// }
// export default Header

// export default Header
// const Header = () => {
//   const dispatch = useDispatch()

//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin

//   const logoutHandler = () => {
//     dispatch(logout())
//   }
// <header>
//   return (
//     <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
//         <Container>
//           <LinkContainer to='/'>
//             <Navbar.Brand>E_COMMERCE</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='ml-auto'>
//               <LinkContainer to='/cart'>
//                 <Nav.Link>
//                   <i className='fas fa-shopping-cart'></i> Cart
//                 </Nav.Link>
//               </LinkContainer>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id='username'>
//                   <LinkContainer to='/profile'>
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </LinkContainer>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : 
//                 <LinkContainer to='/login'>
//                   <Nav.Link>
//                     <i className='fas fa-user'></i> Sign In
//                   </Nav.Link>
//                 </LinkContainer>
//               }
  
//   </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   </header>
// }

//   export default Header