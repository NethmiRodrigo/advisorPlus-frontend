import React from 'react';
import FooterStyes from '../../assets/styles/FooterStyles.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{borderTop: '1px solid lightgrey', marginBottom: '0vh'}}>
        	<div className="footer-top">
		        <div className="container">
		        	<div className="row">
		        		<div className="col-md-3 footer-about wow fadeInUp animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
		        			<p className="display-3 set-color-green" style={{color: 'green'}}>Advisor+</p>
                            {/* <img className="logo-footer" src="assets/img/logo.png" alt="logo-footer" data-at2x="assets/img/logo.png" width="74" height="85" /> */}
		        			<p>
		        				We are a young company always looking for new and creative ideas to help you with our products in your everyday work.
		        			</p>
		        			{/* <p><a href="#">Our Team</a></p> */}
	                    </div>
		        		<div className="col-md-4 offset-md-1 footer-contact wow fadeInDown animated" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
		        			<h3 style={{color: 'darkgreen', fontWeight: 'bold'}}>Contact</h3>
		                	<p><i className="fas fa-map-marker-alt"></i>Colombo, Sri Lanka</p>
		                	<p><i className="fas fa-phone"></i> Phone: (+94) 76 803 6130</p>
		                	<p><i className="fas fa-envelope"></i> Email: <a href="mailto:code360.software@gmail.com">code360.software@gmail.com</a></p>
	                    </div>
	                    <div className="col-md-4 footer-links wow fadeInUp animated" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
	                    	<div className="row">
	                    		<div className="col">
	                    			<h3 style={{color: 'darkgreen', fontWeight: 'bold'}}>Links</h3>
	                    		</div>
	                    	</div>
	                    	<div className="row">
	                    		<div className="col-md-6">
									<Link to="/">
										<p><a className="scroll-link" href="#">Home</a></p>
									</Link>
                                    <Link to="/blog">
										<p><a href="#">Blog</a></p>
									</Link>
									<Link to="/login" >
										<p><a href="#">Sign In</a></p>
									</Link>
									<Link to="/register-user">
										<p><a href="#">User Registration</a></p>
									</Link>
									<Link to="/register-advisor">
										<p><a href="#">Advisor Registration</a></p>
									</Link>
									{/* <Link to="">
										<p><a href="#">Features</a></p>
									</Link>
									<Link to="">
										<p><a href="#">How it works</a></p>
									</Link>
									<Link to="">
										<p><a href="#">Our clients</a></p>
									</Link> */}
	                    		</div>
	                    	</div>
	                    </div>
		            </div>
		        </div>
	        </div>
	        <div className="footer-bottom">
	        	<div className="container">
	        		<div className="row">
	           			<div className="col-md-6 footer-copyright">
	                    	© Advisor+ International Limited by <a href="#">Code360</a>
	                    </div>
	           			<div className="col-md-6 footer-social">
	                    	<a href="https://www.facebook.com/code.threesixty.12/"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>   
							<a href="#"><i className="fab fa-instagram"></i></a> 
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fab fa-dev"></i></a>
	                    </div>
	           		</div>
	        	</div>
	        </div>
        </footer>
    )
}

export default Footer;
