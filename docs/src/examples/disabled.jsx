import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

export default React.createClass({
  displayName: "Disabled",

  getInitialState() {
    return {
      startDate: null
    };
  },

  handleChange(date) {
    this.setState({
      startDate: date
    });
  },

  render() {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {"<DatePicker"}<br />
              {"selected={this.state.startDate}"}<br />
              {"onChange={this.handleChange}"}<br />
          <strong>    {"disabled={true}"}</strong><br />
              {"placeholderText='This is disabled'"} />
        </code>
      </pre>
      <div className="column">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          disabled={true}
          placeholderText="This is disabled" />
      </div>
    </div>;
  }
});
