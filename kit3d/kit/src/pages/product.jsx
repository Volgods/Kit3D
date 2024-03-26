import '../style/product.css'
import logo from '../img/logotypes/Frame 364.png'
import input from '../img/logotypes/input.png'
import icon from '../img/logotypes/Icon.png'
import badge from '../img/logotypes/badge.png'
import heart from '../img/logotypes/heart.png'
import user from '../img/user.png'
import truck from '../img/truck.png'
import order from '../img/myorders.png'
import dostavka from '../img/dostavka.png'





const Product = () => {
    return (
        <>
        <header>
        <nav>
          <div className="nav-container">
            <div className="navbar">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="navigations">
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
                <button className='registerBTN'>
                  <img
                    className="register"
                    width="157px"
                    height="38px"
                    src={input}
                    alt=""
                  />
                </button>
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
        <div style={{height: "105px", width: "100%", backroundColor: "white" }}></div>
        <div className="banners">
          <div className="dark">
            <div className="btn-box">
              <h1>Lorem, ipsum.</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident, velit!
              </h2>
              <button className="btn-banner">Click</button>
            </div>
          </div>
        </div>
      </header>
      <div className="products">
        <h1>promotion 50%</h1>
        <div className="products-container">
          <div className="cards">
            <div className="cards-line-1">
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
            </div>
            <div className="cards-line-2">
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
            </div>
            <div className="cards-line-2">
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
            </div>
            <div className="cards-line-2">
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <div className="line-card">
                    <div className="discount">50%</div>
                    <button className="like">
                      <img src={heart} alt="" />
                    </button>
                  </div>
                </div>
                <div className="card-data">
                  <div className="cost">44,50₽</div>
                  <div className="categorie">Фигурка</div>
                  <div className="name">Эльфиливая Башня</div>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                  </div>
                  <button className="btn">В корзину</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <footer>
        <div className="footer-container">
          <div className="foote">
            <img className="user" src={user} alt="" />
            <div className="text">
              <h1>Online Support</h1>
              <p>Dedicated Support Team</p>
            </div>
            <img
              className="truck"
              src={truck}
              style={{height: "50px", marginTop: "7px"}}                                        
              alt=""
            />
            <div className="text">
              <h1>Free Shiping</h1>
              <p>Purchases Over $50</p>
            </div>
            <img src={order} alt="" />
            <div className="text">
              <h1>Timeless Shopping</h1>
              <p>24/7 Purchasing</p>
            </div>
  
            <img
              src={dostavka}
              style={{height: "50px", width: "50px", marginTop: "6px"}}                                                 
              alt=""
            />
            <div className="text">
              <h1>Product Returns</h1>
              <p>No-Questions-Asked Returns</p>
            </div>
          </div>
          <hr />
          <div className="foot-bottom">
            <div className="text1">
              <h1>Stay Conneted</h1>
              <h3>Address: Pavlodar, Lermontova 93</h3>
              <h3>Phone: (+7) 705 777 77 77</h3>
            </div>
  
            <div className="text2">
              <h1>KIT3D</h1>
              <h3>About Us</h3>
              <h3>Careers</h3>
              <h3>Collaboration</h3>
              <h3>Dashboard</h3>
              <h3>Policies</h3>
            </div>
  
            <div className="text3">
              <h1>Stay Conneted</h1>
              <h3>Contact Us</h3>
              <h3>Blog</h3>
              <h3>Returns and refunds</h3>
              <h3>FAQ</h3>
            </div>
          </div>
        </div>
        <div className="block-orange">
          <h2>© All Rights Reserved for KIT3D - 2024</h2>
        </div>
      </footer>
      </>
        )
}

export default Product;