import React, { Component } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { ACTIVE_NOTES, ADD_NOTE, ARCHIVED_NOTES } from "../utils/MyConstants";
import NotesListComponent from "./NotesListComponent";
import { getInitialData } from "../utils/MyData";
import TabTitleComponent from "./TabTitleComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
          <Tab
            eventKey="active-notes"
            title={
              <TabTitleComponent
                title={ACTIVE_NOTES}
                count={10}
                badgeType="primary"
              />
            }
          >
            <NotesListComponent
              notes={this.state.notes}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
            />
          </Tab>
          <Tab
            eventKey="archived-notes"
            title={
              <TabTitleComponent
                title={ARCHIVED_NOTES}
                count={2}
                badgeType="secondary"
              />
            }
          >
            <h2>Halo</h2>
          </Tab>
          <Tab
            eventKey="add-note"
            title={
              <TabTitleComponent
                title={ADD_NOTE}
                count={<FontAwesomeIcon icon={solid("plus")} />}
              />
            }
          >
            <h2>Halo</h2>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default NoteTabsComponent;
