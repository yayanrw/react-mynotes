import React from "react";
import NavBarComponent from "./NavBarComponent";
import JumbotronComponent from "./JumbotronComponent";
import NoteTabsComponent from "./NoteTabsComponent";
import FooterComponent from "./FooterComponent";

const MyNotesApp = () => {
  return (
    <div>
      <NavBarComponent />
      <JumbotronComponent />
      <NoteTabsComponent />
      <FooterComponent />
    </div>
  );
};

export default MyNotesApp;
