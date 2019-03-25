import React from 'react';
import {
  TopBarDiv,
  TopBarContainer,
  ContainerLeft,
  ContainerLeftSpan,
  ContainerCenter,
  ContainerCenterSpan,
  ContainerRight,
  ContainerRightSpan,
} from './TopBar_Style';

import { Modal } from "reactstrap";
import Login from './Login';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: '',
      password: '',
      attempts: 0,   // experiment for later,
    };

    //this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };


  render(){
  return (
    <TopBarDiv>
      <TopBarContainer>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan>
          <ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
          <ContainerCenterSpan>RANDOM</ContainerCenterSpan>
          <ContainerCenterSpan>MUSIC</ContainerCenterSpan>
          <ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan onClick={this.toggle}
          >LOG IN</ContainerRightSpan>
        </ContainerRight>
      </TopBarContainer>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <Login

        />
      </Modal>


    </TopBarDiv>
  )
}
};

export default TopBar;