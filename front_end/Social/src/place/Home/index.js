import React from "react";
import ReactDOM from "react-dom";
import indexHTML from "./index.html";

function Index() {
  return (
    <div dangerouslySetInnerHTML={{ __html: indexHTML }} />
  );
}

export default Index;