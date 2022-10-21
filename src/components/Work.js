import * as React from 'react';
import "./styles/Work.css"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { workData } from "./data.js";

function Work(){
    return (
        <div className="work">
            <Timeline>
                {workData.map(work => {
                    return (
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.primaru"
                                >
                                    {work.time}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" sx={{
                                    width: "30px", height: "30px",
                                    backgroundImage: `url(/assets//${work.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: '100%',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    {work.position}
                                </Typography>
                                <Typography>
                                    {work.company}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </div>
    )
}

export default Work