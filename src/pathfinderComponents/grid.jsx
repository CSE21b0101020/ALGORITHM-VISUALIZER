import React, { Component } from 'react';
import Node from "./node";
import './grid.css';

class Grid extends Component {
    state = {
        grid: this.props.grid
    };

    render() {
        return (
            <div className="Grid">
                {this.props.grid.map((row, rowIdx) => {
                    return (
                        <div key={rowIdx} className="row">
                            {row.map((node, nodeIdx) => {
                                const { row, col, isWall, visitedNode } = node;
                                return (
                                    <Node
                                        key={`${rowIdx}-${nodeIdx}`}
                                        row={row}
                                        col={col}
                                        node={node}
                                        isWall={isWall}
                                        visitedNode={visitedNode}
                                        onMouseDown={this.props.onMouseDown}
                                        onMouseEnter={this.props.onMouseEnter}
                                        onMouseUp={this.props.onMouseUp}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Grid;
