import React, { useState } from 'react';
import { EChartOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { SkillLanguargeMap, SkillLanguargeMapItem } from '../../models/skill';

type Props = {
  dataSource: SkillLanguargeMap;
};

const languageSkillChartAxisCommon = {
  min: 0,
  interval: 1,
  nameTextStyle: {
    fontSize: 14,
  },
  axisLine: { show: true, onZero: false, lineStyle: { width: 2 } },
  axisTick: { lineStyle: { width: 2 } },
  splitLine: { lineStyle: { type: 'dashed' } },
  axisLabel: { fontSize: 14 },
  scale: true,
};

const languageSkillChartLabelCommon = {
  show: true,
  formatter: (param: any) => `{mark|●}{label|${param.name}}`,
  position: 'bottom',
  rich: {
    label: { fontSize: 12, color: '#141414', fontWeight: 'bold' },
    mark: { fontSize: 18 },
  },
};

const SkillLanguageMap: React.FC<Props> = prop => {
  const startYear = 2010;
  const iconDefaultSize = [20, 20];
  const currentYear = new Date().getFullYear();

  const series = ['Frontend', 'Backend', 'Framework', 'Database'];
  const [languageSkillChartOption] = useState({
    // backgroundColor: '#f7f8fa',
    title: { text: '言語マップ' },
    legend: { right: 100, top: 35 },
    grid: { containLabel: false, top: 70, bottom: 20 },
    xAxis: { name: '経験年数', max: currentYear - startYear, ...languageSkillChartAxisCommon },
    yAxis: { name: '熟練度', max: 10, ...languageSkillChartAxisCommon },
    color: ['#f5222d', '#1890ff', '#fadb14', '#52c41a', '#8c8c8c'],
    tooltip: {
      // axisPointer: {
      //   show: true,
      //   type: 'cross',
      //   lineStyle: { width: 1 },
      // },
      formatter: (param: any) => {
        console.log(param);
        const year = param.data.value[0];
        const level = param.data.value[1];
        return `${param.data.name}<br/>経験年数: ${year}年<br/>熟練度: ${level}P`;
      },
    },
    series: series.map(s => {
      let data: SkillLanguargeMapItem[] = [];
      switch (s.toLowerCase()) {
        case 'frontend':
          data = prop.dataSource.frontend;
          break;
        case 'backend':
          data = prop.dataSource.backend;
          break;
        case 'framework':
          data = prop.dataSource.framework;
          break;
        case 'database':
          data = prop.dataSource.database;
          break;
        // case 'other':
        //   data = prop.dataSource.other;
        //   break;
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

  return <ReactEcharts option={languageSkillChartOption} style={{ height: '720px' }} />;
};

export default SkillLanguageMap;
