import React, { Component } from "react";
import { DayPilot, DayPilotCalendar } from "daypilot-pro-react";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "2022-07-12",
      viewType: "Resources",
      columns: [
        { name: "Resource 1", id: "R1" },
        { name: "Resource 2", id: "R2" },
        { name: "Resource 3", id: "R3" },
        { name: "Resource 4", id: "R4" },
        { name: "Resource 5", id: "R5" },
      ],
      events: [
        {
          id: 1,
          text: "Event 1",
          start: "2022-07-22T10:00:00",
          end: "2022-07-22T14:00:00",
          resource: "R2",
        },
      ],
    };
  }

  render() {
    const { ...config } = this.state;
    return (
      <div>
        <DayPilotCalendar
          {...config}
          ref={(component) => {
            this.calendar = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Calendar;
