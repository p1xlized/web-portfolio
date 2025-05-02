import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Calendar, MapPin } from "lucide-react";

const StudyCard: React.FC = () => {
  return (
    <div className="flex items-center bg-chart-3 shadow-md rounded-xl overflow-hidden max-w-3xl mx-auto space-x-4">
      {/* Image */}
      <div className="flex-shrink-0 ">
        <img
          src="/icons/m9.png"
          alt="Study Image"
          className="w-20 h-20 rounded-xl border-6 border-chart-3"
        />
      </div>

      {/* Title */}
      <div className="flex-grow p-4">
        <h2 className="text-base font-semibold text-gray-800">
          Maisonneuve College
          <br />
          Software Development
        </h2>
      </div>

      {/* Date */}
      <div className="text-sm text-gray-500 text-right whitespace-nowrap p-4">
        <Badge className="mx-2">
          <MapPin />
          Montreal
        </Badge>
        <Badge>
          <Calendar />
          June 1, 2025
        </Badge>
      </div>
    </div>
  );
};

export default StudyCard;
