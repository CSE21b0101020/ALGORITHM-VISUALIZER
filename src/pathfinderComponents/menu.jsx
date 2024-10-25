import React, { Component } from 'react';
import SimpleSelect from './simpleSelect';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Pathfinder</span>

                {/* Toggler button for responsive design */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                <span style={{ color: 'white' }}>Home</span>
                            </Link>
                        </li>
                    </ul>
                 {/* Slider for controlling visualization speed */}
                 <label htmlFor="speedSlider" style={{ color: 'white', margin: '0 10px' }}>
                    Visualization Speed:
                </label>
                <input
                    id="speedSlider"
                    type="range"
                    min="1"
                    max="100"
                    value={this.props.visualizationSpeed}
                    onChange={this.props.onSpeedChange}
                />
                
                    {/* SimpleSelect for algorithms */}
                    <SimpleSelect
                        onAlgoChanged={this.props.onAlgoChanged}
                        items={this.props.algorithms}
                    />

                    {/* SimpleSelect for mazes */}
                   { /*<SimpleSelect
                        onAlgoChanged={this.props.onMazeChanged}
                        items={this.props.mazes}
                    />*/}

                    {/* Buttons for Create Maze, Visualize, Clear Path, and Clear Board */}
                    <button
                        className="btn btn-lg btn-secondary m-2"
                        onClick={this.props.onCreateMaze}
                    >
                        Create Maze
                    </button>
                    <button
                        onClick={this.props.onVisualize}
                        className="btn btn-warning btn-lg"
                    >
                        Visualize
                    </button>
                    <button
                        onClick={this.props.onClearPath}
                        className="btn btn-danger btn-lg m-2"
                    >
                        Clear Path
                    </button>
                    <button
                        onClick={this.props.onClearBoard}
                        className="btn btn-danger btn-lg m-2"
                    >
                        Clear Board
                    </button>
                </div>
            </nav>
        );
    }
}

export default CustomNavbar;
