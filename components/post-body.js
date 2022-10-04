import markdownStyles from "./markdown-styles.module.css";
import { useEffect, useRef } from "react";

export default function PostBody({ content }) {
  console.log(content);
  return (
    <div className="text-white max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
