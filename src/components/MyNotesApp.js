import React, { Component } from "react";
import NavBarComponent from "./NavBarComponent";
import JumbotronComponent from "./JumbotronComponent";
import FooterComponent from "./FooterComponent";
import { addNote, archivedNote, deleteNote, getNotes } from "../utils/MyData";
import { ARCHIVE, DELETE, INSERT, UNARCHIVE } from "../utils/MyConstants";
import { confirmationDialog, swalSuccess } from "../utils/MyCustoms";
import Navigation from "./Navigation";
import {
  Route,
  Routes,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import AddPage from "../pages/AddPage";
import ActivePage from "../pages/ActivePage";
import ArchivePage from "../pages/ArchivePage";
import { Container } from "react-bootstrap";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const MyNotesAppWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword });
  };

  return (
    <MyNotesApp defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

export class MyNotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
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

  onKeywordChangeHandler = (keyword) => {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  };

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <div>
        <NavBarComponent />
        <JumbotronComponent
          keyword={this.state.keyword}
          onKeywordChangeHandler={this.onKeywordChangeHandler}
        />
        <Navigation notes={notes} />
        <Container style={{ minHeight: "800px" }}>
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
                    notes={notes}
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
                    notes={notes}
                    onArchive={this.onArchiveHandler}
                    onUnarchive={this.onUnarchiveHandler}
                    onDelete={this.onDeleteHandler}
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
  }
}

export default MyNotesAppWrapper;
