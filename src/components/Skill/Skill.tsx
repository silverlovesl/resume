import React from 'react';
import { Avatar, Button, Col, Progress, Row } from 'antd';
import { Gutter } from 'antd/lib/grid/row';

type Props = {};

const Skill: React.FC<Props> = _ => {
  const gutter: [Gutter, Gutter] = [16, 4];
  const iconSize = 24;

  return (
    <div className="skill g-pos-relative">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/skills.svg" />
        スキル
      </h3>
      <Row gutter={gutter}>
        <Col span={6} className="g-text-center">
          <Avatar src="/images/vue.svg" size={iconSize} />
          <h5 className="g-ma-none">Vue</h5>
        </Col>
        <Col span={18}>
          <Progress percent={100} steps={10} format={() => '熟知'} status="normal" />
        </Col>
      </Row>
      <Row gutter={gutter}>
        <Col span={6} className="g-text-center">
          <Avatar src="/images/react.svg" size={iconSize} />
          <h5 className="g-ma-none">React</h5>
        </Col>
        <Col span={18}>
          <Progress percent={80} steps={10} format={() => '熟知'} status="normal" />
        </Col>
      </Row>
      <Row gutter={gutter}>
        <Col span={6} className="g-text-center">
          <Avatar src="/images/angular.svg" size={iconSize} />
          <h5 className="g-ma-none">Angular</h5>
        </Col>
        <Col span={18}>
          <Progress percent={70} steps={10} format={() => '熟知'} status="normal" />
        </Col>
      </Row>
      <span style={{ position: 'absolute', bottom: '-20px', right: '-4px' }}>
        <Button size="small" type="primary">
          詳細
        </Button>
      </span>
    </div>
  );
};

export default Skill;
