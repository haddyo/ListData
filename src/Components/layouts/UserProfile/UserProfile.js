import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Col, ListGroup, Breadcrumb } from 'react-bootstrap';
import {
  actionFetchProfileList
} from "../../../actions/AppAction";

import "./UserProfile.scss";

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.reducer.profiles);

  useEffect(() => {
    if (props.history.location.search === '') {
      props.history.push('/home');
    }
    const userId = props.history.location.search.split("=")[1]
    dispatch(actionFetchProfileList(userId))
  }, [dispatch])

  return (
    <Container fluid id="container">
      <Breadcrumb>
        <Breadcrumb.Item href="/home#">Back to Home</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          {
            userData && userData.length > 0 && userData.map((user) => {
              return <Card style={{ width: '40rem' }}>
                <ListGroup variant="flush">

                  <ListGroup.Item><strong>User Name:</strong> {user.userName}</ListGroup.Item>
                  <ListGroup.Item><strong>Full Name:</strong> {user.fullName}</ListGroup.Item>
                  <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                  <ListGroup.Item><strong>Website: </strong>{user.website}</ListGroup.Item>
                  <ListGroup.Item><strong>Company:</strong> {user.company}</ListGroup.Item>


                </ListGroup>
              </Card>;
            })
          }

        </Col>
      </Row>
    </Container>
  );

}

export default UserProfile;