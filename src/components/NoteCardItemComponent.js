import React, { useContext, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { showFormattedDate } from "../utils/date_helper";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";
import LocalizationContext from "../contexts/LocalizationContext";
import { EN_LANG, ID_KEY, ID_LANG } from "../utils/constants";
import {
  archiveNote,
  deleteNote,
  unArchiveNote,
} from "../datasources/note_datasource";
import { ApplicationException, ServerException } from "../utils/exceptions";
import {
  confirmationDialog,
  swalError,
  swalSuccess,
  swalWarning,
} from "../utils/swal_helper";

const NoteCardItemComponent = ({ title, body, archived, createdAt, id }) => {
  const navigate = useNavigate();
  const localizationCard = useLocalization("card");
  const localizationSwal = useLocalization("swal");
  const { localization } = useContext(LocalizationContext);
  const lang = localization === ID_KEY ? ID_LANG : EN_LANG;
  const [isLoading, setIsLoading] = useState(false);

  const archiveHandler = async (id) => {
    confirmationDialog(
      localizationSwal.archiveDataWarn,
      localizationSwal.archiveIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          callArchive(id);
        }
      }
    );
  };

  const unArchiveHandler = async (id) => {
    confirmationDialog(
      localizationSwal.unArchiveDataWarn,
      localizationSwal.unArchiveIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          callUnArchive(id);
        }
      }
    );
  };

  const deleteHandler = async (id) => {
    confirmationDialog(
      localizationSwal.deleteDataWarn,
      localizationSwal.deleteIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          callDelete(id);
        }
      }
    );
  };

  const callArchive = async (id) => {
    try {
      setIsLoading(true);
      await archiveNote(id);
      swalSuccess(localizationSwal.success, localizationSwal.archiveSuggest);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ApplicationException) {
        swalWarning(localizationSwal.warning, error.message);
      } else if (error instanceof ServerException) {
        swalError(localizationSwal.serverError, error.message);
      } else {
        swalError(localizationSwal.anErrorOccured, error.message);
      }
    }
  };

  const callUnArchive = async (id) => {
    try {
      setIsLoading(true);
      await unArchiveNote(id);
      swalSuccess(localizationSwal.success, localizationSwal.unArchiveSuggest);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ApplicationException) {
        swalWarning(localizationSwal.warning, error.message);
      } else if (error instanceof ServerException) {
        swalError(localizationSwal.serverError, error.message);
      } else {
        swalError(localizationSwal.anErrorOccured, error.message);
      }
    }
  };

  const callDelete = async (id) => {
    try {
      setIsLoading(true);
      await deleteNote(id);
      swalSuccess(localizationSwal.success, localizationSwal.deleteSuggest);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ApplicationException) {
        swalWarning(localizationSwal.warning, error.message);
      } else if (error instanceof ServerException) {
        swalError(localizationSwal.serverError, error.message);
      } else {
        swalError(localizationSwal.anErrorOccured, error.message);
      }
    }
  };

  return (
    <Col xl="3" lg="4" md="6" sm="12" className="pb-4">
      <Card className="card-height">
        <Card.Header as="h6" className="p-3 my-card-header">
          {title}
        </Card.Header>
        <Card.Body className="my-card-body">
          <Card.Text>{body}</Card.Text>
          <footer className="blockquote-footer pt-3 mb-0">
            {showFormattedDate(createdAt, lang)}
          </footer>
        </Card.Body>
        <Card.Footer className="my-card-header">
          <Button
            variant="default"
            disabled={isLoading}
            onClick={() => navigate(`/notes/${id}`)}
          >
            <FontAwesomeIcon
              color="cornflowerblue"
              title={localizationCard.detail}
              icon={regular("eye")}
            />
          </Button>
          <Button
            variant="default"
            disabled={isLoading}
            onClick={
              archived ? () => unArchiveHandler(id) : () => archiveHandler(id)
            }
          >
            <FontAwesomeIcon
              color="red"
              title={
                archived ? localizationCard.unArchive : localizationCard.archive
              }
              icon={archived ? solid("square-check") : solid("box-archive")}
            />
          </Button>
          <Button
            variant="default"
            disabled={isLoading}
            onClick={() => deleteHandler(id)}
          >
            <FontAwesomeIcon
              color="orange"
              title={localizationCard.delete}
              icon={regular("trash-can")}
            />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

NoteCardItemComponent.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default NoteCardItemComponent;
