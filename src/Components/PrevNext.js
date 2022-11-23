import React from "react";

function PrevNext(props) {
  class ProjectData extends React.Component {
    state = {
      projects: [],
      activeProject: "",
      name: "",
      url: "",
    };

    componentDidMount() {
      this.setState({ projects: props.data });
    }

    handleModalOpen = (idx) => {
      this.setState({
        activeProject: idx,
        name: this.state.projects[idx].name,
        url: this.state.projects[idx].url,
      });
    };

    handleModalClose = () => {
      this.setState({
        activeProject: "",
      });
    };

    handleNextProject = () => {
      var arr = this.state.projects.length;
      var idx = this.state.activeProject + 1;
      var idx = idx % arr;

      this.setState({
        activeProject: idx,
        name: this.state.projects[idx].name,
        url: this.state.projects[idx].url,
      });
    };

    handlePrevProject = () => {
      var arr = this.state.projects.length;
      var idx = this.state.activeProject;

      if (idx === 0) {
        var idx = arr - 1;
      } else {
        var idx = idx - 1;
      }

      this.setState({
        activeProject: idx,
        name: this.state.projects[idx].name,
        url: this.state.projects[idx].url,
      });
    };

    render() {
      function nextTitle(idx, arr) {
        var i = idx + 1;
        var i = i % arr.length;
        return arr[i].name;
      }

      function prevTitle(idx, arr) {
        if (idx === 0) {
          var i = arr.length - 1;
        } else {
          var i = idx - 1;
        }

        return arr[i].name;
      }

      const projectComponents = props.data.map((data, idx, arr) => (
        <Project
          key={"project-" + data.name}
          index={idx}
          name={data.name}
          url={data.url}
          onModalOpen={this.handleModalOpen}
        />
      ));

      if (this.state.activeProject === "") {
        return (
          <div>
            <h3>Click on a pokemon to view more details.</h3>
            {projectComponents}
          </div>
        );
      } else {
        return (
          <div>
            <Modal
              name={this.state.name}
              url={this.state.url}
              previousName={prevTitle(this.state.activeProject, props.data)}
              nextName={nextTitle(this.state.activeProject, props.data)}
              onModalClose={this.handleModalClose}
              onNext={this.handleNextProject}
              onPrev={this.handlePrevProject}
            />
          </div>
        );
      }
    }
  }

  class Modal extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.name}</h1>
          <h3>{this.props.url}</h3>
          <button onClick={this.props.onPrev}>{this.props.previousName}</button>
          <button onClick={this.props.onModalClose}>View all</button>
          <button onClick={this.props.onNext}>{this.props.nextName}</button>
        </div>
      );
    }
  }

  class Project extends React.Component {
    render() {
      return (
        <div onClick={this.props.onModalOpen.bind(this, this.props.index)}>
          <h1>{this.props.name}</h1>
        </div>
      );
    }
  }

  return <ProjectData />;
}

export default PrevNext;
