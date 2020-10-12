import React, { useState } from 'react';
import { Avatar } from 'antd';
import 'echarts-wordcloud';
import ReactEcharts from 'echarts-for-react';

type Props = {};

const Accessment: React.FC<Props> = _ => {
  const [assessChartOption] = useState({
    series: [
      {
        type: 'wordCloud',
        left: 'center',
        top: '-10%',
        shape: '',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        gridSize: 8,
        rotationRange: [-90, 90],
        rotationStep: 45,
        textStyle: {
          normal: {
            color: () => {
              return 'rgb(' + [Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',') + ')';
            },
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        data: [
          { name: '仕事速い', value: 70 },
          { name: '教え上手', value: 61 },
          { name: '自分の意見を常に持っている', value: 66 },
          { name: '新しい知識の取り入れ', value: 60 },
          { name: '技術力', value: 36 },
          { name: '親切心', value: 25 },
          { name: '成長意欲が高い', value: 24 },
          { name: '勉強家', value: 10 },
          { name: '優しい', value: 6 },
          { name: '英語力', value: 6 },
        ],
      },
    ],
  });

  return (
    <div className="assessment g-pos-relative" style={{ height: '200px' }}>
      <h3 className="g-mb-sm g-ma-none">
        <Avatar size={24} className="g-mr-xs-force force-bc-info" src="./images/self-assessment.svg" />
        自己・他者評価
      </h3>

      <ReactEcharts option={assessChartOption} />
    </div>
  );
};

export default Accessment;
