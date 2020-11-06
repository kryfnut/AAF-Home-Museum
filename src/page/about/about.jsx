import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const pages = [
  { title: 'From Rapid Response Restitution to Home Museum', author: 'Clémentine Deliss & Azu Nwagbogu', page: 5 },
  { title: 'Towards Co-Creating a Decolonial, Inclusive Museum', author: 'Oluwatoyin Sogbesan', page: 2 },
  { title: 'A Museum of Hospitality', author: 'Asya Yaghmurian', page: 1 },
  { title: 'Developing a Counter-Model', author: 'Birds of Knowledge', page: 4 },
  { title: 'Objects of Virtue', author: 'Joana Atemengue Owona / Birds of Knowledge', page: 3 },
  { title: 'Letter to a Friend', author: 'Open Calls LagosPhoto20', page: 8 },
  { title: 'Statement from the Director of NCMM', author: '', page: 6 },
];

const pageNext = [
  { title: 'LagosPhoto Festival', author: '', page: 7 },
];

export default function About() {
  const history = useHistory();

  return (
    <div className="about-main-container">
      <div className="about-article-container">
        {
                  pages.map(({ title, author, page }) => (
                    page !== 7
                      ? (
                        <div onClick={() => history.push(`/about/page/${page}`)} className="about-article">
                          <span className="title">{title}</span>
                          <span className="author">{author}</span>
                        </div>
                      ) : (
                        <div onClick={() => window.open('https://www.lagosphotofestival.com')} className="about-article">
                          <span className="title">{title}</span>
                          <span className="author">{author}</span>
                        </div>
                      )
                  ))
              }
        <div onClick={() => history.push('bio')} className="about-article">
          <span className="title">Biographies</span>
          <span
            className="author"
          />
        </div>
        {
          pageNext.map(({ title, author, page }) => (
            page !== 7
              ? (
                <div onClick={() => history.push(`/about/page/${page}`)} className="about-article">
                  <span className="title">{title}</span>
                  <span className="author">{author}</span>
                </div>
              ) : (
                <div onClick={() => window.open('https://www.lagosphotofestival.com')} className="about-article">
                  <span className="title">{title}</span>
                  <span className="author">{author}</span>
                </div>
              )
          ))
        }
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
