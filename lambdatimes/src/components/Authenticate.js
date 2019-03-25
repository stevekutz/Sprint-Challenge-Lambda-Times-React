import React from 'react';
import TopBar from '../components/TopBar';


const withAuthenticate = App =>
  class extends React.Component {
    constructor(props) {
      console.log('withAutheticate props ', props);
      super(props);
      this.state = {
        logged_IN: false

      }
    }

    componentDidMount() {

      (!localStorage.getItem('username'))
        ?  this.setState({logged_IN: false})
        :  this.setState({logged_IN: true})
    }

    // refactored into ternary
    render() {

      return (
        (this.state.logged_IN)
          ?  <App />
          :  <div>
            <TopBar />
          </div>
      )

    }

  };

export default withAuthenticate;