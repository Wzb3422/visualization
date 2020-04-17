import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Select, Typography, Row, Col } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

const { Option } = Select;
const { Text } = Typography;

type Item = {
  name: string;
  year: number;
  value: number;
};

const Welcome: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/api/lines')
      .then((res) => res.json())
      .then((ret) => {
        setData(ret);
      });
  }, []);

  const scale = {
    year: {
      tickInterval: 1,
    },
    value: {
      tickInterval: 15,
    },
  };

  // const pick = (data: Item[], name: string[]) => {
  //   const result: Item[] = []
  //   data.map(item => {
  //     if (name.find(name => name === item.name)) {
  //       result.push(item)
  //     }
  //   })
  //   return result
  // }

  return (
    <PageHeaderWrapper>
      <Row>
        <Col lg={12}>
          <Card>
            <Text>专业选择：</Text>
            <Select defaultActiveFirstOption style={{ width: 200 }} optionFilterProp="children">
              <Option value="全部">全部</Option>
              <Option value="信息工程学院">信息工程学院</Option>
            </Select>
            <Chart height={400} scale={scale} data={data} forceFit>
              <Legend />
              <Tooltip />
              <Axis name="year" label={{ formatter: (val) => `${val}年` }} />
              <Axis name="value" label={{ formatter: (val) => `${val}分` }} />
              <Geom
                type="line"
                position="year*value"
                color="name"
                size={2}
                style={[
                  'name',
                  {
                    lineDash: (name: string) => {
                      if (name === '省控线') {
                        return [4, 4];
                      }
                      return [];
                    },
                  },
                ]}
              />
            </Chart>
          </Card>
        </Col>
      </Row>
    </PageHeaderWrapper>
  );
};

export default Welcome;
