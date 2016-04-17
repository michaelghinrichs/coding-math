import React, { Component, PropTypes } from 'react';
import styles from '../css/Sidebar.css';

export class Sidebar extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    componentList: PropTypes.object,
    activeComponent: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  getComp(comp, i) {
    return (
      <div
        key={i}
        onClick={this.props.onClick.bind(null, comp)}
        className={(this.props.activeComponent === comp) ? styles.active : ''}
      >
        {comp}
      </div>
    );
  }
  render() {
    return (
      <div id="sidebar" className={styles.sidebar} >
        {Object.keys(this.props.componentList).map((component, i) => this.getComp(component, i))}
      </div>
    );
  }
}
