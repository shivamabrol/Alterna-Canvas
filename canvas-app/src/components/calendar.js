import React, { Component } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotNavigator,
} from "daypilot-pro-react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
  }

  get calendar() {
    return this.calendarRef.current.control;
  }

  render() {
    return (
      <DayPilotCalendar
        viewType={"Week"}
        onTimeRangeSelected={(args) => {
          this.calendar.message(
            "Selected range: " +
              args.start.toString("hh:mm tt") +
              " - " +
              args.end.toString("hh:mm tt")
          );
        }}
        ref={this.calendarRef}
      />
    );
  }
}

export default Calendar;
