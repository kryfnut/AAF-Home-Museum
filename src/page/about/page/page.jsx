import React from 'react';
import './index.scss';
import { useHistory, useParams } from 'react-router-dom';
import pages from './pages.json';

export default function AboutPage() {
  const history = useHistory();
  const { page } = useParams();

  const pageList = new Array(...pages);
  const current = pageList.find((i) => i.page === page);

  if (!current) {
    return history.replace('/404');
  }

  return (
    <div className="about-page-container">
      <div className="about-page-article-container">
        <div className="article">
          {
            current.content
          }
        </div>
        <div className="about-page-footer">
          <div className="about-page-footer-left">
            <div onClick={() => history.goBack()} className="go-prev" />
            <span className="about-page-main-title">{current.title}</span>
          </div>
          <div className="about-page-footer-right">
            <div onClick={() => history.push('/menu')} className="back-to-home" />
          </div>
        </div>
      </div>
    </div>
  );
}
