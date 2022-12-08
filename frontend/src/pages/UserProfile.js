import React from 'react'
import Header from '../components/Header'
import Logo from '../assets/Logo.png'
import Product from '../components/Product'
const UserProfile = () => {
  return (
    <div className='user__rofile'>
        <Header/>
    
    <div className='login__logo'>
                <img src={Logo} alt="ticativ logo"/>
    </div>
    <div className='user__description'>
        <p className='user__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat mi, accumsan bibendum feugiat sed, varius ac orci. Pellentesque scelerisque quis ex eget egestas. Etiam aliquet pellentesque mi ut feugiat. Nulla aliquam arcu leo, sed laoreet nulla fermentum sed. Nunc porta sit amet lorem sed luctus. Fusce tristique ligula id tincidunt condimentum. Fusce ac mauris ultricies, elementum sem in, interdum tortor. Pellentesque ut dui nisl. Suspendisse eget commodo dui. Fusce in egestas orci. Nam suscipit velit enim, a semper magna ornare non.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce erat mi, accumsan bibendum feugiat sed, varius ac orci. Pellentesque scelerisque quis ex eget egestas. Etiam aliquet pellentesque mi ut feugiat. Nulla aliquam arcu leo, sed laoreet nulla fermentum sed. Nunc porta sit amet lorem sed luctus. Fusce tristique ligula id tincidunt condimentum. Fusce ac mauris ultricies, elementum sem in, interdum tortor. Pellentesque ut dui nisl. Suspendisse eget commodo dui. Fusce in egestas orci. Nam suscipit velit enim, a semper magna ornare non.</p>

    </div>
    <div className="home__row">
          <Product />
          <Product />
          
        </div>
    </div>
  )
}

export default UserProfile