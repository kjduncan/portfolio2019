import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <h1>{this.props.project.title}</h1>

      </div>
    );
  }
}

export default Project;
