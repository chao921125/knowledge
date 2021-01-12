/*
 * Homework 2
 * HVHistogram skeleton code
 * Class version
 *
 * Author: Denis Gracanin
 * Version: 5.0
 */

import React from 'react';
import * as d3 from "d3";
import './HVHistogram.css';

class HVHistogram extends React.Component {
    constructor(props) {
        super(props);
        this.myReference = React.createRef();
        this.state = {dataNames: []};
    }

    paint() {
        // 原始数据
        let datax = [];
        let datay = [];
        this.props.chartData.forEach((item, index) => {
            datax.push(index + 1 + "");
            datay.push(item.value);
        });

        console.log(JSON.stringify(datax));
        console.log(JSON.stringify(datay));

        let width = 600,
            height = 400,
            padding = {
                top: 10,
                right: 40,
                bottom: 40,
                left: 40
            };
        let dWidth = Math.floor((width - padding.left - padding.right - padding.bottom - padding.top) / datax.length);
        let rangeWidth = datax.map((item) => {
            return item * dWidth;
        });

        d3.select(this.myReference.current).selectAll("*").remove();
        let svg = d3.select(this.myReference.current)
            .append('svg')
            .attr('width', width + 'px')
            .attr('height', height + 'px');

        // x轴
        let xScale = d3.scaleOrdinal()
            .domain(datax)
            .range(rangeWidth);
        let xAxis = d3.axisBottom()
            .scale(xScale);
        svg.append('g')
            .call(xAxis)
            .attr("transform", "translate(0," + (height - padding.bottom) + ")")
            .selectAll("text")
            .attr("dx", "50px");

        // y轴
        let yScale = d3.scaleLinear()
            .domain([0, d3.max(datay)])
            .range([height - padding.bottom, padding.top]);
        let yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(10);
        svg.append('g')
            .call(yAxis)
            .attr("transform", "translate(" + dWidth + ",0)");

        let bar = svg.selectAll(".bar")
            .data(datay)
            .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function(d, i) {
                return "translate(" + xScale(i * dWidth) + "," + yScale(d) + ")";
            });

        bar.append("rect")
            .attr("x", 1)
            .attr("width", dWidth)
            .attr("height", function(d) {
                return height - yScale(d) - padding.bottom;
            })
            .attr("stroke", "White")
            .attr("fill", function(d, i) {
                if (i === 0) return "red";
                return "blue";
            });

        bar.append("text")
            .attr("dy", ".75em")
            .attr("y", 6)
            .attr("x", 50)
            .attr("text-anchor", "middle")
            .attr("font-size", "8px")
            .attr("fill", "White");

    }

    componentWillReceiveProps  (nextProps, nextState, nextContext) {
        let dataName = [];
        this.props.chartData.forEach((item, index) => {
            dataName.push("Bar" + (index + 1) + "： " + item.name);
        });
        this.setState({dataNames: dataName});
    }

    componentDidMount() {
        let dataName = [];
        this.props.chartData.forEach((item, index) => {
            dataName.push("Bar" + (index + 1) + "： " + item.name);
        });
        this.setState({dataNames: dataName});
        this.paint();
    }

    componentDidUpdate() {
        this.paint();
    }

    render() {
        return (
            <div className="top-box">
                <div className="box chart-box">
                    <div className="chart" ref={this.myReference}></div>
                    <div>{
                        this.state.dataNames.map((sample, index) => {
                            return <div key={index}>{sample}</div>;
                        })
                    }</div>
                </div>
                <div className="box select-box">
                    <div className="com-flex select-header">
                        <select defaultValue={this.props.selectAllSelected} onChange={this.props.handleChangeSelectAll}>{
                            this.props.selectAllList.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                        <select defaultValue={this.props.jobSelected} onChange={this.props.handleChangeJob}>{
                            this.props.jobList.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                    </div>
                    <div className="com-flex select-item">
                        <select defaultValue={this.props.job1Selected} onChange={this.props.handleChangeJob1}>{
                            this.props.job1List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                        <select defaultValue={this.props.extra1Selected} onChange={this.props.handleChangeExtra1}>{
                            this.props.extra1List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                    </div>
                    <div className="com-flex select-item">
                        <select defaultValue={this.props.job2Selected} onChange={this.props.handleChangeJob2}>{
                            this.props.job2List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                        <select defaultValue={this.props.extra2Selected} onChange={this.props.handleChangeExtra2}>{
                            this.props.extra2List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                    </div>
                    <div className="com-flex select-item">
                        <select defaultValue={this.props.job3Selected} onChange={this.props.handleChangeJob3}>{
                            this.props.job3List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                        <select defaultValue={this.props.extra3Selected} onChange={this.props.handleChangeExtra3}>{
                            this.props.extra3List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                    </div>
                    <div className="com-flex select-item">
                        <select defaultValue={this.props.job4Selected} onChange={this.props.handleChangeJob4}>{
                            this.props.job4List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                        <select defaultValue={this.props.extra4Selected} onChange={this.props.handleChangeExtra4}>{
                            this.props.extra4List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                    </div>
                    <div className="com-flex select-item">
                        <select defaultValue={this.props.job5Selected} onChange={this.props.handleChangeJob5}>{
                            this.props.job5List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                        <select defaultValue={this.props.extra5Selected} onChange={this.props.handleChangeExtra5}>{
                            this.props.extra5List.map((sample, index) => {
                                return <option key={index} value={sample.value}>{sample.name}</option>;
                            })
                        }</select>
                    </div>
                </div>
            </div>
        );
    }
}

export default HVHistogram;
