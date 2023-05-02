import React, { useEffect, useState } from "react";
import NavBarComponent from "./NavBarComponent";
import JumbotronComponent from "./JumbotronComponent";
import FooterComponent from "./FooterComponent";
import { addNote, archivedNote, deleteNote, getNotes } from "../utils/MyData";
import { ARCHIVE, DELETE, INSERT, UNARCHIVE } from "../utils/MyConstants";
import { confirmationDialog, swalSuccess } from "../utils/MyCustoms";
import { Route, Routes, useSearchParams } from "react-router-dom";
import AddPage from "../pages/AddPage";
import ActivePage from "../pages/ActivePage";
import ArchivePage from "../pages/ArchivePage";
import { Container } from "react-bootstrap";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import PropTypes from "prop-types";
import NavigationComponent from "./NavigationComponent";

const MyNotesApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const onAddNotesHandler = (contact) => {
    addNote(contact);
    swalSuccess(INSERT);

    setNotes(getNotes());
  };

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const onDeleteHandler = (id) => {
    confirmationDialog(DELETE, (confirmed) => {
      if (confirmed) {
        deleteNote(id);
        swalSuccess(DELETE);

        setNotes(getNotes());
      }
    });
  };

  const onArchiveHandler = (id) => {
    confirmationDialog(ARCHIVE, (confirmed) => {
      if (confirmed) {
        archivedNote(id, true);
        swalSuccess(ARCHIVE);

        setNotes(getNotes());
      }
    });
  };

  const onUnarchiveHandler = (id) => {
    confirmationDialog(UNARCHIVE, (confirmed) => {
      if (confirmed) {
        archivedNote(id, false);
        swalSuccess(UNARCHIVE);

        setNotes(getNotes());
      }
    });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <NavBarComponent />
      <JumbotronComponent
        keyword={keyword}
        onKeywordChangeHandler={onKeywordChangeHandler}
      />
      <NavigationComponent notes={filteredNotes} />
      <Container style={{ minHeight: "800px" }}>
        <main>
          <Routes>
            <Route
              path="/add-notes"
              element={<AddPage onAddNotes={onAddNotesHandler} />}
            />
            <Route
              path="/"
              element={
                <ActivePage
                  notes={filteredNotes}
                  onArchive={onArchiveHandler}
                  onUnarchive={onUnarchiveHandler}
                  onDelete={onDeleteHandler}
                />
              }
            />
            <Route
              path="/archived-notes"
              element={
                <ArchivePage
                  notes={filteredNotes}
                  onArchive={onArchiveHandler}
                  onUnarchive={onUnarchiveHandler}
                  onDelete={onDeleteHandler}
                />
              }
            />
            <Route path="/detail-note/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </Container>

      <FooterComponent />
    </div>
  );
};

MyNotesApp.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default MyNotesApp;
