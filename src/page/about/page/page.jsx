import React from 'react';
import './index.scss';
import { useHistory, useParams } from 'react-router-dom';
import pages from './pages.json';
import png1 from '../../../asset/1.png';
import png2 from '../../../asset/2.png';

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
                        page === '7'
                          ? <a href={current.content}>{current.content}</a>
                          : current.content
                            .split('\n')
                            .map((paragraph) => (
                              <p>{paragraph}</p>
                            ))
                    }
          {
                        page === '6'
                          ? (
                            <div style={{ width: '100%', textAlign: 'center' }}>
                              <img src={png1} alt="" />
                              <img src={png2} alt="" />
                            </div>
                          )
                          : null
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
