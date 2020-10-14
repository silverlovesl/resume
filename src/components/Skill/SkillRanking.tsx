import React, { useState } from 'react';
import { EChartOption } from 'echarts';
import ReactEcharts from 'echarts-for-react';
import { SkillRinkingItem } from '../../models/skill';

type Props = {
  items: SkillRinkingItem[];
};

const SkillRanking: React.FC<Props> = prop => {
  const color = '#722ed1';
  const [skillRankingChartOption] = useState({
    title: {
      text: 'スキル総合分析',
    },
    tooltip: {},
    radar: {
      center: ['50%', '50%'],
      indicator: prop.items.map(d => {
        return { name: d.name, max: 100, color: '#141414' };
      }),
      splitArea: { show: false },
      splitNumber: 10,
      textStyle: {},
    },
    series: [
      {
        name: 'スキル総合分析',
        type: 'radar',
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: { color: color },
        areaStyle: { color: color, opacity: 0.3 },
        lineStyle: { color: color },
        data: [
          {
            value: prop.items.map(d => d.score),
          },
        ],
      },
    ],
  } as EChartOption);

  return <ReactEcharts option={skillRankingChartOption} style={{ height: '500px' }} />;
};

export default SkillRanking;
