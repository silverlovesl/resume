import React from 'react';
import { Avatar, Button } from 'antd';
import { EyeFilled } from '@ant-design/icons';

type Props = {};

const ProjectCareer: React.FC<Props> = _ => {
  return (
    <div className="project-career g-pos-relative">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/project-career.svg" />
        プロジェクト経験
      </h3>
      <div className="g-full-width g-text-center">
        <Avatar src="./images/low-pay.jpg" shape="square" size={180} />
      </div>
      <span style={{ position: 'absolute', bottom: '4px', right: '-4px' }}>
        <Button size="small" type="primary" className="g-mt-md" icon={<EyeFilled />}>
          詳細
        </Button>
      </span>
    </div>
  );
};

export default ProjectCareer;
