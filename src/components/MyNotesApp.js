import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent";
import JumbotronComponent from "./JumbotronComponent";
import NoteTabsComponent from "./NoteTabsComponent";
import FooterComponent from "./FooterComponent";
import { getInitialData } from "../utils/MyData";
import { ARCHIVE, DELETE, UNARCHIVE } from "../utils/MyConstants";
import { confirmationDialog, swalSuccess } from "../utils/MyCustoms";

export class MyNotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onArchiveHandler(id) {
    confirmationDialog(ARCHIVE, (confirmed) => {
      if (confirmed) {
        this.setState((prevState) => ({
          notes: prevState.notes.map((note) => {
            if (note.id === id) {
              return { ...note, archived: true };
            }
            return note;
          }),
        }));
        swalSuccess(ARCHIVE);
      }
    });
  }

  onUnarchiveHandler(id) {
    confirmationDialog(UNARCHIVE, (confirmed) => {
      if (confirmed) {
        this.setState((prevState) => ({
          notes: prevState.notes.map((note) => {
            if (note.id === id) {
              return { ...note, archived: false };
            }
            return note;
          }),
        }));
        swalSuccess(UNARCHIVE);
      }
    });
  }

  onDeleteHandler(id) {
    confirmationDialog(DELETE, (confirmed) => {
      if (confirmed) {
        this.setState((prevState) => ({
          notes: prevState.notes.filter((note) => note.id !== id),
        }));
        swalSuccess(DELETE);
      }
    });
  }

  onSearchHandler(search) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note) => {
        return note.title.toLowerCase().includes(search.toLowerCase());
      }),
    }));
  }

  render() {
    return (
      <div>
        <NavBarComponent />
        <JumbotronComponent />
        <NoteTabsComponent
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
          onDelete={this.onDeleteHandler}
        />
        <FooterComponent />
      </div>
    );
  }
}

export default MyNotesApp;
