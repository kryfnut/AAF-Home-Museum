import React from 'react';
import './index.scss';
import { useHistory, useParams } from 'react-router-dom';
import pages from './pages.json';
import png1 from '../../../asset/1.png';
import png2 from '../../../asset/2.jpg';
import cn from '../../../asset/lang/cn.png';
import en from '../../../asset/lang/en.png';
import fr from '../../../asset/lang/fr.png';
import ha from '../../../asset/lang/ha.png';
import lg from '../../../asset/lang/lg.png';
import pi from '../../../asset/lang/pi.png';
import po from '../../../asset/lang/po.png';
import ru from '../../../asset/lang/ru.png';
import sw from '../../../asset/lang/sw.png';
import yo from '../../../asset/lang/yo.png';

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
                              <>
                                <p style={{ marginBottom: '12px' }}>{paragraph}</p>
                              </>
                            ))
                    }
          {
                        page === '6'
                          ? (
                            <div style={{ width: '100%', textAlign: 'center' }}>
                              <img width={window.innerWidth * 0.7} src={png1} alt="" />
                              <img width={window.innerWidth * 0.7} src={png2} alt="" />
                            </div>
                          )
                          : null
                    }
          {
            page === '8'
              ? (
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <img width={window.innerWidth * 0.7} src={en} alt="" />
                  <img width={window.innerWidth * 0.7} src={cn} alt="" />
                  <img width={window.innerWidth * 0.7} src={fr} alt="" />
                  <img width={window.innerWidth * 0.7} src={ha} alt="" />
                  <img width={window.innerWidth * 0.7} src={lg} alt="" />
                  <img width={window.innerWidth * 0.7} src={pi} alt="" />
                  <img width={window.innerWidth * 0.7} src={po} alt="" />
                  <img width={window.innerWidth * 0.7} src={ru} alt="" />
                  <img width={window.innerWidth * 0.7} src={sw} alt="" />
                  <img width={window.innerWidth * 0.7} src={yo} alt="" />
                </div>
              ) : null
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
