"use client";

import TimeAgoComponent from "react-timeago";

export const TimeAgo = ({ date }: { date: Date }) => {
  return <TimeAgoComponent date={date} />;
};
