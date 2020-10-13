import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { List, Tag, Tooltip } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import './ProjectListView.scss';
import { Affix, Avatar, Button, Image } from 'antd';
import { UpOutlined } from '@ant-design/icons';

type Props = {} & RouteComponentProps;

interface Project {
  id: number;
  title: string;
  url?: string;
  description: string;
  detail: string[];
  basicDesign?: boolean;
  detailedDesign?: boolean;
  implementation?: boolean;
  unitTest?: boolean;
  integrationTest?: boolean;
  release?: boolean;
  image?: string;
  frontend?: string;
  backend?: string;
  database?: string;
  other?: string;
  CI?: string;
}

const ProjectListView: React.FC<Props> = () => {
  const [projects, setProjects] = useState([] as Project[]);
  const [top, setTop] = useState(20);

  useEffect(() => {
    const p = require('../../assets/data/project.json');
    setProjects(p.projects);
  }, []);

  return (
    <section className="project-list-view">
      <h1 className="project-list-view__title">案件履歴</h1>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={projects}
        footer={<h3>以上</h3>}
        renderItem={(item, index) => (
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
            extra={<img src={item.image} style={{ maxWidth: '272px', height: '200px' }} />}
          >
            <List.Item.Meta
              avatar={<Avatar shape="square" src="./images/project-career.svg" />}
              description={item.description}
              title={
                <span>
                  {`${index + 1}. ${item.title}`}
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
            <ul className="project-list-view__teck-list">
              <li>
                <label>詳細:</label>
                <p className="project-list-view__teck-project-detail" dangerouslySetInnerHTML={{ __html: item.detail.join('<br/>') || '' }}></p>
              </li>
              <li>
                <label>Frontend:</label>
                <span>{item.frontend}</span>
              </li>
              <li>
                <label>Backend: </label>
                <span>{item.backend}</span>
              </li>
              <li>
                <label>DB: </label>
                <span>{item.database}</span>
              </li>
              {item.CI ? (
                <li>
                  <label>CI: </label>
                  <span>{item.CI}</span>
                </li>
              ) : null}
              {item.other ? (
                <li>
                  <label>Other: </label>
                  <span>{item.other}</span>
                </li>
              ) : null}
            </ul>
          </List.Item>
        )}
      ></List>

      <Affix offsetTop={top} offsetBottom={10} style={{ bottom: '10px', right: '20px', position: 'absolute' }}>
        <Button
          type="primary"
          onClick={() => {
            setTop(top + 10);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          icon={<UpOutlined />}
          size="large"
          shape="circle"
        />
      </Affix>
    </section>
  );
};

export default ProjectListView;
