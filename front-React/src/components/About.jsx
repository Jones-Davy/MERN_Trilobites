import React from 'react'

const About = () => {
  return (
    <div>
        <section id='#about' className='about'>
            <div className='container  py-5 '>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/assets/about3.jpg' alt='About' className='w-75 mt-5'/>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='fs-5 text-white'>About Us</h3>
                        <h1 className='display-6 text-white'>Who <b>We</b> Are</h1>
                        <hr className='w-50'/>
                        <p className='lead mb-4 text-white'>We are a web resource, after registering on which you will have access to information about dozens of the best books about trilobites.</p>
                        <p className='lead mb-4 text-white'>However, you will receive information not only about trilobites, but also about such sciences as paleontology and zoology in general.</p>    
                        <p className='lead mb-4 text-white'>I almost forgot. Here you can also order a trilobite of the type you like.</p>

                    </div>
                </div>
            </div>
        </section>
        </div>
  )
}

export default About;