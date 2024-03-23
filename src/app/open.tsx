"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { NotoSerifJPLocal } from "./font";

export default function Open() {
  // const [path, setPath] = useState("");

  // useEffect(() => {
  //   invoke<string>("open", {})
  //     .then((result) => setPath(result))
  //     .catch(console.error);
  // }, []);

  return (
    <div className={NotoSerifJPLocal.className}>
      <div className="vertical-rl text-wrap p-10">
        <p>
          ダミーテキスト
          <br />
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゐゆゑよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゐゆゑよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゐゆゑよらりるれろわをんあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゐゆゑよらりるれろわをん
          <br />
          This is English.
        </p>
        <p>
          <ruby>
            難解<rt>ナンカイ</rt>
          </ruby>
        </p>
      </div>
    </div>
  );
}
