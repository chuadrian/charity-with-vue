<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Hope Foundation</h3>
          <p>Making a difference in communities worldwide through sustainable development and education initiatives.</p>
          <div class="social-links">
            <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'x-twitter']" />
            </a>
            <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#success">Success Stories</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Programs</h4>
          <ul class="footer-links">
            <li><a href="#education">Education</a></li>
            <li><a href="#healthcare">Healthcare</a></li>
            <li><a href="#environment">Environment</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for updates and news.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Your email address" required>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Hope Foundation. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background: linear-gradient(135deg, #1F2937 0%, #111827 100%);
    color: white;
    padding: 4rem 2rem 1rem;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  .footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .footer-section h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .footer-section p {
    color: #9CA3AF;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .social-links {
    display: flex;
    gap: 1rem;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .social-link:hover {
    background: var(--gradient);
    transform: translateY(-3px);
  }
  
  .footer-links {
    list-style: none;
  }
  
  .footer-links li {
    margin-bottom: 0.75rem;
  }
  
  .footer-links a {
    color: #9CA3AF;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: white;
  }
  
  .newsletter-form {
    display: flex;
    gap: 0.5rem;
  }
  
  .newsletter-form input {
    flex: 1;
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  .newsletter-form input::placeholder {
    color: #9CA3AF;
  }
  
  .newsletter-form button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    background: var(--gradient);
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .newsletter-form button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  }
  
  .footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .footer-bottom p {
    color: #9CA3AF;
  }
  
  .footer-bottom-links {
    display: flex;
    gap: 2rem;
  }
  
  .footer-bottom-links a {
    color: #9CA3AF;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-bottom-links a:hover {
    color: white;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      gap: 2rem;
    }
    
    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }
    
    .footer-bottom-links {
      justify-content: center;
    }
  }
  </style>