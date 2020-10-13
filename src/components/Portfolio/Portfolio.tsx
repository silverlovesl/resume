import React, { CSSProperties, useState } from 'react';
import { Avatar, Carousel } from 'antd';

type Props = {};

const contentStyle = {
  height: '180px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  display: 'inline-block',
} as CSSProperties;

const Portfolio: React.FC<Props> = _ => {
  return (
    <div className="portfolio">
      <h3 className="g-mb-sm g-ma-none fc-gray-0">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/portfolio.svg" />
        ポートフォリオ
      </h3>

      <Carousel autoplay pauseOnHover={true} dotPosition="right">
        <div className="g-text-center">
          <a style={contentStyle}>
            <img className="g-full-height" src="./images/portfolios/parkcinema/p1.png" />
          </a>
        </div>
        <div className="g-text-center">
          <a style={contentStyle}>
            <img className="g-full-height" src="./images/portfolios/resource-dashboard/p1.png" />
          </a>
        </div>
        <div className="g-text-center">
          <a style={contentStyle}>
            {/* <video controls={false} autoPlay={true} height="180" src="images/portfolios/grow/IRT.mov"></video> */}
            <img className="g-full-height" src="./images/portfolios/grow/p1.png" />
          </a>
        </div>
        <div className="g-text-center">
          <a style={contentStyle}>
            <img className="g-full-height" src="./images/portfolios/koko/p1.png" />
          </a>
        </div>
        <div className="g-text-center">
          <a style={contentStyle}>
            <img className="g-full-height" src="./images/portfolios/grid-ai/p1.jpg" />
          </a>
        </div>
      </Carousel>
    </div>
  );
};

export default Portfolio;
