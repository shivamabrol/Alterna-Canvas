import React, { Component } from "react";
import { DayPilot, DayPilotScheduler } from "daypilot-pro-react";
import Zoom from "./zoom";

class Scheduler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: "2022-11-01",
      days: 31,
      scale: "Day",
      eventHeight: 30,
      cellWidth: 50,
      timeHeaders: [{ groupBy: "Month" }, { groupBy: "Day", format: "d" }],
      cellWidthSpec: "Auto",
      resources: [
        { name: "Computer Graphics", id: "A" },
        { name: "Senior Design", id: "B" },
        { name: "UI C", id: "C" },
      ],
      events: [
        {
          id: 1,
          text: "Assignment 1",
          start: "2022-11-02T00:00:00",
          end: "2022-11-02T00:00:00",
          resource: "A",
        },
        {
          id: 2,
          text: "Assignment 2",
          start: "2022-11-03T00:00:00",
          end: "2022-11-10T00:00:00",
          resource: "C",
          barColor: "#38761d",
          barBackColor: "#93c47d",
        },
        {
          id: 3,
          text: "Event 3",
          start: "2022-11-02T00:00:00",
          end: "2022-11-08T00:00:00",
          resource: "D",
          barColor: "#f1c232",
          barBackColor: "#f1c232",
        },
        {
          id: 4,
          text: "Event 3",
          start: "2022-11-02T00:00:00",
          end: "2022-11-08T00:00:00",
          resource: "E",
          barColor: "#cc0000",
          barBackColor: "#ea9999",
        },
      ],
    };
  }

  zoomChange(args) {
    switch (args.level) {
      case "month":
        this.setState({
          startDate: DayPilot.Date.today().firstDayOfMonth(),
          days: DayPilot.Date.today().daysInMonth(),
          scale: "Day",
        });
        break;
      case "week":
        this.setState({
          startDate: DayPilot.Date.today().firstDayOfWeek(),
          days: 7,
          scale: "Day",
        });
        break;
      default:
        throw new Error("Invalid zoom level");
    }
  }

  render() {
    const { ...config } = this.state;
    return (
      <div>
        <div className="toolbar">
          <Zoom onChange={(args) => this.zoomChange(args)} />
        </div>

        <DayPilotScheduler
          {...config}
          onEventMoved={(args) => {
            console.log(
              "Event moved: ",
              args.e.data.id,
              args.newStart,
              args.newEnd,
              args.newResource
            );
          }}
          onTimeRangeSelected={(args) => {
            DayPilot.Modal.prompt("New event name", "Event").then((modal) => {
              this.scheduler.clearSelection();
              if (!modal.result) {
                return;
              }
              this.scheduler.events.add({
                id: DayPilot.guid(),
                text: modal.result,
                start: args.start,
                end: args.end,
                resource: args.resource,
              });
            });
          }}
          ref={(component) => {
            this.scheduler = component && component.control;
          }}
        />
      </div>
    );
  }
}

export default Scheduler;
