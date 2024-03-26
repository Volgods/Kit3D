import '../style/home.css'
import logo from '../img/logotypes/Frame 364.png'
import user from '../img/user.png'
import truck from '../img/truck.png'
import input from '../img/logotypes/input.png'
import icon from '../img/logotypes/Icon.png'
import badge from '../img/logotypes/badge.png'
import niaz from '../img/Niaz.png'
import product from '../img/product.png'
import cart from '../img/cart.png'
import order from '../img/myorders.png'
import dostavka from '../img/dostavka.png'
import { NavLink } from 'react-router-dom'




const Home = () => {
  return (
    <div className='wrapper'>
    <nav>
    <div className="nav-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navigations">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/product'}>Products</NavLink>
        <NavLink to={'about'}>About us</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
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
  <div style={{height:"105px", width:"100%", backgroundColor: "white"}}></div>
  <div className="menu">
  </div>
  <div className="under-menu">
    <div className="under-menu-container">
      <img width="250px" src={niaz} alt="" />
      <div className="product">
        <div className="product-img">
          <img
            width="200px"
            height="167px"
            src={product}
            alt=""
          />
        </div>
        <div className="product-name">Lorem, ipsum.</div>
        <div className="product-cost-box">
          <div className="product-main-cost">
            <div className="product-cost">998$</div>
            <div className="product-discount">1200$</div>
          </div>
          <div className="product-cart">
            <img width="24px" src={cart} alt="" />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product-img">
          <img
            width="200px"
            height="167px"
            src={product}
            alt=""
          />
        </div>
        <div className="product-name">Lorem, ipsum.</div>
        <div className="product-cost-box">
          <div className="product-main-cost">
            <div className="product-cost">998$</div>
            <div className="product-discount">1200$</div>
          </div>
          <div className="product-cart">
            <img width="24px" src={cart} alt="" />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product-img">
          <img
            width="200px"
            height="167px"
            src={product}
            alt=""
          />
        </div>
        <div className="product-name">Lorem, ipsum.</div>
        <div className="product-cost-box">
          <div className="product-main-cost">
            <div className="product-cost">998$</div>
            <div className="product-discount">1200$</div>
          </div>
          <div className="product-cart">
            <img width="24px" src={cart} alt="" />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product-img">
          <img
            width="200px"
            height="167px"
            src={product}
            alt=""
          />
        </div>
        <div className="product-name">Lorem, ipsum.</div>
        <div className="product-cost-box">
          <div className="product-main-cost">
            <div className="product-cost">998$</div>
            <div className="product-discount">1200$</div>
          </div>
          <div className="product-cart">
            <img width="24px" src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <main>
    
    <div className="main-container">
      <div className="mainProducts">
        <div className="mainProducts-line1">
          <div className="product1">
            <div className="discount-box">
              <div className="discount-box-container">
                <div className="discount-number">5% Discount</div>
                <div className="discount-text">for small amounts</div>
              </div>
            </div>
          </div>
          <div className="product2">
            <div className="discount-box">
              <div className="discount-box-container">
                <div className="discount-number">12% Discount</div>
                <div className="discount-text">medium items</div>
              </div>
            </div>
          </div>
          <div className="product3">
            <div className="discount-box">
              <div className="discount-box-container">
                <div className="discount-number">15% Discount</div>
                <div className="discount-text">on average amount</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainProducts-line2">
          <div className="product4">
            <div className="discount-box2">
              <div className="discount-box-container">
                <div className="discount-number">30% Discount</div>
                <div className="discount-text">on large items</div>
              </div>
            </div>
          </div>
          <div className="product5">
            <div className="discount-box2">
              <div className="discount-box-container">
                <div className="discount-number">30% Discount</div>
                <div className="discount-text">for large amounts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner-text">
          KIT 3D<br />
          The Highest Quality Plastic
        </div>
        <button className="banner-btn">Show Products</button>
      </div>
      <div className="products">
        <div className="products-line1">
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="products-line2">
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product-img">
              <img
                width="200px"
                height="167px"
                src={product}
                alt=""
              />
            </div>
            <div className="product-name">Lorem, ipsum.</div>
            <div className="product-cost-box">
              <div className="product-main-cost">
                <div className="product-cost">998$</div>
                <div className="product-discount">1200$</div>
              </div>
              <div className="product-cart">
                <img width="24px" src={cart} alt="" />
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
      
  </main>


  <footer>
    <div className="foo">
        <img className="use" src={user} alt="" />
        <div className="tex">
            <h1>Online Support</h1>
            <p>Dedicated Support Team</p>
        </div>
        <img className="truc" src={truck} style={{height: "50px",marginTop: "7px" }} alt="" />    
        <div className="tex">
            <h1>Free Shiping</h1>
            <p>Purchases Over $50</p>
        </div>
        <img src={order} alt="" />
        <div className="tex">
            <h1>Timeless Shopping</h1>
            <p>24/7 Purchasing</p>  
        </div>

        <img src={dostavka} style={{height: "50px", width: "50px", marginTop: "7px"}} alt="" />
        <div className="tex">

            <h1>Product Returns</h1>
            <p>No-Questions-Asked Returns</p>
        </div>
  </div>
    <hr className='hr1' />
    <div className="foot-botto">
       <div className="tex1">
        <h1>Stay Conneted </h1>
        <h3>Address: Pavlodar, Lermontova 93</h3>
        <h3>Phone: (+7) 705 777 77 77</h3>
        
       </div>

       <div className="tex2">
        <h1>KIT3D </h1>
        <h3>About Us</h3>
        <h3>Careers</h3>
        <h3>Collaboration</h3>
        <h3>Dashboard</h3>
        <h3>Policies</h3>
       </div>

       <div className="tex3">
        <h1>Stay Conneted </h1>
        <h3>Contact Us</h3>
        <h3>Blog</h3>
        <h3>Returns and refunds</h3>
        <h3>FAQ</h3>
       </div>
    </div>

    <div className="block-orang">
        <h2>© All Rights Reserved for KIT3D - 2024</h2>
    </div>
 </footer>
 </div>
  )
}

export default Home;
