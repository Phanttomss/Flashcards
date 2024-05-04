import React from "react";

interface CardProps {
  h1: string;
  p: string;
  children: React.ReactNode;
}

export function Card({ h1, p, children }: CardProps) {
  return (
    <div className="border-2 p-5 rounded-lg w-[40vh]">
      <div className="mb-5">
        <h1 className="text-4xl font-bold">{h1}</h1>
        <p className="text-muted-foreground">{p}</p>
      </div>
      {children}
    </div>
  );
}
