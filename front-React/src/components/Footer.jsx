import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='footer text-white'>
            <div className='container'>
                <footer className='py-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <h4>TRILOBITES
                                <br/>
                                <br/>
                                <br/>
                                Others Trilobites:
                            </h4>
                        </div>
                        <div className='col-2'>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Pagetia</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Balizoma variolaris</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Ampyx [Cnemidopyge]</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Griffith ides</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Cyphaspis</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-2'>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Trinucleus fimbriates</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Acanthopyge</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Crotalocephatus</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Calymene</a>
                                </li>
                                <li className='nav-item mb-2'>
                                    <a to='#' className='nav-link p-0 text-white'>Pricydopyge</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-4 offset-1'>
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Montly digest of whats new and exicting from us.</p>
                            <div className='d-flex w-100 gap-2'>
                                <label htmlFor='newsletter1' className='visually-hidden'>Email address
                                </label>
                                <input id='newsletter1' type='text' className='form-control' placeholder = 'Email address'/>

                            <button className='btn btn-light rounded-pill px-4' type='button'>Subscribe</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </footer>
            </div>
        </footer>
    </div>
  )
}

export default Footer;