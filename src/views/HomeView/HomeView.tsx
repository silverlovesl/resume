import React, { CSSProperties, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Col, Divider, Row, Select, Tooltip, Avatar } from 'antd';
import { PhoneFilled, MailFilled, EnvironmentFilled } from '@ant-design/icons';
import CareerChronologyDiagram from '../../components/CareerChronologyDiagram/CareerChronologyDiagram';
import LanguageAbility from '../../components/LanguageAbility/LanguageAbility';
import EducationBackground from '../../components/EducationBackground/EducationBackground';
import Portfolio from '../../components/Portfolio/Portfolio';
import Hobby from '../../components/Hobby/Hobby';
import ProjectCareer from '../../components/ProjectCareer/ProjectCareer';
import Accessment from '../../components/Accessment/Accessment';
import './HomeView.scss';
import { cookieService } from '../../services/cookie.service';

const { Option } = Select;
const languageBox = {
  width: '150px',
  position: 'absolute',
  top: '8px',
  right: '8px',
} as CSSProperties;

type Props = {} & RouteComponentProps;
const HomeView: React.FC<Props> = prop => {
  const [age] = useState((new Date().getTime() - new Date(1987, 5, 5).getTime()) / (1000 * 3600 * 24 * 365));

  return (
    <section className="home-view">
      <h1 className="app__page-title">履歴</h1>
      {/* <Select style={languageBox} defaultValue={cookieService.language} onChange={v => (cookieService.language = v)}>
        <Option key="zh" value="zh">
          <Avatar size={18} src="./images/flag/china.svg" />
          <span className="g-ml-xxs">中文</span>
        </Option>
        <Option key="ja" value="ja">
          <Avatar size={18} src="./images/flag/japan.svg" />
          <span className="g-ml-xxs">日本語</span>
        </Option>
      </Select> */}
      <Row align="middle">
        <Col span={6} xs={24} sm={24} md={6} lg={6} xl={6} xxl={6} className="g-text-center">
          <Avatar src="./images/profile.png" size={140} />
          <Col span={24}></Col>
        </Col>
        <Col span={12} xs={24} sm={24} lg={12} xl={12} xxl={12}>
          <ruby className="g-fs-24 fc-gray-9">
            <span>夏 曄</span>
            <rt>
              <span>カ</span>
              <span className="g-ml-xs">ヨウ</span>
            </rt>
          </ruby>
          <h5 className="fc-gray-6">The devil's in the detail</h5>
          <Divider className="g-my-xs bc-primary" />
          <ul className="home-view__profile-list">
            <li>
              <label>国籍</label>
              <span>中国</span>
            </li>
            <li>
              <label>出生年月</label>
              <span>1987-06-05 ({age.toFixed(0)}歳)</span>
            </li>
            <li>
              <label>性别</label>
              <span>男</span>
            </li>
          </ul>
          <Divider className="g-my-xs bc-primary" />
          <Row>
            <Col span={8} xs={24} sm={24} lg={8} xl={8} xxl={8}>
              <PhoneFilled className="g-mr-xxs force-fc-success" />
              <span>(080)-7936-8088</span>
            </Col>
            <Col span={10} xs={24} sm={24} lg={10} xl={10} xxl={10}>
              <MailFilled className="g-mr-xxs force-fc-primary" />
              <span>541074770@qq.com</span>
            </Col>
            <Col span={6} xs={24} sm={24} lg={6} xl={6} xxl={6}>
              <EnvironmentFilled className="g-mr-xxs force-fc-danger" />
              <span>東京</span>
            </Col>
          </Row>
        </Col>
        <Col span={6} xs={24} sm={24} lg={6} xl={6} xxl={6} className="g-pl-lg g-text-center">
          <a onClick={() => prop.history.push('/skills')} className="g-text-center fc-primary">
            <Tooltip title="スキルシート" defaultVisible={true} placement="bottom">
              <Avatar src="./images/skills.svg" shape="square" size={100} style={{ display: 'block', margin: '0 auto' }} />
            </Tooltip>
          </a>
        </Col>
      </Row>
      <Divider className="g-my-sm bc-primary" />
      <Row>
        <Col span={24}>
          <CareerChronologyDiagram />
        </Col>
      </Row>
      <Divider className="g-my-sm bc-primary" />
      <Row>
        <Col span={24}>
          <Card>
            {/* 語学力 */}
            <Card.Grid className="home-view__grid-item">
              <LanguageAbility />
            </Card.Grid>
            {/* 教育背景 */}
            <Card.Grid className="home-view__grid-item">
              <EducationBackground />
            </Card.Grid>
            {/* スキル */}
            <Card.Grid className="home-view__grid-item">
              <Accessment />
            </Card.Grid>
            {/* プロジェクト */}
            <Card.Grid className="home-view__grid-item">
              <ProjectCareer {...prop} />
            </Card.Grid>
            {/* ポートフォリオ */}
            <Card.Grid className="home-view__grid-item" style={{ background: '#364d79' }}>
              <Portfolio />
            </Card.Grid>
            {/* 趣味 */}
            <Card.Grid className="home-view__grid-item">
              <Hobby />
            </Card.Grid>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default HomeView;
