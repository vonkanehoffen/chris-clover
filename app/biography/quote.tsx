import React, { ReactNode } from "react";

export const Quote = ({
  content,
  author,
  date,
}: {
  content: ReactNode;
  author: string;
  date: string;
}) => (
  <div className="mx-8">
    <p className="my-8 text-lg">{content}</p>
    <div className="flex space-x-4">
      <div className="text-slate-500">{author}</div>
      <div className="text-slate-400">{date}</div>
    </div>
  </div>
);
