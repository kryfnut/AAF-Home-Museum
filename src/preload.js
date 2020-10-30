import a from './asset/error-button.svg';
import b from './asset/icon-back-to-home.svg';
import c from './asset/icon-close.svg';
import d from './asset/icon-double-eye.svg';
import e from './asset/icon-double-eye-bolder.svg';
import f from './asset/icon-go-collection.svg';
import g from './asset/icon-go-home.png';
import h from './asset/icon-go-home.svg';
import i from './asset/icon-go-story.svg';
import j from './asset/icon-go-text.svg';
import k from './asset/icon-image-eye.svg';
import l from './asset/icon-menu-collection.svg';
import m from './asset/icon-menu-guide.svg';
import n from './asset/icon-menu-story.svg';
import o from './asset/icon-menu-wander.svg';
import p from './asset/icon-next.svg';
import q from './asset/icon-next-nope.svg';
import r from './asset/icon-prev.svg';
import s from './asset/icon-prev-nope.svg';
import t from './asset/icon-search.svg';
import u from './asset/icon-star-selected.svg';
import v from './asset/icon-star-unselected.svg';
import w from './asset/icon-text-new.svg';
import x from './asset/icons-group.svg';

const imgs = [
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x,
];

imgs.forEach((value) => {
  const image = new Image();
  image.src = value;
});
