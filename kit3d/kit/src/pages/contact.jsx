import '../style/contact.css'
import logo from '../img/logotypes/Frame 364.png'
import input from '../img/logotypes/input.png'
import icon from '../img/logotypes/Icon.png'
import badge from '../img/logotypes/badge.png'
import user from '../img/user.png'
import truck from '../img/truck.png'
import order from '../img/myorders.png'
import dostavka from '../img/dostavka.png'
import img25 from '../img/image 25.png'
import img27 from '../img/image 27.png'
import img28 from '../img/image 28.png'
import img29 from '../img/image 29.png'

const Contact = () => {
    return (
        <div className='wrappaperd'>
         <nav>
        <div className="nav-container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigatio">
            <button>
                Home
                </button>
                <button>
                Products
                </button>
                <button>
              About us
                </button>
                <button>
                Contact
                </button>
            </div>
            <div className="extraBtns">
              <a href="login.html">
                <img
                  className="register"
                  width="157px"
                  height="38px"
                  src={input}
                  alt=""
                />
              </a>
              <button className="cart">
                <img src={icon} alt="" />
              </button>
              <button className="search">
                <img src={badge} alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    <div style={{height: "105px", width: "100%", backgroundColor: "white"}}></div>
    <div className="fon">
       <h2>Where can you find us?</h2>
    </div>
    <div className="contact">
        <div className="image">
            <div className="images">
                <img src={img25} alt="" />
                <img src={img28} alt="" />         
                <img src={img27} alt="" />         
                <img src={img29} alt="" />
            </div>
            <div className="main-text">
                <h1>Lermontova 93</h1>
                <h1>+7 718 262 58 06</h1>
                <h1>kit@gmail.com</h1>
                <h1>8:00 AM TO 18:00 PM</h1>
            </div>
        </div>
    </div>

    <div className="karta">
        <h2>Our location</h2>
                        <script className="map" type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab517c32eb842edb28e91c94527e2ee4df61e8b1a5f05cf2102c5ee87aa948fff&amp;width=470&amp;height=280&amp;lang=en_FR&amp;scroll=true"></script>
                    </div>
                    <footer>
                        <div className="fot">
                            <img className="uer" src={user} alt="" />
                            <div className="tet">
                                <h1>Online Support</h1>
                                <p>Dedicated Support Team</p>
                            </div>
                            <img className="tuck" src={truck} style={{height: "50px", marginTop: "7px"}}  alt="" />    
                            <div className="tet">
                                <h1>Free Shiping</h1>
                                <p>Purchases Over $50</p>
                            </div>
                            <img src={order} alt="" />
                            <div className="tet">
                                <h1>Timeless Shopping</h1>
                                <p>24/7 Purchasing</p>
                            </div>
                  
                            <img src={dostavka} style={{height: "50px", width: "50px", marginTop: "6px"}} alt="" />
                            <div className="tet">
                  
                                <h1>Product Returns</h1>
                                <p>No-Questions-Asked Returns</p>
                            </div>
                      </div>
                        <hr />
                        <div className="foot-botom">
                           <div className="tet1">
                            <h1>Stay Conneted </h1>
                            <h3>Address: Pavlodar, Lermontova 93</h3>
                            <h3>Phone: (+7) 705 777 77 77</h3>
                            
                           </div>
                  
                           <div className="tet2">
                            <h1>KIT3D </h1>
                            <h3>About Us</h3>
                            <h3>Careers</h3>
                            <h3>Collaboration</h3>
                            <h3>Dashboard</h3>
                            <h3>Policies</h3>
                           </div>
                  
                           <div className="tet3">
                            <h1>Stay Conneted </h1>
                            <h3>Contact Us</h3>
                            <h3>Blog</h3>
                            <h3>Returns and refunds</h3>
                            <h3>FAQ</h3>
                           </div>
                        </div>
                  
                        <div className="block-oran">
                            <h2>© All Rights Reserved for KIT3D - 2024</h2>
                        </div>
                     </footer>
                     </div>
        )
}

export default Contact;