import React from 'react';
import { Avatar } from 'antd';

type Props = {};

const Portfolio: React.FC<Props> = _ => {
  return (
    <div className="language-ability">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/portfolio.svg" />
        ポートフォリオ
      </h3>
    </div>
  );
};

export default Portfolio;
