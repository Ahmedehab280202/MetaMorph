import React from 'react'
import '../../CSS/home_styling/footer.css'

const Footer = () => {
  return (
    <section className='home-footer'>
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Upcoming Anouncments</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul class="links">
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Partnerships</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
