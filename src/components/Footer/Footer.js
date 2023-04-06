import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {styled} from "@mui/material/styles"

const useStyles = styled((theme) => ({

  socialMediaContainer: {
    marginTop: theme.spacing(8),
  },
 
}));


export function ControlledFooter() {
  const classes = useStyles();
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Get our best deals delivered straight to your inbox – sign up for our newsletter today!      
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button variant="success" className="my-button">Subscribe</Button>
          </form>
        </div>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2 style={{ color: " rgb(232, 232, 13)" }}>About Us</h2>
            <Link to='/'>Company Overview</Link>
            <Link to='/'>Our Team</Link>
            <Link to='/'>Mission and Values</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact Information</Link>
            <Link to='/'>Customer Support</Link>
            <Link to='/'>FAQs</Link>
            <Link to='/'>Feedback</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Partners</h2>
            <Link to='/'>Become a Partner</Link>
            <Link to='/'>Partner Benefits</Link>
            <Link to='/'>Affiliate Program</Link>
            <Link to='/'>Partner Portal</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Socials</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
         <div style={{ display: "flex", justifyContent: "space-between", width: "400px" }} className={classes.socialMediaContainer}>
              <IconButton aria-label="Facebook">
                <FacebookIcon style={{ fontSize: "40px", color: "rgb(232, 232, 13)" }} />
              </IconButton>
              <IconButton aria-label="Twitter">
                <TwitterIcon style={{ fontSize: "40px", color: "rgb(232, 232, 13)" }}/>
              </IconButton>
              <IconButton aria-label="Instagram">
                <InstagramIcon style={{ fontSize: "40px", color: "rgb(232, 232, 13)" }}/>
              </IconButton>
              <IconButton aria-label="LinkedIn">
                <LinkedInIcon style={{ fontSize: "40px", color: "rgb(232, 232, 13)" }}/>
              </IconButton>                 
          </div>
          <small class='website-rights'> © Inventory System Limited 2023</small>
    </div>
  );
}

