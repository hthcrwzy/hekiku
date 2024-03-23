"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Open() {
  // const [path, setPath] = useState("");

  // useEffect(() => {
  //   invoke<string>("open", {})
  //     .then((result) => setPath(result))
  //     .catch(console.error);
  // }, []);

  return (
    <p className="vertical-rl">
      ダミーテキスト
      <br />
      あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゐゆゑよらりるれろわをん
    </p>
  );
}
