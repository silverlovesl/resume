import { EChartOption, graphic } from 'echarts';
import ReactEcharts from 'echarts-for-react';
import React, { useState } from 'react';

type Props = {
  percent: number;
  name: string;
};

const SkillGauge: React.FC<Props> = prop => {
  const fontSize = 13;
  const fontColor = '#0089fa';
  const colors = ['#f5222d', '#ffd666', '#52c41a'];
  // 生産性
  const [assessChartOption] = useState({
    grid: { top: 10, bottom: -10 },
    series: [
      {
        type: 'gauge',
        radius: '100%',
        min: 0,
        max: 100,
        center: ['50%', '50%'],
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.1, colors[0]],
              [
                0.5,
                new graphic.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: colors[0] },
                  { offset: 0.8, color: colors[1] },
                ]),
              ],
              [0.7, colors[1]],
              [
                0.9,
                new graphic.LinearGradient(0, 1, 0, 0, [
                  { offset: 0, color: colors[2] },
                  { offset: 0.6, color: colors[1] },
                ]),
              ],
              [1, colors[2]],
            ],
          },
        },
        splitLine: {
          length: 10,
          lineStyle: {
            width: 2,
            color: '#ffffff',
          },
        },
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#ffffff',
          },
        },
        axisLabel: {
          show: false,
          color: fontColor,
          fontSize: fontSize,
        },
        detail: {
          show: true,
          offsetCenter: ['0', '60%'],
          color: '#141414',

          fontSize: 48,
        },
        data: [
          {
            value: prop.percent,
            name: prop.name,
          },
        ],
        title: { offsetCenter: [0, '90%'], fontSize: 14 },
      },
    ],
  } as EChartOption);
  return <ReactEcharts option={assessChartOption} style={{ height: '250px' }} />;
};

export default SkillGauge;
