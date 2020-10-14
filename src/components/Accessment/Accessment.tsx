import React from 'react';
import { Avatar, Col, Progress, Row } from 'antd';
import { Gutter } from 'antd/lib/grid/row';

type Props = {};

const Accessment: React.FC<Props> = _ => {
  const gutter: [Gutter, Gutter] = [16, 4];
  const iconSize = 24;

  const assessments = [
    { title: '開発力', percent: 100, image: './images/programming.svg' },
    { title: '宣教力', percent: 80, image: './images/teaching.svg' },
    { title: '統率力', percent: 50, image: './images/leadership.svg' },
  ];

  return (
    <div className="skill g-pos-relative">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/assessment.svg" />
        自己評価
      </h3>
      {assessments.map((item, i) => {
        return (
          <Row gutter={gutter} key={i}>
            <Col span={6} className="g-text-center">
              <Avatar src={item.image} shape="square" size={iconSize} />
              <h5 className="g-ma-none">{item.title}</h5>
            </Col>
            <Col span={18} className="g-pt-xxs">
              <Progress percent={item.percent} steps={10} format={v => `${v}点`} status="normal" />
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Accessment;
