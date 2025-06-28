"use client";
import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Nav from "./components/Nav";

export default function Home() {
  const [show_form, set_show_form] = useState<boolean>(true);
  const [result, set_result] = useState<string>("");
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <div>
        {show_form ? (
          <Form set_result={set_result} toggle={set_show_form} />
        ) : (
          <Result value={result} toggle={set_show_form} />
        )}
      </div>
    </div>
  );
}
