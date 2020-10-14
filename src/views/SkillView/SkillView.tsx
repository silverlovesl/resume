import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './SkillView.scss';
import { EChartOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';

type Props = {} & RouteComponentProps;

interface SkillChartData {
  name: string;
  value: [number, number];
  icon: string;
  iconSize?: number | [number, number];
}

type SkillChart = {
  frontend: SkillChartData[];
  backend: SkillChartData[];
  framework: SkillChartData[];
  database: SkillChartData[];
  other: SkillChartData[];
};

const languageSkillChartAxisCommon = {
  min: 0,
  interval: 1,
  splitLine: {
    lineStyle: {
      type: 'dashed',
    },
  },
  scale: true,
};

const languageSkillChartLabelCommon = {
  show: true,
  formatter: (param: any) => `{mark|●}{label|${param.name}}`,
  position: 'bottom',
  rich: {
    label: {
      fontSize: 12,
      color: '#141414',
      fontWeight: 'bold',
      borderColor: '#8c8c8c',
      padding: [2, 4],
      borderRadius: 4,
    },
    mark: {
      fontSize: 18,
    },
  },
};

const SkillView: React.FC<Props> = prop => {
  const startYear = 2010;
  const iconDefaultSize = [20, 20];
  const currentYear = new Date().getFullYear();
  const [skillChart] = useState(require('../../assets/data/skill.json').skills as SkillChart);
  const series = ['Frontend', 'Backend', 'Framework', 'Database', 'Other'];
  const [languageSkillChartOption] = useState({
    // backgroundColor: '#f7f8fa',
    title: { text: '言語マップ' },
    legend: { right: 100, top: 20 },
    xAxis: { name: '経験年数', max: currentYear - startYear, ...languageSkillChartAxisCommon },
    yAxis: { name: '熟練度', max: 10, ...languageSkillChartAxisCommon },
    color: ['#f5222d', '#1890ff', '#fa541c', '#52c41a', '#8c8c8c'],
    tooltip: {
      formatter: (param: any) => {
        console.log(param);
        const year = param.data.value[0];
        const level = param.data.value[1];
        return `${param.data.name}<br/>経験年数: ${year}年<br/>熟練度: ${level}P`;
      },
    },
    series: series.map(s => {
      let data: SkillChartData[] = [];
      switch (s.toLowerCase()) {
        case 'frontend':
          data = skillChart.frontend;
          break;
        case 'backend':
          data = skillChart.backend;
          break;
        case 'framework':
          data = skillChart.framework;
          break;
        case 'database':
          data = skillChart.database;
          break;
        case 'other':
          data = skillChart.other;
          break;
      }
      return {
        name: s,
        type: 'scatter',
        data: data.map(d => {
          return {
            name: d.name,
            value: d.value,
            symbol: `image://./images/programming-language/${d.icon}`,
            symbolSize: d.iconSize || iconDefaultSize,
            label: { ...languageSkillChartLabelCommon },
          };
        }),
      };
    }),
  } as EChartOption);

  return (
    <section className="skill-view">
      <Button className="app__btn-back" type="link" icon={<ArrowLeftOutlined />} size="large" onClick={() => prop.history.push('/')}>
        戻る
      </Button>
      <h1 className="app__page-title">スキル</h1>
      <Row>
        <Col span={24}>
          <ReactEcharts option={languageSkillChartOption} style={{ height: '750px' }} />
        </Col>
      </Row>
    </section>
  );
};

export default SkillView;
