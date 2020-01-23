import * as M from "@material-ui/core";
import React from "react";

function Layout(props) {
  return <M.Container>{props.children}</M.Container>;
}
export default Layout;
