(window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
        '/82N': function (e, t, n) {
            e.exports = {
                root: 'index-module--root--2kLyg',
                back: 'index-module--back--Z4mqE',
                forward: 'index-module--forward--SdJ5L'
            };
        },
        RXBc: function (e, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'default', function () {
                    return h;
                });
            var a = n('mXGw'),
                o = n.n(a),
                c = n('/82N'),
                r = n.n(c);
            function i(e) {
                var t = e.variant,
                    n = void 0 === t ? '' : t,
                    a = e.onClick,
                    c = e.href,
                    i = void 0 === c ? '#' : c,
                    d = e.children;
                return o.a.createElement(
                    'a',
                    { href: i, className: r.a.root + ' ' + r.a[n] },
                    o.a.createElement('div', { onClick: a }, d)
                );
            }
            var d = n('I/Ru'),
                l = n('jhlK'),
                u = n.n(l);
            function m(e) {
                var t = e.variant,
                    n = e.onClick,
                    c = void 0 === n ? function () {} : n,
                    r = e.href,
                    i = void 0 === r ? '#' : r,
                    d = Object(a.useState)(0),
                    l = d[0],
                    m = d[1],
                    f = o.a.createElement(
                        'code',
                        { className: u.a.greenText },
                        '01000110 01110101 01100011 01101011 00100000 01111001 01101111 01110101 00101110 00100000 01010011 01110100 01101111 01110000 00100000 01101101 01100101 01110011 01110011 01101001 01101110 01100111 00100000 01110111 01101001 01110100 01101000 00100000 01101101 01111001 00100000 01110111 01100101 01100010 01110011 01101001 01110100 01100101'
                    );
                return o.a.createElement(
                    'div',
                    {
                        className: u.a.root,
                        onClick: function () {
                            c(), m(l + 1);
                        }
                    },
                    l < 64
                        ? o.a.createElement(
                              'a',
                              { className: u.a[t], href: i },
                              o.a.createElement('div', { alt: 'noCAPTCHA' })
                          )
                        : f
                );
            }
            var f = n('vrFN');
            function s(e) {
                var t = e.anchor,
                    n = void 0 === t ? document.body : t,
                    c = e.dark,
                    r = void 0 === c || c,
                    i = e.mute,
                    d = void 0 !== i && i,
                    l = Object(a.useRef)(),
                    u = Object(a.useState)(),
                    m = u[0],
                    f = u[1];
                return (
                    Object(a.useEffect)(
                        function () {
                            if ('undefined' != typeof window) {
                                var e = l.current,
                                    t = document.createElement('script');
                                return (
                                    (t.src =
                                        'https://player.twitch.tv/js/embed/v1.js'),
                                    (t.async = !0),
                                    t.addEventListener('load', function () {
                                        f(
                                            new window.Twitch.Embed(
                                                'twitch-embed',
                                                {
                                                    width: '100%',
                                                    height: '100%',
                                                    channel: 'nocaptcha_live',
                                                    theme: r ? 'dark' : 'light'
                                                }
                                            )
                                        );
                                    }),
                                    n.appendChild(t),
                                    function () {
                                        n.removeChild(t), (e.innerHTML = '');
                                    }
                                );
                            }
                        },
                        [n, r]
                    ),
                    Object(a.useEffect)(
                        function () {
                            m && m.setMuted(d);
                        },
                        [m, d]
                    ),
                    o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement('div', {
                            ref: l,
                            id: 'twitch-embed',
                            style: {
                                maxWidth: '1920px',
                                width: '88vw',
                                height: '88vh',
                                maxHeight: '1080px'
                            }
                        })
                    )
                );
            }
            function h() {
                var e = Object(a.useRef)(),
                    t = Object(a.useState)(!1),
                    n = t[0],
                    c = t[1],
                    r = Object(a.useState)(1),
                    l = r[0],
                    u = r[1],
                    h = Object(a.useState)(1),
                    v = h[0],
                    w = {
                        setDarkMode: u,
                        setAudio: h[1],
                        values: { darkMode: l, audio: v }
                    };
                return (
                    Object(a.useEffect)(function () {
                        'undefined' != typeof window &&
                            c(
                                '#twitch' === window.location.hash ||
                                    '?tw' === window.location.search
                            );
                    }, []),
                    o.a.createElement(
                        d.a,
                        { ref: e, sw: w },
                        o.a.createElement(f.a, { title: 'i am not a robot.' }),
                        n
                            ? o.a.createElement(
                                  o.a.Fragment,
                                  null,
                                  o.a.createElement(
                                      i,
                                      {
                                          variant: 'back',
                                          onClick: function () {
                                              c(!1);
                                          }
                                      },
                                      'Home'
                                  ),
                                  o.a.createElement(s, {
                                      anchor: e.current,
                                      dark: l,
                                      mute: v
                                  })
                              )
                            : o.a.createElement(m, {
                                  variant: 'logo',
                                  onClick: function () {
                                      c(!0);
                                  },
                                  href: '#twitch'
                              })
                    )
                );
            }
        },
        jhlK: function (e, t, n) {
            e.exports = {
                greenText: 'index-module--greenText--1m09g',
                root: 'index-module--root--363CI',
                text: 'index-module--text--Crddu',
                logo: 'index-module--logo--3PlfJ',
                colorCycle: 'index-module--color-cycle--TimLx'
            };
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-4d2ada6558fe877f684f.js.map
