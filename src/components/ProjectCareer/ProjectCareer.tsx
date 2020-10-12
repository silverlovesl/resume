import React from 'react';
import { Avatar } from 'antd';

type Props = {};

const ProjectCareer: React.FC<Props> = _ => {
  return (
    <div className="language-ability">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/project-career.svg" />
        プロジェクト経験
      </h3>
    </div>
  );
};

export default ProjectCareer;
