import React, { useEffect, useMemo, useState } from "react";
import NavBarComponent from "./components/NavBarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import FooterComponent from "./components/FooterComponent";
import { addNote, archivedNote, deleteNote, getNotes } from "./utils/MyData";
import { ARCHIVE, DELETE, INSERT, UNARCHIVE } from "./utils/MyConstants";
import { confirmationDialog, swalSuccess } from "./utils/MyCustoms";
import { Route, Routes, useSearchParams } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ActivePage from "./pages/ActivePage";
import ArchivePage from "./pages/ArchivePage";
import { Container } from "react-bootstrap";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavigationComponent from "./components/NavigationComponent";
import LocalizationContext from "./contexts/LocalizationContext";

const MyNotesApp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [localization, setLocalization] = useState(
    localStorage.getItem("localization") || "id"
  );

  const toggleLocalization = () => {
    setLocalization((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const localizationContextValue = useMemo(() => {
    return {
      localization,
      toggleLocalization,
    };
  }, [localization]);

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
    <>
      <LocalizationContext.Provider value={localizationContextValue}>
        <header>
          <NavBarComponent />
        </header>
        <main>
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
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </LocalizationContext.Provider>
    </>
  );
};

export default MyNotesApp;
