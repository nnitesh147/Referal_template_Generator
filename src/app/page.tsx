"use client";
import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

export default function Home() {
  const [show_form, set_show_form] = useState<Boolean>(true);
  const [result, set_result] = useState<String>("");
  return (
    <div>
      {show_form ? (
        <Form set_result={set_result} toggle={set_show_form} />
      ) : (
        <Result value={result} toggle={set_show_form} />
      )}
    </div>
  );
}
