import React from 'react';
import { Avatar, Timeline } from 'antd';

type Props = {};

const EducationBackground: React.FC<Props> = _ => {
  return (
    <div className="language-ability">
      <h3 className="g-mb-md g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/certificate.svg" />
        教育背景
      </h3>
      <Timeline>
        <Timeline.Item>
          2009-02-01 情報処理専門学校卒業
          <p className="fc-gray-6">基本情報処理資格取得</p>
        </Timeline.Item>
        <Timeline.Item>
          2008-07-01 某短大卒業
          <p className="fc-gray-6">ビジネス日本語専攻、N1取得</p>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default EducationBackground;
