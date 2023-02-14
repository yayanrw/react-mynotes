import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent";
import NotesListComponent from "./NotesListComponent";
import { getInitialData } from "../utils/MyData";

export default class MyNotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onArchiveHandler() {
    // TODO
  }

  onDeleteHandler() {
    // TODO
  }

  render() {
    return (
      <div>
        <NavBarComponent />
        <NotesListComponent
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}
