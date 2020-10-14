import React, { CSSProperties, useEffect, useState } from 'react';
import { Avatar, Carousel, Image } from 'antd';

type Props = {};

const contentStyle = {
  height: '180px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  display: 'inline-block',
} as CSSProperties;

interface PotofolioSummary {
  name: string;
  image: string;
}

const Portfolio: React.FC<Props> = _ => {
  const [portfolios, setPortfolios] = useState([] as PotofolioSummary[]);

  useEffect(() => {
    const p = require('../../assets/data/portfolio.json').summary;
    setPortfolios(p);
  }, []);

  return (
    <div className="portfolio">
      <h3 className="g-mb-sm g-ma-none fc-gray-0">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/portfolio.svg" />
        ポートフォリオ
      </h3>

      <Carousel autoplay pauseOnHover={true} dotPosition="right">
        {portfolios.map((d, i) => {
          return (
            <div className="g-text-center" key={i}>
              <a style={contentStyle}>
                <img className="g-full-height" src={d.image} alt={d.name} />
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Portfolio;
