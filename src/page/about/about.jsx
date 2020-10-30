import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const pages = [
  { title: 'From Rapid Response Restitution To Home Museum', author: 'Dr. Clémentine Deliss, Azu Nwagbogu', page: 1 },
  { title: 'Towards Co-Creating a Decolonial, Inclusive Museum', author: 'Dr. Oluwatoyin Sogbesan', page: 2 },
  { title: 'Reviving Collective Memories', author: 'Dr. Clémentine Deliss, Azu Nwagbogu', page: 3 },
  { title: 'Developing a Counter-Model', author: 'Birds of Knowledge', page: 4 },
  { title: 'Objects of Virtue', author: 'Joana Atemengue Owona / Birds of Knowledge', page: 5 },
  { title: 'Letter To A Friend', author: 'Open call in all languages', page: 6 },
  { title: 'Statement From The Director of NCMM', author: '', page: 7 },
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
        <div className="about-main-footer">
          <div onClick={() => history.push('bio')} className="biographies">Biographies</div>
          <div onClick={() => history.push('colophon')} className="colophon">Colophon</div>
          <div onClick={() => history.push('privacy')} className="privacy">Terms of Service & Privacy Policy</div>
        </div>
      </div>
      <div className="about-footer">
        <div className="about-footer-left">
          <span className="about-main-title">LAGOSPHOTO20 RAPID RESPONSE RESTITUTION</span>
        </div>
        <div className="about-footer-right">
          <div onClick={() => history.push('/menu')} className="back-to-home" />
        </div>
      </div>
    </div>
  );
}
