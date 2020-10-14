import React, { useState } from 'react';
import { List, Tag } from 'antd';

type Props = {};

interface SkillListItem {
  name: string;
  items?: string;
}

const SkillList: React.FC<Props> = prop => {
  const data: SkillListItem[] = [{ name: 'Vue' }];
  return (
    <div>
      <List
        bordered={false}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              description={
                <span>
                  <Tag>123</Tag>
                  <Tag>123</Tag>
                </span>
              }
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default SkillList;
