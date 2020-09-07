import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, Container, Row, Col } from 'react-bootstrap';
import {
  actionFetchPostList,
  actionFetchCommentList,
  actionSetActivePost
} from "../../../actions/AppAction";
import "./Home.scss";

const Home = (props) => {
  const dispatch = useDispatch();
  const [activePostDetails, setActivePostDetails] = useState({});
  const postData = useSelector(state => state.reducer.posts);
  const commentData = useSelector(state => state.reducer.comments);
  const activePost = useSelector(state => state.reducer.activePost);

  useEffect(() => {
    dispatch(actionFetchPostList())
    dispatch(actionFetchCommentList())
  }, [dispatch])

  useEffect(() => {
    const postDetails = postData && postData.length > 0 && activePost !== '' && postData.filter(post => post.id === activePost)[0];
    setActivePostDetails(postDetails);
  }, [activePost]);

  const handlePostSelection = (id) => {
    dispatch(actionSetActivePost(id));
  }

  const handleProfileSelection = userName => {
    props.history.push(`/userProfile?userName=${userName}`);
  }
  return (
    <Container fluid id="container">
      <Row>
        <Col>
          <fieldset class="scheduler-border">
            <legend class="scheduler-border">Posts</legend>

            {
              postData && postData.length > 0 && postData.map((post, index) => {
                return <Card key={index} className={index + 1 === activePost ? 'selected postCard' : 'postCard'}>
                  <Card.Header className="cardHeaderUserName" onClick={(e) => handleProfileSelection(post.userName)}><a><em>{post.userName}</em></a></Card.Header>
                  <Card.Body className="cardBodyPostName" onClick={(e) => handlePostSelection(post.id)}>
                    <Card.Title>{post.title}</Card.Title>
                  </Card.Body>

                </Card>;
              })
            }
          </fieldset>

        </Col>
        <Col>
          <fieldset class="scheduler-border">
            <legend class="scheduler-border">Comments</legend>
            <h5>
              Post Title: {activePostDetails.title}
            </h5>
            <h5 className="cardBodyPostName" onClick={(e) => handleProfileSelection(activePostDetails.userName)}>
              Post Creator: {activePostDetails.userName}
            </h5>
            {
              commentData && commentData.length > 0 && commentData.map((comment, index) => {
                if (comment.postId === activePost) {
                  return <Card key={index} className="postCard">
                    <Card.Header><em>{comment.userEmail}</em></Card.Header>
                    <Card.Body>
                      <Card.Title>{comment.subject}</Card.Title>
                      <Card.Text>
                        {comment.body}
                      </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                  </Card>;
                }
                return null;
              })
            }
          </fieldset>
        </Col>
      </Row>
    </Container >



  );

}

export default Home;