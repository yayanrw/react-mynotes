import React, { Component } from "react";
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import {
  ARCHIVE,
  NOTE_DETAIL_PLACEHOLDER,
  NOTE_TITLE_PLACEHOLDER,
  NO_NOTES,
  UNARCHIVE,
} from "../utils/MyConstants";
import { showFormattedDate } from "../utils/MyCustoms";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/MyData";
import PropTypes from "prop-types";

const DetailPageWrapper = () => {
  const { id } = useParams();
  return <DetailPage id={id} />;
};

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(Number(props.id)),
    };
  }

  render() {
    return (
      <Row>
        {this.state.note === null || this.state.note === undefined ? (
          <Col className="text-center mt-5 pt-5" as="h5">
            {NO_NOTES}
          </Col>
        ) : (
          <Col>
            <Card className="card-height">
              <Card.Header as="h5" className="p-3">
                Detail Note{" "}
                <Badge bg={this.state.note.archived ? "success" : "warning"}>
                  {this.state.note.archived ? ARCHIVE : UNARCHIVE}
                </Badge>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={NOTE_TITLE_PLACEHOLDER}
                      value={this.state.note.title}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicBody">
                    <Form.Label>Detail</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder={NOTE_DETAIL_PLACEHOLDER}
                      value={this.state.note.body}
                      disabled
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Created At</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={NOTE_TITLE_PLACEHOLDER}
                      value={showFormattedDate(this.state.note.createdAt)}
                      disabled
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
