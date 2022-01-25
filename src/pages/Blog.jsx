import React from 'react';
import Header from '../components/includes/Header';
import Nav from '../components/includes/Nav';
import blog3 from '../img/banner-3.png';

function Blog() {
  return (
    <div>
      <Nav />
      <div className="section1" style={{ backgroundImage: 'url(' + blog3 + ')' }}>
        <h2>რჩევები პროფესიონალისგან. როგორ გავუმკლავდეთ ტკივილს?</h2>
        <button className="button ml-auto">გააგრძელე კითხვა</button>
      </div>
    </div>
  );
}

export default Blog;
