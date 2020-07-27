import React, { Component } from "react";
import ActivityMonitoringSummery from "./ActivityMonitoringSummery";

export class ActivityMonitoringList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { activitylog } = this.props;
    return (
      <div className="activity-log section">
        {activitylog &&
          activitylog.map((activitylog) => {
            return <ActivityMonitoringSummery activitylog={activitylog} />;
          })}
      </div>
    );
  }
}

export default ActivityMonitoringList;
