"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { NotoSerifJPLocal } from "./font";

export default function Open() {
  const [content, setPath] = useState("");

  useEffect(() => {
    invoke<string>("open", {})
      .then((result) => setPath(result))
      .catch(console.error);
  }, []);

  return (
    <div className={NotoSerifJPLocal.className}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="vertical-rl text-wrap p-10"
      ></div>
    </div>
  );
}
