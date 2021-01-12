/*
 * Homework 2
 * HVSelector skeleton code
 * Class version
 *
 * Author: Denis Gracanin
 * Version: 5.0
 */

import React from 'react';
import './HVSelector.css';

class HVSelector extends React.Component {
    render() {
        return (
            <div className="HVSelector">
                <table id="sample">
                    <thead>
                    <tr>
                        <th>number</th>
                        <th>occupation</th>
                        <th>salary</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.chartData.map((point, index) => {
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{point.name}</td>
                                    <td>{point.value}</td>
                                </tr>
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HVSelector;
