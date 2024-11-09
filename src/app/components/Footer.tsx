import React from 'react';

const Footer = () => {
  return (
    <div className='bg-blue-800 text-white p-8'>
      <div className='text-center mb-4'>
        <h1 className='text-white-300 text-2xl'>ALL RIGHTS RESERVED</h1>
        <br />
        <p className='text-sm'>© 2024 My Company</p>
      </div>
      <div className='flex justify-center space-x-4 mb-4'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>
          Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:underline'>
          LinkedIn
        </a>
      </div>
      <div className='text-center'>
        <p className='text-sm'>Contact us: info@example.com | Phone: (123) 456-7890</p>
        <p className='text-sm'>Privacy Policy | Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;

