import { Badge, Card, Col, Descriptions, Divider, Row, Timeline, Typography, Avatar, List, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import myAvatar from '../../assets/images/avatar.jpeg';
import SkillLanguageMap from '../../components/Skill/SkillLanguageMap';
import { Project, SkillLanguargeMap } from '../../models';
import '../ProjectListView/ProjectListView.scss';
import {
  ReadOutlined,
  DashboardOutlined,
  CoffeeOutlined,
  DotChartOutlined,
  ExperimentOutlined,
  PieChartOutlined,
  CodeOutlined,
  BgColorsOutlined,
  ApiOutlined,
  ConsoleSqlOutlined,
} from '@ant-design/icons';
import './index.scss';

const { Title, Text } = Typography;

type Props = {} & RouteComponentProps;

interface SkillPoint {
  lang: string;
  icon: string;
  desc: string[];
}

const ResumePDFView: React.FC<Props> = _ => {
  const skillData = require('../../assets/data/skill.json');
  const skillPointData = require('../../assets/data/skill-point.zh-CN.json');
  const [skillLanguageMapData] = useState(skillData.skills as SkillLanguargeMap);
  const [skillPoints] = useState(skillPointData.skillPoints as SkillPoint[]);
  const cardBodyStyle = { marginTop: '1.5rem', paddingBottom: '0.5rem' } as React.CSSProperties;
  const [projects, setProjects] = useState([] as Project[]);

  useEffect(() => {
    const p = require('../../assets/data/project.zh-CN.json');
    setProjects(p.projects);
  }, []);

  return (
    <article className="resume-pdf-view">
      <Typography>
        <Title>个人简历</Title>
      </Typography>
      <Row className="g-mt-sm">
        <Col span={24}>
          <Badge.Ribbon text="基本信息" placement="start">
            <Card bodyStyle={cardBodyStyle}>
              <Row>
                <Col lg={5} xs={24} sm={24} md={5} className="g-text-center">
                  <Avatar shape="square" src={myAvatar} size={130} />
                </Col>
                <Col lg={19} xs={24} sm={24} md={19}>
                  <Descriptions>
                    <Descriptions.Item label="姓名">夏 晔 (xià yè)</Descriptions.Item>
                    <Descriptions.Item label="性别">男</Descriptions.Item>
                    <Descriptions.Item label="出生年月">1987-06-05</Descriptions.Item>
                    <Descriptions.Item label="出生地">上海</Descriptions.Item>
                    <Descriptions.Item label="电话">17521134477</Descriptions.Item>
                    <Descriptions.Item label="邮箱">541075770@qq.com</Descriptions.Item>
                    <Descriptions.Item label="微信">yin1037</Descriptions.Item>
                    <Descriptions.Item label="工作年限">9年</Descriptions.Item>
                    <Descriptions.Item label="求职岗位">Golang后端开发</Descriptions.Item>
                    <Descriptions.Item label="备注">
                      <span className="fc-primary">目前人在东京，2021年11月预定回国</span>
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm">
        <Col span={24}>
          <Badge.Ribbon text="自我介绍" placement="start" color="#434343">
            <Card bodyStyle={cardBodyStyle}>
              <ul>
                <li>
                  计算机基础扎实，开发经验丰富<span className="fc-danger">(不是外包，不是外包，不是外包)</span>
                </li>
                <li>旅居日本多年，日语接近母语水平，有多年与日方商务谈判经验</li>
                <li>开发经丰富，在团队一直担当Tech Leader</li>
                <li>技术全面单挑实力强，独立和日本客户谈项目一个人可以完成整个项目的开发，测试，上线</li>
                <li>永远对技术充满好奇心以及学习热情，掌握市面上大部分主流开发技术(C++除外)</li>
                <li>手速快，开发效率奇高，一个月同时干过4个项目</li>
                <li>有过技术讲师经验，理解新人常见问题以及痛点</li>
                <li className="fc-primary">坚信技术宅能够拯救世界</li>
              </ul>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm">
        <Col span={24}>
          <Badge.Ribbon text="教育・职历" placement="start" color="lime">
            <Card bodyStyle={cardBodyStyle}>
              <Timeline>
                <Timeline.Item dot={<DashboardOutlined />}>2018.6 ~ 现今　　(日) 株式会社Institution for a Global Society</Timeline.Item>
                <Timeline.Item dot={<DashboardOutlined />}>2013.6 ~ 2018.5　(日) 株式会社PowerStar</Timeline.Item>
                <Timeline.Item dot={<DashboardOutlined />}>2010.4 ~ 2013.6　(中) 上海NCS计算机信息有限公司</Timeline.Item>
                <Timeline.Item dot={<ReadOutlined className="force-fc-danger" />}>2009.3 ~ 2010.3　日本大阪日语研修</Timeline.Item>
                <Timeline.Item dot={<ReadOutlined className="force-fc-danger" />}>2008.1 ~ 2009.1　在校期间软件开发培训</Timeline.Item>
                <Timeline.Item dot={<ReadOutlined className="force-fc-danger" />}>2005.9 ~ 2008.7　上海建峰职业技术学院　　大专　　商务日语专业</Timeline.Item>
              </Timeline>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm">
        <Col span={24}>
          <Badge.Ribbon text="语言能力" placement="start" color="magenta">
            <Card bodyStyle={cardBodyStyle}>
              <Row gutter={[16, 16]}>
                <Col lg={8} xs={24} sm={8} md={8} className="g-text-center">
                  <Avatar size={24} src="./images/flag/china.svg" />
                  <ul className="g-text-left">
                    <li>母语</li>
                    <li>2年公司内部培训讲师经验</li>
                  </ul>
                </Col>
                <Col lg={8} xs={24} sm={8} md={8} className="g-text-center">
                  <Avatar size={24} src="./images/flag/japan.svg" className="g-mr-xs-force" />
                  <ul className="g-text-left">
                    <li>日语1级，大学时参加过日语配音活动</li>
                    <li>日本近10年生活经验，接近母语水平</li>
                    <li>可独立处理日常生活以及商务谈判</li>
                  </ul>
                </Col>
                <Col lg={8} xs={24} sm={8} md={8} className="g-text-center">
                  <Avatar size={24} src="./images/flag/united-states.svg" className="g-mr-xs-force" />
                  <ul className="g-text-left">
                    <li>熟练读写开发类技术文档</li>
                    <li>简单日常会话</li>
                    <li>Github，Stack Overflow， Redit 常客</li>
                  </ul>
                </Col>
              </Row>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm page-break">
        <Col span={24}>
          <Badge.Ribbon text="优势&amp;技术特长" placement="start" color="volcano">
            <Card>
              <div className="g-py-sm">
                <Card title="优势" size="small">
                  <Card.Grid className="g-text-center">
                    <CoffeeOutlined className="g-fs-56" style={{ color: '#fa8c16' }} />
                    <div className="g-pt-sm">独立开发者，自我学习，开拓能力</div>
                  </Card.Grid>
                  <Card.Grid className="g-text-center">
                    <CodeOutlined className="g-fs-56" style={{ color: '#595959' }} />
                    <div className="g-pt-sm">命令行玩得溜</div>
                  </Card.Grid>
                  <Card.Grid className="g-text-center">
                    <BgColorsOutlined className="g-fs-56" style={{ color: '#eb2f96' }} />
                    <div className="g-pt-sm">UI设计开发</div>
                  </Card.Grid>
                  <Card.Grid className="g-text-center">
                    <ApiOutlined className="g-fs-56" style={{ color: '#1890ff' }} />
                    <div className="g-pt-sm">架构设计，开发</div>
                  </Card.Grid>
                  <Card.Grid className="g-text-center">
                    <ConsoleSqlOutlined className="g-fs-56" style={{ color: '#f5222d' }} />
                    <div className="g-pt-sm">性能优化</div>
                  </Card.Grid>
                  <Card.Grid className="g-text-center">
                    <PieChartOutlined className="g-fs-56" style={{ color: '#52c41a' }} />
                    <div className="g-pt-sm">数据可视化</div>
                  </Card.Grid>
                </Card>
              </div>
              <List
                itemLayout="horizontal"
                dataSource={skillPoints}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<img src={`./images/programming-language/${item.icon}`} style={{ width: '30px' }} />}
                      title={<b className="g-fs-16">{item.lang}</b>}
                      description={item.desc.map(d => (
                        <Tag>{d}</Tag>
                      ))}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm page-break">
        <Col span={24} className="page-break">
          <Badge.Ribbon text="项目经验" placement="start" color="orange">
            <Card bodyStyle={cardBodyStyle}>
              <List
                itemLayout="vertical"
                size="large"
                dataSource={projects}
                renderItem={(item, index) => (
                  <List.Item key={item.id} extra={<img loading="lazy" src={item.image} style={{ maxWidth: '272px', height: '200px' }} alt={item.title} />}>
                    <List.Item.Meta
                      avatar={<Avatar shape="square" src="./images/project-career.svg" />}
                      description={item.description}
                      title={<span>{`${index + 1}. ${item.title}`}</span>}
                    />
                    <ul className="project-list-view__teck-list">
                      <li>
                        <label>详细:</label>
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
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm page-break">
        <Col span={24}>
          <Badge.Ribbon text="技能树" placement="start" color="purple">
            <Card bodyStyle={cardBodyStyle}>
              <SkillLanguageMap title="语言技能图" dataSource={skillLanguageMapData} axis={{ xLabel: '使用年数', yLabel: '熟练度' }} />
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
      <Row className="g-mt-sm page-break">
        <Col span={24}>
          <Badge.Ribbon text="生活爱好" placement="start" color="#13c2c2">
            <Card bodyStyle={cardBodyStyle}>
              <Row>
                <Col lg={8} xs={24} sm={8} md={8} className="g-text-center">
                  <Title level={3}>撸铁</Title>
                  <Text mark>卧推: 150kg　深蹲: 140kg　硬拉: 180kg</Text>
                  <div className="g-mt-sm"></div>
                  <Avatar shape="square" src="./images/life/muscle.jpg" size={240} />
                </Col>
                <Col lg={8} xs={24} sm={8} md={8} className="g-text-center">
                  <Title level={3}>写程序</Title>
                  <Text mark>用HHKB没有菜鸟，懂得自然懂</Text>
                  <div className="g-mt-sm"></div>
                  <Avatar shape="square" src="./images/life/coding.jpg" size={240} />
                </Col>
                <Col lg={8} xs={24} sm={8} md={8} className="g-text-center">
                  <Title level={3}>游戏</Title>
                  <Text mark>抵制盗版，这是一种态度</Text>
                  <div className="g-mt-sm"></div>
                  <Avatar shape="square" src="./images/life/game.jpg" size={240} />
                </Col>
              </Row>
            </Card>
          </Badge.Ribbon>
        </Col>
      </Row>
    </article>
  );
};

export default ResumePDFView;
