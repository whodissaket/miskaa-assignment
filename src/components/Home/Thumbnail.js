import React from "react";

export default function Thumbnail({
  flag,
  title,
  region,
  subregion,
  population,
  borders,
  languages,
}) {
  return (
    <div className="container rounded-lg shadow-lg bg-gray-700 text-white pb-4">
      <img
        src={flag}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
        alt={title}
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-sm">
          Region:<span className="text-gray-300">{region}</span>
        </p>
        <p className="text-sm">
          Sub-Region:<span className="text-gray-300">{subregion}</span>
        </p>
        <p className="text-sm">
          Population:<span className="text-gray-300">{population}</span>
        </p>
        <p className="text-sm">
          Borders:<span className="text-gray-300">{borders}</span>
        </p>
        <p className="text-sm">
          Languages:<span className="text-gray-300">{languages}</span>
        </p>
      </div>
    </div>
  );
}
