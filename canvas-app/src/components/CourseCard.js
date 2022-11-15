import React, { Component } from "react";

export class CourseCard extends Component {
    //Use states when we want to dynamically change variables
    //Props are read only

    render() {
        let { title, code, room, time, professor, imageUrl, url } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{code}</p>
                        <p className="card-text">{room}</p>
                        <p className="card-text">{time}</p>
                        <p className="card-text">{professor}</p>
                        {/* <Link to="/calendar">Home</Link> */}
                        <a
                            href={url}
                            rel="noreferrer"
                            className="btn btn-sm btn-primary"
                        >
                            Open course
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseCard;
