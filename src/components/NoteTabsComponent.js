import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { ACTIVE_NOTES, ADD_NOTE, ARCHIVED_NOTES } from "../utils/MyConstants";
import NotesListComponent from "./NotesListComponent";
import TabTitleComponent from "./TabTitleComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import NoteFormComponent from "./NoteFormComponent";

const NoteTabsComponent = ({ notes, onArchive, onUnarchive, onDelete }) => {
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
              count={notes.filter((item) => !item.archived).length}
              badgeType="primary"
            />
          }
        >
          <NotesListComponent
            notes={notes}
            showArchive={false}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            onDelete={onDelete}
          />
        </Tab>
        <Tab
          eventKey="archived-notes"
          title={
            <TabTitleComponent
              title={ARCHIVED_NOTES}
              count={notes.filter((item) => item.archived).length}
              badgeType="secondary"
            />
          }
        >
          <NotesListComponent
            notes={notes}
            showArchive={true}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            onDelete={onDelete}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default NoteTabsComponent;
