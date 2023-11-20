'use client';
import { Card, Collapse, Divider, theme } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import React from 'react';
import { faqContent } from '@/utils/constants/content/faq-content';

const FaqsSection = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <>
      <section style={{ width: '100%', overflowX: 'none' }} className={'primary-bg homeContainer'}>
        <div style={{ width: '80%', margin: 'auto', overflowY: 'none', marginBottom: '100px' }}>
          <div className="flex justify-space-between">
            <p className="font-medium font-weight-900">Frequently Asked Questions</p>
          </div>
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            // defaultActiveKey={faqContent(panelStyle).map((item) => item.key.toString())}
            expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
            style={{
              background: token.colorBgContainer,
            }}
            items={faqContent(panelStyle)}
          />
        </div>
      </section>
    </>
  );
};

export default FaqsSection;
