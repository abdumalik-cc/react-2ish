import React from 'react'
import './App.css';

function App() {
  return (
    <div>
        <header>
            <div className="container">
                  <div className="h-ota">
                       <img src="./Logo.png" alt="" />
                       <div className="h-bola">
                           <nav>
                               <ul>
                                   <li><a href="">Home</a></li>
                                   <li><a href="">Features</a></li>
                                   <li><a href="">Community</a></li>
                                   <li><a href="">Blog</a></li>
                                   <li><a href="">Pricing</a></li>
                               </ul>
                           </nav>
                           <button>Register Now</button>
                       </div>
                  </div>
            </div>
        </header>

        <main>
          <section className='s1'>
              <div className="container">
                  <div className="s1ota">
                      <div className="s1t">
                           <h1>Lessons and insights <br/><span> from 8 years</span></h1>
                           <p>Where to grow your business as a photographer: site or social media?</p>
                           <button>Register</button>
                      </div>
                      <img src="./Illustration.png" alt="" />
                  </div>
              </div>
          </section>

          <section className='s2'>
              <div className="container">
                  <h2>Our Clients</h2>
                  <p>We have been working with some Fortune 500+ clients</p>
                  <div className="s2ota">
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (3).png" alt="" />
                        <img src="./Logo (3).png" alt="" />
                  </div>
              </div>
          </section>

          <section className='s3'>
                <div className="container">
                     <h2>Manage your entire community <br />in a single system</h2>
                     <div className="s3ota">
                         <div className="s3card">
                            <img src="./Icon.png" alt="" />
                            <h3>Membership <br />Organisations</h3>
                            <p>Our membership management <br />software provides full automation of <br />membership renewals and payments</p>
                         </div>
                         <div className="s3card">
                            <img src="./Icon.png" alt="" />
                            <h3>Membership <br />Organisations</h3>
                            <p>Our membership management <br />software provides full automation of <br />membership renewals and payments</p>
                         </div>
                         <div className="s3card">
                            <img src="./Icon.png" alt="" />
                            <h3>Membership <br />Organisations</h3>
                            <p>Our membership management <br />software provides full automation of <br />membership renewals and payments</p>
                         </div>
                     </div>
                </div>
          </section>

              
          <section className='s1'>
              <div className="container">
                  <div className="s1ota">
                      <img src="./Frame 35.png" alt="" />
                      <div className="s1t">
                           <h2>The unseen of spending three <br />years at Pixelgrade</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br />accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br />quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                           <button>Learn More</button>
                      </div>
                  </div>
              </div>
          </section>
        </main>
    </div>
  )
}

export default App