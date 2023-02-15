import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import {
  ACTIVE_NOTES,
  ADD_NOTE,
  ARCHIVE,
  ARCHIVED_NOTES,
  DELETE,
  UNARCHIVE,
} from "../utils/MyConstants";
import NotesListComponent from "./NotesListComponent";
import { getInitialData } from "../utils/MyData";
import TabTitleComponent from "./TabTitleComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import NoteFormComponent from "./NoteFormComponent";
import { confirmationDialog, swalSuccess } from "../utils/MyCustoms";

export class NoteTabsComponent extends Component {
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

  render() {
    return (
      <Container style={{ minHeight: "800px" }}>
        <Tabs
          defaultActiveKey="active-notes"
          id="fill-tab-notes"
          className="mb-5 mt-5"
          fill
        >
          <Tab
            eventKey="add-note"
            title={
              <TabTitleComponent
                title={ADD_NOTE}
                count={<FontAwesomeIcon icon={solid("plus")} />}
              />
            }
          >
            <NoteFormComponent />
          </Tab>
          <Tab
            eventKey="active-notes"
            title={
              <TabTitleComponent
                title={ACTIVE_NOTES}
                count={this.state.notes.filter((item) => !item.archived).length}
                badgeType="primary"
              />
            }
          >
            <NotesListComponent
              notes={this.state.notes}
              showArchive={false}
              onArchive={this.onArchiveHandler}
              onUnarchive={this.onUnarchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          </Tab>
          <Tab
            eventKey="archived-notes"
            title={
              <TabTitleComponent
                title={ARCHIVED_NOTES}
                count={this.state.notes.filter((item) => item.archived).length}
                badgeType="secondary"
              />
            }
          >
            <NotesListComponent
              notes={this.state.notes}
              showArchive={true}
              onArchive={this.onArchiveHandler}
              onUnarchive={this.onUnarchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NoteTabsComponent;
