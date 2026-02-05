var to = Object.defineProperty;
var eo = (i, t, e) => t in i ? to(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var D = (i, t, e) => eo(i, typeof t != "symbol" ? t + "" : t, e);
import { ref as _t, watch as jt, onMounted as $t, openBlock as H, createElementBlock as W, createElementVNode as O, createTextVNode as Mi, toDisplayString as K, createCommentVNode as ce, Fragment as Ye, renderList as Ue, defineComponent as tn, shallowRef as en, h as di, onUnmounted as io, toRaw as fi, nextTick as so, version as no, isProxy as sn, computed as nn, normalizeClass as oo, resolveComponent as zt, createVNode as Et, withDirectives as ro, createStaticVNode as ao, vModelSelect as lo } from "vue";
const Yt = (i, t) => {
  const e = i.__vccOpts || i;
  for (const [s, n] of t)
    e[s] = n;
  return e;
}, co = {
  props: {
    period: {
      type: String,
      required: !0
    },
    widget: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(i) {
    const t = _t([]), e = async () => {
      try {
        const n = await (await fetch(`/cp/plausible/api/top-browsers?period=${i.period}`)).json();
        t.value = n;
      } catch (s) {
        console.error("Failed to fetch top browsers:", s);
      }
    };
    return jt(() => i.period, () => {
      e();
    }, { immediate: !0 }), $t(() => {
      e();
    }), {
      items: t
    };
  }
}, ho = { class: "p-0 card" }, fo = { class: "p-2" }, uo = { key: 0 }, go = { class: "data-table" }, po = { class: "text-sm" }, mo = { class: "text-right" };
function bo(i, t, e, s, n, o) {
  return H(), W("div", ho, [
    O("h3", fo, [
      t[0] || (t[0] = Mi("Top Browsers ", -1)),
      e.widget ? (H(), W("span", uo, "(Last " + K(e.period) + ")", 1)) : ce("", !0)
    ]),
    O("table", go, [
      t[1] || (t[1] = O("thead", null, [
        O("tr", null, [
          O("th", null, "Browser"),
          O("th", { class: "text-right" }, "Visitors")
        ])
      ], -1)),
      O("tbody", null, [
        (H(!0), W(Ye, null, Ue(s.items, (r, a) => (H(), W("tr", {
          class: "outline-none",
          key: a
        }, [
          O("td", po, K(r.browser), 1),
          O("td", mo, K(r.visitors), 1)
        ]))), 128))
      ])
    ])
  ]);
}
const on = /* @__PURE__ */ Yt(co, [["render", bo]]), _o = {
  props: {
    period: {
      type: String,
      required: !0
    },
    widget: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(i) {
    const t = _t([]), e = async () => {
      try {
        const n = await (await fetch(`/cp/plausible/api/top-referrers?period=${i.period}`)).json();
        t.value = n;
      } catch (s) {
        console.error("Failed to fetch top referrers:", s);
      }
    };
    return jt(() => i.period, () => {
      e();
    }, { immediate: !0 }), $t(() => {
      e();
    }), {
      referrers: t
    };
  }
}, xo = { class: "p-0 card" }, yo = { class: "p-2" }, vo = { key: 0 }, wo = { class: "data-table" }, ko = { class: "text-sm" }, So = { class: "text-right" };
function Mo(i, t, e, s, n, o) {
  return H(), W("div", xo, [
    O("h3", yo, [
      t[0] || (t[0] = Mi("Top Referrers ", -1)),
      e.widget ? (H(), W("span", vo, "(Last " + K(e.period) + ")", 1)) : ce("", !0)
    ]),
    O("table", wo, [
      t[1] || (t[1] = O("thead", null, [
        O("tr", null, [
          O("th", null, "Referrer"),
          O("th", { class: "text-right" }, "Visitors")
        ])
      ], -1)),
      O("tbody", null, [
        (H(!0), W(Ye, null, Ue(s.referrers, (r, a) => (H(), W("tr", {
          class: "outline-none",
          key: a
        }, [
          O("td", ko, K(r.source ? r.source : "Other/Direct"), 1),
          O("td", So, K(r.visitors), 1)
        ]))), 128))
      ])
    ])
  ]);
}
const rn = /* @__PURE__ */ Yt(_o, [["render", Mo]]), Do = {
  props: {
    period: {
      type: String,
      required: !0
    },
    widget: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(i) {
    const t = _t([]), e = async () => {
      try {
        const n = await (await fetch(`/cp/plausible/api/top-pages?period=${i.period}`)).json();
        t.value = n;
      } catch (s) {
        console.error("Failed to fetch top pages:", s);
      }
    };
    return jt(() => i.period, () => {
      e();
    }, { immediate: !0 }), $t(() => {
      e();
    }), {
      pages: t
    };
  }
}, Po = { class: "p-0 card" }, Oo = { class: "p-2" }, To = { key: 0 }, Co = { class: "data-table" }, Ao = { class: "text-right" };
function Lo(i, t, e, s, n, o) {
  return H(), W("div", Po, [
    O("h3", Oo, [
      t[0] || (t[0] = Mi("Top Pages ", -1)),
      e.widget ? (H(), W("span", To, "(Last " + K(e.period) + ")", 1)) : ce("", !0)
    ]),
    O("table", Co, [
      t[1] || (t[1] = O("thead", null, [
        O("tr", null, [
          O("th", null, "Page"),
          O("th", { class: "text-right" }, "Visitors")
        ])
      ], -1)),
      O("tbody", null, [
        (H(!0), W(Ye, null, Ue(s.pages, (r, a) => (H(), W("tr", {
          class: "outline-none",
          key: a
        }, [
          O("td", null, K(r.page), 1),
          O("td", Ao, K(r.visitors), 1)
        ]))), 128))
      ])
    ])
  ]);
}
const an = /* @__PURE__ */ Yt(Do, [["render", Lo]]);
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function me(i) {
  return i + 0.5 | 0;
}
const gt = (i, t, e) => Math.max(Math.min(i, e), t);
function te(i) {
  return gt(me(i * 2.55), 0, 255);
}
function bt(i) {
  return gt(me(i * 255), 0, 255);
}
function dt(i) {
  return gt(me(i / 2.55) / 100, 0, 1);
}
function Hi(i) {
  return gt(me(i * 100), 0, 100);
}
const Z = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, ui = [..."0123456789ABCDEF"], Io = (i) => ui[i & 15], Fo = (i) => ui[(i & 240) >> 4] + ui[i & 15], ye = (i) => (i & 240) >> 4 === (i & 15), Ro = (i) => ye(i.r) && ye(i.g) && ye(i.b) && ye(i.a);
function zo(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Z[i[1]] * 17,
    g: 255 & Z[i[2]] * 17,
    b: 255 & Z[i[3]] * 17,
    a: t === 5 ? Z[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Z[i[1]] << 4 | Z[i[2]],
    g: Z[i[3]] << 4 | Z[i[4]],
    b: Z[i[5]] << 4 | Z[i[6]],
    a: t === 9 ? Z[i[7]] << 4 | Z[i[8]] : 255
  })), e;
}
const Eo = (i, t) => i < 255 ? t(i) : "";
function Bo(i) {
  var t = Ro(i) ? Io : Fo;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Eo(i.a, t) : void 0;
}
const Ho = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ln(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function Wo(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function No(i, t, e) {
  const s = ln(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function Vo(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Di(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Vo(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Pi(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(bt);
}
function Oi(i, t, e) {
  return Pi(ln, i, t, e);
}
function jo(i, t, e) {
  return Pi(No, i, t, e);
}
function $o(i, t, e) {
  return Pi(Wo, i, t, e);
}
function cn(i) {
  return (i % 360 + 360) % 360;
}
function Yo(i) {
  const t = Ho.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? te(+t[5]) : bt(+t[5]));
  const n = cn(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = jo(n, o, r) : t[1] === "hsv" ? s = $o(n, o, r) : s = Oi(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Uo(i, t) {
  var e = Di(i);
  e[0] = cn(e[0] + t), e = Oi(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Xo(i) {
  if (!i)
    return;
  const t = Di(i), e = t[0], s = Hi(t[1]), n = Hi(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${dt(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const Wi = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Ni = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function qo() {
  const i = {}, t = Object.keys(Ni), e = Object.keys(Wi);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, Wi[o]);
    o = parseInt(Ni[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let ve;
function Ko(i) {
  ve || (ve = qo(), ve.transparent = [0, 0, 0, 0]);
  const t = ve[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Go = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Zo(i) {
  const t = Go.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? te(r) : gt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? te(s) : gt(s, 0, 255)), n = 255 & (t[4] ? te(n) : gt(n, 0, 255)), o = 255 & (t[6] ? te(o) : gt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Qo(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${dt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const ti = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Ft = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function Jo(i, t, e) {
  const s = Ft(dt(i.r)), n = Ft(dt(i.g)), o = Ft(dt(i.b));
  return {
    r: bt(ti(s + e * (Ft(dt(t.r)) - s))),
    g: bt(ti(n + e * (Ft(dt(t.g)) - n))),
    b: bt(ti(o + e * (Ft(dt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function we(i, t, e) {
  if (i) {
    let s = Di(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Oi(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function hn(i, t) {
  return i && Object.assign(t || {}, i);
}
function Vi(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = bt(i[3]))) : (t = hn(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = bt(t.a)), t;
}
function tr(i) {
  return i.charAt(0) === "r" ? Zo(i) : Yo(i);
}
class he {
  constructor(t) {
    if (t instanceof he)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Vi(t) : e === "string" && (s = zo(t) || Ko(t) || tr(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = hn(this._rgb);
    return t && (t.a = dt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Vi(t);
  }
  rgbString() {
    return this._valid ? Qo(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Bo(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Xo(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = Jo(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new he(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = bt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = me(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return we(this._rgb, 2, t), this;
  }
  darken(t) {
    return we(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return we(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return we(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Uo(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function lt() {
}
const er = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function F(i) {
  return i == null;
}
function B(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function C(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function Y(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function nt(i, t) {
  return Y(i) ? i : t;
}
function T(i, t) {
  return typeof i > "u" ? t : i;
}
const ir = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function R(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function I(i, t, e, s) {
  let n, o, r;
  if (B(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (C(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function Ee(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function Be(i) {
  if (B(i))
    return i.map(Be);
  if (C(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = Be(i[e[n]]);
    return t;
  }
  return i;
}
function dn(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function sr(i, t, e, s) {
  if (!dn(i))
    return;
  const n = t[i], o = e[i];
  C(n) && C(o) ? de(n, o, s) : t[i] = Be(o);
}
function de(i, t, e) {
  const s = B(t) ? t : [
    t
  ], n = s.length;
  if (!C(i))
    return i;
  e = e || {};
  const o = e.merger || sr;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !C(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function se(i, t) {
  return de(i, t, {
    merger: nr
  });
}
function nr(i, t, e) {
  if (!dn(i))
    return;
  const s = t[i], n = e[i];
  C(s) && C(n) ? se(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Be(n));
}
const ji = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function or(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function rr(i) {
  const t = or(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function He(i, t) {
  return (ji[t] || (ji[t] = rr(t)))(i);
}
function Ti(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const We = (i) => typeof i < "u", xt = (i) => typeof i == "function", $i = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function ar(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const N = Math.PI, it = 2 * N, lr = it + N, Ne = Number.POSITIVE_INFINITY, cr = N / 180, et = N / 2, wt = N / 4, Yi = N * 2 / 3, fn = Math.log10, Wt = Math.sign;
function ne(i, t, e) {
  return Math.abs(i - t) < e;
}
function Ui(i) {
  const t = Math.round(i);
  i = ne(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(fn(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function hr(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function dr(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function fe(i) {
  return !dr(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function fr(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function ur(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Pt(i) {
  return i * (N / 180);
}
function gr(i) {
  return i * (180 / N);
}
function Xi(i) {
  if (!Y(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function pr(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * N && (o += it), {
    angle: o,
    distance: n
  };
}
function gi(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function mr(i, t) {
  return (i - t + lr) % it - N;
}
function at(i) {
  return (i % it + it) % it;
}
function un(i, t, e, s) {
  const n = at(i), o = at(t), r = at(e), a = at(o - n), l = at(r - n), c = at(n - o), h = at(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function Q(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function br(i) {
  return Q(i, -32768, 32767);
}
function Bt(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function Ci(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const Ot = (i, t, e, s) => Ci(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), _r = (i, t, e) => Ci(i, e, (s) => i[s][t] >= e);
function xr(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const gn = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function yr(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), gn.forEach((e) => {
    const s = "_onData" + Ti(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = n.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function qi(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (gn.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function vr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const pn = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function mn(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, pn.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function wr(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const Ai = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", j = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, kr = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function Sr(i, t, e) {
  const s = t.length;
  let n = 0, o = s;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: d, max: f, minDefined: u, maxDefined: m } = r.getUserBounds();
    if (u) {
      if (n = Math.min(
        // @ts-expect-error Need to type _parsed
        Ot(l, h, d).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? s : Ot(t, h, r.getPixelForValue(d)).lo
      ), c) {
        const g = l.slice(0, n + 1).reverse().findIndex((p) => !F(p[a.axis]));
        n -= Math.max(0, g);
      }
      n = Q(n, 0, s - 1);
    }
    if (m) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        Ot(l, r.axis, f, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Ot(t, h, r.getPixelForValue(f), !0).hi + 1
      );
      if (c) {
        const p = l.slice(g - 1).findIndex((b) => !F(b[a.axis]));
        g += Math.max(0, p);
      }
      o = Q(g, n, s) - n;
    } else
      o = s - n;
  }
  return {
    start: n,
    count: o
  };
}
function Mr(i) {
  const { xScale: t, yScale: e, _scaleRanges: s } = i, n = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!s)
    return i._scaleRanges = n, !0;
  const o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
  return Object.assign(s, n), o;
}
const ke = (i) => i === 0 || i === 1, Ki = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * it / e)), Gi = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * it / e) + 1, oe = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * et) + 1,
  easeOutSine: (i) => Math.sin(i * et),
  easeInOutSine: (i) => -0.5 * (Math.cos(N * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => ke(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => ke(i) ? i : Ki(i, 0.075, 0.3),
  easeOutElastic: (i) => ke(i) ? i : Gi(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return ke(i) ? i : i < 0.5 ? 0.5 * Ki(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * Gi(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - oe.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? oe.easeInBounce(i * 2) * 0.5 : oe.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function Li(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Zi(i) {
  return Li(i) ? i : new he(i);
}
function ei(i) {
  return Li(i) ? i : new he(i).saturate(0.5).darken(0.1).hexString();
}
const Dr = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Pr = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Or(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: Pr
    },
    numbers: {
      type: "number",
      properties: Dr
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Tr(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Qi = /* @__PURE__ */ new Map();
function Cr(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Qi.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Qi.set(e, s)), s;
}
function bn(i, t, e) {
  return Cr(t, e).format(i);
}
const Ar = {
  values(i) {
    return B(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = Lr(i, e);
    }
    const r = fn(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), bn(i, s, l);
  }
};
function Lr(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var _n = {
  formatters: Ar
};
function Ir(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: _n.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Ct = /* @__PURE__ */ Object.create(null), pi = /* @__PURE__ */ Object.create(null);
function re(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ii(i, t, e) {
  return typeof t == "string" ? de(re(i, t), e) : de(re(i, ""), t);
}
class Fr {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => ei(n.backgroundColor), this.hoverBorderColor = (s, n) => ei(n.borderColor), this.hoverColor = (s, n) => ei(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ii(this, t, e);
  }
  get(t) {
    return re(this, t);
  }
  describe(t, e) {
    return ii(pi, t, e);
  }
  override(t, e) {
    return ii(Ct, t, e);
  }
  route(t, e, s, n) {
    const o = re(this, t), r = re(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return C(l) ? Object.assign({}, c, l) : T(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var E = /* @__PURE__ */ new Fr({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Or,
  Tr,
  Ir
]);
function Rr(i) {
  return !i || F(i.size) || F(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Ji(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function kt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function ts(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function mi(i, t, e, s) {
  xn(i, t, e, s, null);
}
function xn(i, t, e, s, n) {
  let o, r, a, l, c, h, d, f;
  const u = t.pointStyle, m = t.rotation, g = t.radius;
  let p = (m || 0) * cr;
  if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(p), i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), i.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (i.beginPath(), u) {
      default:
        n ? i.ellipse(e, s, n / 2, g, 0, 0, it) : i.arc(e, s, g, 0, it), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : g, i.moveTo(e + Math.sin(p) * h, s - Math.cos(p) * g), p += Yi, i.lineTo(e + Math.sin(p) * h, s - Math.cos(p) * g), p += Yi, i.lineTo(e + Math.sin(p) * h, s - Math.cos(p) * g), i.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(p + wt) * l, d = Math.cos(p + wt) * (n ? n / 2 - c : l), a = Math.sin(p + wt) * l, f = Math.sin(p + wt) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, p - N, p - et), i.arc(e + f, s - r, c, p - et, p), i.arc(e + d, s + a, c, p, p + et), i.arc(e - f, s + r, c, p + et, p + N), i.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * g, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        p += wt;
      case "rectRot":
        d = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + f, s - r), i.lineTo(e + d, s + a), i.lineTo(e - f, s + r), i.closePath();
        break;
      case "crossRot":
        p += wt;
      case "cross":
        d = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "star":
        d = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r), p += wt, d = Math.cos(p) * (n ? n / 2 : g), r = Math.cos(p) * g, a = Math.sin(p) * g, f = Math.sin(p) * (n ? n / 2 : g), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(p) * g, a = Math.sin(p) * g, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(p) * (n ? n / 2 : g), s + Math.sin(p) * g);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function ue(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Xe(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function qe(i) {
  i.restore();
}
function zr(i, t, e, s, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (n === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Er(i, t, e, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y);
}
function Br(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), F(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Hr(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function Wr(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function ge(i, t, e, s, n, o = {}) {
  const r = B(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, Br(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Wr(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), F(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), Hr(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function bi(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * N, N, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, N, et, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, et, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -et, !0), i.lineTo(e + r.topLeft, s);
}
const Nr = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Vr = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function jr(i, t) {
  const e = ("" + i).match(Nr);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const $r = (i) => +i || 0;
function yn(i, t) {
  const e = {}, s = C(t), n = s ? Object.keys(t) : t, o = C(i) ? s ? (r) => T(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = $r(o(r));
  return e;
}
function Yr(i) {
  return yn(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ae(i) {
  return yn(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function tt(i) {
  const t = Yr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function $(i, t) {
  i = i || {}, t = t || E.font;
  let e = T(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = T(i.style, t.style);
  s && !("" + s).match(Vr) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: T(i.family, t.family),
    lineHeight: jr(T(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: T(i.weight, t.weight),
    string: ""
  };
  return n.string = Rr(n), n;
}
function Se(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function Ur(i, t, e) {
  const { min: s, max: n } = i, o = ir(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function At(i, t) {
  return Object.assign(Object.create(i), t);
}
function Ii(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = Sn("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => Ii([
      a,
      ...i
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return wn(a, l, () => ta(l, t, i, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return is(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return is(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = n());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function Nt(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: vn(i, s),
    setContext: (o) => Nt(i, o, e, s),
    override: (o) => Nt(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return wn(o, r, () => qr(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function vn(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: xt(e) ? e : () => e,
    isIndexable: xt(s) ? s : () => s
  };
}
const Xr = (i, t) => i ? i + Ti(t) : t, Fi = (i, t) => C(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function wn(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function qr(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return xt(a) && r.isScriptable(t) && (a = Kr(t, a, i, e)), B(a) && a.length && (a = Gr(t, a, i, r.isIndexable)), Fi(t, a) && (a = Nt(a, n, o && o[t], r)), a;
}
function Kr(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), Fi(i, l) && (l = Ri(n._scopes, n, i, l)), l;
}
function Gr(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (C(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Ri(c, n, i, h);
      t.push(Nt(d, o, r && r[i], a));
    }
  }
  return t;
}
function kn(i, t, e) {
  return xt(i) ? i(t, e) : i;
}
const Zr = (i, t) => i === !0 ? t : typeof i == "string" ? He(t, i) : void 0;
function Qr(i, t, e, s, n) {
  for (const o of t) {
    const r = Zr(e, o);
    if (r) {
      i.add(r);
      const a = kn(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function Ri(i, t, e, s) {
  const n = t._rootScopes, o = kn(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = es(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = es(a, r, o, l, s), l === null) ? !1 : Ii(Array.from(a), [
    ""
  ], n, o, () => Jr(t, e, s));
}
function es(i, t, e, s, n) {
  for (; e; )
    e = Qr(i, t, e, s, n);
  return e;
}
function Jr(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return B(n) && C(e) ? e : n || {};
}
function ta(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = Sn(Xr(o, i), e), typeof n < "u")
      return Fi(i, n) ? Ri(e, s, i, n) : n;
}
function Sn(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function is(i) {
  let t = i._keys;
  return t || (t = i._keys = ea(i._scopes)), t;
}
function ea(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
const ia = Number.EPSILON || 1e-14, Vt = (i, t) => t < i.length && !i[t].skip && i[t], Mn = (i) => i === "x" ? "y" : "x";
function sa(i, t, e, s) {
  const n = i.skip ? t : i, o = t, r = e.skip ? t : e, a = gi(o, n), l = gi(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = s * c, f = s * h;
  return {
    previous: {
      x: o.x - d * (r.x - n.x),
      y: o.y - d * (r.y - n.y)
    },
    next: {
      x: o.x + f * (r.x - n.x),
      y: o.y + f * (r.y - n.y)
    }
  };
}
function na(i, t, e) {
  const s = i.length;
  let n, o, r, a, l, c = Vt(i, 0);
  for (let h = 0; h < s - 1; ++h)
    if (l = c, c = Vt(i, h + 1), !(!l || !c)) {
      if (ne(t[h], 0, ia)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      n = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(n, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = n * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function oa(i, t, e = "x") {
  const s = Mn(e), n = i.length;
  let o, r, a, l = Vt(i, 0);
  for (let c = 0; c < n; ++c) {
    if (r = a, a = l, l = Vt(i, c + 1), !a)
      continue;
    const h = a[e], d = a[s];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${s}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${s}`] = d + o * t[c]);
  }
}
function ra(i, t = "x") {
  const e = Mn(t), s = i.length, n = Array(s).fill(0), o = Array(s);
  let r, a, l, c = Vt(i, 0);
  for (r = 0; r < s; ++r)
    if (a = l, l = c, c = Vt(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        n[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? Wt(n[r - 1]) !== Wt(n[r]) ? 0 : (n[r - 1] + n[r]) / 2 : n[r - 1] : n[r];
    }
  na(i, n, o), oa(i, o, t);
}
function Me(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function aa(i, t) {
  let e, s, n, o, r, a = ue(i[0], t);
  for (e = 0, s = i.length; e < s; ++e)
    r = o, o = a, a = e < s - 1 && ue(i[e + 1], t), o && (n = i[e], r && (n.cp1x = Me(n.cp1x, t.left, t.right), n.cp1y = Me(n.cp1y, t.top, t.bottom)), a && (n.cp2x = Me(n.cp2x, t.left, t.right), n.cp2y = Me(n.cp2y, t.top, t.bottom)));
}
function la(i, t, e, s, n) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    ra(i, n);
  else {
    let c = s ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = sa(c, a, i[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && aa(i, e);
}
function zi() {
  return typeof window < "u" && typeof document < "u";
}
function Ei(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ve(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const Ke = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function ca(i, t) {
  return Ke(i).getPropertyValue(t);
}
const ha = [
  "top",
  "right",
  "bottom",
  "left"
];
function Tt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = ha[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const da = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function fa(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (da(n, o, i.target))
    a = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function Mt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = Ke(e), o = n.boxSizing === "border-box", r = Tt(n, "padding"), a = Tt(n, "border", "width"), { x: l, y: c, box: h } = fa(i, e), d = r.left + (h && a.left), f = r.top + (h && a.top);
  let { width: u, height: m } = t;
  return o && (u -= r.width + a.width, m -= r.height + a.height), {
    x: Math.round((l - d) / u * e.width / s),
    y: Math.round((c - f) / m * e.height / s)
  };
}
function ua(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && Ei(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Ke(o), l = Tt(a, "border", "width"), c = Tt(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = Ve(a.maxWidth, o, "clientWidth"), n = Ve(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || Ne,
    maxHeight: n || Ne
  };
}
const pt = (i) => Math.round(i * 10) / 10;
function ga(i, t, e, s) {
  const n = Ke(i), o = Tt(n, "margin"), r = Ve(n.maxWidth, i, "clientWidth") || Ne, a = Ve(n.maxHeight, i, "clientHeight") || Ne, l = ua(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const f = Tt(n, "border", "width"), u = Tt(n, "padding");
    c -= u.width + f.width, h -= u.height + f.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = pt(Math.min(c, r, l.maxWidth)), h = pt(Math.min(h, a, l.maxHeight)), c && !h && (h = pt(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = pt(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function ss(i, t, e) {
  const s = t || 1, n = pt(i.height * s), o = pt(i.width * s);
  i.height = pt(i.height), i.width = pt(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const pa = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    zi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function ns(i, t) {
  const e = ca(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Dt(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function ma(i, t, e, s) {
  return {
    x: i.x + e * (t.x - i.x),
    y: s === "middle" ? e < 0.5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function ba(i, t, e, s) {
  const n = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Dt(i, n, e), a = Dt(n, o, e), l = Dt(o, t, e), c = Dt(r, a, e), h = Dt(a, l, e);
  return Dt(c, h, e);
}
const _a = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, xa = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function Ht(i, t, e) {
  return i ? _a(t, e) : xa();
}
function Dn(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function Pn(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function On(i) {
  return i === "angle" ? {
    between: un,
    compare: mr,
    normalize: at
  } : {
    between: Bt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function os({ start: i, end: t, count: e, loop: s, style: n }) {
  return {
    start: i % e,
    end: t % e,
    loop: s && (t - i + 1) % e === 0,
    style: n
  };
}
function ya(i, t, e) {
  const { property: s, start: n, end: o } = e, { between: r, normalize: a } = On(s), l = t.length;
  let { start: c, end: h, loop: d } = i, f, u;
  if (d) {
    for (c += l, h += l, f = 0, u = l; f < u && r(a(t[c % l][s]), n, o); ++f)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: i.style
  };
}
function Tn(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: s, start: n, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = On(s), { start: h, end: d, loop: f, style: u } = ya(i, t, e), m = [];
  let g = !1, p = null, b, x, y;
  const v = () => l(n, y, b) && a(n, y) !== 0, _ = () => a(o, b) === 0 || l(o, y, b), S = () => g || v(), k = () => !g || _();
  for (let w = h, M = h; w <= d; ++w)
    x = t[w % r], !x.skip && (b = c(x[s]), b !== y && (g = l(b, n, o), p === null && S() && (p = a(b, n) === 0 ? w : M), p !== null && k() && (m.push(os({
      start: p,
      end: w,
      loop: f,
      count: r,
      style: u
    })), p = null), M = w, y = b));
  return p !== null && m.push(os({
    start: p,
    end: d,
    loop: f,
    count: r,
    style: u
  })), m;
}
function Cn(i, t) {
  const e = [], s = i.segments;
  for (let n = 0; n < s.length; n++) {
    const o = Tn(s[n], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function va(i, t, e, s) {
  let n = 0, o = t - 1;
  if (e && !s)
    for (; n < t && !i[n].skip; )
      n++;
  for (; n < t && i[n].skip; )
    n++;
  for (n %= t, e && (o += n); o > n && i[o % t].skip; )
    o--;
  return o %= t, {
    start: n,
    end: o
  };
}
function wa(i, t, e, s) {
  const n = i.length, o = [];
  let r = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % n];
    c.skip || c.stop ? a.skip || (s = !1, o.push({
      start: t % n,
      end: (l - 1) % n,
      loop: s
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % n,
    end: r % n,
    loop: s
  }), o;
}
function ka(i, t) {
  const e = i.points, s = i.options.spanGaps, n = e.length;
  if (!n)
    return [];
  const o = !!i._loop, { start: r, end: a } = va(e, n, o, s);
  if (s === !0)
    return rs(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + n : a, c = !!i._fullLoop && r === 0 && a === n - 1;
  return rs(i, wa(e, r, l, c), e, t);
}
function rs(i, t, e, s) {
  return !s || !s.setContext || !e ? t : Sa(i, t, e, s);
}
function Sa(i, t, e, s) {
  const n = i._chart.getContext(), o = as(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, d = t[0].start, f = d;
  function u(m, g, p, b) {
    const x = a ? -1 : 1;
    if (m !== g) {
      for (m += l; e[m % l].skip; )
        m -= x;
      for (; e[g % l].skip; )
        g += x;
      m % l !== g % l && (c.push({
        start: m % l,
        end: g % l,
        loop: p,
        style: b
      }), h = b, d = g % l);
    }
  }
  for (const m of t) {
    d = a ? d : m.start;
    let g = e[d % l], p;
    for (f = d + 1; f <= m.end; f++) {
      const b = e[f % l];
      p = as(s.setContext(At(n, {
        type: "segment",
        p0: g,
        p1: b,
        p0DataIndex: (f - 1) % l,
        p1DataIndex: f % l,
        datasetIndex: r
      }))), Ma(p, h) && u(d, f - 1, m.loop, h), g = b, h = p;
    }
    d < f - 1 && u(d, f - 1, m.loop, h);
  }
  return c;
}
function as(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function Ma(i, t) {
  if (!t)
    return !1;
  const e = [], s = function(n, o) {
    return Li(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, s) !== JSON.stringify(t, s);
}
function De(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Da(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: De(e, t, "left"),
    right: De(e, t, "right"),
    top: De(s, t, "top"),
    bottom: De(s, t, "bottom")
  } : t;
}
function An(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const s = Da(t, i.chartArea);
  return {
    left: e.left === !1 ? 0 : s.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? i.width : s.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : s.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? i.height : s.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class Pa {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(s - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = pn.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var ct = /* @__PURE__ */ new Pa();
const ls = "transparent", Oa = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Zi(i || ls), n = s.valid && Zi(t || ls);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Ta {
  constructor(t, e, s, n) {
    const o = e[s];
    n = Se([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = Se([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || Oa[t.type || typeof r], this._easing = oe[t.easing] || oe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Se([
        t.to,
        e,
        n,
        t.from
      ]), this._from = Se([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class Ln {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!C(t))
      return;
    const e = Object.keys(E.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!C(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (B(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = Aa(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Ca(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const f = s.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, h, a);
          continue;
        } else
          d.cancel();
      if (!f || !f.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new Ta(f, t, c, h), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return ct.add(this._chart, s), !0;
  }
}
function Ca(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Aa(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function cs(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function La(i, t, e) {
  if (e === !1)
    return !1;
  const s = cs(i, e), n = cs(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Ia(i) {
  let t, e, s, n;
  return C(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function In(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function hs(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let h = !1;
  for (r = 0, a = n.length; r < a; ++r) {
    if (l = +n[r], l === e) {
      if (h = !0, s.all)
        continue;
      break;
    }
    c = i.values[l], Y(c) && (o || t === 0 || Wt(t) === Wt(c)) && (t += c);
  }
  return !h && !s.all ? 0 : t;
}
function Fa(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function si(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ra(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function za(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Ea(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function ds(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function fs(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = Ra(o, r, s), d = t.length;
  let f;
  for (let u = 0; u < d; ++u) {
    const m = t[u], { [l]: g, [c]: p } = m, b = m._stacks || (m._stacks = {});
    f = b[c] = Ea(n, h, g), f[a] = p, f._top = ds(f, r, !0, s.type), f._bottom = ds(f, r, !1, s.type);
    const x = f._visualValues || (f._visualValues = {});
    x[a] = p;
  }
}
function ni(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function Ba(i, t) {
  return At(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Ha(i, t, e) {
  return At(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Kt(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e];
    }
  }
}
const oi = (i) => i === "reset" || i === "none", us = (i, t) => t ? i : Object.assign({}, i), Wa = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: In(e, !0),
  values: null
};
class le {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = si(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Kt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, f, u, m) => d === "x" ? f : d === "r" ? m : u, o = e.xAxisID = T(s.xAxisID, ni(t, "x")), r = e.yAxisID = T(s.yAxisID, ni(t, "y")), a = e.rAxisID = T(s.rAxisID, ni(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && qi(this._data, this), t._stacked && Kt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (C(e)) {
      const n = this._cachedMeta;
      this._data = Fa(e, n);
    } else if (s !== e) {
      if (s) {
        qi(s, this);
        const n = this._cachedMeta;
        Kt(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && yr(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = si(e.vScale, e), e.stack !== s.stack && (n = !0, Kt(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && (fs(this, e._parsed), e._stacked = si(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, f;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, f = n;
    else {
      B(n[t]) ? f = this.parseArrayData(s, n, t, e) : C(n[t]) ? f = this.parseObjectData(s, n, t, e) : f = this.parsePrimitiveData(s, n, t, e);
      const u = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = f[h], l && (u() && (l = !1), c = d);
      s._sorted = l;
    }
    r && fs(this, f);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let f, u, m;
    for (f = 0, u = n; f < u; ++f)
      m = f + s, d[f] = {
        [a]: h || o.parse(c[m], m),
        [l]: r.parse(e[m], m)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, f, u;
    for (h = 0, d = n; h < d; ++h)
      f = h + s, u = e[f], c[h] = {
        x: o.parse(He(u, a), f),
        y: r.parse(He(u, l), f)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: In(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return hs(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = hs(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Wa(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = za(a);
    let f, u;
    function m() {
      u = n[f];
      const g = u[a.axis];
      return !Y(u[t.axis]) || h > g || d < g;
    }
    for (f = 0; f < r && !(!m() && (this.updateRangeFromParsed(c, t, u, l), o)); ++f)
      ;
    if (o) {
      for (f = r - 1; f >= 0; --f)
        if (!m()) {
          this.updateRangeFromParsed(c, t, u, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], Y(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Ia(T(this.options.clip, La(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Ha(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Ba(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && We(s);
    if (a)
      return us(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], f = c.getOptionScopes(this.getDataset(), h), u = Object.keys(E.elements[t]), m = () => this.getContext(s, n, e), g = c.resolveNamedOptions(f, u, m, d);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(us(g, l))), g;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), f = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(f, this.getContext(t, s, e));
    }
    const c = new Ln(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || oi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    oi(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !oi(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, r = Math.min(o, n);
    r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && Kt(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
D(le, "defaults", {}), D(le, "datasetElementType", null), D(le, "dataElementType", null);
class Ie extends le {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: s, data: n = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Sr(e, n, r);
    this._drawStart = a, this._drawCount = l, Mr(e) && (a = 0, l = n.length), s._chart = this.chart, s._datasetIndex = this.index, s._decimated = !!o._decimated, s.points = n;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(s, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(n, a, l, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, n), f = r.axis, u = a.axis, { spanGaps: m, segment: g } = this.options, p = fe(m) ? m : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || n === "none", x = e + s, y = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let _ = 0; _ < y; ++_) {
      const S = t[_], k = b ? S : {};
      if (_ < e || _ >= x) {
        k.skip = !0;
        continue;
      }
      const w = this.getParsed(_), M = F(w[u]), A = k[f] = r.getPixelForValue(w[f], _), P = k[u] = o || M ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, w, l) : w[u], _);
      k.skip = isNaN(A) || isNaN(P) || M, k.stop = _ > 0 && Math.abs(w[f] - v[f]) > p, g && (k.parsed = w, k.raw = c.data[_]), d && (k.options = h || this.resolveDataElementOptions(_, S.active ? "active" : n)), b || this.updateElement(S, _, k, n), v = w;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, s = e.options && e.options.borderWidth || 0, n = t.data || [];
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
D(Ie, "id", "line"), D(Ie, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), D(Ie, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
function St() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Bi {
  constructor(t) {
    D(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Bi.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return St();
  }
  parse() {
    return St();
  }
  format() {
    return St();
  }
  add() {
    return St();
  }
  diff() {
    return St();
  }
  startOf() {
    return St();
  }
  endOf() {
    return St();
  }
}
var Na = {
  _date: Bi
};
function Va(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? _r : Ot;
    if (s) {
      if (n._sharedOptions) {
        const h = o[0], d = typeof h.getRange == "function" && h.getRange(t);
        if (d) {
          const f = c(o, t, e - d), u = c(o, t, e + d);
          return {
            lo: f.lo,
            hi: u.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: d } = n._cachedMeta, { _parsed: f } = i, u = f.slice(0, h.lo + 1).reverse().findIndex((g) => !F(g[d.axis]));
        h.lo -= Math.max(0, u);
        const m = f.slice(h.hi).findIndex((g) => !F(g[d.axis]));
        h.hi += Math.max(0, m);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Ge(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: f } = Va(o[a], t, r, n);
    for (let u = d; u <= f; ++u) {
      const m = h[u];
      m.skip || s(m, c, u);
    }
  }
}
function ja(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ri(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Ge(i, e, t, function(a, l, c) {
    !n && !ue(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function $a(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = pr(r, {
      x: t.x,
      y: t.y
    });
    un(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Ge(i, e, t, o), n;
}
function Ya(i, t, e, s, n, o) {
  let r = [];
  const a = ja(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, f) {
    const u = h.inRange(t.x, t.y, n);
    if (s && !u)
      return;
    const m = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(m)) && !u)
      return;
    const p = a(t, m);
    p < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: f
      }
    ], l = p) : p === l && r.push({
      element: h,
      datasetIndex: d,
      index: f
    });
  }
  return Ge(i, e, t, c), r;
}
function ai(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? $a(i, t, e, n) : Ya(i, t, e, s, n, o);
}
function gs(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Ge(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var Ua = {
  modes: {
    index(i, t, e, s) {
      const n = Mt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ri(i, n, o, s, r) : ai(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = Mt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? ri(i, n, o, s, r) : ai(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = Mt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ri(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = Mt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ai(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = Mt(t, i);
      return gs(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = Mt(t, i);
      return gs(i, n, "y", e.intersect, s);
    }
  }
};
const Fn = [
  "left",
  "top",
  "right",
  "bottom"
];
function Gt(i, t) {
  return i.filter((e) => e.pos === t);
}
function ps(i, t) {
  return i.filter((e) => Fn.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Zt(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function Xa(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function qa(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !Fn.includes(n))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Ka(i, t) {
  const e = qa(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function Ga(i) {
  const t = Xa(i), e = Zt(t.filter((c) => c.box.fullSize), !0), s = Zt(Gt(t, "left"), !0), n = Zt(Gt(t, "right")), o = Zt(Gt(t, "top"), !0), r = Zt(Gt(t, "bottom")), a = ps(t, "x"), l = ps(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: Gt(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function ms(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function Rn(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Za(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!C(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && Rn(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - ms(r, i, "left", "right")), l = Math.max(0, t.outerHeight - ms(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Qa(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function Ja(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return s(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function ee(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Ja(a.horizontal, t));
    const { same: d, other: f } = Za(t, e, a, s);
    c |= d && n.length, h = h || f, l.fullSize || n.push(a);
  }
  return c && ee(n, t, e, s) || h;
}
function Pe(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function bs(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, f = c.size || l.height;
      We(c.start) && (r = c.start), l.fullSize ? Pe(l, n.left, r, e.outerWidth - n.right - n.left, f) : Pe(l, t.left + c.placed, r, d, f), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, f = c.size || l.width;
      We(c.start) && (o = c.start), l.fullSize ? Pe(l, o, n.top, f, e.outerHeight - n.bottom - n.top) : Pe(l, o, t.top + c.placed, f, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var J = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = tt(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = Ga(i.boxes), l = a.vertical, c = a.horizontal;
    I(i.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const h = l.reduce((g, p) => p.box.options && p.box.options.display === !1 ? g : g + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), f = Object.assign({}, n);
    Rn(f, tt(s));
    const u = Object.assign({
      maxPadding: f,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), m = Ka(l.concat(c), d);
    ee(a.fullSize, u, d, m), ee(l, u, d, m), ee(c, u, d, m) && ee(l, u, d, m), Qa(u), bs(a.leftAndTop, u, d, m), u.x += u.w, u.y += u.h, bs(a.rightAndBottom, u, d, m), i.chartArea = {
      left: u.left,
      top: u.top,
      right: u.left + u.w,
      bottom: u.top + u.h,
      height: u.h,
      width: u.w
    }, I(a.chartArea, (g) => {
      const p = g.box;
      Object.assign(p, i.chartArea), p.update(u.w, u.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class zn {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class tl extends zn {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Fe = "$chartjs", el = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, _s = (i) => i === null || i === "";
function il(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[Fe] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", _s(n)) {
    const o = ns(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (_s(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = ns(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const En = pa ? {
  passive: !0
} : !1;
function sl(i, t, e) {
  i && i.addEventListener(t, e, En);
}
function nl(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, En);
}
function ol(i, t) {
  const e = el[i.type] || i.type, { x: s, y: n } = Mt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function je(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function rl(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || je(a.addedNodes, s), r = r && !je(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function al(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || je(a.removedNodes, s), r = r && !je(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const pe = /* @__PURE__ */ new Map();
let xs = 0;
function Bn() {
  const i = window.devicePixelRatio;
  i !== xs && (xs = i, pe.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function ll(i, t) {
  pe.size || window.addEventListener("resize", Bn), pe.set(i, t);
}
function cl(i) {
  pe.delete(i), pe.size || window.removeEventListener("resize", Bn);
}
function hl(i, t, e) {
  const s = i.canvas, n = s && Ei(s);
  if (!n)
    return;
  const o = mn((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), ll(i, o), r;
}
function li(i, t, e) {
  e && e.disconnect(), t === "resize" && cl(i);
}
function dl(i, t, e) {
  const s = i.canvas, n = mn((o) => {
    i.ctx !== null && e(ol(o, i));
  }, i);
  return sl(s, t, n), n;
}
class fl extends zn {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (il(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Fe])
      return !1;
    const s = e[Fe].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      F(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[Fe], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: rl,
      detach: al,
      resize: hl
    }[e] || dl;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: li,
      detach: li,
      resize: li
    }[e] || nl)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return ga(t, e, s, n);
  }
  isAttached(t) {
    const e = t && Ei(t);
    return !!(e && e.isConnected);
  }
}
function ul(i) {
  return !zi() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? tl : fl;
}
class ft {
  constructor() {
    D(this, "x");
    D(this, "y");
    D(this, "active", !1);
    D(this, "options");
    D(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return fe(this.x) && fe(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
D(ft, "defaults", {}), D(ft, "defaultRoutes");
function gl(i, t) {
  const e = i.options.ticks, s = pl(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? bl(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return _l(t, c, o, r / n), c;
  const h = ml(o, t, n);
  if (r > 0) {
    let d, f;
    const u = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Oe(t, c, h, F(u) ? 0 : a - u, a), d = 0, f = r - 1; d < f; d++)
      Oe(t, c, h, o[d], o[d + 1]);
    return Oe(t, c, h, l, F(u) ? t.length : l + u), c;
  }
  return Oe(t, c, h), c;
}
function pl(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function ml(i, t, e) {
  const s = xl(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = hr(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function bl(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function _l(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Oe(i, t, e, s, n) {
  const o = T(s, 0), r = Math.min(T(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function xl(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const yl = (i) => i === "left" ? "right" : i === "right" ? "left" : i, ys = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, vs = (i, t) => Math.min(t || i, i);
function ws(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function vl(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function wl(i, t) {
  I(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function Qt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function ks(i, t) {
  if (!i.display)
    return 0;
  const e = $(i.font, t), s = tt(i.padding);
  return (B(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function kl(i, t) {
  return At(i, {
    scale: t,
    type: "scale"
  });
}
function Sl(i, t, e) {
  return At(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Ml(i, t, e) {
  let s = Ai(i);
  return (e && t !== "right" || !e && t === "right") && (s = yl(s)), s;
}
function Dl(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, f, u, m;
  const g = r - n, p = a - o;
  if (i.isHorizontal()) {
    if (u = j(s, o, a), C(e)) {
      const b = Object.keys(e)[0], x = e[b];
      m = h[b].getPixelForValue(x) + g - t;
    } else e === "center" ? m = (c.bottom + c.top) / 2 + g - t : m = ys(i, e, t);
    f = a - o;
  } else {
    if (C(e)) {
      const b = Object.keys(e)[0], x = e[b];
      u = h[b].getPixelForValue(x) - p + t;
    } else e === "center" ? u = (c.left + c.right) / 2 - p + t : u = ys(i, e, t);
    m = j(s, r, n), d = e === "left" ? -et : et;
  }
  return {
    titleX: u,
    titleY: m,
    maxWidth: f,
    rotation: d
  };
}
class Ut extends ft {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = nt(t, Number.POSITIVE_INFINITY), e = nt(e, Number.NEGATIVE_INFINITY), s = nt(s, Number.POSITIVE_INFINITY), n = nt(n, Number.NEGATIVE_INFINITY), {
      min: nt(t, s),
      max: nt(e, n),
      minDefined: Y(t),
      maxDefined: Y(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: nt(e, nt(s, e)),
      max: nt(s, nt(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    R(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ur(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? ws(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = gl(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    R(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    R(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    R(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), R(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    R(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = R(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    R(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    R(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = vs(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, f = h.highest.height, u = Q(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : u / (s - 1), d + 6 > a && (a = u / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - Qt(t.grid) - e.padding - ks(t.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), r = gr(Math.min(Math.asin(Q((h.highest.height + 6) / a, -1, 1)), Math.asin(Q(l / c, -1, 1)) - Math.asin(Q(f / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    R(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    R(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = ks(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Qt(o) + l) : (t.height = this.maxHeight, t.width = Qt(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: f } = this._getLabelSizes(), u = s.padding * 2, m = Pt(this.labelRotation), g = Math.cos(m), p = Math.sin(m);
        if (a) {
          const b = s.mirror ? 0 : p * d.width + g * f.height;
          t.height = Math.min(this.maxHeight, t.height + b + u);
        } else {
          const b = s.mirror ? 0 : g * d.width + p * f.height;
          t.width = Math.min(this.maxWidth, t.width + b + u);
        }
        this._calculatePadding(c, h, p, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, u = 0;
      l ? c ? (f = n * t.width, u = s * e.height) : (f = s * t.height, u = n * e.width) : o === "start" ? u = e.width : o === "end" ? f = t.width : o !== "inner" && (f = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((f - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((u - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    R(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      F(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = ws(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / vs(e, s));
    let c = 0, h = 0, d, f, u, m, g, p, b, x, y, v, _;
    for (d = 0; d < e; d += l) {
      if (m = t[d].label, g = this._resolveTickFontOptions(d), n.font = p = g.string, b = o[p] = o[p] || {
        data: {},
        gc: []
      }, x = g.lineHeight, y = v = 0, !F(m) && !B(m))
        y = Ji(n, b.data, b.gc, y, m), v = x;
      else if (B(m))
        for (f = 0, u = m.length; f < u; ++f)
          _ = m[f], !F(_) && !B(_) && (y = Ji(n, b.data, b.gc, y, _), v += x);
      r.push(y), a.push(v), c = Math.max(y, c), h = Math.max(v, h);
    }
    wl(o, e);
    const S = r.indexOf(c), k = a.indexOf(h), w = (M) => ({
      width: r[M] || 0,
      height: a[M] || 0
    });
    return {
      first: w(0),
      last: w(e - 1),
      widest: w(S),
      highest: w(k),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return br(this._alignToPixels ? kt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = Sl(this.getContext(), t, s));
    }
    return this.$context || (this.$context = kl(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Pt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = Qt(o), u = [], m = a.setContext(this.getContext()), g = m.display ? m.width : 0, p = g / 2, b = function(V) {
      return kt(s, V, g);
    };
    let x, y, v, _, S, k, w, M, A, P, L, U;
    if (r === "top")
      x = b(this.bottom), k = this.bottom - f, M = x - p, P = b(t.top) + p, U = t.bottom;
    else if (r === "bottom")
      x = b(this.top), P = t.top, U = b(t.bottom) - p, k = x + p, M = this.top + f;
    else if (r === "left")
      x = b(this.right), S = this.right - f, w = x - p, A = b(t.left) + p, L = t.right;
    else if (r === "right")
      x = b(this.left), A = t.left, L = b(t.right) - p, S = x + p, w = this.left + f;
    else if (e === "x") {
      if (r === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (C(r)) {
        const V = Object.keys(r)[0], G = r[V];
        x = b(this.chart.scales[V].getPixelForValue(G));
      }
      P = t.top, U = t.bottom, k = x + p, M = k + f;
    } else if (e === "y") {
      if (r === "center")
        x = b((t.left + t.right) / 2);
      else if (C(r)) {
        const V = Object.keys(r)[0], G = r[V];
        x = b(this.chart.scales[V].getPixelForValue(G));
      }
      S = x - p, w = S - f, A = t.left, L = t.right;
    }
    const st = T(n.ticks.maxTicksLimit, d), z = Math.max(1, Math.ceil(d / st));
    for (y = 0; y < d; y += z) {
      const V = this.getContext(y), G = o.setContext(V), be = a.setContext(V), _e = G.lineWidth, Lt = G.color, xe = be.dash || [], It = be.dashOffset, Xt = G.tickWidth, yt = G.tickColor, qt = G.tickBorderDash || [], vt = G.tickBorderDashOffset;
      v = vl(this, y, l), v !== void 0 && (_ = kt(s, v, _e), c ? S = w = A = L = _ : k = M = P = U = _, u.push({
        tx1: S,
        ty1: k,
        tx2: w,
        ty2: M,
        x1: A,
        y1: P,
        x2: L,
        y2: U,
        width: _e,
        color: Lt,
        borderDash: xe,
        borderDashOffset: It,
        tickWidth: Xt,
        tickColor: yt,
        tickBorderDash: qt,
        tickBorderDashOffset: vt
      }));
    }
    return this._ticksLength = d, this._borderValue = x, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, f = Qt(s.grid), u = f + h, m = d ? -h : u, g = -Pt(this.labelRotation), p = [];
    let b, x, y, v, _, S, k, w, M, A, P, L, U = "middle";
    if (n === "top")
      S = this.bottom - m, k = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      S = this.top + m, k = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const z = this._getYAxisLabelAlignment(f);
      k = z.textAlign, _ = z.x;
    } else if (n === "right") {
      const z = this._getYAxisLabelAlignment(f);
      k = z.textAlign, _ = z.x;
    } else if (e === "x") {
      if (n === "center")
        S = (t.top + t.bottom) / 2 + u;
      else if (C(n)) {
        const z = Object.keys(n)[0], V = n[z];
        S = this.chart.scales[z].getPixelForValue(V) + u;
      }
      k = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        _ = (t.left + t.right) / 2 - u;
      else if (C(n)) {
        const z = Object.keys(n)[0], V = n[z];
        _ = this.chart.scales[z].getPixelForValue(V);
      }
      k = this._getYAxisLabelAlignment(f).textAlign;
    }
    e === "y" && (l === "start" ? U = "top" : l === "end" && (U = "bottom"));
    const st = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      y = a[b], v = y.label;
      const z = o.setContext(this.getContext(b));
      w = this.getPixelForTick(b) + o.labelOffset, M = this._resolveTickFontOptions(b), A = M.lineHeight, P = B(v) ? v.length : 1;
      const V = P / 2, G = z.color, be = z.textStrokeColor, _e = z.textStrokeWidth;
      let Lt = k;
      r ? (_ = w, k === "inner" && (b === x - 1 ? Lt = this.options.reverse ? "left" : "right" : b === 0 ? Lt = this.options.reverse ? "right" : "left" : Lt = "center"), n === "top" ? c === "near" || g !== 0 ? L = -P * A + A / 2 : c === "center" ? L = -st.highest.height / 2 - V * A + A : L = -st.highest.height + A / 2 : c === "near" || g !== 0 ? L = A / 2 : c === "center" ? L = st.highest.height / 2 - V * A : L = st.highest.height - P * A, d && (L *= -1), g !== 0 && !z.showLabelBackdrop && (_ += A / 2 * Math.sin(g))) : (S = w, L = (1 - P) * A / 2);
      let xe;
      if (z.showLabelBackdrop) {
        const It = tt(z.backdropPadding), Xt = st.heights[b], yt = st.widths[b];
        let qt = L - It.top, vt = 0 - It.left;
        switch (U) {
          case "middle":
            qt -= Xt / 2;
            break;
          case "bottom":
            qt -= Xt;
            break;
        }
        switch (k) {
          case "center":
            vt -= yt / 2;
            break;
          case "right":
            vt -= yt;
            break;
          case "inner":
            b === x - 1 ? vt -= yt : b > 0 && (vt -= yt / 2);
            break;
        }
        xe = {
          left: vt,
          top: qt,
          width: yt + It.width,
          height: Xt + It.height,
          color: z.backdropColor
        };
      }
      p.push({
        label: v,
        font: M,
        textOffset: L,
        options: {
          rotation: g,
          color: G,
          strokeColor: be,
          strokeWidth: _e,
          textAlign: Lt,
          textBaseline: U,
          translation: [
            _,
            S
          ],
          backdrop: xe
        }
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Pt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, f;
    this.isHorizontal() ? (c = kt(t, this.left, r) - r / 2, h = kt(t, this.right, a) + a / 2, d = f = l) : (d = kt(t, this.top, r) - r / 2, f = kt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, f), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && Xe(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      ge(s, c, 0, h, l, a);
    }
    n && qe(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = $(s.font), r = tt(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || C(e) ? (l += r.bottom, B(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: f } = Dl(this, l, e, a);
    ge(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: f,
      textAlign: Ml(a, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = T(t.grid && t.grid.z, -1), n = T(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Ut.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return $(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Te {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Tl(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, Pl(t, r, s), this.override && E.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in E[n] && (delete E[n][s], this.override && delete Ct[s]);
  }
}
function Pl(i, t, e) {
  const s = de(/* @__PURE__ */ Object.create(null), [
    e ? E.get(e) : {},
    E.get(t),
    i.defaults
  ]);
  E.set(t, s), i.defaultRoutes && Ol(t, i.defaultRoutes), i.descriptors && E.describe(t, i.descriptors);
}
function Ol(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    E.route(o, n, l, a);
  });
}
function Tl(i) {
  return "id" in i && "defaults" in i;
}
class Cl {
  constructor() {
    this.controllers = new Te(le, "datasets", !0), this.elements = new Te(ft, "elements"), this.plugins = new Te(Object, "plugins"), this.scales = new Te(Ut, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : I(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Ti(t);
    R(s["before" + n], [], s), e[t](s), R(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var rt = /* @__PURE__ */ new Cl();
class Al {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, s, n) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), r;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [
        e,
        n,
        o.options
      ];
      if (R(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    F(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = T(s.options && s.options.plugins, {}), o = Ll(s);
    return n === !1 && !e ? [] : Fl(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function Ll(i) {
  const t = {}, e = [], s = Object.keys(rt.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(rt.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function Il(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Fl(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = Il(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: Rl(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Rl(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function _i(i, t) {
  const e = E.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function zl(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function El(i, t) {
  return i === t ? "_index_" : "_value_";
}
function Ss(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function Bl(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function xi(i, ...t) {
  if (Ss(i))
    return i;
  for (const e of t) {
    const s = e.axis || Bl(e.position) || i.length > 1 && Ss(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function Ms(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function Hl(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return Ms(i, "x", e[0]) || Ms(i, "y", e[0]);
  }
  return {};
}
function Wl(i, t) {
  const e = Ct[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = _i(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!C(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = xi(r, a, Hl(r, i), E.scales[a.type]), c = El(l, n), h = e.scales || {};
    o[r] = se(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || _i(a, t), h = (Ct[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const f = zl(d, l), u = r[f + "AxisID"] || f;
      o[u] = o[u] || /* @__PURE__ */ Object.create(null), se(o[u], [
        {
          axis: f
        },
        s[u],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    se(a, [
      E.scales[a.type],
      E.scale
    ]);
  }), o;
}
function Hn(i) {
  const t = i.options || (i.options = {});
  t.plugins = T(t.plugins, {}), t.scales = Wl(i, t);
}
function Wn(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Nl(i) {
  return i = i || {}, i.data = Wn(i.data), Hn(i), i;
}
const Ds = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Set();
function Ce(i, t) {
  let e = Ds.get(i);
  return e || (e = t(), Ds.set(i, e), Nn.add(e)), e;
}
const Jt = (i, t, e) => {
  const s = He(t, e);
  s !== void 0 && i.add(s);
};
class Vl {
  constructor(t) {
    this._config = Nl(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Wn(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Hn(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Ce(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Ce(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Ce(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return Ce(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Jt(l, t, d))), h.forEach((d) => Jt(l, n, d)), h.forEach((d) => Jt(l, Ct[o] || {}, d)), h.forEach((d) => Jt(l, E, d)), h.forEach((d) => Jt(l, pi, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Nn.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Ct[e] || {},
      E.datasets[e] || {},
      {
        type: e
      },
      E,
      pi
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Ps(this._resolverCache, t, n);
    let l = r;
    if ($l(r, e)) {
      o.$shared = !1, s = xt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = Nt(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = Ps(this._resolverCache, t, s);
    return C(e) ? Nt(o, e, void 0, n) : o;
  }
}
function Ps(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: Ii(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const jl = (i) => C(i) && Object.getOwnPropertyNames(i).some((t) => xt(i[t]));
function $l(i, t) {
  const { isScriptable: e, isIndexable: s } = vn(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (xt(a) || jl(a)) || r && B(a))
      return !0;
  }
  return !1;
}
var Yl = "4.5.1";
const Ul = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Os(i, t) {
  return i === "top" || i === "bottom" || Ul.indexOf(i) === -1 && t === "x";
}
function Ts(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function Cs(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), R(e && e.onComplete, [
    i
  ], t);
}
function Xl(i) {
  const t = i.chart, e = t.options.animation;
  R(e && e.onProgress, [
    i
  ], t);
}
function Vn(i) {
  return zi() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Re = {}, As = (i) => {
  const t = Vn(i);
  return Object.values(Re).filter((e) => e.canvas === t).pop();
};
function ql(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Kl(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
var ut;
let Ze = (ut = class {
  static register(...t) {
    rt.add(...t), Ls();
  }
  static unregister(...t) {
    rt.remove(...t), Ls();
  }
  constructor(t, e) {
    const s = this.config = new Vl(e), n = Vn(t), o = As(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || ul(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = er(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Al(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = wr((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Re[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    ct.listen(this, "complete", Cs), ct.listen(this, "progress", Xl), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return F(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return rt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ss(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return ts(this.canvas, this.ctx), this;
  }
  stop() {
    return ct.stop(this), this;
  }
  resize(t, e) {
    ct.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ss(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), R(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    I(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = xi(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), I(o, (r) => {
      const a = r.options, l = a.id, c = xi(l, a), h = T(a.type, r.dtype);
      (a.position === void 0 || Os(a.position, c) !== Os(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const f = rt.getScale(h);
        d = new f({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), I(n, (r, a) => {
      r || delete s[a];
    }), I(s, (r) => {
      J.configure(this, r, r.options), J.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(Ts("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || _i(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = rt.getController(a), { datasetElementType: c, dataElementType: h } = E.datasets[a];
        Object.assign(l, {
          dataElementType: rt.getElement(h),
          datasetElementType: c && rt.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    I(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), f = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(f), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || I(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Ts("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    I(this.scales, (t) => {
      J.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!$i(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      ql(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!$i(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    J.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], I(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, xt(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (ct.has(this) ? this.attached && !ct.running(this) && ct.start(this) : (this.draw(), Cs({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, n = An(this, t);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 && (n && Xe(e, n), t.controller.draw(), n && qe(e), s.cancelable = !1, this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(t) {
    return ue(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = Ua.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = At(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
    We(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), ct.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ts(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Re[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, n = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    I(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    I(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, I(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !Ee(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = ar(t), c = Kl(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, R(o.onHover, [
      t,
      a,
      this
    ], this), l && R(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Ee(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
}, D(ut, "defaults", E), D(ut, "instances", Re), D(ut, "overrides", Ct), D(ut, "registry", rt), D(ut, "version", Yl), D(ut, "getChart", As), ut);
function Ls() {
  return I(Ze.instances, (i) => i._plugins.invalidate());
}
function jn(i, t, e = t) {
  i.lineCap = T(e.borderCapStyle, t.borderCapStyle), i.setLineDash(T(e.borderDash, t.borderDash)), i.lineDashOffset = T(e.borderDashOffset, t.borderDashOffset), i.lineJoin = T(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = T(e.borderWidth, t.borderWidth), i.strokeStyle = T(e.borderColor, t.borderColor);
}
function Gl(i, t, e) {
  i.lineTo(e.x, e.y);
}
function Zl(i) {
  return i.stepped ? zr : i.tension || i.cubicInterpolationMode === "monotone" ? Er : Gl;
}
function $n(i, t, e = {}) {
  const s = i.length, { start: n = 0, end: o = s - 1 } = e, { start: r, end: a } = t, l = Math.max(n, r), c = Math.min(o, a), h = n < r && o < r || n > a && o > a;
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? s + c - l : c - l
  };
}
function Ql(i, t, e, s) {
  const { points: n, options: o } = t, { count: r, start: a, loop: l, ilen: c } = $n(n, e, s), h = Zl(o);
  let { move: d = !0, reverse: f } = s || {}, u, m, g;
  for (u = 0; u <= c; ++u)
    m = n[(a + (f ? c - u : u)) % r], !m.skip && (d ? (i.moveTo(m.x, m.y), d = !1) : h(i, g, m, f, o.stepped), g = m);
  return l && (m = n[(a + (f ? c : 0)) % r], h(i, g, m, f, o.stepped)), !!l;
}
function Jl(i, t, e, s) {
  const n = t.points, { count: o, start: r, ilen: a } = $n(n, e, s), { move: l = !0, reverse: c } = s || {};
  let h = 0, d = 0, f, u, m, g, p, b;
  const x = (v) => (r + (c ? a - v : v)) % o, y = () => {
    g !== p && (i.lineTo(h, p), i.lineTo(h, g), i.lineTo(h, b));
  };
  for (l && (u = n[x(0)], i.moveTo(u.x, u.y)), f = 0; f <= a; ++f) {
    if (u = n[x(f)], u.skip)
      continue;
    const v = u.x, _ = u.y, S = v | 0;
    S === m ? (_ < g ? g = _ : _ > p && (p = _), h = (d * h + v) / ++d) : (y(), i.lineTo(v, _), m = S, d = 0, g = p = _), b = _;
  }
  y();
}
function yi(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Jl : Ql;
}
function tc(i) {
  return i.stepped ? ma : i.tension || i.cubicInterpolationMode === "monotone" ? ba : Dt;
}
function ec(i, t, e, s) {
  let n = t._path;
  n || (n = t._path = new Path2D(), t.path(n, e, s) && n.closePath()), jn(i, t.options), i.stroke(n);
}
function ic(i, t, e, s) {
  const { segments: n, options: o } = t, r = yi(t);
  for (const a of n)
    jn(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + s - 1
    }) && i.closePath(), i.stroke();
}
const sc = typeof Path2D == "function";
function nc(i, t, e, s) {
  sc && !t.options.segment ? ec(i, t, e, s) : ic(i, t, e, s);
}
class mt extends ft {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const s = this.options;
    if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
      const n = s.spanGaps ? this._loop : this._fullLoop;
      la(this._points, s, t, n, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ka(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, s = t.length;
    return s && e[t[s - 1].end];
  }
  interpolate(t, e) {
    const s = this.options, n = t[e], o = this.points, r = Cn(this, {
      property: e,
      start: n,
      end: n
    });
    if (!r.length)
      return;
    const a = [], l = tc(s);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: f } = r[c], u = o[d], m = o[f];
      if (u === m) {
        a.push(u);
        continue;
      }
      const g = Math.abs((n - u[e]) / (m[e] - u[e])), p = l(u, m, g, s.stepped);
      p[e] = t[e], a.push(p);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, s) {
    return yi(this)(t, this, e, s);
  }
  path(t, e, s) {
    const n = this.segments, o = yi(this);
    let r = this._loop;
    e = e || 0, s = s || this.points.length - e;
    for (const a of n)
      r &= o(t, this, a, {
        start: e,
        end: e + s - 1
      });
    return !!r;
  }
  draw(t, e, s, n) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), nc(t, this, s, n), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
D(mt, "id", "line"), D(mt, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), D(mt, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), D(mt, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Is(i, t, e, s) {
  const n = i.options, { [e]: o } = i.getProps([
    e
  ], s);
  return Math.abs(t - o) < n.radius + n.hitRadius;
}
class ze extends ft {
  constructor(e) {
    super();
    D(this, "parsed");
    D(this, "skip");
    D(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
  }
  inRange(e, s, n) {
    const o = this.options, { x: r, y: a } = this.getProps([
      "x",
      "y"
    ], n);
    return Math.pow(e - r, 2) + Math.pow(s - a, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(e, s) {
    return Is(this, e, "x", s);
  }
  inYRange(e, s) {
    return Is(this, e, "y", s);
  }
  getCenterPoint(e) {
    const { x: s, y: n } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: s,
      y: n
    };
  }
  size(e) {
    e = e || this.options || {};
    let s = e.radius || 0;
    s = Math.max(s, s && e.hoverRadius || 0);
    const n = s && e.borderWidth || 0;
    return (s + n) * 2;
  }
  draw(e, s) {
    const n = this.options;
    this.skip || n.radius < 0.1 || !ue(this, s, this.size(n) / 2) || (e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.fillStyle = n.backgroundColor, mi(e, n, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
D(ze, "id", "point"), /**
* @type {any}
*/
D(ze, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
D(ze, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function oc(i, t, e) {
  const s = i.segments, n = i.points, o = t.points, r = [];
  for (const a of s) {
    let { start: l, end: c } = a;
    c = Qe(l, c, n);
    const h = vi(e, n[l], n[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: n[l],
        end: n[c]
      });
      continue;
    }
    const d = Cn(t, h);
    for (const f of d) {
      const u = vi(e, o[f.start], o[f.end], f.loop), m = Tn(a, n, u);
      for (const g of m)
        r.push({
          source: g,
          target: f,
          start: {
            [e]: Fs(h, u, "start", Math.max)
          },
          end: {
            [e]: Fs(h, u, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function vi(i, t, e, s) {
  if (s)
    return;
  let n = t[i], o = e[i];
  return i === "angle" && (n = at(n), o = at(o)), {
    property: i,
    start: n,
    end: o
  };
}
function rc(i, t) {
  const { x: e = null, y: s = null } = i || {}, n = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Qe(r, a, n);
    const l = n[r], c = n[a];
    s !== null ? (o.push({
      x: l.x,
      y: s
    }), o.push({
      x: c.x,
      y: s
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function Qe(i, t, e) {
  for (; t > i; t--) {
    const s = e[t];
    if (!isNaN(s.x) && !isNaN(s.y))
      break;
  }
  return t;
}
function Fs(i, t, e, s) {
  return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0;
}
function Yn(i, t) {
  let e = [], s = !1;
  return B(i) ? (s = !0, e = i) : e = rc(i, t), e.length ? new mt({
    points: e,
    options: {
      tension: 0
    },
    _loop: s,
    _fullLoop: s
  }) : null;
}
function Rs(i) {
  return i && i.fill !== !1;
}
function ac(i, t, e) {
  let n = i[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return n;
  for (; n !== !1 && o.indexOf(n) === -1; ) {
    if (!Y(n))
      return n;
    if (r = i[n], !r)
      return !1;
    if (r.visible)
      return n;
    o.push(n), n = r.fill;
  }
  return !1;
}
function lc(i, t, e) {
  const s = fc(i);
  if (C(s))
    return isNaN(s.value) ? !1 : s;
  let n = parseFloat(s);
  return Y(n) && Math.floor(n) === n ? cc(s[0], t, n, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(s) >= 0 && s;
}
function cc(i, t, e, s) {
  return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e;
}
function hc(i, t) {
  let e = null;
  return i === "start" ? e = t.bottom : i === "end" ? e = t.top : C(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function dc(i, t, e) {
  let s;
  return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : C(i) ? s = i.value : s = t.getBaseValue(), s;
}
function fc(i) {
  const t = i.options, e = t.fill;
  let s = T(e && e.target, e);
  return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s;
}
function uc(i) {
  const { scale: t, index: e, line: s } = i, n = [], o = s.segments, r = s.points, a = gc(t, e);
  a.push(Yn({
    x: null,
    y: t.bottom
  }, s));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      pc(n, r[h], a);
  }
  return new mt({
    points: n,
    options: {}
  });
}
function gc(i, t) {
  const e = [], s = i.getMatchingVisibleMetas("line");
  for (let n = 0; n < s.length; n++) {
    const o = s[n];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function pc(i, t, e) {
  const s = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n], { first: r, last: a, point: l } = mc(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        s.unshift(l);
      else if (i.push(l), !a)
        break;
    }
  }
  i.push(...s);
}
function mc(i, t, e) {
  const s = i.interpolate(t, e);
  if (!s)
    return {};
  const n = s[e], o = i.segments, r = i.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][e], f = r[h.end][e];
    if (Bt(n, d, f)) {
      a = n === d, l = n === f;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: s
  };
}
class Un {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, s) {
    const { x: n, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: it
    }, t.arc(n, o, r, e.end, e.start, !0), !s.bounds;
  }
  interpolate(t) {
    const { x: e, y: s, radius: n } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * n,
      y: s + Math.sin(o) * n,
      angle: o
    };
  }
}
function bc(i) {
  const { chart: t, fill: e, line: s } = i;
  if (Y(e))
    return _c(t, e);
  if (e === "stack")
    return uc(i);
  if (e === "shape")
    return !0;
  const n = xc(i);
  return n instanceof Un ? n : Yn(n, s);
}
function _c(i, t) {
  const e = i.getDatasetMeta(t);
  return e && i.isDatasetVisible(t) ? e.dataset : null;
}
function xc(i) {
  return (i.scale || {}).getPointPositionForValue ? vc(i) : yc(i);
}
function yc(i) {
  const { scale: t = {}, fill: e } = i, s = hc(e, t);
  if (Y(s)) {
    const n = t.isHorizontal();
    return {
      x: n ? s : null,
      y: n ? null : s
    };
  }
  return null;
}
function vc(i) {
  const { scale: t, fill: e } = i, s = t.options, n = t.getLabels().length, o = s.reverse ? t.max : t.min, r = dc(e, t, o), a = [];
  if (s.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Un({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < n; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function ci(i, t, e) {
  const s = bc(t), { chart: n, index: o, line: r, scale: a, axis: l } = t, c = r.options, h = c.fill, d = c.backgroundColor, { above: f = d, below: u = d } = h || {}, m = n.getDatasetMeta(o), g = An(n, m);
  s && r.points.length && (Xe(i, e), wc(i, {
    line: r,
    target: s,
    above: f,
    below: u,
    area: e,
    scale: a,
    axis: l,
    clip: g
  }), qe(i));
}
function wc(i, t) {
  const { line: e, target: s, above: n, below: o, area: r, scale: a, clip: l } = t, c = e._loop ? "angle" : t.axis;
  i.save();
  let h = o;
  o !== n && (c === "x" ? (zs(i, s, r.top), hi(i, {
    line: e,
    target: s,
    color: n,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), zs(i, s, r.bottom)) : c === "y" && (Es(i, s, r.left), hi(i, {
    line: e,
    target: s,
    color: o,
    scale: a,
    property: c,
    clip: l
  }), i.restore(), i.save(), Es(i, s, r.right), h = n)), hi(i, {
    line: e,
    target: s,
    color: h,
    scale: a,
    property: c,
    clip: l
  }), i.restore();
}
function zs(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[Qe(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(d.x, e);
  }
  i.lineTo(t.first().x, e), i.closePath(), i.clip();
}
function Es(i, t, e) {
  const { segments: s, points: n } = t;
  let o = !0, r = !1;
  i.beginPath();
  for (const a of s) {
    const { start: l, end: c } = a, h = n[l], d = n[Qe(l, c, n)];
    o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(e, h.y), i.lineTo(h.x, h.y)), r = !!t.pathSegment(i, a, {
      move: r
    }), r ? i.closePath() : i.lineTo(e, d.y);
  }
  i.lineTo(e, t.first().y), i.closePath(), i.clip();
}
function hi(i, t) {
  const { line: e, target: s, property: n, color: o, scale: r, clip: a } = t, l = oc(e, s, n);
  for (const { source: c, target: h, start: d, end: f } of l) {
    const { style: { backgroundColor: u = o } = {} } = c, m = s !== !0;
    i.save(), i.fillStyle = u, kc(i, r, a, m && vi(n, d, f)), i.beginPath();
    const g = !!e.pathSegment(i, c);
    let p;
    if (m) {
      g ? i.closePath() : Bs(i, s, f, n);
      const b = !!s.pathSegment(i, h, {
        move: g,
        reverse: !0
      });
      p = g && b, p || Bs(i, s, d, n);
    }
    i.closePath(), i.fill(p ? "evenodd" : "nonzero"), i.restore();
  }
}
function kc(i, t, e, s) {
  const n = t.chart.chartArea, { property: o, start: r, end: a } = s || {};
  if (o === "x" || o === "y") {
    let l, c, h, d;
    o === "x" ? (l = r, c = n.top, h = a, d = n.bottom) : (l = n.left, c = r, h = n.right, d = a), i.beginPath(), e && (l = Math.max(l, e.left), h = Math.min(h, e.right), c = Math.max(c, e.top), d = Math.min(d, e.bottom)), i.rect(l, c, h - l, d - c), i.clip();
  }
}
function Bs(i, t, e, s) {
  const n = t.interpolate(e, s);
  n && i.lineTo(n.x, n.y);
}
var Sc = {
  id: "filler",
  afterDatasetsUpdate(i, t, e) {
    const s = (i.data.datasets || []).length, n = [];
    let o, r, a, l;
    for (r = 0; r < s; ++r)
      o = i.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof mt && (l = {
        visible: i.isDatasetVisible(r),
        index: r,
        fill: lc(a, r, s),
        chart: i,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, n.push(l);
    for (r = 0; r < s; ++r)
      l = n[r], !(!l || l.fill === !1) && (l.fill = ac(n, r, e.propagate));
  },
  beforeDraw(i, t, e) {
    const s = e.drawTime === "beforeDraw", n = i.getSortedVisibleDatasetMetas(), o = i.chartArea;
    for (let r = n.length - 1; r >= 0; --r) {
      const a = n[r].$filler;
      a && (a.line.updateControlPoints(o, a.axis), s && a.fill && ci(i.ctx, a, o));
    }
  },
  beforeDatasetsDraw(i, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let n = s.length - 1; n >= 0; --n) {
      const o = s[n].$filler;
      Rs(o) && ci(i.ctx, o, i.chartArea);
    }
  },
  beforeDatasetDraw(i, t, e) {
    const s = t.meta.$filler;
    !Rs(s) || e.drawTime !== "beforeDatasetDraw" || ci(i.ctx, s, i.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Hs = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Mc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Ws extends ft {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = R(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = $(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Hs(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let f = -1, u = -h;
    return this.legendItems.forEach((m, g) => {
      const p = s + e / 2 + o.measureText(m.text).width;
      (g === 0 || c[c.length - 1] + p + 2 * a > r) && (d += h, c[c.length - (g > 0 ? 0 : 1)] = 0, u += h, f++), l[g] = {
        left: 0,
        top: u,
        row: f,
        width: p,
        height: n
      }, c[c.length - 1] += p + a;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, f = 0, u = 0, m = 0, g = 0;
    return this.legendItems.forEach((p, b) => {
      const { itemWidth: x, itemHeight: y } = Dc(s, e, o, p, n);
      b > 0 && u + y + 2 * a > h && (d += f + a, c.push({
        width: f,
        height: u
      }), m += f + a, g++, f = u = 0), l[b] = {
        left: m,
        top: u,
        col: g,
        width: x,
        height: y
      }, f = Math.max(f, x), u += y + a;
    }), d += f, c.push({
      width: f,
      height: u
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = Ht(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = j(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = j(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = j(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = j(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Xe(t, this), this._draw(), qe(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = E.color, l = Ht(t.rtl, this.left, this.width), c = $(r.font), { padding: h } = r, d = c.size, f = d / 2;
    let u;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: m, boxHeight: g, itemHeight: p } = Hs(r, d), b = function(S, k, w) {
      if (isNaN(m) || m <= 0 || isNaN(g) || g < 0)
        return;
      n.save();
      const M = T(w.lineWidth, 1);
      if (n.fillStyle = T(w.fillStyle, a), n.lineCap = T(w.lineCap, "butt"), n.lineDashOffset = T(w.lineDashOffset, 0), n.lineJoin = T(w.lineJoin, "miter"), n.lineWidth = M, n.strokeStyle = T(w.strokeStyle, a), n.setLineDash(T(w.lineDash, [])), r.usePointStyle) {
        const A = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: w.pointStyle,
          rotation: w.rotation,
          borderWidth: M
        }, P = l.xPlus(S, m / 2), L = k + f;
        xn(n, A, P, L, r.pointStyleWidth && m);
      } else {
        const A = k + Math.max((d - g) / 2, 0), P = l.leftForLtr(S, m), L = ae(w.borderRadius);
        n.beginPath(), Object.values(L).some((U) => U !== 0) ? bi(n, {
          x: P,
          y: A,
          w: m,
          h: g,
          radius: L
        }) : n.rect(P, A, m, g), n.fill(), M !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(S, k, w) {
      ge(n, w.text, S, k + p / 2, c, {
        strikethrough: w.hidden,
        textAlign: l.textAlign(w.textAlign)
      });
    }, y = this.isHorizontal(), v = this._computeTitleHeight();
    y ? u = {
      x: j(o, this.left + h, this.right - s[0]),
      y: this.top + h + v,
      line: 0
    } : u = {
      x: this.left + h,
      y: j(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, Dn(this.ctx, t.textDirection);
    const _ = p + h;
    this.legendItems.forEach((S, k) => {
      n.strokeStyle = S.fontColor, n.fillStyle = S.fontColor;
      const w = n.measureText(S.text).width, M = l.textAlign(S.textAlign || (S.textAlign = r.textAlign)), A = m + f + w;
      let P = u.x, L = u.y;
      l.setWidth(this.width), y ? k > 0 && P + A + h > this.right && (L = u.y += _, u.line++, P = u.x = j(o, this.left + h, this.right - s[u.line])) : k > 0 && L + _ > this.bottom && (P = u.x = P + e[u.line].width + h, u.line++, L = u.y = j(o, this.top + v + h, this.bottom - e[u.line].height));
      const U = l.x(P);
      if (b(U, L, S), P = kr(M, P + m + f, y ? P + A : this.right, t.rtl), x(l.x(P), L, S), y)
        u.x += A + h;
      else if (typeof S.text != "string") {
        const st = c.lineHeight;
        u.y += Xn(S, st) + h;
      } else
        u.y += _;
    }), Pn(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = $(e.font), n = tt(e.padding);
    if (!e.display)
      return;
    const o = Ht(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), h = this.top + c, d = j(t.align, d, this.right - f);
    else {
      const m = this.columnSizes.reduce((g, p) => Math.max(g, p.height), 0);
      h = c + j(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const u = j(a, d, d + f);
    r.textAlign = o.textAlign(Ai(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, ge(r, e.text, u, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = $(t.font), s = tt(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Bt(t, this.left, this.right) && Bt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Bt(t, n.left, n.left + n.width) && Bt(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Tc(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = Mc(n, s);
      n && !o && R(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && R(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && R(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Dc(i, t, e, s, n) {
  const o = Pc(s, i, t, e), r = Oc(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Pc(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function Oc(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = Xn(t, e)), s;
}
function Xn(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Tc(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Cc = {
  id: "legend",
  _element: Ws,
  start(i, t, e) {
    const s = i.legend = new Ws({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    J.configure(i, s, e), J.addBox(i, s);
  },
  stop(i) {
    J.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    J.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = tt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class qn extends ft {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = B(s.text) ? s.text.length : 1;
    this._padding = tt(s.padding);
    const o = n * $(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = j(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = j(a, n, e), l = N * -0.5) : (h = o - t, d = j(a, e, n), l = N * 0.5), c = n - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = $(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ge(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ai(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function Ac(i, t) {
  const e = new qn({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  J.configure(i, e, t), J.addBox(i, e), i.titleBlock = e;
}
var Lc = {
  id: "title",
  _element: qn,
  start(i, t, e) {
    Ac(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    J.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    J.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const ie = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), n += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = gi(t, c);
        h < n && (n = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function ot(i, t) {
  return t && (B(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ht(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Ic(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function Ns(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = $(t.bodyFont), c = $(t.titleFont), h = $(t.footerFont), d = o.length, f = n.length, u = s.length, m = tt(t.padding);
  let g = m.height, p = 0, b = s.reduce((v, _) => v + _.before.length + _.lines.length + _.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const v = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += u * v + (b - u) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  f && (g += t.footerMarginTop + f * h.lineHeight + (f - 1) * t.footerSpacing);
  let x = 0;
  const y = function(v) {
    p = Math.max(p, e.measureText(v).width + x);
  };
  return e.save(), e.font = c.string, I(i.title, y), e.font = l.string, I(i.beforeBody.concat(i.afterBody), y), x = t.displayColors ? r + 2 + t.boxPadding : 0, I(s, (v) => {
    I(v.before, y), I(v.lines, y), I(v.after, y);
  }), x = 0, e.font = h.string, I(i.footer, y), e.restore(), p += m.width, {
    width: p,
    height: g
  };
}
function Fc(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Rc(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function zc(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Rc(c, i, t, e) && (c = "center"), c;
}
function Vs(i, t, e) {
  const s = e.yAlign || t.yAlign || Fc(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || zc(i, t, e, s),
    yAlign: s
  };
}
function Ec(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Bc(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function js(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: u } = ae(r);
  let m = Ec(t, a);
  const g = Bc(t, l, c);
  return l === "center" ? a === "left" ? m += c : a === "right" && (m -= c) : a === "left" ? m -= Math.max(h, f) + n : a === "right" && (m += Math.max(d, u) + n), {
    x: Q(m, 0, s.width - t.width),
    y: Q(g, 0, s.height - t.height)
  };
}
function Ae(i, t, e) {
  const s = tt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function $s(i) {
  return ot([], ht(i));
}
function Hc(i, t, e) {
  return At(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Ys(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Kn = {
  beforeTitle: lt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: lt,
  beforeBody: lt,
  beforeLabel: lt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return F(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: lt,
  afterBody: lt,
  beforeFooter: lt,
  footer: lt,
  afterFooter: lt
};
function X(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? Kn[t].call(e, s) : n;
}
class wi extends ft {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new Ln(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Hc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = X(s, "beforeTitle", this, t), o = X(s, "title", this, t), r = X(s, "afterTitle", this, t);
    let a = [];
    return a = ot(a, ht(n)), a = ot(a, ht(o)), a = ot(a, ht(r)), a;
  }
  getBeforeBody(t, e) {
    return $s(X(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return I(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Ys(s, o);
      ot(r.before, ht(X(a, "beforeLabel", this, o))), ot(r.lines, X(a, "label", this, o)), ot(r.after, ht(X(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return $s(X(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = X(s, "beforeFooter", this, t), o = X(s, "footer", this, t), r = X(s, "afterFooter", this, t);
    let a = [];
    return a = ot(a, ht(n)), a = ot(a, ht(o)), a = ot(a, ht(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Ic(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, f) => t.filter(h, d, f, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), I(a, (h) => {
      const d = Ys(t.callbacks, h);
      n.push(X(d, "labelColor", this, h)), o.push(X(d, "labelPointStyle", this, h)), r.push(X(d, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, r = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = ie[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Ns(this, s), c = Object.assign({}, a, l), h = Vs(this.chart, s, c), d = js(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = ae(a), { x: f, y: u } = t, { width: m, height: g } = e;
    let p, b, x, y, v, _;
    return o === "center" ? (v = u + g / 2, n === "left" ? (p = f, b = p - r, y = v + r, _ = v - r) : (p = f + m, b = p + r, y = v - r, _ = v + r), x = p) : (n === "left" ? b = f + Math.max(l, h) + r : n === "right" ? b = f + m - Math.max(c, d) - r : b = this.caretX, o === "top" ? (y = u, v = y - r, p = b - r, x = b + r) : (y = u + g, v = y + r, p = b + r, x = b - r), _ = y), {
      x1: p,
      x2: b,
      x3: x,
      y1: y,
      y2: v,
      y3: _
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = Ht(s.rtl, this.x, this.width);
      for (t.x = Ae(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = $(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = $(o.bodyFont), d = Ae(this, "left", o), f = n.x(d), u = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, m = e.y + u;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, p = n.leftForLtr(f, c) + c / 2, b = m + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, mi(t, g, p, b), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, mi(t, g, p, b);
    } else {
      t.lineWidth = C(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const g = n.leftForLtr(f, c), p = n.leftForLtr(n.xPlus(f, 1), c - 2), b = ae(r.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, bi(t, {
        x: g,
        y: m,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), bi(t, {
        x: p,
        y: m + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, m, c, l), t.strokeRect(g, m, c, l), t.fillStyle = r.backgroundColor, t.fillRect(p, m + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = $(s.bodyFont);
    let f = d.lineHeight, u = 0;
    const m = Ht(s.rtl, this.x, this.width), g = function(w) {
      e.fillText(w, m.x(t.x + u), t.y + f / 2), t.y += f + o;
    }, p = m.textAlign(r);
    let b, x, y, v, _, S, k;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Ae(this, p, s), e.fillStyle = s.bodyColor, I(this.beforeBody, g), u = a && p !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, S = n.length; v < S; ++v) {
      for (b = n[v], x = this.labelTextColors[v], e.fillStyle = x, I(b.before, g), y = b.lines, a && y.length && (this._drawColorBox(e, t, v, m, s), f = Math.max(d.lineHeight, l)), _ = 0, k = y.length; _ < k; ++_)
        g(y[_]), f = d.lineHeight;
      I(b.after, g);
    }
    u = 0, f = d.lineHeight, I(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = Ht(s.rtl, this.x, this.width);
      for (t.x = Ae(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = $(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: f, bottomLeft: u, bottomRight: m } = ae(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - f, l), e.quadraticCurveTo(a + c, l, a + c, l + f), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - m), e.quadraticCurveTo(a + c, l + h, a + c - m, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + u, l + h), e.quadraticCurveTo(a, l + h, a, l + h - u), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = ie[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Ns(this, t), l = Object.assign({}, r, this._size), c = Vs(e, t, l), h = js(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = tt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Dn(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Pn(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Ee(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !Ee(r, o) || a;
    return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, r = ie[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
D(wi, "positioners", ie);
var Wc = {
  id: "tooltip",
  _element: wi,
  positioners: ie,
  afterInit(i, t, e) {
    e && (i.tooltip = new wi({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Kn
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const Nc = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Vc(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Nc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const jc = (i, t) => i === null ? null : Q(Math.round(i), 0, t);
function Us(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class ki extends Ut {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (F(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Vc(s, t, T(e, t), this._addedLabels), jc(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      n.push({
        value: r
      });
    return n;
  }
  getLabelForValue(t) {
    return Us.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
D(ki, "id", "category"), D(ki, "defaults", {
  ticks: {
    callback: Us
  }
});
function $c(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f } = i, u = o || 1, m = h - 1, { min: g, max: p } = t, b = !F(r), x = !F(a), y = !F(c), v = (p - g) / (d + 1);
  let _ = Ui((p - g) / m / u) * u, S, k, w, M;
  if (_ < 1e-14 && !b && !x)
    return [
      {
        value: g
      },
      {
        value: p
      }
    ];
  M = Math.ceil(p / _) - Math.floor(g / _), M > m && (_ = Ui(M * _ / m / u) * u), F(l) || (S = Math.pow(10, l), _ = Math.ceil(_ * S) / S), n === "ticks" ? (k = Math.floor(g / _) * _, w = Math.ceil(p / _) * _) : (k = g, w = p), b && x && o && fr((a - r) / o, _ / 1e3) ? (M = Math.round(Math.min((a - r) / _, h)), _ = (a - r) / M, k = r, w = a) : y ? (k = b ? r : k, w = x ? a : w, M = c - 1, _ = (w - k) / M) : (M = (w - k) / _, ne(M, Math.round(M), _ / 1e3) ? M = Math.round(M) : M = Math.ceil(M));
  const A = Math.max(Xi(_), Xi(k));
  S = Math.pow(10, F(l) ? A : l), k = Math.round(k * S) / S, w = Math.round(w * S) / S;
  let P = 0;
  for (b && (f && k !== r ? (e.push({
    value: r
  }), k < r && P++, ne(Math.round((k + P * _) * S) / S, r, Xs(r, v, i)) && P++) : k < r && P++); P < M; ++P) {
    const L = Math.round((k + P * _) * S) / S;
    if (x && L > a)
      break;
    e.push({
      value: L
    });
  }
  return x && f && w !== a ? e.length && ne(e[e.length - 1].value, a, Xs(a, v, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!x || w === a) && e.push({
    value: w
  }), e;
}
function Xs(i, t, { horizontal: e, minRotation: s }) {
  const n = Pt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Yc extends Ut {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return F(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = Wt(n), c = Wt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = $c(n, o);
    return t.bounds === "ticks" && ur(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return bn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Si extends Yc {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = Y(t) ? t : 0, this.max = Y(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = Pt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
D(Si, "id", "linear"), D(Si, "defaults", {
  ticks: {
    callback: _n.formatters.numeric
  }
});
const Je = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, q = /* @__PURE__ */ Object.keys(Je);
function qs(i, t) {
  return i - t;
}
function Ks(i, t) {
  if (F(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), Y(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (fe(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function Gs(i, t, e, s) {
  const n = q.length;
  for (let o = q.indexOf(i); o < n - 1; ++o) {
    const r = Je[q[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return q[o];
  }
  return q[n - 1];
}
function Uc(i, t, e, s, n) {
  for (let o = q.length - 1; o >= q.indexOf(e); o--) {
    const r = q[o];
    if (Je[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return q[e ? q.indexOf(e) : 0];
}
function Xc(i) {
  for (let t = q.indexOf(i) + 1, e = q.length; t < e; ++t)
    if (Je[q[t]].common)
      return q[t];
}
function Zs(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = Ci(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function qc(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Qs(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : qc(i, s, n, e);
}
class $e extends Ut {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}), n = this._adapter = new Na._date(t.adapters.date);
    n.init(e), se(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Ks(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = Y(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = Y(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, r = this.max, a = xr(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? Gs(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Uc(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : Xc(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Qs(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = Q(e, 0, r), s = Q(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || Gs(o.minUnit, e, s, this._getLabelCapacity(e)), a = T(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = fe(l) || l === !0, h = {};
    let d = e, f, u;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const m = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, u = 0; f < s; f = +t.add(f, a, r), u++)
      Zs(h, f, m);
    return (f === s || n.bounds === "ticks" || u === 1) && Zs(h, f, m), Object.keys(h).sort(qs).map((g) => +g);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, o = this._unit, r = e || n[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return R(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], f = s[e], u = c && d && f && f.major;
    return this._adapter.format(t, n || (u ? d : h));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = Pt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Qs(this, [
      t
    ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(Ks(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return vr(t.sort(qs));
  }
}
D($e, "id", "time"), D($e, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Le(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = Ot(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = Ot(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Js extends $e {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Le(e, this.min), this._tableRange = Le(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = n.length; r < a; ++r)
      h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Le(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Le(this._table, s * this._tableRange + this._minPos, !0);
  }
}
D(Js, "id", "timeseries"), D(Js, "defaults", $e.defaults);
const Gn = {
  data: {
    type: Object,
    required: !0
  },
  options: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  datasetIdKey: {
    type: String,
    default: "label"
  },
  updateMode: {
    type: String,
    default: void 0
  }
}, Kc = {
  ariaLabel: {
    type: String
  },
  ariaDescribedby: {
    type: String
  }
}, Gc = {
  type: {
    type: String,
    required: !0
  },
  destroyDelay: {
    type: Number,
    default: 0
    // No delay by default
  },
  ...Gn,
  ...Kc
}, Zc = no[0] === "2" ? (i, t) => Object.assign(i, {
  attrs: t
}) : (i, t) => Object.assign(i, t);
function Rt(i) {
  return sn(i) ? fi(i) : i;
}
function Qc(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i;
  return sn(t) ? new Proxy(i, {}) : i;
}
function Jc(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function Zn(i, t) {
  i.labels = t;
}
function Qn(i, t, e) {
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function th(i, t) {
  const e = {
    labels: [],
    datasets: []
  };
  return Zn(e, i.labels), Qn(e, i.datasets, t), e;
}
const eh = tn({
  props: Gc,
  setup(i, t) {
    let { expose: e, slots: s } = t;
    const n = _t(null), o = en(null);
    e({
      chart: o
    });
    const r = () => {
      if (!n.value) return;
      const { type: c, data: h, options: d, plugins: f, datasetIdKey: u } = i, m = th(h, u), g = Qc(m, h);
      o.value = new Ze(n.value, {
        type: c,
        data: g,
        options: {
          ...d
        },
        plugins: f
      });
    }, a = () => {
      const c = fi(o.value);
      c && (i.destroyDelay > 0 ? setTimeout(() => {
        c.destroy(), o.value = null;
      }, i.destroyDelay) : (c.destroy(), o.value = null));
    }, l = (c) => {
      c.update(i.updateMode);
    };
    return $t(r), io(a), jt([
      () => i.options,
      () => i.data
    ], (c, h) => {
      let [d, f] = c, [u, m] = h;
      const g = fi(o.value);
      if (!g)
        return;
      let p = !1;
      if (d) {
        const b = Rt(d), x = Rt(u);
        b && b !== x && (Jc(g, b), p = !0);
      }
      if (f) {
        const b = Rt(f.labels), x = Rt(m.labels), y = Rt(f.datasets), v = Rt(m.datasets);
        b !== x && (Zn(g.config.data, b), p = !0), y && y !== v && (Qn(g.config.data, y, i.datasetIdKey), p = !0);
      }
      p && so(() => {
        l(g);
      });
    }, {
      deep: !0
    }), () => di("canvas", {
      role: "img",
      "aria-label": i.ariaLabel,
      "aria-describedby": i.ariaDescribedby,
      ref: n
    }, [
      di("p", {}, [
        s.default ? s.default() : ""
      ])
    ]);
  }
});
function ih(i, t) {
  return Ze.register(t), tn({
    props: Gn,
    setup(e, s) {
      let { expose: n } = s;
      const o = en(null), r = (a) => {
        o.value = a == null ? void 0 : a.chart;
      };
      return n({
        chart: o
      }), () => di(eh, Zc({
        ref: r
      }, {
        type: i,
        ...e
      }));
    }
  });
}
const sh = /* @__PURE__ */ ih("line", Ie), nh = {
  props: {
    period: {
      type: String,
      required: !0
    }
  },
  setup(i) {
    const t = _t({}), e = nn(() => Object.keys(t.value).length - 1), s = (r) => r.replace(/_/g, " "), n = (r) => r === "bounce_rate" ? "%" : r === "visit_duration" ? "s" : "", o = async () => {
      try {
        const a = await (await fetch(`/cp/plausible/api/aggregates?period=${i.period}`)).json();
        t.value = a;
      } catch (r) {
        console.error("Failed to fetch aggregates:", r);
      }
    };
    return jt(() => i.period, () => {
      o();
    }, { immediate: !0 }), $t(() => {
      o();
    }), {
      data: t,
      getArrayLength: e,
      getKeyTitle: s,
      getKeyEnding: n
    };
  }
}, oh = { class: "flex justify-between p-0 border-b" }, rh = { class: "mb-1 text-xs font-medium uppercase text-grey-70" }, ah = { class: "text-2xl" };
function lh(i, t, e, s, n, o) {
  return H(), W("div", oh, [
    (H(!0), W(Ye, null, Ue(s.data, (r, a, l) => (H(), W("div", {
      key: a,
      class: oo([{ "border-r": l != s.getArrayLength }, "w-1/4 p-2 last:border-0"])
    }, [
      O("h5", rh, K(s.getKeyTitle(a)), 1),
      O("p", ah, K(r.value) + K(s.getKeyEnding(a)), 1)
    ], 2))), 128))
  ]);
}
const ch = /* @__PURE__ */ Yt(nh, [["render", lh]]);
Ze.register(
  ki,
  Si,
  ze,
  mt,
  Lc,
  Wc,
  Cc,
  Sc
);
const hh = {
  components: {
    Line: sh,
    Aggregates: ch
  },
  props: {
    period: {
      type: String,
      required: !0
    },
    widget: {
      type: Boolean,
      required: !1,
      default: !1
    },
    showGraph: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  setup(i) {
    const t = _t([]), e = _t([]), s = nn(() => ({
      labels: t.value,
      datasets: [
        {
          label: "Visitors",
          data: e.value,
          fill: !0,
          borderColor: "rgb(59, 130, 246)",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.4
        }
      ]
    })), n = {
      responsive: !0,
      maintainAspectRatio: !0,
      plugins: {
        legend: {
          display: !1
        }
      },
      scales: {
        y: {
          beginAtZero: !0
        }
      }
    }, o = async () => {
      try {
        const a = await (await fetch(`/cp/plausible/api/timeseries?period=${i.period}`)).json();
        t.value = a.labels || [], e.value = a.series || [];
      } catch (r) {
        console.error("Failed to fetch timeseries data:", r);
      }
    };
    return jt(() => i.period, () => {
      o();
    }, { immediate: !0 }), $t(() => {
      o();
    }), {
      labels: t,
      series: e,
      chartData: s,
      chartOptions: n
    };
  }
}, dh = { class: "p-0 mb-4 card" }, fh = {
  key: 0,
  class: "p-2"
}, uh = {
  key: 1,
  class: "p-2"
};
function gh(i, t, e, s, n, o) {
  const r = zt("Aggregates"), a = zt("Line");
  return H(), W("div", dh, [
    e.widget ? (H(), W("h3", fh, "Analytics (Last " + K(e.period) + ")", 1)) : ce("", !0),
    Et(r, { period: e.period }, null, 8, ["period"]),
    e.showGraph ? (H(), W("div", uh, [
      Et(a, {
        data: s.chartData,
        options: s.chartOptions
      }, null, 8, ["data", "options"])
    ])) : ce("", !0)
  ]);
}
const Jn = /* @__PURE__ */ Yt(hh, [["render", gh]]), ph = {
  components: {
    VisitorOverview: Jn,
    TopReferrers: rn,
    TopBrowser: on,
    TopPages: an
  },
  setup() {
    return {
      range: _t("7d")
    };
  }
}, mh = { class: "flex items-center justify-between mb-3" }, bh = { class: "flex items-center" }, _h = { class: "flex -mx-2 mt-3" };
function xh(i, t, e, s, n, o) {
  const r = zt("VisitorOverview"), a = zt("TopPages"), l = zt("TopReferrers"), c = zt("TopBrowser");
  return H(), W("div", null, [
    O("div", mh, [
      t[3] || (t[3] = O("h1", null, "Analytics", -1)),
      O("div", bh, [
        t[2] || (t[2] = O("span", { class: "font-medium text-sm mr-2" }, "Range:", -1)),
        ro(O("select", {
          "onUpdate:modelValue": t[0] || (t[0] = (h) => s.range = h),
          class: "bg-white p-1 rounded-lg border"
        }, [...t[1] || (t[1] = [
          ao('<option value="day">Today</option><option value="yesterday">Yesterday</option><option value="7d">7 Days</option><option value="30d">30 Days</option><option value="6mo">6 Months</option><option value="12mo">12 Months</option>', 6)
        ])], 512), [
          [lo, s.range]
        ])
      ])
    ]),
    Et(r, { period: s.range }, null, 8, ["period"]),
    Et(a, { period: s.range }, null, 8, ["period"]),
    O("div", _h, [
      Et(l, {
        class: "mx-2 w-1/2",
        period: s.range
      }, null, 8, ["period"]),
      Et(c, {
        class: "mx-2 w-1/2",
        period: s.range
      }, null, 8, ["period"])
    ])
  ]);
}
const yh = /* @__PURE__ */ Yt(ph, [["render", xh]]);
Statamic.booting(() => {
  Statamic.$components.register("plausible-dashboard", yh), Statamic.$components.register("plausible-top-pages", an), Statamic.$components.register("plausible-top-browsers", on), Statamic.$components.register("plausible-top-referrers", rn), Statamic.$components.register("plausible-visitor-overview", Jn);
});
