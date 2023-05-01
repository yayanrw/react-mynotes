import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent";
import JumbotronComponent from "./JumbotronComponent";
import FooterComponent from "./FooterComponent";
import { addNote, archivedNote, deleteNote, getNotes } from "../utils/MyData";
import { ARCHIVE, DELETE, INSERT, UNARCHIVE } from "../utils/MyConstants";
import { confirmationDialog, swalSuccess } from "../utils/MyCustoms";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/AddPage";
import ActivePage from "../pages/ActivePage";
import ArchivePage from "../pages/ArchivePage";
import { Container } from "react-bootstrap";

export class MyNotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler = (contact) => {
    addNote(contact);
    swalSuccess(INSERT);

    this.setState(() => {
      return {
        notes: getNotes(),
      };
    });
  };

  onArchiveHandler = (id) => {
    confirmationDialog(ARCHIVE, (confirmed) => {
      if (confirmed) {
        archivedNote(id, true);

        swalSuccess(ARCHIVE);

        this.setState(() => {
          return {
            notes: getNotes(),
          };
        });
      }
    });
  };

  onUnarchiveHandler = (id) => {
    confirmationDialog(UNARCHIVE, (confirmed) => {
      if (confirmed) {
        archivedNote(id, false);
        swalSuccess(UNARCHIVE);

        this.setState(() => {
          return {
            notes: getNotes(),
          };
        });
      }
    });
  };

  onDeleteHandler = (id) => {
    confirmationDialog(DELETE, (confirmed) => {
      if (confirmed) {
        deleteNote(id);
        swalSuccess(DELETE);

        this.setState(() => {
          return {
            notes: getNotes(),
          };
        });
      }
    });
  };

  onSearchHandler = (search) => {
    const initialNotes = getNotes();
    const filteredNotes = initialNotes.filter((note) => {
      return note.title.toLowerCase().includes(search.toLowerCase());
    });

    this.setState({
      notes: filteredNotes,
    });
  };

  render() {
    return (
      <div>
        <NavBarComponent />
        <JumbotronComponent onSearch={this.onSearchHandler} />
        <Navigation notes={this.state.notes} />
        <Container>
          <main>
            <Routes>
              <Route
                path="/add-notes"
                element={<AddPage onAddNotes={this.onAddNotesHandler} />}
              />
              <Route
                path="/"
                element={
                  <ActivePage
                    notes={this.state.notes}
                    onArchive={this.onArchiveHandler}
                    onUnarchive={this.onUnarchiveHandler}
                    onDelete={this.onDeleteHandler}
                  />
                }
              />
              <Route
                path="/archived-notes"
                element={
                  <ArchivePage
                    notes={this.state.notes}
                    onArchive={this.onArchiveHandler}
                    onUnarchive={this.onUnarchiveHandler}
                    onDelete={this.onDeleteHandler}
                  />
                }
              />
            </Routes>
          </main>
        </Container>

        <FooterComponent />
      </div>
    );
  }
}

export default MyNotesApp;
