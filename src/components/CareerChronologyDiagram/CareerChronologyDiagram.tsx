import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { EChartOption, ECharts } from 'echarts';

type Props = {};
const commonLabel = {
  show: true,
  backgroundColor: '#333',
  color: '#eee',
  borderColor: '#777',
  borderWidth: 1,
  borderRadius: 4,
  padding: 4,
  opacity: 1,
  formatter: '{title|{b}}',
  offset: [0, -40],
  rich: {
    title: {
      color: '#eee',
      align: 'center',
    },
  },
};

const CareerChronologyDiagram: React.FC<Props> = _ => {
  const currentYear = new Date().getFullYear();
  const [isSmallSizeDevice] = useState(window.screen.availWidth <= 500);
  let careerCDChart: any;
  commonLabel.show = !isSmallSizeDevice;
  const symbolOffset = !isSmallSizeDevice ? [0, -20] : [0, -40];

  const [careerCDChartOption] = useState({
    title: { top: 0 },
    tooltip: { show: isSmallSizeDevice, formatter: (p: any) => p.name },
    grid: { containLabel: true, top: '0%', left: '0%', bottom: '0%', right: '5%' },
    singleAxis: [
      {
        type: 'value',
        height: 180,
        axisLine: { lineStyle: { width: 2 } },
        axisTick: { lineStyle: { width: 2 } },
        splitLine: { show: false },
        interval: isSmallSizeDevice ? 2 : 1,
        axisLabel: { show: true, textStyle: { fontSize: 14, fontWeight: 'bold' }, formatter: (v: number) => v },
        min: 2009,
        max: currentYear,
      },
    ],
    series: [
      {
        singleAxisIndex: 0,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        symbol: `image://./images/profile-small.png`,
        symbolSize: 30,
        symbolOffset: [0, 65],
        data: [2009],
        itemStyle: { borderColor: '#fa541c', borderWidth: 20 },
      },
      {
        singleAxisIndex: 0,
        coordinateSystem: 'singleAxis',
        symbolSize: 40,
        symbolOffset: symbolOffset,
        type: 'scatter',
        data: [
          { value: 2009, symbol: `image://./images/graduate.svg`, name: '2008年\n短大卒業', label: commonLabel },
          {
            value: 2009 + 5 / 12,
            symbol: `image://./images/algorithm.svg`,
            name: '2009年\n専門学校卒業',
            symbolOffset: [0, 30],
            label: { ...commonLabel, offset: [60, 0] },
          },
          { value: 2010 + 4 / 12, symbol: `image://./images/osaka.svg`, name: '2009/03~\n大阪-研修', label: commonLabel },
          { value: 2011 + 4 / 12, symbol: `image://./images/shanghai.svg`, name: '2010/04~\n上海-オフショア', label: commonLabel },
          { value: 2013 + 6 / 12, symbol: `image://./images/tokyo-tower.svg`, name: '2013/06~\n来日', label: commonLabel },
          {
            value: 2013 + 6 / 12,
            symbol: `image://./images/SIer.svg`,
            name: '2013/06~\nSIer',
            symbolOffset: [0, 30],
            label: { ...commonLabel, offset: [50, 0] },
          },
          { value: 2017 + 4 / 12, symbol: `image://./images/igs-logo.png`, name: '2017/04~\nIGSに入社', label: commonLabel, symbolSize: 60 },
          {
            value: 2017 + 4 / 12,
            symbol: `image://./images/venture.svg`,
            name: '2017/04~\nベンチャー',
            symbolOffset: [0, 30],
            label: { ...commonLabel, offset: [50, 0] },
          },
          { value: 2020, symbol: `image://./images/corona-virus.svg`, name: '2020~\nコロナーにより\n完全リモート', label: commonLabel },
        ],
      },
    ],
  } as EChartOption);

  const careerMoveEvent = setInterval(() => {
    const series: EChartOption.Series[] = careerCDChartOption.series as EChartOption.Series[];
    if (!series) {
      clearInterval(careerMoveEvent);
      return;
    }
    const data = series[0].data;
    if (!data) {
      clearInterval(careerMoveEvent);
      return;
    }
    data[0] = Number(data[0]) + 1;
    if (data[0] > currentYear) {
      data[0] = 2009;
    }
    if (careerCDChart) {
      const instance: ECharts = (careerCDChart as any).getEchartsInstance();
      instance.setOption(careerCDChartOption);
    }
  }, 2000);

  return (
    <div style={{ height: '256px' }}>
      <h3 className="g-ma-none">キャリアパス</h3>
      <ReactEcharts ref={e => (careerCDChart = e)} option={careerCDChartOption} />
    </div>
  );
};

export default CareerChronologyDiagram;
