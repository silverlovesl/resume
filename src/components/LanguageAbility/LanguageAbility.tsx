import React from 'react';
import { List, Avatar } from 'antd';

type Props = {};

const LanguageAbility: React.FC<Props> = _ => {
  return (
    <div className="language-ability">
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/language.svg" />
        語学力
      </h3>
      <List bordered={false}>
        <List.Item actions={[<span className="fc-primary">ネイティブ</span>]}>
          <Avatar size={24} src="./images/flag/china.svg" className="g-mr-xs-force" />
          中文
        </List.Item>
        <List.Item actions={[<span className="fc-primary">マスター</span>]}>
          <Avatar size={24} src="./images/flag/japan.svg" className="g-mr-xs-force" />
          日本語
        </List.Item>
        <List.Item actions={[<span className="fc-primary">読み・書き</span>]}>
          <Avatar size={24} src="./images/flag/united-states.svg" className="g-mr-xs-force" />
          English
        </List.Item>
      </List>
    </div>
  );
};

export default LanguageAbility;
