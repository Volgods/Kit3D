import '../style/about.css'
import logo from '../img/logotypes/Frame 364.png'
import input from '../img/logotypes/input.png'
import icon from '../img/logotypes/Icon.png'
import badge from '../img/logotypes/badge.png'
import group from '../img/Group1298.png'
import user from '../img/user.png'
import truck from '../img/truck.png'
import order from '../img/myorders.png'
import dostavka from '../img/dostavka.png'
import img19 from '../img/image 19.png'
import img20 from '../img/image 20.png'



const Home = () => {
    return (
        <div className='wrappers'>
        <nav>
      <div className="nav-containerr">
        <div className="navbarr">
          <div className="logoo">
            <img src={logo} alt="" />
          </div>
          <div className="navigationss">
          
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
          <div className="extraBtnss">
            <a href="login.html">
              <img
                className="registerr"
                width="157px"
                height="38px"
                src={input}
                alt=""
              />
            </a>
            <button className="cartt">
              <img src={icon} alt="" />
            </button>
            <button className="searchh">
              <img src={badge} alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    <section>
      <div style={{height: "105px", width: "100%", backgroundColor: "white"}}>
      </div>
      <div className="imgg">
        <h1>We are the best College</h1>

        <h1>
          Our 3D figures are made of the most durable
          <br />
          and high-quality plastic
        </h1>
      </div>

      <div className="main-textt">
        <h1>About Us</h1>
      </div>
      <div className="about-us-imge">
        <img src={img19} alt="" />

        <h1>Lorem ipsum, adapted ripsim</h1>
        <h2>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt <br />
          ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis <br />
          nostrud exercitation ullamco laboris <br />
          nisi ut aliquip ex ea commodo consequat. 
        </h2>
      </div>

      <div className="about-us-imagee">
        <img src={img20} alt="" />

        <h1>Lorem ipsum, adapted ripsim</h1>
        <h2>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt <br />
          ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis <br />
          nostrud exercitation ullamco laboris <br />
          nisi ut aliquip ex ea commodo consequat. 
        </h2>
      </div>
      <div className="card-h11">
        <h1>Our specialists</h1>
      </div>
      <div className="cardd">
        <img src={group} alt="" />
        <img src={group} alt="" />
        <img src={group} alt="" />
      </div>
    </section>
    <footer>
      <div className="footerr">
        <img className="userr" src={user} alt="" />
        <div className="textt">
          <h1>Online Support</h1>
          <p>Dedicated Support Team</p>
        </div>
        <img
          className="truckk"
          src={truck}
          style={{height: "50px", marginTop: "7px"}}
          alt=""
        />
        <div className="textt">
          <h1>Free Shiping</h1>
          <p>Purchases Over $50</p>
        </div>
        <img src={order} alt="" />
        <div className="textt">
          <h1>Timeless Shopping</h1>
          <p>24/7 Purchasing</p>
        </div>

        <img
          src={dostavka}
          style={{height: "50px", width: "50px", marginTop: "6px"}}
          alt=""
        />
        <div className="textt">
          <h1>Product Returns</h1>
          <p>No-Questions-Asked Returns</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottomm">
        <div className="text11">
          <h1>Stay Conneted</h1>
          <h3>Address: Pavlodar, Lermontova 93</h3>
          <h3>Phone: (+7) 705 777 77 77</h3>
        </div>

        <div className="text22">
          <h1>KIT3D</h1>
          <h3>About Us</h3>
          <h3>Careers</h3>
          <h3>Collaboration</h3>
          <h3>Dashboard</h3>
          <h3>Policies</h3>
        </div>

        <div className="text33">
          <h1>Stay Conneted</h1>
          <h3>Contact Us</h3>
          <h3>Blog</h3>
          <h3>Returns and refunds</h3>
          <h3>FAQ</h3>
        </div>
      </div>

      <div className="block-orangee">
        <h2>© All Rights Reserved for KIT3D - 2024</h2>
      </div>
    </footer>
    </div>
        )
}

export default Home;