import React, { useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import JumbotronComponent from "./JumbotronComponent";
import NavigationComponent from "./NavigationComponent";
import { Container } from "react-bootstrap";
import AddPage from "../pages/AddPage";
import ActivePage from "../pages/ActivePage";
import ArchivePage from "../pages/ArchivePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import { addNote, archivedNote, deleteNote, getNotes } from "../utils/MyData";
import { confirmationDialog, swalSuccess } from "../utils/MyCustoms";
import useLocalization from "../hooks/useLocalization";

const BaseNoteComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const localization = useLocalization("swal");

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const onAddNotesHandler = (contact) => {
    addNote(contact);
    swalSuccess(localization.success, localization.insertSuggest);

    setNotes(getNotes());
  };

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const onDeleteHandler = (id) => {
    confirmationDialog(localization.deleteDataWarn, localization.deleteIt, localization.areYouSure, (confirmed) => {
      if (confirmed) {
        deleteNote(id);
        swalSuccess(localization.success, localization.deleteSuggest);

        setNotes(getNotes());
      }
    });
  };

  const onArchiveHandler = (id) => {
    confirmationDialog(localization.archiveDataWarn, localization.archiveIt, localization.areYouSure, (confirmed) => {
      if (confirmed) {
        archivedNote(id, true);
        swalSuccess(localization.success, localization.archiveSuggest);

        setNotes(getNotes());
      }
    });
  };

  const onUnarchiveHandler = (id) => {
    confirmationDialog(localization.unArchiveDataWarn, localization.unArchiveIt, localization.areYouSure, (confirmed) => {
      if (confirmed) {
        archivedNote(id, false);
        swalSuccess(localization.success, localization.unArchiveSuggest);

        setNotes(getNotes());
      }
    });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <JumbotronComponent
        keyword={keyword}
        onKeywordChangeHandler={onKeywordChangeHandler}
      />
      <NavigationComponent notes={filteredNotes} />
      <Container style={{ minHeight: "800px" }}>
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
      </Container>
    </>
  );
};

export default BaseNoteComponent;
