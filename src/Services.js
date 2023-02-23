import React from 'react'
import NavBar from './NavBar'
import './Pages.css'

function Services() {
  return (
    <section>
      <NavBar />
      <div className='Container'>
        <h1>Our Services</h1>
        <h2>[Company Name] is a full-service agency that provides web design, digital marketing,
          and branding services to businesses. Our web design services focus on creating modern, user-friendly,
          and responsive websites that are optimized for performance and search engine ranking.
        </h2>
        <h2>Our digital marketing services include SEO, PPC advertising,
          social media marketing, and email marketing, and are tailored to meet the unique needs and goals of our clients. Our branding services help businesses
          establish a strong brand identity and communicate their values effectively. </h2>
        <h2>We work closely with our clients to understand their requirements and deliver customized solutions that meet their expectations.
          Our team of experts are skilled and experienced in their respective fields, and are committed to delivering high-quality work
          that meets the needs and expectations of our clients.
        </h2>
        <h2>We believe in building long-term relationships with our clients, and our services
          are designed to help them achieve their goals and grow their businesses. Contact us today to learn more about our services and how we can help
          your business succeed.</h2>
      </div>
    </section>
  )
}

export default Services