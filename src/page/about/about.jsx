import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const pages = [
  { title: 'A Museum of Hospitality', author: 'Asya Yaghmurian', page: 1 },
  { title: 'Towards Co-creating a Decolonial Inclusive Museum', author: 'Oluwatoyin Sogbesan', page: 2 },
  { title: 'What is an object virtue?', author: 'Joana Atemengue Owona / Birds of Knowledge', page: 3 },
  { title: 'Birds of Knowledge', author: '', page: 4 },
  { title: 'From Rapid Response Restitution to Home Museum', author: 'Clémentine Deliss & Azu Nwagbogu', page: 5 },
  { title: 'NCMM Statement of Participation', author: '', page: 6 },
  { title: 'Link for About Lagos Photo Festival', author: '', page: 7 },
];

export default function About() {
  const history = useHistory();

  return (
    <div className="about-main-container">
      <div className="about-article-container">
        {
                  pages.map(({ title, author, page }) => (
                    <div onClick={() => history.push(`/about/page/${page}`)} className="about-article">
                      <span className="title">{title}</span>
                      <span className="author">{author}</span>
                    </div>
                  ))
              }
        <div onClick={() => history.push('bio')} className="about-article">
          <span className="title">Biographies</span>
          <span
            className="author"
          />
        </div>
        <div onClick={() => history.push('colophon')} className="about-article">
          <span className="title">Colophon</span>
          <span
            className="author"
          />
        </div>
        <div onClick={() => history.push('privacy')} className="about-article-bottom">
          <span className="title">Terms of Service & Privacy Policy</span>
          <span
            className="author"
          />
        </div>
        <br />
        <br />
        <br />
        {/* <div className="about-main-footer"> */}
        {/*  <div onClick={() => history.push('bio')} className="biographies">Biographies</div> */}
        {/*  <div onClick={() => history.push('colophon')} className="colophon">Colophon</div> */}
        {/*  <div onClick={() => history.push('privacy')} className="privacy">Terms of Service & Privacy Policy</div> */}
        {/* </div> */}
      </div>
      <div className="about-footer">
        <div className="about-footer-left">
          <span className="about-main-title">WELCOME TO HOME MUSEUM</span>
        </div>
        <div className="about-footer-right">
          <div onClick={() => history.push('/menu')} className="back-to-home" />
        </div>
      </div>
    </div>
  );
}
