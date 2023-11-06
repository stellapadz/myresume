import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Axios from 'axios';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         foo: 'bar',
         resumeData: {}
      }
   }
   getResumeData() {
      Axios.get('https://5e93f735c7393c0016de4c41.mockapi.io/resumeviewer')
         .then(response => {
            this.setState({ resumeData: response.data[0] });
         })
         .catch(error => {
            console.log(error);
         });

   }
   componentDidMount() {
      this.getResumeData();
   }

   render() {

      return (
         <div className="App">
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Testimonials data={this.state.resumeData.testimonials} />
            <Contact data={this.state.resumeData.main} />
            <Footer />
         </div>
      );
   }
}

export default App;
