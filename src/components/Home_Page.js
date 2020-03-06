import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';





export default class Home_Page extends Component {
    render() {
        return (
        <React.Fragment>
                <Carousel autoPlay>
    <div>
      <img src="https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/2/2019/10/5cf4c5fdbfe2b4240d2444bfa0744b8c.jpg" alt="image1" />
      <p className="legend">
      <Link to="/ProductList" className="text-white">
             <h5>FIND OUT MORE..</h5>
            </Link>
      
        </p>
    </div>
    <div>
      <img src="https://cdn.cultofmac.com/wp-content/uploads/2019/07/Image-11-07-2019-09-49-1.jpeg" alt="image2"  />
      <p className="legend">
      <Link to="/ProductList" className="text-white">
             <h5>FIND OUT MORE..</h5>
            </Link></p>
    </div>
    <div>
      <img src="https://pro.eslgaming.com/india/wp-content/uploads/2019/11/19100367-1280x720.jpg" alt="image3"  />
      <p className="legend"> <Link to="/ProductList" className="text-white">
             <h5>FIND OUT MORE..</h5>
            </Link></p>
    </div>
    <div>
      <img src="https://www.hidevolution.com/images/alienware/51m/6.png" alt="image4" />
      <p className="legend"> <Link to="/ProductList" className="text-dark">
             <h5>FIND OUT MORE..</h5>
            </Link></p>
    </div>
    <div>
      <img src="https://uk.store.asus.com/media/wysiwyg/zenbook-pro-duo-ux581gv/16-kv.jpg" alt="image2" />
      <p className="legend"> <Link to="/ProductList" className="text-white">
             <h5>FIND OUT MORE..</h5>
            </Link></p>
    </div>
    <div>
      <img src="https://cdn.cnetcontent.com/syndication/mediaserverredirect/9f50d42683d344103f0ef5098f77b44e/original.jpg" alt="image1" />
      <p className="legend"> <Link to="/ProductList" className="text-white">
             <h5>FIND OUT MORE..</h5>
            </Link></p>
    </div>

    <div>
      <img src="https://images10.newegg.com/BizIntell/item/34/234/34-234-949/12_Incredibly%20Immersive%20Sound.jpg" alt="image2" />
      <p className="legend"> <Link to="/ProductList" className="text-white">
             <h5>FIND OUT MORE..</h5>
            </Link></p>
    </div>
    
  </Carousel>


  </React.Fragment>
        );
    }
}


