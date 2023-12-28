'use client';
import { Card, Divider } from 'antd';
import React from 'react';

const ContactSection = () => {
  return (
    <>
      <section style={{ width: '100%', overflowX: 'none' }} className={'homeContainer'}>
        <div style={{ width: '80%', margin: 'auto', overflowY: 'none', marginBottom: '100px' }}>
          <div className="flex justify-space-between">
            <p className="font-medium font-weight-900">Contact Us</p>
          </div>
          <div className="flex justify-space-between">
            <p className="font-medium font-weight-900">
              Questions? Feel free to contact us anytime at:{' '}
              <a href="mailto:hello@chooseketamine.com?subject=Question from dashboard contact page">
                <b>hello@chooseketamine.com</b>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
