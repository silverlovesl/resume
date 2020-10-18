import { Button, Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import SkillLanguageMap from '../../components/Skill/SkillLanguageMap';
import SkillGauge from '../../components/Skill/SkillGauge';
import SkillRanking from '../../components/Skill/SkillRanking';
import SkillTool from '../../components/Skill/SkillTool';
import { SkillLanguargeMap, SkillRinkingItem, SkillListItem } from '../../models/skill';
import './SkillView.scss';
// import SkillFramework from '../../components/Skill/SkillFramework';

type Props = {} & RouteComponentProps;

const SkillView: React.FC<Props> = prop => {
  const skillData = require('../../assets/data/skill.json');
  const [skillLanguageMapData] = useState(skillData.skills as SkillLanguargeMap);
  const [skillRinkingData] = useState(skillData.rankings as SkillRinkingItem[]);
  // const [skillFrameworkData] = useState(skillData.frameworks as SkillListItem[]);
  const [skillOtherData] = useState(skillData.others as SkillListItem[]);

  return (
    <section className="skill-view">
      <Button className="app__btn-back" type="link" icon={<ArrowLeftOutlined />} size="large" onClick={() => prop.history.push('/')}>
        戻る
      </Button>
      <h1 className="app__page-title">スキル</h1>

      <Row className="g-mt-sm">
        <Col span={8} xs={24} sm={24} md={8} lg={8} className="g-text-center">
          <SkillGauge percent={95} name="生産性" />
        </Col>
        <Col span={8} xs={24} sm={24} md={8} lg={8} className="g-text-center">
          <SkillGauge percent={60} name="ドキュメント力" />
        </Col>
        <Col span={8} xs={24} sm={24} md={8} lg={8} className="g-text-center">
          <SkillGauge percent={45} name="プロジェクト管理" />
        </Col>
      </Row>
      <Divider className="g-mt-sm bc-primary" />
      <Row>
        <Col span={24}>
          <SkillRanking items={skillRinkingData} />
        </Col>
      </Row>

      <Divider className="g-mt-none-force bc-primary" />
      <Row>
        <Col span={24}>
          <SkillLanguageMap dataSource={skillLanguageMapData} />
        </Col>
      </Row>

      {/*<Divider className="g-mt-md-force bc-primary" />
       <Row>
        <Col span={24}>
          <SkillFramework dataSource={skillFrameworkData} />
        </Col>
      </Row> */}

      <Divider className="g-mt-md-force bc-primary" />
      <Row>
        <Col span={24}>
          <SkillTool dataSource={skillOtherData} />
        </Col>
      </Row>
    </section>
  );
};

export default SkillView;
