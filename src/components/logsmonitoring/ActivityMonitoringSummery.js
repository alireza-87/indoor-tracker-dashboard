import React, { Component } from "react";

export class ActivityMonitoringSummery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activitylog } = this.props;
    if (activitylog.user) {
      let a = new Date(activitylog.time);
      var hours = a.getHours();
      let current_datetime = new Date(activitylog.time);
      let formatted =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
      return (
        <div>
          <p>
            {formatted} {activitylog.user.name}{" "}
            {activitylog.action === "entertoroom"
              ? " Enter to "
              : " Exit from "}
            floor {activitylog.floor} room {activitylog.room}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            {" "}
            {activitylog.type === "roomoverload" ? " Room over :  " : ""} floor
            : {activitylog.floor} room: {activitylog.room}
          </p>
        </div>
      );
    }
  }
}

export default ActivityMonitoringSummery;
