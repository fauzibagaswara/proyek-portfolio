// import React, { Component } from 'react';
// import AboutSubheading from './AboutSubheading';
// import subheadingsData from './subheadingsData';

// class AboutMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeMenuItem: 1,
//       activeSubheading: 1,
//     };
//   }

//   renderSubheadings = () => {
//     const { activeMenuItem } = this.state;
//     const subheadings = subheadingsData[activeMenuItem];

//     return subheadings.map((subheading, index) => (
//       <AboutSubheading
//         key={index}
//         title={subheading.title}
//         content={subheading.content}
//         active={index + 1 === this.state.activeSubheading}
//         onClick={() => this.handleSubheadingClick(index + 1)}
//         menuItem={activeMenuItem}
//       />
//     ));
//   };

//   // ...kode lainnya

//   render() {
//     return (
//       <div>
//         {this.renderSubheadings()}
//         {/* Render menu items and subheadings here */}
//       </div>
//     );
//   }
// }

// export default AboutMenu;
