import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios'; // api

class View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user: '',
      data: [],
    };
    this.name = '';
  }

  componentWillMount() {
    // this.name = cookies.get('title');
    this.name = 'q2';

    // var curr_document = {};
    // if (this.state.title === '' && this.state.data === '') {
    //   this.setState({
    //     message: 'Invalid Submission'
    //   });
    //   return;
    // }
    // curr_document.title = this.state.title;
    // curr_document.user = this.state.user;
    // curr_document.data = this.state.data;
    let url = 'http://localhost:8080/api/document?title=' + this.name;
    axios.get(url).then((response) => {
      console.log('no error');
      if (response.status == 200) {
        console.log('ok');
        console.log(response.data);
        let data = response.data;
        console.log(response.data.data);
        // this.setState({
        //   title: data[0].title
        // });

      }
      else if (response.status == 201) {
        console.log("created");
      }
      else if (response.status == 500) {
        console.log('Server Error');
      }
      else if (response.status == 404) {
        console.log('404 Not Found');
      }
    }).then((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}

View.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(View);
