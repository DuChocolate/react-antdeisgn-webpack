import React from 'react';
import echarts from 'echarts';
//import { Row, Col, Card } from 'antd';

export default class EchartsCom extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('pie'));
        const options = {
            legend: {},
            tooltip: {},
            dataset: {
                // 提供一份数据。
                source: [
                    ['product', '2012', '2013', '2014', '2015'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                    ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
                ]
            },
            // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
            xAxis: [
                {type: 'category', gridIndex: 0},
                {type: 'category', gridIndex: 1},
            ],
            
            //{type: 'category'},
            // 声明一个 Y 轴，数值轴。
            yAxis: [
                {gridIndex: 0},
                {gridIndex: 1}
            ],
            grid: [
                {bottom: '55%'},
                {top: '55%'}
            ],
            // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
            series: [
                // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
                {type: 'bar', seriesLayoutBy: 'row'},
                {type: 'bar', seriesLayoutBy: 'row'},
                {type: 'bar', seriesLayoutBy: 'row'},
                // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
                {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
                {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},

                // {type: 'bar'},
                // {type: 'bar'},
                // {type: 'bar'}
            ]
        };
        // const options = {
        //     //backgroundColor: '#2c343c',
        //     // visualMap: {
        //     //     show: false,
        //     //     min: 80,
        //     //     max: 600,
        //     //     inRange: {
        //     //         colorLightness: [0, 1]
        //     //     }
        //     // },
        //     series : [
        //         {
        //             name: '访问来源',
        //             type: 'pie',
        //             radius: '55%',
        //             roseType: 'angle',
        //             // label: {
        //             //     normal: {
        //             //         textStyle: {
        //             //             color: 'rgba(255, 255, 255, 0.3)'
        //             //         }
        //             //     }
        //             // },
        //             // labelLine: {
        //             //     normal: {
        //             //         lineStyle: {
        //             //             color: 'rgba(255, 255, 255, 0.3)'
        //             //         }
        //             //     }
        //             // },
        //             itemStyle: {
        //                 // emphasis: {
        //                 //     shadowBlur: 200,
        //                 //     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //                 // },
        //                 // 设置扇形的颜色
        //                 // color: '#c23531',
        //                 // shadowBlur: 200,
        //                 // shadowColor: 'rgba(0, 0, 0, 0.5)'
        //                 // // 阴影的大小
        //                 // shadowBlur: 200,
        //                 // // 阴影水平方向上的偏移
        //                 // shadowOffsetX: 0,
        //                 // // 阴影垂直方向上的偏移
        //                 // shadowOffsetY: 0,
        //                 // // 阴影颜色
        //                 // shadowColor: 'rgba(0, 0, 0, 0.5)'
        //             },
        //             data:[
        //                 {value:235, name:'视频广告',itemStyle:{color: '#ff0',},label:{textStyle:{color:'rgba(255, 255, 0, 1)'}},labelLine:{lineStyle:{color:'rgba(255, 255, 0, 1)'}}},
        //                 {value:274, name:'联盟广告'},
        //                 {value:310, name:'邮件营销'},
        //                 {value:335, name:'直接访问'},
        //                 {value:400, name:'搜索引擎'}
        //             ]
        //         }
        //     ]
        // };
        myChart.setOption(options);
    }

    render() {
        return (
            <div>
                <div id='pie' style={{width: '100%', height: 300}}/>
            </div>
        );
    }
}
