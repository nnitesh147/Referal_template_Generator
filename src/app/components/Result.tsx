"use client";
import React, { Dispatch, SetStateAction } from "react";

type result_props = {
  toggle: Dispatch<SetStateAction<Boolean>>;
  value: String;
};

const Result = ({ toggle, value }: result_props) => {
  return (
    <div>
      <button onClick={() => toggle(true)}>Go Back</button>
      <div>
        <pre>{value}</pre>
      </div>
    </div>
  );
};

export default Result;
