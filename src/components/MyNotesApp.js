import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent";
import JumbotronComponent from "./JumbotronComponent";
import NoteTabsComponent from "./NoteTabsComponent";

export default class MyNotesApp extends Component {
  render() {
    return (
      <div>
        <NavBarComponent />
        <JumbotronComponent />
        <NoteTabsComponent />
      </div>
    );
  }
}
