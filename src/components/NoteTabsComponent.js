import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { ACTIVE_NOTES, ARCHIVED_NOTES } from "../utils/MyConstants";
import NotesListComponent from "./NotesListComponent";
import { getInitialData } from "../utils/MyData";

export class NoteTabsComponent extends Component {
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
      <Container>
        <Tabs
          defaultActiveKey="active-notes"
          id="fill-tab-notes"
          className="mb-3 mt-5"
          fill
        >
          <Tab eventKey="active-notes" title={ACTIVE_NOTES}>
            <NotesListComponent
              notes={this.state.notes}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          </Tab>
          <Tab eventKey="archived-notes" title={ARCHIVED_NOTES}>
            <h2>Halo</h2>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NoteTabsComponent;
