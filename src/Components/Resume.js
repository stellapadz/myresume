import React, { Component } from 'react';

class Resume extends Component {
   render() {
      if (this.props.data) {
         var education = this.props.data.education.map(function (education) {
            return <div key={education.school} className="twelve columns"><h3>{education.school}</h3><p className="info">{education.degree}<span>&bull;</span> <em className="date">{education.graduated}</em></p></div>
         });
         var work = this.props.data.work.map(function (work) {
            return <div key={work.company} className="twelve columns"><h3>{work.company}</h3><p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p><p>{work.description}</p></div>
         });
      }
      return (
         <section id="resume">
            <div className="row education">
               <div className="three columns header-col">
                  <h1><span>Education</span></h1>
               </div>
               <div className="nine columns main-col">
                  <div className="row item">
                     {education}
                  </div>
               </div>
            </div>
            <div className="row work">
               <div className="three columns header-col">
                  <h1><span>Work</span></h1>
               </div>
               <div className="nine columns main-col">
                  <div className="row item">
                     {work}
                  </div>
               </div>
            </div>
            <div className="row skill">
               <div className="three columns header-col">
                  <h1><span>Highlighted Skills</span></h1>
               </div>
               <div className="nine columns main-col">
                  <div className="bars">
                     <ul className="skills">
                        <li><span className="bar-expand html"></span><em>HTML5</em></li>
                        <li><span className="bar-expand css"></span><em>CSS</em></li>
                        <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
                        <li><span className="bar-expand javascript"></span><em>Javascript</em></li>
                        <li><span className="bar-expand react"></span><em>ReactJs & ReactNative - Redux</em></li>
                        <li><span className="bar-expand laravel"></span><em>Laravel PHP</em></li>
                     </ul>
                  </div>
               </div>
            </div>5
         </section>
      );
   }
}

export default Resume;
