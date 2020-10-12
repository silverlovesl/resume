import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Card, Col, Divider, Row } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import './HomeView.scss';
import CareerChronologyDiagram from '../../components/CareerChronologyDiagram/CareerChronologyDiagram';
import LanguageAbility from '../../components/LanguageAbility/LanguageAbility';
import EducationBackground from '../../components/EducationBackground/EducationBackground';
import Skill from '../../components/Skill/Skill';
import Portfolio from '../../components/Portfolio/Portfolio';
import Hobby from '../../components/Hobby/Hobby';
import ProjectCareer from '../../components/ProjectCareer/ProjectCareer';
import Accessment from '../../components/Accessment/Accessment';

type Props = {} & RouteComponentProps;
const HomeView: React.FC<Props> = prop => {
  return (
    <section className="home-view">
      <Row>
        <Col span={6} className="g-text-center">
          <Avatar src="./images/profile.png" size={140} />
          <Col span={24}></Col>
        </Col>
        <Col span={10}>
          <ruby className="g-fs-24 fc-gray-9">
            <span>夏 曄</span>
            <rt>
              <span>カ</span>
              <span className="g-ml-xs">ヨウ</span>
            </rt>
          </ruby>
          <Divider className="g-my-xs bc-primary" />
          <ul className="home-view__profile-list">
            <li>
              <label>国籍</label>
              <span>中国</span>
            </li>
            <li>
              <label>出生年月</label>
              <span>1987-06-05</span>
            </li>
            <li>
              <label>性别</label>
              <span>男</span>
            </li>
          </ul>
          <Divider className="g-my-xs bc-primary" />
          <Row>
            <Col span={12}>
              <PhoneFilled className="g-mr-xxs" />
              <span>(080)-7936-8088</span>
            </Col>
            <Col span={12}>
              <MailFilled className="g-mr-xxs" />
              <span className="fc-primary">541074770@qq.com</span>
            </Col>
          </Row>
        </Col>
        <Col span={8} className="g-pl-lg">
          <EducationBackground />
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
            {/* 自己評価 */}
            <Card.Grid className="home-view__grid-item">
              <Accessment />
            </Card.Grid>
            {/* スキル */}
            <Card.Grid className="home-view__grid-item">
              <Skill />
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
