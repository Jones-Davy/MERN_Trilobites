import React from 'react'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <section id="home">
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 mt-5 '>

                    <h1 className='display-4 fw-bolder mb-4 text-center text-white'>Trilobite: Eyewitness to Evolution</h1>
                    <p className='lead text-center fs-4 mb-5 text-white'>Millions of years ago, these extraordinary animals of the most unthinkable shapes and sizes, predatory and gentle, crumbs and giants, reigned in the oceans and on land and then disappeared. Today you can not only get thorough information about trilobites and their contemporaries, but also feel the pace of evolution that produced these creatures and allowed them to march triumphantly across oceans and epochs. You will learn how to move Africa with the help of trilobites and how to tell time using a trilobite dial.
                </p>
                <div className='buttons d-flex justify-content-center'>
                    <NavLink to='/contact/' className='xx btn btn-light me-4 rounded-pill px-4 py-2'>Order Trilobite</NavLink>
                    <NavLink to='/service/'className='xx btn btn-outline-light rounded-pill px-4 py-2'>Our Trilobites</NavLink>
                </div>
                </div>
                </div>
                </div>
                </section>
                
                <About/>
                <Services/>
                <Contact/>
    </div>
  );
}
export default Home;
