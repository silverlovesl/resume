import React from 'react';
import { List, Tag } from 'antd';
import { SkillListItem } from '../../models/skill';

type Props = {
  dataSource: SkillListItem[];
};

const SkillTool: React.FC<Props> = prop => {
  return (
    <section>
      <h2>その他</h2>
      <div className="g-px-md">
        <List
          bordered={false}
          itemLayout="vertical"
          dataSource={prop.dataSource}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                avatar={<img src={`./images/programming-language/${item.avatar}`} width={30} alt={item.name} />}
                description={
                  <span>
                    {item.tags?.map((t, i) => (
                      <Tag key={i} color="geekblue">
                        {t}
                      </Tag>
                    ))}
                  </span>
                }
              ></List.Item.Meta>
              <ul>
                {item.contents?.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </List.Item>
          )}
        ></List>
      </div>
    </section>
  );
};

export default SkillTool;
