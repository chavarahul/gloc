// WeatherChart.tsx
import React from 'react';
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface WeatherChartProps {
    data: Array<{ date: string; value: number }>;
    title: string;
    yAxisLabel: string;
    unit: string;
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data, title, yAxisLabel,unit }) => {
    const valueFormatter = (value: number) => `${value} ${unit}`;

    return (
        <Card mt={'40'}>
            <CardHeader pb="0">
                <Heading as="h4" fontWeight="medium" mt={'20'} size="md" display={'none'}>
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data}>
                        <CartesianGrid stroke="gray" strokeDasharray="0" vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickMargin={15}
                            axisLine={{ stroke: 'gray' }}
                        />
                        <YAxis
                            tickFormatter={valueFormatter}
                            axisLine={false}
                            tickLine={false}
                            className='mt-40'

                            label={{
                                value: yAxisLabel,
                                angle: -90,
                                position: 'insideLeft',
                                dx: -5,
                                dy: 60
                            }} />
                        <Tooltip
                            formatter={(value: number) => valueFormatter(value)}
                            itemStyle={{ color: '#000' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#8550d9"
                            fill="#4a3573"
                            strokeWidth={'3'}
                             />
                    </AreaChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    );
};

export default WeatherChart;
