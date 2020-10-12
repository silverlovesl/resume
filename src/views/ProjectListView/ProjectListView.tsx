import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { List, Tag, Tooltip } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { LinkOutlined } from '@ant-design/icons';
import './ProjectListView.scss';

type Props = {} & RouteComponentProps;

interface Project {
  id: number;
  title: string;
  url?: string;
  description: string;
  detail?: string;
  basicDesign?: boolean;
  detailedDesign?: boolean;
  implementation?: boolean;
  unitTest?: boolean;
  integrationTest?: boolean;
  release?: boolean;
  image?: string;
  frontend?: string;
  backend?: string;
  other?: string;
  CI?: string;
}

const ProjectListView: React.FC<Props> = () => {
  const [projects, setProjects] = useState([] as Project[]);
  useEffect(() => {
    const p = require('../../assets/data/project.json');
    setProjects(p.projects);
  }, []);

  console.log(projects);
  return (
    <section className="project-list-view">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={projects}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <label>
                <Tag color={item.basicDesign ? 'blue' : ''}>基本設計</Tag>
              </label>,
              <label>
                <Tag color={item.detailedDesign ? 'blue' : ''}>詳細設計</Tag>
              </label>,
              <label>
                <Tag color={item.implementation ? 'blue' : ''}>実装</Tag>
              </label>,
              <label>
                <Tag color={item.unitTest ? 'blue' : ''}>単体テスト</Tag>
              </label>,
              <label>
                <Tag color={item.integrationTest ? 'blue' : ''}>総合テスト</Tag>
              </label>,
              <label>
                <Tag color={item.release ? 'blue' : ''}>リリース</Tag>
              </label>,
            ]}
            extra={<img src={item.image} height={200} />}
          >
            <List.Item.Meta
              avatar={<Avatar shape="square" src="./images/project-career.svg" />}
              description={item.description}
              title={
                <span>
                  {item.title}{' '}
                  {item.url && (
                    <Tooltip title="Go to site">
                      <a className="force-fc-primary" href={item.url} target="_blank">
                        <LinkOutlined />
                      </a>
                    </Tooltip>
                  )}
                </span>
              }
            />
            <p>{item.detail}</p>
            <ul className="project-list-view__teck-list">
              <li>
                <label>Frontend: </label>
                <span>{item.frontend}</span>
              </li>
              <li>
                <label>Backend: </label>
                <span>{item.backend}</span>
              </li>
              {item.CI ? (
                <li>
                  <label>CI: </label>
                  <span>{item.CI}</span>
                </li>
              ) : null}
              {item.other ? (
                <li>
                  <label>そのた: </label>
                  <span>{item.other}</span>
                </li>
              ) : null}
            </ul>
          </List.Item>
        )}
      ></List>
    </section>
  );
};

export default ProjectListView;
