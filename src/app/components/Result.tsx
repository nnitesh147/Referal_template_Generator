"use client";
import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction, useState } from "react";

type result_props = {
  toggle: Dispatch<SetStateAction<boolean>>;
  value: string;
};

const Result = ({ toggle, value }: result_props) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Couldn’t copy text: ", err);
    }
  };

  return (
    <div>
      <div className="mt-2 ml-2">
        <Button onClick={() => toggle(true)}>Go Back</Button>
      </div>
      <div className="relative max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 mt-10">
        {/* Copy button – lives in the top‑right corner */}
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 flex items-center gap-1 rounded-md border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-100 active:scale-95 transition"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Referral Message Preview
        </h2>

        {/* Preserve line breaks */}
        <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-6">
          {value}
        </pre>
      </div>
    </div>
  );
};

export default Result;
