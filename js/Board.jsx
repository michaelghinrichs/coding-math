import React, { Component, PropTypes } from 'react';
import { Controls } from './Controls.jsx';
import styles from '../css/Board.css';

export class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.componentList[this.props.activeComponent].setUp();
  }

  // this needs to go away
  // each component should implement this
  componentWillReceiveProps(nextProps) {
    this.props.componentList[this.props.activeComponent].tearDown();
    nextProps.componentList[nextProps.activeComponent].setUp();
  }

  render() {
    return (
      <div id="board">
        <canvas
          id="canvas"
          ref="canvas"
          className={styles.canvas}
          width={window.innerWidth}
          height={window.innerHeight}
        />
        <Controls />
      </div>
    );
  }
}

Board.propTypes = {
  setUp: PropTypes.func,
  tearDown: PropTypes.func,
  controls: PropTypes.object,
  activeComponent: PropTypes.string,
  componentList: PropTypes.object.isRequired,
};

Board.defaultProps = {
  activeComponent: 'Random Lines',
};
