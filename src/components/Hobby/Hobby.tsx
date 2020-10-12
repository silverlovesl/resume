import React from 'react';
import { Avatar, Col, Divider, Row } from 'antd';

type Props = {};

const Hobby: React.FC<Props> = _ => {
  return (
    <div className="language-ability">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/hobby.svg" />
        趣味
      </h3>
      <Row justify="center" gutter={16}>
        <Col span={24} className="g-text-center">
          <Avatar shape="square" src="./images/workout.svg" size={100} />
          <Divider orientation="center" type="vertical" style={{ height: '150px' }} className="g-mx-md-force" />
          <Avatar shape="square" src="./images/badminton.svg" size={100} />
        </Col>
      </Row>
    </div>
  );
};

export default Hobby;
