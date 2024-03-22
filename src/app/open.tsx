"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Open() {
  const [content, setPath] = useState("");

  useEffect(() => {
    invoke<string>("open", {})
      .then((result) => setPath(result))
      .catch(console.error);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}
