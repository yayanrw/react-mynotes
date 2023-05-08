import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { showFormattedDate } from "../utils/MyCustoms";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";
import LocalizationContext from "../contexts/LocalizationContext";
import { EN_LANG, ID, ID_LANG } from "../utils/MyConstants";

const NoteCardItemComponent = ({
  title,
  body,
  archived,
  createdAt,
  id,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  const navigate = useNavigate();
  const localizationCard = useLocalization("card");
  const { localization } = useContext(LocalizationContext);
  const lang = localization === ID ? ID_LANG : EN_LANG;

  return (
    <Col lg="3" className="pb-4">
      <Card className="card-height bg-light text-black">
        <Card.Header as="h6" className="p-3">
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <footer className="blockquote-footer pt-3 mb-0">
            {showFormattedDate(createdAt, lang)}
          </footer>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="default"
            onClick={() => navigate(`/detail-note/${id}`)}
          >
            <FontAwesomeIcon
              color="cornflowerblue"
              title={localizationCard.detail}
              icon={regular("eye")}
            />
          </Button>
          <Button
            variant="default"
            onClick={archived ? () => onUnarchive(id) : () => onArchive(id)}
          >
            <FontAwesomeIcon
              color="red"
              title={
                archived ? localizationCard.unArchive : localizationCard.archive
              }
              icon={archived ? solid("heart") : regular("heart")}
            />
          </Button>
          <Button variant="default" onClick={() => onDelete(id)}>
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
  id: PropTypes.number.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteCardItemComponent;
