import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School } from "@mui/icons-material";
import { Work } from "@mui/icons-material";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(112, 161, 255)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "rgb(112, 161, 255)", color: "#fff" }}
          icon={<School />}
        >
          <h3>
            Roland Institute of Technology, Berhampur, Odisha
          </h3>
          <p>College Degree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "rgb(112, 161, 255)", color: "#fff" }}
          icon={<School />}
        >
          <h3>
            Chikiti Mahavidyalaya, Chikiti, Odisha
          </h3>
          <p>Intermediate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#ffd700", color: "#fff" }}
          icon={<Work />}
        >
          <h3>
            UI Full Stack Web Development and Reactjs, Hyderabad 
          </h3>
          <p>Extra Qualification</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
