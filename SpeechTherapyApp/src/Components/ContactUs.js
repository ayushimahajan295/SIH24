import React from 'react';
import './ContactUs.css'; // Ensure you have this CSS file

// Importing the icons
import location from '../Assets/location.jpg';
import phone from '../Assets/phone.jpg';
import email from '../Assets/email.jpg';

// Importing social media icons
import facebookIcon from '../Assets/facebook_icon.jpg';
import instagramIcon from '../Assets/instagram_icon.jpg';
import twitterIcon from '../Assets/twitter_icon.jpg';
import linkedinIcon from '../Assets/linkedin_icon.jpg';
import youtubeIcon from '../Assets/youtube_icon.jpg';

function ContactUs() {
  return (
    <div id="contactus" className="contactus">
      <div className="contact-details">
        <br />
        <h3>Contact Us</h3>
        <p>Get in touch with a speech therapist, or some information</p>
        <p>about the services we provide, or just have a question for</p>
        <p>us, please fill up the form and we will get back to you.</p>
        <br />
        <div className="contact-item">
          <img src={location} alt="Location" className="contact-icon" />
          <div>
            <strong>Speech Therapy Head-Office</strong><br />
            Sassoon Road-40, Sangamvadi, Pune, Maharashtra 411001
          </div>
        </div>
        <div className="contact-item">
          <img src={phone} alt="Phone" className="contact-icon" />
          <div>
            <strong>For Emergency and Book Appointment</strong><br />
            +91 20 6760 6060
          </div>
        </div>
        <div className="contact-item">
          <img src={email} alt="Email" className="contact-icon" />
          <div>
            <strong>For any query or career</strong><br />
            manager@speechtherapy.com<br />
            support@speechtherapy.com
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-media-icons">
          <a href="https://www.facebook.com/speechtherapy" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/speechtherapy" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://twitter.com/speechtherapy" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/speechtherapy" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/speechtherapy" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <br />
        <br />
        <br />
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Telephone" required />
          <textarea placeholder="Comment" required></textarea>
          <button type="submit" className="submit-btn"> SUBMIT </button>
        </form>
      </div>

      <div className="alsoread">
        <br />
        <h3>Also Read</h3>
        <ul>
          <li><a id="link" href="https://en.wikipedia.org/wiki/Speech%E2%80%93language_pathology">Speech Therapy Overview</a></li>
          <li><a id="link" href="https://www.jogohealth.in/speech-therapy/about-various-speech-therapy-techniques/">Techniques for Speech Improvement</a></li>
          <li><a id="link" href="https://pubs.asha.org/ajslp/aboutajslp">Advances in Speech Therapy</a></li>
          <li><a id="link" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6464758/">NIH Speech Therapy</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
