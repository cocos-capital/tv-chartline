(window.webpackJsonp = window.webpackJsonp || []).push([
    ["restricted-toolset", "series-icons-map"],
    {
        "+KIV": function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M8 9.5H6.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V20m-8-1.5h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1z"/></svg>';
        },
        "1Tx8": function (e, t, a) {
            e.exports = {
                button: "button-mPM2q3lb",
                withText: "withText-mPM2q3lb",
                withoutText: "withoutText-mPM2q3lb",
            };
        },
        "1uoO": function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M9 8v12h3V8H9zm-1-.502C8 7.223 8.215 7 8.498 7h4.004c.275 0 .498.22.498.498v13.004a.493.493 0 0 1-.498.498H8.498A.496.496 0 0 1 8 20.502V7.498z"/><path d="M10 4h1v3.5h-1z"/><path d="M17 6v6h3V6h-3zm-1-.5c0-.276.215-.5.498-.5h4.004c.275 0 .498.23.498.5v7c0 .276-.215.5-.498.5h-4.004a.503.503 0 0 1-.498-.5v-7z"/><path d="M18 2h1v3.5h-1z"/></svg>';
        },
        "23di": function (e, t, a) {
            e.exports = {
                wrap: "wrap-3FnlLKfX",
                titleWrap: "titleWrap-3FnlLKfX",
                indicators: "indicators-3FnlLKfX",
                title: "title-3FnlLKfX",
                icon: "icon-3FnlLKfX",
                text: "text-3FnlLKfX",
                titleTabletSmall: "titleTabletSmall-3FnlLKfX",
                labelRow: "labelRow-3FnlLKfX",
                label: "label-3FnlLKfX",
            };
        },
        "2xRE": function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M18.293 13l-2.647 2.646.707.708 3.854-3.854-3.854-3.854-.707.708L18.293 12H12.5A5.5 5.5 0 0 0 7 17.5V19h1v-1.5a4.5 4.5 0 0 1 4.5-4.5h5.793z"/></svg>';
        },
        "39J6": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            });
            var n = a("q1tI"),
                i = a("TSYQ"),
                s = a.n(i),
                o = a("6KyJ"),
                l = a("Oy6E");
            function r(e) {
                const { className: t } = e;
                return n.createElement("div", { className: s()(l.spinnerWrap, t) }, n.createElement(o.a, null));
            }
        },
        "3j+J": function (e, t, a) {
            e.exports = {
                wrapper: "wrapper-2wbe1KZX",
                labelRow: "labelRow-2wbe1KZX",
                label: "label-2wbe1KZX",
                labelHint: "labelHint-2wbe1KZX",
                labelOn: "labelOn-2wbe1KZX",
            };
        },
        "4hTN": function (e, t, a) {
            e.exports = { value: "value-2y-wa9jT", selected: "selected-2y-wa9jT" };
        },
        "4pMH": function (e, t, a) {},
        "5ijr": function (e) {
            e.exports = JSON.parse(
                '{"switcherWrapper":"switcherWrapper-1wFH-_jm","size-small":"size-small-1gT-kZYO","size-large":"size-large-MOSirnj_","intent-select":"intent-select-2kut8F29","switcherThumbWrapper":"switcherThumbWrapper-2u191lDO","input":"input-J7QIcTTo","switcherTrack":"switcherTrack-2XruDVTa","intent-default":"intent-default-3soo5rvS","switcherThumb":"switcherThumb-2yuEucci","focus":"focus-uZMRkCO0"}',
            );
        },
        "6KyJ": function (e, t, a) {
            "use strict";
            var n,
                i = a("q1tI"),
                s = a("TSYQ"),
                o = a("K9GE"),
                l = a("YZ9j");
            a("O7m7");
            !(function (e) {
                (e[(e.Initial = 0)] = "Initial"), (e[(e.Appear = 1)] = "Appear"), (e[(e.Active = 2)] = "Active");
            })(n || (n = {}));
            class r extends i.PureComponent {
                constructor(e) {
                    super(e), (this._stateChangeTimeout = null), (this.state = { state: n.Initial });
                }
                render() {
                    const { className: e, color: t = "black" } = this.props,
                        a = s(l.item, { [l[t]]: Boolean(t) });
                    return i.createElement(
                        "span",
                        { className: s(l.loader, e, this._getStateClass()) },
                        i.createElement("span", { className: a }),
                        i.createElement("span", { className: a }),
                        i.createElement("span", { className: a }),
                    );
                }
                componentDidMount() {
                    this.setState({ state: n.Appear }),
                        (this._stateChangeTimeout = setTimeout(() => {
                            this.setState({ state: n.Active });
                        }, 2 * o.b));
                }
                componentWillUnmount() {
                    this._stateChangeTimeout &&
                        (clearTimeout(this._stateChangeTimeout), (this._stateChangeTimeout = null));
                }
                _getStateClass() {
                    switch (this.state.state) {
                        case n.Initial:
                            return l["loader-initial"];
                        case n.Appear:
                            return l["loader-appear"];
                        default:
                            return "";
                    }
                }
            }
            a.d(t, "a", function () {
                return r;
            });
        },
        "8RO/": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            }),
                a.d(t, "b", function () {
                    return s;
                });
            var n = a("3ClC");
            function i(e, t) {
                return {
                    indicators: e
                        .orderedDataSources(!0)
                        .filter((e) => Object(n.isStudy)(e) && !Object(n.isESDStudy)(e))
                        .map((e) => ({ id: e.metaInfo().id, description: e.title(!0, void 0, !0) })),
                    interval: t,
                };
            }
            function s(e) {
                const t = new Map();
                return (
                    e.forEach((e) => {
                        const [a, n] = t.get(e.id) || [e.description, 0];
                        t.set(e.id, [a, n + 1]);
                    }),
                    Array.from(t.values())
                        .map(([e, t]) => `${e}${t > 1 ? " x " + t : ""}`)
                        .join(", ")
                );
            }
        },
        "9NBK": function (e, t, a) {
            e.exports = { item: "item-2gtivim-", round: "round-2gtivim-" };
        },
        ASyk: function (e, t, a) {
            e.exports = {
                "tablet-normal-breakpoint": "screen and (max-width: 768px)",
                "small-height-breakpoint": "screen and (max-height: 360px)",
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
            };
        },
        BHQn: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="#1DA1F2" d="M10.28 22.26c7.55 0 11.68-6.26 11.68-11.67v-.53c.8-.58 1.49-1.3 2.04-2.13-.74.33-1.53.54-2.36.65.85-.5 1.5-1.32 1.8-2.28-.78.48-1.66.81-2.6 1a4.1 4.1 0 00-7 3.74c-3.4-.17-6.43-1.8-8.46-4.29a4.1 4.1 0 001.28 5.48c-.68-.02-1.3-.2-1.86-.5v.05a4.11 4.11 0 003.29 4.02 4 4 0 01-1.85.08 4.1 4.1 0 003.83 2.85A8.23 8.23 0 014 20.43a11.67 11.67 0 006.28 1.83z"/></svg>';
        },
        CGkO: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M19 15l2.5-2.5c1-1 1.5-3.5-.5-5.5s-4.5-1.5-5.5-.5L13 9M10 12l-2.5 2.5c-1 1-1.5 3.5.5 5.5s4.5 1.5 5.5.5L16 18M17 11l-5 5"/></svg>';
        },
        CX26: function (e, t, a) {
            e.exports = {
                form: "form-9dAINdeN",
                interacting: "interacting-9dAINdeN",
                input: "input-9dAINdeN",
                menu: "menu-9dAINdeN",
                add: "add-9dAINdeN",
                hovered: "hovered-9dAINdeN",
                hover: "hover-9dAINdeN",
                wrap: "wrap-9dAINdeN",
            };
        },
        EsZh: function (e, t, a) {
            "use strict";
            a.r(t),
                a.d(t, "SERIES_ICONS", function () {
                    return d;
                });
            var n = a("G2sT"),
                i = a("Jtxf"),
                s = a("pqsj"),
                o = a("1uoO"),
                l = a("FO3N"),
                r = a("t2Sj"),
                c = a("fD7T"),
                h = a("VgwI");
            const d = { 3: n, 0: i, 1: s, 8: o, 9: l, 2: r, 10: c, 12: h };
        },
        EvtC: function (e, t, a) {
            e.exports = { button: "button-2YcRd2gv" };
        },
        FO3N: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v11h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v5h-1zm0 14h1v5h-1zM8.5 9H10v1H8.5zM11 9h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11zm-1 1h1v1h-1zm-1.5 1H10v1H8.5zm2.5 0h1.5v1H11z"/></svg>';
        },
        G2sT: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M12.5 17.207L18.707 11h2l3.647-3.646-.708-.708L20.293 10h-2L12.5 15.793l-3-3-4.854 4.853.708.708L9.5 14.207z"/><path d="M9 16h1v1H9zm1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1H9zm2 0h1v1h-1zm-3-3h1v1H8zm-1 1h1v1H7zm-1 1h1v1H6zm2 0h1v1H8zm-1 1h1v1H7zm-2 0h1v1H5zm17-9h1v1h-1zm1-1h1v1h-1zm0 2h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-5-7h1v1h-1zm2 0h1v1h-1zm1-1h1v1h-1zm-2 2h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-2-6h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-3-3h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1z"/></svg>';
        },
        GgvM: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor"><path d="M21 7v4h1V6h-5v1z"/><path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"/><path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"/><path d="M16.854 16.146l5 5-.708.708-5-5z"/><g><path d="M7 21v-4H6v5h5v-1z"/><path d="M11.146 16.146l-5 5 .708.708 5-5z"/></g></g></svg>';
        },
        HBiQ: function (e, t, a) {
            e.exports = { button: "button-2eVMAgh-", first: "first-2eVMAgh-", last: "last-2eVMAgh-" };
        },
        Jtxf: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor" stroke-linecap="square"><path d="M10.5 7.5v15M7.5 20.5H10M13.5 11.5H11M19.5 6.5v15M16.5 9.5H19M22.5 16.5H20"/></g></svg>';
        },
        MB0Y: function (e, t, a) {
            "use strict";
            var n = a("q1tI"),
                i = a.n(n),
                s = a("TSYQ"),
                o = a.n(s),
                l = a("5ijr");
            a("4pMH");
            function r(e) {
                const { className: t = "", intent: a = "default", size: n = "small", disabled: i } = e;
                return s(t, l.switcherWrapper, l["size-" + n], !i && l["intent-" + a]);
            }
            class c extends n.PureComponent {
                render() {
                    const { reference: e, size: t, intent: a, ...i } = this.props,
                        o = s(l.input, -1 !== this.props.tabIndex && l.focus);
                    return n.createElement(
                        "div",
                        { className: r(this.props) },
                        n.createElement("input", { ...i, type: "checkbox", className: o, ref: e }),
                        n.createElement(
                            "div",
                            { className: l.switcherThumbWrapper },
                            n.createElement("div", { className: l.switcherTrack }),
                            n.createElement("div", {
                                className: l.switcherThumb,
                            }),
                        ),
                    );
                }
            }
            var h = a("ijHL"),
                d = a("OP2o");
            a.d(t, "a", function () {
                return u;
            }),
                a.d(t, "b", function () {
                    return m;
                });
            const u = d;
            function m(e) {
                const {
                        className: t,
                        checked: a,
                        id: n,
                        label: s,
                        labelDescription: l,
                        value: r,
                        preventLabelHighlight: u,
                        reference: m,
                        switchReference: v,
                        theme: p = d,
                        disabled: b,
                    } = e,
                    g = o()(p.label, a && !u && p.labelOn),
                    S = o()(t, p.wrapper, a && p.wrapperWithOnLabel);
                return i.a.createElement(
                    "label",
                    { className: S, htmlFor: n, ref: m },
                    i.a.createElement(
                        "div",
                        { className: p.labelRow },
                        i.a.createElement("div", { className: g }, s),
                        l && i.a.createElement("div", { className: p.labelHint }, l),
                    ),
                    i.a.createElement(c, {
                        disabled: b,
                        className: p.switch,
                        reference: v,
                        checked: a,
                        onChange: function (t) {
                            const a = t.target.checked;
                            void 0 !== e.onChange && e.onChange(a);
                        },
                        value: r,
                        tabIndex: -1,
                        id: n,
                        ...Object(h.b)(e),
                    }),
                );
            }
        },
        NQJD: function (e, t, a) {
            e.exports = {
                "tablet-small-breakpoint": "screen and (max-width: 428px)",
                item: "item-NklSvNSQ",
                withIcon: "withIcon-NklSvNSQ",
                shortcut: "shortcut-NklSvNSQ",
                loading: "loading-NklSvNSQ",
                icon: "icon-NklSvNSQ",
            };
        },
        O7m7: function (e, t, a) {},
        OP2o: function (e, t, a) {
            e.exports = {
                wrapper: "wrapper-1Eudat6L",
                hovered: "hovered-1Eudat6L",
                labelRow: "labelRow-1Eudat6L",
                label: "label-1Eudat6L",
                labelHint: "labelHint-1Eudat6L",
                labelOn: "labelOn-1Eudat6L",
            };
        },
        Owyg: function (e, t, a) {
            e.exports = { hidden: "hidden-y5m62lMJ" };
        },
        Oy6E: function (e, t, a) {
            e.exports = { spinnerWrap: "spinnerWrap-1dkAsm33" };
        },
        "PR+g": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            });
            var n = a("q1tI");
            const i = () => {
                const e = Object(n.useRef)(!1);
                return (
                    Object(n.useEffect)(
                        () => (
                            (e.current = !0),
                            () => {
                                e.current = !1;
                            }
                        ),
                        [],
                    ),
                    e
                );
            };
        },
        Q6PN: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.5 6A2.5 2.5 0 0 0 6 8.5v11A2.5 2.5 0 0 0 8.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-3h-1v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 7 19.5v-11C7 7.67 7.67 7 8.5 7h3V6h-3zm7 1h4.8l-7.49 7.48.71.7L21 7.72v4.79h1V6h-6.5v1z"/></svg>';
        },
        "QC7+": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return s;
            });
            var n = a("Kxc7"),
                i = a("Wt0y");
            function s(e) {
                return n.enabled("charting_library_base") || Object(i.isProd)()
                    ? "https://www.tradingview.com/x/" + e + "/"
                    : window.location.protocol + "//" + window.location.host + "/x/" + e + "/";
            }
        },
        "QOH/": function (e, t, a) {
            e.exports = { button: "button-1n0tF4SR", text: "text-1n0tF4SR", uppercase: "uppercase-1n0tF4SR" };
        },
        RGo6: function (e, t, a) {
            e.exports = {
                opened: "opened-90gXp5JL",
                hover: "hover-90gXp5JL",
                autoSaveWrapper: "autoSaveWrapper-90gXp5JL",
                sharingWrapper: "sharingWrapper-90gXp5JL",
                button: "button-90gXp5JL",
                buttonSmallPadding: "buttonSmallPadding-90gXp5JL",
                hintPlaceHolder: "hintPlaceHolder-90gXp5JL",
                smallHintPlaceHolder: "smallHintPlaceHolder-90gXp5JL",
                popupItemRowTabletSmall: "popupItemRowTabletSmall-90gXp5JL",
                shortcut: "shortcut-90gXp5JL",
            };
        },
        RYBj: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM4 14.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="currentColor" d="M9 14h4v-4h1v4h4v1h-4v4h-1v-4H9v-1z"/></svg>';
        },
        Rdaf: function (e, t, a) {
            "use strict";
            function n(e, t) {
                const a = document.createElement("a");
                (a.style.display = "none"), (a.href = t), (a.download = e), a.click();
            }
            a.d(t, "a", function () {
                return n;
            });
        },
        "S+Ii": function (e, t, a) {
            e.exports = { buttonUndo: "buttonUndo-nGqa616C", buttonRedo: "buttonRedo-nGqa616C" };
        },
        S0BX: function (e, t, a) {
            e.exports = {
                dropdown: "dropdown-3UuXmxSn",
                label: "label-3UuXmxSn",
                smallWidthTitle: "smallWidthTitle-3UuXmxSn",
                smallWidthMenuItem: "smallWidthMenuItem-3UuXmxSn",
                smallWidthWrapper: "smallWidthWrapper-3UuXmxSn",
            };
        },
        SchQ: function (e, t, a) {
            e.exports = { button: "button-2DZWpSVr", isDisabled: "isDisabled-2DZWpSVr", text: "text-2DZWpSVr" };
        },
        Sl3V: function (e, t, a) {
            e.exports = {
                menu: "menu-N-Iyk8ip",
                menuSmallTablet: "menuSmallTablet-N-Iyk8ip",
                menuItemHeaderTabletSmall: "menuItemHeaderTabletSmall-N-Iyk8ip",
                menuItemHeader: "menuItemHeader-N-Iyk8ip",
            };
        },
        To8B: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>';
        },
        UJ4t: function (e, t, a) {
            e.exports = { wrap: "wrap-3jbioG5e" };
        },
        VgwI: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7H7v14h5V7H7.5zM8 20V8h3v12H8zm7.5-11H15v10h5V9h-4.5zm.5 9v-8h3v8h-3z"/></svg>';
        },
        XWsk: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20 17l-5 5M15 17l5 5M9 11.5h7M17.5 8a2.5 2.5 0 0 0-5 0v11a2.5 2.5 0 0 1-5 0"/></svg>';
        },
        XfUw: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>';
        },
        YEs3: function (e, t, a) {
            e.exports = { button: "button-3HNCAKoZ", menu: "menu-3HNCAKoZ" };
        },
        YZ9j: function (e) {
            e.exports = JSON.parse(
                '{"loader":"loader-8x1ZxRwP","item":"item-2-89r_cd","tv-button-loader":"tv-button-loader-23vqS1uY","black":"black-20Ytsf0V","white":"white-1ucCcc2I","gray":"gray-XDhHSS-T","loader-initial":"loader-initial-1deQDeio","loader-appear":"loader-appear-2krFtMrd"}',
            );
        },
        aVq2: function (e, t, a) {
            e.exports = {
                button: "button-2R6OKuTS",
                first: "first-2R6OKuTS",
                last: "last-2R6OKuTS",
                menu: "menu-2R6OKuTS",
                dropdown: "dropdown-2R6OKuTS",
                menuContent: "menuContent-2R6OKuTS",
                section: "section-2R6OKuTS",
                smallTabletSectionTitle: "smallTabletSectionTitle-2R6OKuTS",
                addCustomInterval: "addCustomInterval-2R6OKuTS",
                hovered: "hovered-2R6OKuTS",
            };
        },
        cSDC: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            });
            var n = a("YFKU");
            const i = [
                { name: "1", label: Object(n.t)("minutes", { context: "interval" }) },
                { name: "1H", label: Object(n.t)("hours", { context: "interval" }) },
                { name: "1D", label: Object(n.t)("days", { context: "interval" }) },
                { name: "1W", label: Object(n.t)("weeks", { context: "interval" }) },
                {
                    name: "1M",
                    label: Object(n.t)("months", {
                        context: "interval",
                    }),
                },
            ];
        },
        cwLw: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return c;
            });
            var n = a("q1tI"),
                i = a.n(n),
                s = a("TSYQ"),
                o = a.n(s),
                l = a("ML8+"),
                r = a("fioS");
            function c(e) {
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                        "div",
                        {
                            className: o()(e.className, r.summary),
                            onClick: function () {
                                e.onStateChange && e.onStateChange(!e.open);
                            },
                            "data-open": e.open,
                        },
                        e.summary,
                        i.a.createElement(l.a, { className: r.caret, dropped: Boolean(e.open) }),
                    ),
                    e.open && e.children,
                );
            }
        },
        fD7T: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="none" stroke="currentColor"><path stroke-dasharray="1,1" d="M4 14.5h22"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 12.5l2-4 1 2 2-4 3 6"/><path stroke-linecap="round" d="M5.5 16.5l-1 2"/><path stroke-linecap="round" stroke-linejoin="round" d="M17.5 16.5l2 4 2-4m2-4l1-2-1 2z"/></g></svg>';
        },
        fESK: function (e, t, a) {
            e.exports = {
                labelRow: "labelRow-2noQNU_F",
                toolbox: "toolbox-2noQNU_F",
                description: "description-2noQNU_F",
                descriptionTabletSmall: "descriptionTabletSmall-2noQNU_F",
                item: "item-2noQNU_F",
                titleItem: "titleItem-2noQNU_F",
                titleItemTabletSmall: "titleItemTabletSmall-2noQNU_F",
                itemTabletSmall: "itemTabletSmall-2noQNU_F",
                itemLabelTabletSmall: "itemLabelTabletSmall-2noQNU_F",
                wrap: "wrap-2noQNU_F",
                hovered: "hovered-2noQNU_F",
            };
        },
        fEjm: function (e, t, a) {
            e.exports = {
                favorite: "favorite-I_fAY9V2",
                disabled: "disabled-I_fAY9V2",
                active: "active-I_fAY9V2",
                checked: "checked-I_fAY9V2",
            };
        },
        fioS: function (e, t, a) {
            e.exports = { summary: "summary-3UYGeClB", hovered: "hovered-3UYGeClB", caret: "caret-3UYGeClB" };
        },
        gla1: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            });
            var n = a("q1tI");
            const i = () => {
                const [, e] = Object(n.useReducer)((e, t) => e + 1, 0);
                return e;
            };
        },
        "i/MG": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return c;
            });
            a("YFKU");
            var n = a("q1tI"),
                i = a("TSYQ"),
                s = a("Iivm"),
                o = a("To8B"),
                l = a("kXJy");
            const r = { remove: window.t("Remove") };
            function c(e) {
                const {
                    className: t,
                    isActive: a,
                    onClick: c,
                    title: h,
                    hidden: d,
                    "data-name": u = "remove-button",
                    ...m
                } = e;
                return n.createElement(s.a, {
                    ...m,
                    "data-name": u,
                    className: i(l.button, "apply-common-tooltip", a && l.active, d && l.hidden, t),
                    icon: o,
                    onClick: c,
                    title: h || r.remove,
                });
            }
        },
        jKyl: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><g fill="none"><path stroke="currentColor" d="M11 20.5H7.5a5 5 0 1 1 .42-9.98 7.5 7.5 0 0 1 14.57 2.1 4 4 0 0 1-1 7.877H18"/><path stroke="currentColor" d="M14.5 24V12.5M11 16l3.5-3.5L18 16"/></g></svg>';
        },
        kXJy: function (e, t, a) {
            e.exports = {
                button: "button-3B9fDLtm",
                disabled: "disabled-3B9fDLtm",
                active: "active-3B9fDLtm",
                hidden: "hidden-3B9fDLtm",
            };
        },
        "koZ+": function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.118 6a.5.5 0 0 0-.447.276L9.809 8H5.5A1.5 1.5 0 0 0 4 9.5v10A1.5 1.5 0 0 0 5.5 21h16a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 21.5 8h-4.309l-.862-1.724A.5.5 0 0 0 15.882 6h-4.764zm-1.342-.17A1.5 1.5 0 0 1 11.118 5h4.764a1.5 1.5 0 0 1 1.342.83L17.809 7H21.5A2.5 2.5 0 0 1 24 9.5v10a2.5 2.5 0 0 1-2.5 2.5h-16A2.5 2.5 0 0 1 3 19.5v-10A2.5 2.5 0 0 1 5.5 7h3.691l.585-1.17z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"/></svg>';
        },
        lAXe: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21"><g fill="none" stroke="currentColor"><path d="M18.5 11v5.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H9"/><path stroke-linecap="square" d="M18 2l-8.5 8.5m4-9h5v5"/></g></svg>';
        },
        miV2: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a("Kxc7"),
                i = a("q1tI"),
                s = a.n(i),
                o = a("17x9"),
                l = a("dfhE"),
                r = a("EsZh"),
                c = a("pr86"),
                h = a("Iivm"),
                d = a("N5tr"),
                u = a("82wv"),
                m = a("TSYQ"),
                v = a.n(m),
                p = a("UJ4t");
            class b extends i.PureComponent {
                render() {
                    const { children: e, className: t, ...a } = this.props;
                    return i.createElement("div", { className: m(t, p.wrap), ...a }, e);
                }
            }
            var g = a("tU7i"),
                S = a("ijHL"),
                w = a("HBiQ");
            class C extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._handleClick = () => {
                            const { onClick: e, onClickArg: t } = this.props;
                            e && e(t);
                        });
                }
                render() {
                    const {
                            isFirst: e,
                            isLast: t,
                            hint: a,
                            text: n,
                            icon: s,
                            isActive: o,
                            isDisabled: l,
                            className: r,
                        } = this.props,
                        c = Object(S.b)(this.props);
                    return i.createElement(g.b, {
                        ...c,
                        icon: s,
                        text: n,
                        title: a,
                        isDisabled: l,
                        isActive: o,
                        isGrouped: !0,
                        onClick: this._handleClick,
                        className: m(r, w.button, { [w.first]: e, [w.last]: t }),
                    });
                }
            }
            var f = a("KKsp"),
                _ = a("/KDZ"),
                y = a("uhCe"),
                k = a("dhVi"),
                x = a("1TxM"),
                E = a("YEs3");
            const O = {
                0: window.t("Bars"),
                1: window.t("Candles"),
                9: window.t("Hollow Candles"),
                8: window.t("Heikin Ashi"),
                2: window.t("Line"),
                3: window.t("Area"),
                10: window.t("Baseline"),
                12: window.t("High-Low"),
            };
            const M = { barsStyle: window.t("Bar's Style"), labels: O },
                T = Object(x.b)();
            class N extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleChangeStyle = (e) => {
                            const { favorites: t, lastSelectedNotFavorite: a, activeStyle: n } = this.state;
                            this.setState({ activeStyle: e, lastSelectedNotFavorite: t.includes(n) ? a : n });
                        }),
                        (this._handleSelectStyle = (e) => {
                            const { chartWidgetCollection: t } = this.context;
                            e !== t.activeChartStyle.value() && t.setChartStyleToWidget(e);
                        }),
                        (this._handleClickFavorite = (e) => {
                            this._isStyleFavorited(e) ? this._handleRemoveFavorite(e) : this._handleAddFavorite(e);
                        }),
                        Object(x.c)(t, {
                            chartWidgetCollection: o.any.isRequired,
                            favoriteChartStylesService: o.any.isRequired,
                        });
                    const { chartWidgetCollection: a, favoriteChartStylesService: i } = t,
                        s = a.activeChartStyle.value(),
                        l = i.get();
                    n.enabled("japanese_chart_styles"),
                        (this.state = {
                            activeStyle: s,
                            favorites: l,
                            styles: [0, 1, 9, 2, 3, 10],
                            japaneseStyles: [8],
                        });
                    n.enabled("chart_style_hilo") && this.state.styles.push(12);
                }
                componentDidMount() {
                    const { chartWidgetCollection: e, favoriteChartStylesService: t } = this.context;
                    e.activeChartStyle.subscribe(this._handleChangeStyle),
                        t.getOnChange().subscribe(this, this._handleChangeSettings);
                }
                componentWillUnmount() {
                    const { chartWidgetCollection: e, favoriteChartStylesService: t } = this.context;
                    e.activeChartStyle.unsubscribe(this._handleChangeStyle),
                        t.getOnChange().unsubscribe(this, this._handleChangeSettings);
                }
                render() {
                    const { isShownQuicks: e, displayMode: t = "full", id: a } = this.props,
                        {
                            activeStyle: n,
                            favorites: s,
                            styles: o,
                            japaneseStyles: c,
                            lastSelectedNotFavorite: d,
                        } = this.state,
                        m = "small" !== t && e && 0 !== s.length,
                        v = [...s];
                    v.includes(n) ? void 0 !== d && v.push(d) : v.push(n);
                    const p = m && v.length > 1;
                    return i.createElement(_.a, { rule: y.a.TabletSmall }, (e) => {
                        const t = o.map((t) => this._renderPopupMenuItem(t, t === n, e)),
                            s = c.map((t) => this._renderPopupMenuItem(t, t === n, e));
                        return i.createElement(
                            b,
                            { id: a },
                            p &&
                                v.map((e, t) =>
                                    i.createElement(C, {
                                        className: E.button,
                                        icon: r.SERIES_ICONS[e],
                                        isActive: m && n === e,
                                        key: t,
                                        hint: M.labels[e],
                                        isFirst: 0 === t,
                                        isLast: t === v.length - 1,
                                        onClick: m ? this._handleSelectStyle : void 0,
                                        onClickArg: e,
                                        "data-value": l.STYLE_SHORT_NAMES[e],
                                    }),
                                ),
                            i.createElement(
                                u.a,
                                {
                                    arrow: Boolean(p),
                                    content: p
                                        ? void 0
                                        : i.createElement(b, null, i.createElement(h.a, { icon: r.SERIES_ICONS[n] })),
                                    title: p ? M.barsStyle : M.labels[n],
                                    className: E.menu,
                                    isDrawer: e,
                                },
                                t,
                                !!s.length && i.createElement(f.a, null),
                                s,
                            ),
                        );
                    });
                }
                _renderPopupMenuItem(e, t, a) {
                    const { isFavoritingAllowed: n } = this.props,
                        s = this._isStyleFavorited(e);
                    return i.createElement(d.b, {
                        key: e,
                        theme: a ? k.a : void 0,
                        icon: r.SERIES_ICONS[e],
                        isActive: t,
                        label: M.labels[e] || "",
                        onClick: this._handleSelectStyle,
                        onClickArg: e,
                        showToolboxOnHover: !s,
                        toolbox:
                            n &&
                            i.createElement(c.a, {
                                isActive: t,
                                isFilled: s,
                                onClick: () => this._handleClickFavorite(e),
                            }),
                        "data-value": l.STYLE_SHORT_NAMES[e],
                    });
                }
                _handleChangeSettings(e) {
                    this.setState({ lastSelectedNotFavorite: void 0, favorites: e });
                }
                _isStyleFavorited(e) {
                    return -1 !== this.state.favorites.indexOf(e);
                }
                _handleAddFavorite(e) {
                    const { favorites: t } = this.state,
                        { favoriteChartStylesService: a } = this.context;
                    a.set([...t, e]);
                }
                _handleRemoveFavorite(e) {
                    const { favorites: t } = this.state,
                        { favoriteChartStylesService: a } = this.context;
                    a.set(t.filter((t) => t !== e));
                }
            }
            N.contextType = T;
            var R = a("YFKU"),
                I = a("1Tx8");
            const A = ["medium", "small"];
            function j(e) {
                const { text: t, className: a, displayMode: n, collapseWhen: s = A, ...o } = e,
                    l = !s.includes(n);
                return i.createElement(g.b, {
                    ...o,
                    text: l ? t : void 0,
                    className: m(a, I.button, l ? I.withText : I.withoutText),
                });
            }
            var F = a("JWMC"),
                H = a("RYBj");
            const z = { compare: window.t("Compare"), compareOrAddSymbol: window.t("Compare or Add Symbol") },
                L = Object(x.b)();
            class W extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._updateState = (e) => {
                            this.setState({ isActive: e });
                        }),
                        (this._handleClick = () => {
                            var e;
                            Object(F.trackEvent)("GUI", "Chart Header Toolbar", "compare"),
                                null === (e = this._compareDialogRenderer) || void 0 === e || e.show();
                        }),
                        Object(x.c)(t, { chartWidgetCollection: o.any.isRequired }),
                        (this.state = { isActive: !1 }),
                        (this._compareDialogRenderer = this.context.chartWidgetCollection.getCompareDialogRenderer());
                }
                componentDidMount() {
                    var e;
                    null === (e = this._compareDialogRenderer) ||
                        void 0 === e ||
                        e.visible().subscribe(this._updateState);
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._compareDialogRenderer) ||
                        void 0 === e ||
                        e.visible().unsubscribe(this._updateState);
                }
                render() {
                    const { isActive: e } = this.state;
                    return i.createElement(j, {
                        ...this.props,
                        icon: H,
                        isOpened: e,
                        onClick: this._handleClick,
                        text: z.compare,
                        title: z.compareOrAddSymbol,
                    });
                }
            }
            W.contextType = L;
            var D = a("p0W+"),
                P = a("GgvM");
            const U = { hint: window.t("Fullscreen mode") },
                V = Object(x.b)();
            class B extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const { chartWidgetCollection: e } = this.context;
                            e.startFullscreen();
                        }),
                        Object(x.c)(t, { chartWidgetCollection: o.any.isRequired });
                }
                render() {
                    const { className: e, id: t } = this.props;
                    return i.createElement(D.a, {
                        id: t,
                        icon: P,
                        onClick: this._handleClick,
                        title: U.hint,
                        className: m(e),
                    });
                }
            }
            B.contextType = V;
            var K = a("Eyy1"),
                Q = a("/DW5"),
                G = a("txPx");
            const X = Object(G.getLogger)("FavoritesInfo");
            function q(e, t) {
                if (0 === e.length) return Promise.resolve([]);
                X.logNormal("Requesting favorites info");
                const a = [],
                    n = new Map(),
                    i = new Map(),
                    s = new Map();
                return (
                    e.forEach((e) => {
                        switch (e.type) {
                            case "java":
                                s.set(e.studyId, e);
                                break;
                            case "pine":
                                isPublishedPineId(e.pineId) ? n.set(e.pineId, e) : i.set(e.pineId, e);
                                break;
                            default:
                                Object(K.assert)(!1, "unknown favorite type " + JSON.stringify(e));
                        }
                    }),
                    0 !== s.size &&
                        a.push(
                            t
                                .findAllJavaStudies()
                                .then((e) => {
                                    const t = new Map();
                                    for (const a of e)
                                        !a.is_hidden_study &&
                                            s.has(a.id) &&
                                            t.set(a.id, {
                                                name: a.description,
                                                localizedName: a.description_localized,
                                                studyMarketShittyObject: a,
                                            });
                                    return t;
                                })
                                .then((e) => {
                                    const t = (function (e, t) {
                                        const a = { items: [], notFoundItems: [] };
                                        return (
                                            e.forEach((e, n) => {
                                                const i = t.get(n);
                                                void 0 !== i
                                                    ? a.items.push({ item: e, info: i })
                                                    : a.notFoundItems.push(e);
                                            }),
                                            a
                                        );
                                    })(s, e);
                                    if (0 !== t.notFoundItems.length) {
                                        const e = t.notFoundItems.map((e) => e.studyId);
                                        X.logWarn("Cannot find java scripts: " + JSON.stringify(e));
                                    }
                                    return t.items;
                                }),
                        ),
                    Promise.all(a).then(
                        (e) => (X.logNormal("Requesting favorites info finished"), e.reduce((e, t) => e.concat(t), [])),
                    )
                );
            }
            var J = a("CW80"),
                Y = a("mMWL"),
                Z = a("39J6"),
                $ = a("sHKj");
            function ee(e) {
                return i.createElement("div", { className: m(e.className, $.title) }, e.children);
            }
            var te = a("FQhm"),
                ae = a("XWsk"),
                ne = a("S0BX");
            const ie = {
                    text: window.t("Indicators"),
                    hint: n.enabled("study_dialog_fundamentals_economy_addons")
                        ? window.t("Indicators & Strategies")
                        : window.t("Indicators"),
                    favorites: window.t("Favorites"),
                },
                se = Object(Q.b)({ keys: ["/"], text: "{0}" }),
                oe = Object(x.b)();
            class le extends s.a.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._promise = null),
                        (this._menu = s.a.createRef()),
                        (this._setActiveState = (e) => {
                            this.setState({ isActive: e });
                        }),
                        (this._handleClick = () => {
                            const { studyMarket: e } = this.props;
                            this.setState({ isActive: !0 }, () => {
                                e.visible().value() ? e.hide() : e.show();
                            });
                        }),
                        (this._handleSelectIndicator = (e) => {
                            e = Object(K.ensureDefined)(e);
                            const { chartWidgetCollection: t } = this.context;
                            if ("java" === e.type) {
                                const t = Object(J.tryFindStudyLineToolNameByStudyId)(e.studyId);
                                if (null !== t) return void Y.tool.setValue(t);
                            }
                            t.activeChartWidget.value().insertStudy(e);
                        }),
                        (this._handleFavoriteIndicatorsChange = () => {
                            const { favoriteScriptsModel: e } = this.context,
                                t = [...Object(K.ensureDefined)(e).favorites()];
                            this.setState({ favorites: t }), this._clearCache();
                        }),
                        (this._handleMouseEnter = () => {
                            this._prefetchFavorites();
                        }),
                        (this._handleWrapClick = () => {
                            this._prefetchFavorites();
                        }),
                        (this._handleChangeActiveWidget = () => {
                            this._clearCache();
                        }),
                        (this._clearCache = () => {
                            (this._promise = null), this.setState({ infos: [] });
                        }),
                        (this._handleScriptRenamed = (e) => {
                            const { favoriteScriptsModel: t } = this.context;
                            void 0 !== t && t.isFav(e.scriptIdPart) && this._clearCache();
                        }),
                        Object(x.c)(t, { favoriteScriptsModel: o.any, chartWidgetCollection: o.any.isRequired });
                    const { favoriteScriptsModel: a } = t,
                        n = void 0 !== a ? a.favorites() : [];
                    this.state = { isActive: !1, isLoading: !1, favorites: n, infos: [] };
                }
                componentDidMount() {
                    const { studyMarket: e } = this.props,
                        { favoriteScriptsModel: t, chartWidgetCollection: a } = this.context;
                    e.visible().subscribe(this._setActiveState),
                        void 0 !== t &&
                            (t.favoritesChanged().subscribe(this, this._handleFavoriteIndicatorsChange),
                            a.activeChartWidget.subscribe(this._handleChangeActiveWidget)),
                        te.on("TVScriptRenamed", this._handleScriptRenamed, null);
                }
                componentWillUnmount() {
                    const { studyMarket: e } = this.props,
                        { favoriteScriptsModel: t, chartWidgetCollection: a } = this.context;
                    e.visible().unsubscribe(this._setActiveState),
                        void 0 !== t &&
                            (t.favoritesChanged().unsubscribe(this, this._handleFavoriteIndicatorsChange),
                            a.activeChartWidget.unsubscribe(this._handleChangeActiveWidget)),
                        te.unsubscribe("TVScriptRenamed", this._handleScriptRenamed, null),
                        (this._promise = null);
                }
                render() {
                    const { isActive: e, favorites: t, isLoading: a } = this.state,
                        { className: n, displayMode: i, id: o } = this.props,
                        { chartWidgetCollection: l } = this.context;
                    return s.a.createElement(
                        b,
                        { id: o, onMouseEnter: this._handleMouseEnter, onClick: this._handleWrapClick },
                        s.a.createElement(j, {
                            displayMode: i,
                            className: n,
                            icon: ae,
                            isOpened: e,
                            onClick: this._handleClick,
                            text: ie.text,
                            title: ie.hint,
                            "data-role": "button",
                            "data-name": "open-indicators-dialog",
                            "data-tooltip-hotkey": se,
                        }),
                        t.length > 0 &&
                            s.a.createElement(_.a, { rule: "screen and (max-width: 428px)" }, (e) =>
                                s.a.createElement(
                                    u.a,
                                    {
                                        key: l.activeChartWidget.value().id(),
                                        arrow: !0,
                                        closeOnClickOutside: !0,
                                        isDrawer: e,
                                        drawerPosition: "Bottom",
                                        title: ie.favorites,
                                        ref: this._menu,
                                        "data-name": "show-favorite-indicators",
                                    },
                                    s.a.createElement(
                                        "div",
                                        { className: v()(ne.dropdown, e && ne.smallWidthWrapper) },
                                        s.a.createElement(
                                            ee,
                                            { className: e && ne.smallWidthTitle },
                                            window.t("Favorite Indicators"),
                                        ),
                                        a && s.a.createElement(Z.a, null),
                                        !a &&
                                            s.a.createElement(
                                                s.a.Fragment,
                                                null,
                                                this.state.infos.length > 0
                                                    ? this.state.infos.map((t) =>
                                                          s.a.createElement(d.b, {
                                                              className: v()(e && ne.smallWidthMenuItem),
                                                              theme: e ? k.a : void 0,
                                                              key:
                                                                  "java" === t.item.type
                                                                      ? t.item.studyId
                                                                      : t.item.pineId,
                                                              onClick: this._handleSelectIndicator,
                                                              onClickArg: t.item,
                                                              label: s.a.createElement(
                                                                  "span",
                                                                  {
                                                                      className: v()(
                                                                          !e && ne.label,
                                                                          e && ne.smallWidthLabel,
                                                                          "apply-overflow-tooltip",
                                                                      ),
                                                                  },
                                                                  re(t),
                                                              ),
                                                          }),
                                                      )
                                                    : null !== this._promise &&
                                                          s.a.createElement(d.b, {
                                                              isDisabled: !0,
                                                              label: window.t("You have no Favorites Indicators yet"),
                                                          }),
                                            ),
                                    ),
                                ),
                            ),
                    );
                }
                _prefetchFavorites() {
                    const { chartWidgetCollection: e } = this.context;
                    if (null !== this._promise || !window.is_authenticated) return;
                    const t = e.activeChartWidget.value();
                    if (!t.hasModel()) return;
                    const a = t.model().model().studyMetaInfoRepository();
                    this.setState({ isLoading: !0 });
                    const n = (this._promise = q(this.state.favorites, a).then((e) => {
                        if (n !== this._promise) return;
                        (e = [...e].sort((e, t) => re(e).localeCompare(re(t)))),
                            this.setState({ infos: e, isLoading: !1 }, () => {
                                this._menu.current && this._menu.current.update();
                            });
                    }));
                }
            }
            function re(e) {
                return e.info.localizedName || Object(R.t)(e.info.name, { context: "study" });
            }
            le.contextType = oe;
            var ce = a("PT1i"),
                he = a("pPtI"),
                de = a("LxhU"),
                ue = a("4hTN");
            function me(e) {
                return i.createElement(
                    "div",
                    { className: m(ue.value, { [ue.selected]: e.isSelected }) },
                    e.value,
                    e.metric,
                );
            }
            var ve = a("9dlw"),
                pe = a("ML8+"),
                be = a("cSDC"),
                ge = a("CX26");
            class Se extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._timeMenu = null),
                        (this._setMenuRef = (e) => {
                            this._timeMenu = e;
                        }),
                        (this._handleChangeInput = (e) => {
                            const { value: t } = e.currentTarget;
                            /^[0-9]*$/.test(t) && this.setState({ inputValue: t });
                        }),
                        (this._handleSelectTime = (e) => {
                            this.setState({ selectedTime: e }), this._closeMenu();
                        }),
                        (this._handleClickAdd = () => {
                            const { inputValue: e, selectedTime: t } = this.state;
                            this.props.onAdd(e, t);
                        }),
                        (this._toggleMenu = () => {
                            this.state.isOpenedMenu ? this._closeMenu() : this._openMenu();
                        }),
                        (this._closeMenu = () => {
                            this.props.onCloseMenu(), this.setState({ isOpenedMenu: !1 });
                        }),
                        (this._openMenu = () => {
                            this.props.onOpenMenu(), this.setState({ isOpenedMenu: !0 });
                        }),
                        (this._getMenuPosition = () => {
                            const e = Object(K.ensureNotNull)(this._timeMenu).getBoundingClientRect();
                            return { overrideWidth: e.width, x: e.left, y: e.bottom + 1 };
                        }),
                        (this.state = { inputValue: "1", isOpenedMenu: !1, selectedTime: be.a[0].name });
                }
                render() {
                    const { inputValue: e, isOpenedMenu: t, menuWidth: a, selectedTime: n } = this.state;
                    return i.createElement(
                        "div",
                        { className: m(ge.form, { [ge.interacting]: t }) },
                        i.createElement("input", {
                            className: ge.input,
                            maxLength: 7,
                            onChange: this._handleChangeInput,
                            value: e,
                        }),
                        i.createElement(
                            "div",
                            { className: ge.menu, onClick: this._toggleMenu, ref: this._setMenuRef },
                            be.a.find((e) => e.name === n).label,
                            i.createElement(pe.a, { dropped: t }),
                        ),
                        i.createElement(
                            "div",
                            { className: ge.add, onClick: this._handleClickAdd },
                            Object(R.t)("Add"),
                        ),
                        i.createElement(
                            ve.a,
                            {
                                doNotCloseOn: this,
                                isOpened: t,
                                minWidth: a,
                                onClose: this._closeMenu,
                                position: this._getMenuPosition,
                            },
                            be.a.map((e) =>
                                i.createElement(d.b, {
                                    dontClosePopup: !0,
                                    key: e.name,
                                    label: e.label,
                                    onClick: this._handleSelectTime,
                                    onClickArg: e.name,
                                }),
                            ),
                        ),
                    );
                }
            }
            var we = a("i/MG"),
                Ce = a("8d0Q"),
                fe = a("8+VR"),
                _e = a("uPhS");
            function ye(e) {
                const {
                        interval: t,
                        hint: a,
                        isActive: n,
                        isDisabled: o,
                        isFavorite: l,
                        isSignaling: r,
                        onClick: h,
                        onClickRemove: u,
                        onClickFavorite: m,
                        isSmallTablet: p,
                    } = e,
                    b = Object(S.b)(e),
                    [g, w] = Object(Ce.c)(),
                    C = s.a.useCallback(() => u(t), [u, t]),
                    f = s.a.useCallback(() => m(t), [m, t]),
                    _ = Object(i.useRef)(null);
                return (
                    Object(i.useEffect)(() => {
                        var e;
                        r && p && (null === (e = _.current) || void 0 === e || e.scrollIntoView());
                    }, [r, p]),
                    s.a.createElement(
                        "div",
                        { ...w, ref: _ },
                        s.a.createElement(d.b, {
                            ...b,
                            className: v()(p && _e.smallWidthMenuItem),
                            theme: p ? k.a : void 0,
                            isActive: n,
                            isDisabled: o,
                            isHovered: r,
                            onClick: h,
                            onClickArg: t,
                            toolbox: (function () {
                                const { isRemovable: t, isFavoritingAllowed: a } = e,
                                    i = s.a.createElement(we.a, {
                                        key: "remove",
                                        isActive: n,
                                        hidden: !fe.touch && !g,
                                        onClick: C,
                                    }),
                                    r = s.a.createElement(c.a, {
                                        key: "favorite",
                                        isActive: n,
                                        isFilled: l,
                                        onClick: f,
                                    });
                                return [t && i, !o && a && r];
                            })(),
                            showToolboxOnHover: !l,
                            label: a,
                        }),
                    )
                );
            }
            const ke = {
                [de.ResolutionKind.Ticks]: window.t("Ticks", { context: "interval_group_name" }),
                [de.ResolutionKind.Seconds]: window.t("Seconds", { context: "interval_group_name" }),
                [de.ResolutionKind.Minutes]: window.t("Minutes", { context: "interval_group_name" }),
                [de.SpecialResolutionKind.Hours]: window.t("Hours", { context: "interval_group_name" }),
                [de.ResolutionKind.Days]: window.t("Days", { context: "interval_group_name" }),
                [de.ResolutionKind.Weeks]: window.t("Weeks", { context: "interval_group_name" }),
                [de.ResolutionKind.Months]: window.t("Months", { context: "interval_group_name" }),
                [de.ResolutionKind.Range]: window.t("Ranges", { context: "interval_group_name" }),
                [de.ResolutionKind.Invalid]: "",
            };
            function xe(e, t = !1) {
                return { id: e, name: ke[e], items: [], mayOmitSeparator: t };
            }
            var Ee = a("cwLw"),
                Oe = a("aIyQ"),
                Me = a.n(Oe),
                Te = a("X0gx"),
                Ne = a("tWVy"),
                Re = a("aVq2");
            const Ie = { openDialog: Object(R.t)("Open Interval Dialog"), timeInterval: Object(R.t)("Time Interval") },
                Ae = Object(Q.b)({ keys: [","], text: Object(R.t)("Number or {hotKey_0}") }),
                je = Object(x.b)(),
                Fe = new Me.a(),
                He = s.a.lazy(async () => ({
                    default: (
                        await Promise.all([
                            a.e(3),
                            a.e(8),
                            a.e(9),
                            a.e(16),
                            a.e(17),
                            a.e(23),
                            a.e(35),
                            a.e(91),
                            a.e(2),
                            a.e(15),
                            a.e(31),
                            a.e("custom-intervals-add-dialog"),
                        ]).then(a.bind(null, "w9vS"))
                    ).ToolWidgetIntervalsAddDialog,
                }));
            function ze(e) {
                {
                    const t = de.Interval.parse(e);
                    if (!Object(he.isSecondsEnabled)() && t.isSeconds()) return !1;
                    if (!Object(he.isTicksEnabled)() && t.isTicks()) return !1;
                }
                return !0;
            }
            class Le extends s.a.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._menu = s.a.createRef()),
                        (this._renderChildren = (e, t) => [
                            ...this._createMenuItems(e, t),
                            ...this._createIntervalForm(t),
                        ]),
                        (this._handleChangeInterval = (e) => {
                            const { activeInterval: t, lastNotQuicked: a } = this.state,
                                n = this._getQuicks();
                            this.setState({
                                activeInterval: Object(he.normalizeIntervalString)(e),
                                lastNotQuicked: void 0 === t || n.includes(t) ? a : t,
                            });
                        }),
                        (this._bindedForceUpdate = () => {
                            this.forceUpdate();
                        }),
                        (this._handleCloseMenu = () => {
                            this.setState({ isOpenedFormMenu: !1 });
                        }),
                        (this._handleOpenMenu = () => {
                            this.setState({ isOpenedFormMenu: !0 });
                        }),
                        (this._handleSelectInterval = (e) => {
                            void 0 !== e &&
                                e !== ce.linking.interval.value() &&
                                this.context.chartWidgetCollection.setResolution(e),
                                e && Object(F.trackEvent)("GUI", "Time Interval", e);
                        }),
                        (this._handleClickFavorite = (e) => {
                            (e = Object(K.ensureDefined)(e)),
                                this._isIntervalFavorite(e)
                                    ? this._handleRemoveFavorite(e)
                                    : this._handleAddFavorite(e);
                        }),
                        (this._handleAddFavorite = (e) => {
                            const { favorites: t } = this.state;
                            this.context.favoriteIntervalsService.set([...t, e]);
                        }),
                        (this._handleRemoveFavorite = (e) => {
                            const { favorites: t } = this.state;
                            this.context.favoriteIntervalsService.set(t.filter((t) => t !== e));
                        }),
                        (this._handleAddInterval = (e, t) => {
                            const { intervalService: a } = this.context,
                                n = a.add(e, t);
                            n && this.setState({ lastAddedInterval: n });
                        }),
                        (this._handleRemoveInterval = (e) => {
                            const { intervalService: t } = this.context;
                            e && (t.remove(e), this._handleRemoveFavorite(e));
                        }),
                        (this._getHandleSectionStateChange = (e) => (t) => {
                            const { menuViewState: a } = this.state,
                                { intervalsMenuViewStateService: n } = this.context;
                            n.set({ ...a, [e]: !t });
                        }),
                        (this._handleOpenAddIntervalDialog = () => {
                            this.setState({ isAddIntervalDialogOpened: !0 });
                        }),
                        (this._handleCloseAddIntervalDialog = () => {
                            this.setState({
                                isAddIntervalDialogOpened: !1,
                            });
                        }),
                        (this._handleGlobalClose = () => {
                            const { isFake: e } = this.props,
                                { isAddIntervalDialogOpened: t } = this.state;
                            e || t || Fe.fire();
                        }),
                        Object(x.c)(t, {
                            chartApiInstance: o.any.isRequired,
                            favoriteIntervalsService: o.any.isRequired,
                            intervalService: o.any.isRequired,
                            intervalsMenuViewStateService: o.any.isRequired,
                        });
                    const {
                        chartApiInstance: a,
                        favoriteIntervalsService: i,
                        intervalService: l,
                        intervalsMenuViewStateService: r,
                    } = t;
                    this._customIntervals = n.enabled("custom_resolutions");
                    const c = ce.linking.interval.value(),
                        h = c && Object(he.normalizeIntervalString)(c),
                        d = i.get(),
                        u = l.getCustomIntervals(),
                        m = r.get();
                    (this._defaultIntervals = a.defaultResolutions().filter(ze).map(he.normalizeIntervalString)),
                        (this.state = {
                            isOpenedFormMenu: !1,
                            activeInterval: h,
                            favorites: d,
                            customs: u,
                            menuViewState: m,
                            isAddIntervalDialogOpened: !1,
                        });
                }
                componentDidMount() {
                    const {
                        favoriteIntervalsService: e,
                        intervalService: t,
                        intervalsMenuViewStateService: a,
                    } = this.context;
                    e.getOnChange().subscribe(this, this._handleChangeFavorites),
                        a.getOnChange().subscribe(this, this._handleChangeMenuViewState),
                        t.getOnChange().subscribe(this, this._handleChangeCustoms),
                        ce.linking.interval.subscribe(this._handleChangeInterval),
                        ce.linking.intraday.subscribe(this._bindedForceUpdate),
                        ce.linking.seconds.subscribe(this._bindedForceUpdate),
                        ce.linking.ticks.subscribe(this._bindedForceUpdate),
                        ce.linking.supportedResolutions.subscribe(this._bindedForceUpdate),
                        Ne.a.subscribe(this, this._handleGlobalClose);
                }
                componentWillUnmount() {
                    const {
                        favoriteIntervalsService: e,
                        intervalService: t,
                        intervalsMenuViewStateService: a,
                    } = this.context;
                    e.getOnChange().unsubscribe(this, this._handleChangeFavorites),
                        a.getOnChange().unsubscribe(this, this._handleChangeMenuViewState),
                        t.getOnChange().unsubscribe(this, this._handleChangeCustoms),
                        ce.linking.interval.unsubscribe(this._handleChangeInterval),
                        ce.linking.intraday.unsubscribe(this._bindedForceUpdate),
                        ce.linking.seconds.unsubscribe(this._bindedForceUpdate),
                        ce.linking.ticks.unsubscribe(this._bindedForceUpdate),
                        ce.linking.supportedResolutions.unsubscribe(this._bindedForceUpdate),
                        Ne.a.unsubscribe(this, this._handleGlobalClose);
                }
                componentDidUpdate(e, t) {
                    this.state.lastAddedInterval && setTimeout(() => this.setState({ lastAddedInterval: void 0 }), 400);
                }
                render() {
                    const { isShownQuicks: e, id: t } = this.props,
                        { activeInterval: a, customs: n, lastNotQuicked: i, isAddIntervalDialogOpened: o } = this.state,
                        l = this._getQuicks(),
                        r = Object(he.sortResolutions)([...l]);
                    void 0 !== a && r.includes(a) ? void 0 !== i && r.push(i) : void 0 !== a && r.push(a);
                    const c = (!(!e || 0 === l.length) || void 0) && r.length > 1,
                        h = {},
                        d = Object(he.mergeResolutions)(this._defaultIntervals, n);
                    (void 0 !== a ? d.concat(a) : d).filter(he.isAvailable).forEach((e) => (h[e] = !0));
                    const v = void 0 !== a ? Object(he.getTranslatedResolutionModel)(a) : null;
                    return s.a.createElement(
                        b,
                        { id: t },
                        c &&
                            r.map((e, t) => {
                                const n = Object(he.getTranslatedResolutionModel)(e);
                                return s.a.createElement(C, {
                                    key: t,
                                    className: m(Re.button, { [Re.first]: 0 === t, [Re.last]: t === r.length - 1 }),
                                    text: s.a.createElement(me, {
                                        value: n.mayOmitMultiplier ? void 0 : n.multiplier,
                                        metric: n.shortKind,
                                    }),
                                    hint: n.hint,
                                    isActive: a === e,
                                    isDisabled: !h[e] && e !== i,
                                    onClick: this._handleSelectInterval,
                                    onClickArg: e,
                                    "data-value": e,
                                });
                            }),
                        s.a.createElement(_.a, { rule: y.a.TabletSmall }, (e) =>
                            s.a.createElement(
                                s.a.Fragment,
                                null,
                                s.a.createElement(
                                    Te.a.Provider,
                                    { value: Fe },
                                    s.a.createElement(
                                        u.a,
                                        {
                                            arrow: Boolean(c),
                                            closeOnClickOutside: !0,
                                            content:
                                                c || null === v
                                                    ? void 0
                                                    : s.a.createElement(
                                                          b,
                                                          { className: Re.menuContent },
                                                          s.a.createElement(me, {
                                                              value: v.mayOmitMultiplier ? void 0 : v.multiplier,
                                                              metric: v.shortKind,
                                                          }),
                                                      ),
                                            title: c || null === v ? Ie.timeInterval : v.hint,
                                            hotKey: c ? Ae : void 0,
                                            className: Re.menu,
                                            ref: this._menu,
                                            isDrawer: e,
                                        },
                                        s.a.createElement(
                                            "div",
                                            { className: Re.dropdown },
                                            this._renderChildren(d, e),
                                        ),
                                    ),
                                ),
                                e &&
                                    o &&
                                    s.a.createElement(
                                        s.a.Suspense,
                                        { fallback: null },
                                        s.a.createElement(He, {
                                            onAdd: this._handleAddInterval,
                                            onClose: this._handleCloseAddIntervalDialog,
                                            onUnmount: this._handleCloseAddIntervalDialog,
                                        }),
                                    ),
                            ),
                        ),
                    );
                }
                _createMenuItems(e, t) {
                    const a = (function (e) {
                        const t = xe(de.ResolutionKind.Ticks),
                            a = xe(de.ResolutionKind.Seconds),
                            n = xe(de.ResolutionKind.Minutes),
                            i = xe(de.SpecialResolutionKind.Hours),
                            s = xe(de.ResolutionKind.Days),
                            o = xe(de.ResolutionKind.Range);
                        return (
                            e.forEach((e) => {
                                const l = de.Interval.parse(e);
                                l.isMinuteHours()
                                    ? i.items.push(e)
                                    : l.isMinutes()
                                    ? Object(de.isHour)(Number(l.multiplier()))
                                        ? i.items.push(e)
                                        : n.items.push(e)
                                    : l.isSeconds()
                                    ? a.items.push(e)
                                    : l.isDWM()
                                    ? s.items.push(e)
                                    : l.isRange()
                                    ? o.items.push(e)
                                    : l.isTicks() && t.items.push(e);
                            }),
                            [t, a, n, i, s, o].filter((e) => 0 !== e.items.length)
                        );
                    })(e).map((e, a, n) => this._renderResolutionsGroup(e, 1 === n.length, t));
                    return (function (e) {
                        let t = !1;
                        return e.filter((e, a, n) => {
                            let i = !0;
                            return (
                                e.type === f.a && ((0 !== a && a !== n.length - 1) || (i = !1), t && (i = !1)),
                                (t = e.type === f.a),
                                i
                            );
                        });
                    })([].concat(...a));
                }
                _createIntervalForm(e) {
                    if (this._customIntervals) {
                        const t = e
                            ? s.a.createElement(
                                  "div",
                                  {
                                      key: "add-dialog",
                                      className: Re.addCustomInterval,
                                      onClick: this._handleOpenAddIntervalDialog,
                                  },
                                  Object(R.t)("Add custom interval") + "…",
                              )
                            : s.a.createElement(Se, {
                                  key: "add-form",
                                  onAdd: this._handleAddInterval,
                                  onCloseMenu: this._handleCloseMenu,
                                  onOpenMenu: this._handleOpenMenu,
                              });
                        return [s.a.createElement(f.a, { key: "custom-interval-separator" }), t];
                    }
                    return [];
                }
                _renderResolutionsGroup(e, t = !1, a) {
                    const n = [],
                        i = e.items.map((e) => this._renderPopupMenuItem(e, a));
                    if (t) n.push(...i);
                    else if (a) {
                        const t = s.a.createElement(
                            "div",
                            { key: e.id },
                            s.a.createElement("div", { className: Re.smallTabletSectionTitle }, e.name),
                            i,
                        );
                        n.push(t);
                    } else {
                        const { intervalsMenuViewStateService: t } = this.context,
                            { menuViewState: a } = this.state;
                        if (!t.isAllowed(e.id)) return [];
                        const o = s.a.createElement(
                            Ee.a,
                            {
                                key: e.id,
                                className: Re.section,
                                summary: e.name,
                                open: !a[e.id],
                                onStateChange: this._getHandleSectionStateChange(e.id),
                            },
                            i,
                        );
                        n.push(o);
                    }
                    return (
                        (!e.mayOmitSeparator || e.items.length > 1) &&
                            (n.unshift(s.a.createElement(f.a, { key: "begin-" + e.name })),
                            n.push(s.a.createElement(f.a, { key: "end-" + e.name }))),
                        n
                    );
                }
                _handleChangeFavorites(e) {
                    this.setState({ lastNotQuicked: void 0, favorites: e });
                }
                _handleChangeCustoms(e) {
                    this.setState({ customs: e });
                }
                _handleChangeMenuViewState(e) {
                    this.setState({ menuViewState: e }, () => {
                        this._menu.current && this._menu.current.update();
                    });
                }
                _renderPopupMenuItem(e, t) {
                    const { isFavoritingAllowed: a } = this.props,
                        { activeInterval: n, lastAddedInterval: i } = this.state,
                        o = e === n,
                        l = Object(he.isAvailable)(e),
                        r = this._isIntervalFavorite(e),
                        c = this._isIntervalDefault(e),
                        h = Object(he.getTranslatedResolutionModel)(e);
                    return s.a.createElement(ye, {
                        key: e,
                        isSmallTablet: t,
                        interval: e,
                        hint: h.hint,
                        isSignaling: i === e,
                        isFavoritingAllowed: a,
                        isDisabled: !l,
                        isFavorite: r,
                        isRemovable: !c,
                        isActive: o,
                        onClick: this._handleSelectInterval,
                        onClickRemove: this._handleRemoveInterval,
                        onClickFavorite: this._handleClickFavorite,
                        "data-value": e,
                    });
                }
                _isIntervalDefault(e) {
                    return this._defaultIntervals.includes(e);
                }
                _isIntervalFavorite(e) {
                    return this.state.favorites.includes(e);
                }
                _getQuicks(e) {
                    return this.props.isShownQuicks && "small" !== this.props.displayMode
                        ? void 0 === e
                            ? this.state.favorites
                            : e
                        : [];
                }
            }
            Le.contextType = je;
            var We = a("sbT4"),
                De = a("lAXe");
            const Pe = { hint: window.t("Open chart in popup") },
                Ue = Object(x.b)();
            class Ve extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const {
                                    chartWidgetCollection: e,
                                    windowMessageService: t,
                                    isFundamental: a,
                                } = this.context,
                                n = e.activeChartWidget.value();
                            n.withModel(null, () => {
                                t.post(parent, "openChartInPopup", {
                                    symbol: n.model().mainSeries().actualSymbol(),
                                    interval: n.model().mainSeries().interval(),
                                    fundamental: a,
                                });
                            });
                        }),
                        Object(x.c)(t, {
                            isFundamental: o.any,
                            chartWidgetCollection: o.any.isRequired,
                            windowMessageService: o.any.isRequired,
                        });
                }
                render() {
                    const { className: e } = this.props;
                    return i.createElement(D.a, {
                        className: m(e, We.button),
                        icon: De,
                        onClick: this._handleClick,
                        title: Pe.hint,
                    });
                }
            }
            Ve.contextType = Ue;
            var Be = a("uafl");
            const Ke = { hint: window.t("Chart Properties") },
                Qe = Object(x.b)();
            class Ge extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            const { chartWidgetCollection: e } = this.context,
                                t = e.activeChartWidget.value();
                            Object(F.trackEvent)("GUI", "Chart Header Toolbar", "chart properties"),
                                t.showGeneralChartProperties();
                        }),
                        Object(x.c)(t, { chartWidgetCollection: o.any.isRequired });
                }
                render() {
                    return i.createElement(D.a, {
                        ...this.props,
                        icon: Be,
                        title: Ke.hint,
                        onClick: this._handleClick,
                    });
                }
            }
            Ge.contextType = Qe;
            var Xe = a("lxNp"),
                qe = (a("bSeV"), a("/3z9")),
                Je = a("//lZ"),
                Ye = a("9uLv"),
                Ze = a("nrMg");
            const $e = "M21.5 21.5h-14a5 5 0 1 1 .42-9.983 7.5 7.5 0 0 1 14.57 2.106 4.002 4.002 0 0 1-.99 7.877z",
                et = 13.08991081237793,
                tt = {
                    strokeDashOffset: 49.242997817993164,
                    strokeDash: 49.866326904296876,
                    strokeGap: et,
                    strokeDashCheck: 0,
                },
                at = {
                    strokeDashOffset: 62.956237716674806,
                    strokeGap: 0,
                    strokeDash: 62.956237716674806,
                    strokeDashCheck: 200,
                };
            class nt extends i.PureComponent {
                constructor(e) {
                    super(e), (this.state = tt);
                }
                componentDidMount() {
                    "saved" === this.props.state ? this.setState(at) : this._goToNextState(this.props.state);
                }
                componentWillUnmount() {
                    this._currentAnimation = void 0;
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.state !== e.state && this._goToNextState(e.state);
                }
                render() {
                    const { strokeDashOffset: e, strokeDash: t, strokeGap: a, strokeDashCheck: n } = this.state,
                        { className: s, size: o, onClick: l, state: r, isHovered: c = !1 } = this.props,
                        h = m(Ze.container, s, c && Ze.hovered, {
                            [Ze.unsaved]: "unsaved" === r,
                            [Ze.saving]: "saving" === r,
                            [Ze.saved]: "saved" === r,
                        });
                    return i.createElement(
                        "svg",
                        {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: h,
                            version: "1.1",
                            width: o,
                            height: o,
                            viewBox: "0 0 28 28",
                            onClick: l,
                        },
                        i.createElement(
                            "g",
                            { fill: "none" },
                            i.createElement("path", {
                                className: Ze.dottedCloud,
                                stroke: "currentColor",
                                strokeDasharray: "3.5,2.5",
                                d: $e,
                            }),
                            i.createElement("path", {
                                className: Ze.spinningCloud,
                                stroke: "currentColor",
                                strokeDasharray: `${t} ${a}`,
                                strokeDashoffset: e,
                                d: $e,
                            }),
                            i.createElement("path", { className: Ze.arrowGap, d: "M11 20h6v5h-6z" }),
                            i.createElement(
                                "g",
                                { className: Ze.arrow, stroke: "currentColor" },
                                i.createElement("path", { strokeLinecap: "square", d: "M14.5 14.5v10" }),
                                i.createElement("path", { d: "M11 17l3.5-3.5L18 17" }),
                            ),
                            i.createElement(
                                "g",
                                { className: Ze.check, stroke: "currentColor" },
                                i.createElement("path", {
                                    strokeDasharray: `${n}% ${200 - n}%`,
                                    d: "M10 15l2.5 2.5L18 12",
                                }),
                            ),
                        ),
                    );
                }
                _goToNextState(e) {
                    switch (e) {
                        case "unsaved":
                            this.setState(tt);
                            break;
                        case "saving":
                            "unsaved" !== this.props.state && this.setState(tt),
                                (this._currentAnimation = Promise.resolve(this._currentAnimation).then(() =>
                                    this._createSpinAnimationWhile(() => "saving" === this.props.state),
                                ));
                            break;
                        case "saved":
                            this._currentAnimation = Promise.resolve(this._currentAnimation)
                                .then(this._createFillGapAnimation.bind(this))
                                .then(this._createCheckAnimation.bind(this));
                    }
                }
                _createSpinAnimationWhile(e) {
                    return this._createSpinAnimation().then(() =>
                        e() ? this._createSpinAnimationWhile(e) : Promise.resolve(),
                    );
                }
                _createSpinAnimation() {
                    return new Promise((e) => {
                        Object(Je.doAnimate)({
                            onStep: (e, t) => {
                                void 0 !== this._currentAnimation && this.setState({ strokeDashOffset: t });
                            },
                            onComplete: () => e(),
                            from: 49.242997817993164,
                            to: 111.57590644836426,
                            easing: Ye.c.linear,
                            duration: 1e3,
                        });
                    });
                }
                _createCheckAnimation() {
                    return new Promise((e) => {
                        Object(Je.doAnimate)({
                            onStep: (e, t) => {
                                void 0 !== this._currentAnimation && this.setState({ strokeDashCheck: Math.round(t) });
                            },
                            onComplete: () => e(),
                            from: 0,
                            to: 200,
                            easing: Ye.c.linear,
                            duration: 1e3,
                        });
                    });
                }
                _createFillGapAnimation() {
                    return new Promise((e) => {
                        Object(Je.doAnimate)({
                            onStep: (e, t) => {
                                void 0 !== this._currentAnimation &&
                                    this.setState({
                                        strokeDashOffset: 62.956237716674806 - t,
                                        strokeGap: t,
                                        strokeDash: 62.956237716674806 - t,
                                    });
                            },
                            onComplete: () => e(),
                            from: et,
                            to: 0,
                            easing: Ye.c.linear,
                            duration: 200,
                        });
                    });
                }
            }
            var it = a("nPPD"),
                st = a("MB0Y"),
                ot = a("3j+J");
            Object(it.a)(st.a, ot);
            var lt = a("2uTr"),
                rt = a("+KIV"),
                ct = a("RGo6"),
                ht = a("SchQ");
            a("OP2o");
            const dt = n.enabled("widget"),
                ut = Object(it.a)(g.a, ht),
                mt = Object(it.a)(d.a, { shortcut: ct.shortcut }),
                vt = {
                    copy: window.t("Copy"),
                    makeCopy: window.t("Make a Copy"),
                    newChartLayout: window.t("New Chart Layout"),
                    loadChartLayout: Object(lt.appendEllipsis)(window.t("Load Chart Layout")),
                    rename: Object(lt.appendEllipsis)(window.t("Rename")),
                    renameChartLayout: window.t("Rename Chart Layout"),
                    saveAs: Object(lt.appendEllipsis)(window.t("Make a Copy")),
                    saveChartLayout: window.t("Save"),
                    saveChartLayoutLong: window.t("Save all charts for all symbols and intervals on your layout"),
                    manageChartLayouts: window.t("Manage Chart Layouts"),
                },
                pt = [],
                bt = Object(Q.b)({ keys: ["Ctrl", "S"], text: "{0} + {1}" });
            class gt extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._toolWidgetMenuRef = i.createRef()),
                        (this._handleSaveHoverBegin = () => {
                            this.setState({
                                iconHovered: !0,
                            });
                        }),
                        (this._handleSaveHoverEnd = () => {
                            this.setState({ iconHovered: !1 });
                        }),
                        (this.state = { iconHovered: !1 });
                }
                render() {
                    const {
                            id: e,
                            isReadOnly: t,
                            displayMode: a,
                            isProcessing: n,
                            title: s,
                            chartId: o,
                            wasChanges: l,
                            onCloneChart: r,
                            onSaveChart: c,
                            hideMenu: d,
                            isTabletSmall: v,
                        } = this.props,
                        { iconHovered: p } = this.state,
                        g = !t && !d;
                    let S = "saved";
                    return (
                        (!l && s) || (S = "unsaved"),
                        n && (S = "saving"),
                        i.createElement(
                            b,
                            null,
                            t
                                ? i.createElement(
                                      b,
                                      null,
                                      i.createElement(j, {
                                          id: e,
                                          displayMode: a,
                                          icon: i.createElement(h.a, { icon: rt }),
                                          isDisabled: n,
                                          onClick: r,
                                          text: vt.copy,
                                          title: vt.makeCopy,
                                          onMouseEnter: this._handleSaveHoverBegin,
                                          onMouseLeave: this._handleSaveHoverEnd,
                                          collapseWhen: pt,
                                      }),
                                  )
                                : i.createElement(
                                      b,
                                      null,
                                      i.createElement(j, {
                                          id: e,
                                          className: m(ct.button, g && ct.buttonSmallPadding),
                                          displayMode: a,
                                          icon: i.createElement(nt, { size: 28, state: S, isHovered: p }),
                                          isDisabled: (o && !l) || n,
                                          onClick: c,
                                          text: s || vt.saveChartLayout,
                                          title: vt.saveChartLayoutLong,
                                          onMouseEnter: this._handleSaveHoverBegin,
                                          onMouseLeave: this._handleSaveHoverEnd,
                                          theme: ut,
                                          collapseWhen: pt,
                                          "data-tooltip-hotkey": dt ? "" : bt,
                                      }),
                                      g &&
                                          i.createElement(
                                              u.a,
                                              {
                                                  ref: this._toolWidgetMenuRef,
                                                  className: "js-save-load-menu-open-button",
                                                  arrow: !0,
                                                  isDrawer: v,
                                                  drawerPosition: "Bottom",
                                                  title: vt.manageChartLayouts,
                                              },
                                              this._renderMenuItems(Boolean(v)),
                                          ),
                                  ),
                        )
                    );
                }
                _renderMenuItems(e) {
                    const {
                            wasChanges: t,
                            isProcessing: a,
                            chartId: n,
                            onSaveChartFromMenu: s,
                            onRenameChart: o,
                            onSaveAsChart: l,
                            onLoadChart: r,
                            onNewChart: c,
                            isAutoSaveEnabled: h,
                            autoSaveId: u,
                            sharingId: v,
                            onAutoSaveChanged: p,
                            isSharingEnabled: b,
                            onSharingChanged: g,
                        } = this.props,
                        S = e ? k.a : mt,
                        w = e ? void 0 : Object(qe.humanReadableHash)(qe.Modifiers.Mod + 83),
                        C = e ? void 0 : Object(R.t)("Dot", { context: "hotkey" }),
                        _ = [];
                    return (
                        _.push(
                            i.createElement(d.b, {
                                key: "save",
                                isDisabled: Boolean(a || (!t && n)),
                                label: vt.saveChartLayout,
                                onClick: s,
                                shortcut: w,
                                labelRowClassName: m(e && ct.popupItemRowTabletSmall),
                                theme: S,
                            }),
                        ),
                        void 0 !== n &&
                            (e || _.push(i.createElement(f.a, { key: "existing-chart-section-begin" })),
                            _.push(
                                i.createElement(d.b, {
                                    key: "rename",
                                    label: vt.rename,
                                    onClick: o,
                                    labelRowClassName: m(e && ct.popupItemRowTabletSmall),
                                    theme: S,
                                }),
                                i.createElement(d.b, {
                                    key: "save-as",
                                    label: vt.saveAs,
                                    onClick: l,
                                    labelRowClassName: m(e && ct.popupItemRowTabletSmall),
                                    theme: S,
                                }),
                            )),
                        _.push(i.createElement(f.a, { key: "platform-section-begin" })),
                        _.push(
                            i.createElement(d.b, {
                                key: "load-chart",
                                className: "js-save-load-menu-item-load-chart",
                                label: vt.loadChartLayout,
                                onClick: r,
                                labelRowClassName: m(e && ct.popupItemRowTabletSmall),
                                theme: S,
                                shortcut: C,
                            }),
                        ),
                        _
                    );
                }
            }
            const St = Object(x.b)();
            class wt extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._syncState = (e) => {
                            this.setState(e);
                        }),
                        (this._onChangeHasChanges = (e) => {
                            this.state.wasChanges !== e && this.setState({ wasChanges: e });
                        }),
                        (this._onChangeAutoSaveEnabled = (e) => {
                            0;
                        }),
                        (this._onChangeSharingEnabled = (e) => {
                            this.setState({ isSharingEnabled: e });
                        }),
                        (this._onChangeTitle = (e) => {
                            this.setState({ title: e });
                        }),
                        (this._onChangeId = (e) => {
                            this.setState({ id: e });
                        }),
                        (this._onChartAboutToBeSaved = () => {
                            this.setState({ isProcessing: !0 });
                        }),
                        (this._onChartSaved = () => {
                            this.setState({ isProcessing: !1 });
                        }),
                        (this._handleAutoSaveEnabled = (e) => {
                            0;
                        }),
                        (this._handleSharingEnabled = (e) => {
                            0;
                        }),
                        (this._handleClickSave = () => {
                            this.context.saveChartService.saveChartOrShowTitleDialog(), this._trackEvent("Save click");
                        }),
                        (this._handleClickSaveFromMenu = () => {
                            this.context.saveChartService.saveChartOrShowTitleDialog(),
                                this._trackEvent("Save From Menu");
                        }),
                        (this._handleClickClone = () => {
                            this.context.saveChartService.cloneChart();
                        }),
                        (this._handleClickSaveAs = () => {
                            this.context.saveChartService.saveChartAs(), this._trackEvent("Make a copy");
                        }),
                        (this._handleClickNew = () => {
                            this._trackEvent("New chart layout");
                        }),
                        (this._handleClickLoad = () => {
                            this.context.loadChartService.showLoadDialog(), this._trackEvent("Load chart layout");
                        }),
                        (this._handleHotkey = () => {
                            this.context.loadChartService.showLoadDialog();
                        }),
                        (this._handleClickRename = () => {
                            this.context.saveChartService.renameChart(), this._trackEvent("Rename");
                        }),
                        Object(x.c)(t, {
                            chartWidgetCollection: o.any.isRequired,
                            chartChangesWatcher: o.any.isRequired,
                            saveChartService: o.any.isRequired,
                            sharingChartService: o.any,
                            loadChartService: o.any.isRequired,
                        });
                    const {
                        chartWidgetCollection: a,
                        chartChangesWatcher: n,
                        saveChartService: i,
                        sharingChartService: s,
                    } = t;
                    this.state = {
                        isAuthenticated: window.is_authenticated,
                        isProcessing: !1,
                        id: a.metaInfo.id.value(),
                        title: a.metaInfo.name.value(),
                        wasChanges: n.hasChanges(),
                        iconHovered: !1,
                    };
                }
                componentDidMount() {
                    const { chartSaver: e, isFake: t, stateSyncEmitter: a } = this.props,
                        {
                            chartWidgetCollection: n,
                            chartChangesWatcher: i,
                            saveChartService: s,
                            sharingChartService: o,
                        } = this.context;
                    t
                        ? a.on("change", this._syncState)
                        : (i.getOnChange().subscribe(this, this._onChangeHasChanges),
                          n.metaInfo.name.subscribe(this._onChangeTitle),
                          n.metaInfo.id.subscribe(this._onChangeId),
                          (this._hotkeys = Object(Xe.createGroup)({ desc: "Save/Load" })),
                          this._hotkeys.add({
                              desc: window.t("Load Chart Layout"),
                              handler: this._handleHotkey,
                              hotkey: 190,
                          }),
                          e.chartSaved().subscribe(this, this._onChartSaved),
                          e.chartAboutToBeSaved().subscribe(this, this._onChartAboutToBeSaved),
                          window.loginStateChange.subscribe(this, this._onLoginStateChange));
                }
                componentDidUpdate(e, t) {
                    this.props.isFake || (t !== this.state && this.props.stateSyncEmitter.emit("change", this.state));
                }
                componentWillUnmount() {
                    const { chartSaver: e, isFake: t, stateSyncEmitter: a } = this.props,
                        {
                            chartWidgetCollection: n,
                            chartChangesWatcher: i,
                            saveChartService: s,
                            sharingChartService: o,
                        } = this.context;
                    t
                        ? a.off("change", this._syncState)
                        : (i.getOnChange().unsubscribe(this, this._onChangeHasChanges),
                          n.metaInfo.name.unsubscribe(this._onChangeTitle),
                          n.metaInfo.id.unsubscribe(this._onChangeId),
                          Object(K.ensureDefined)(this._hotkeys).destroy(),
                          e.chartSaved().unsubscribe(this, this._onChartSaved),
                          e.chartAboutToBeSaved().unsubscribe(this, this._onChartAboutToBeSaved),
                          window.loginStateChange.unsubscribe(this, this._onLoginStateChange));
                }
                render() {
                    const { isReadOnly: e, displayMode: t, id: a, isFake: n } = this.props,
                        {
                            isProcessing: s,
                            isAuthenticated: o,
                            title: l,
                            id: r,
                            wasChanges: c,
                            isAutoSaveEnabled: h,
                            isSharingEnabled: d,
                        } = this.state,
                        u = {
                            displayMode: t,
                            isReadOnly: e,
                            isAuthenticated: o,
                            isProcessing: s,
                            wasChanges: c,
                            title: l,
                            id: a,
                            chartId: null !== r ? r : void 0,
                            onCloneChart: this._handleClickClone,
                            onSaveChart: this._handleClickSave,
                            onSaveChartFromMenu: this._handleClickSaveFromMenu,
                            onRenameChart: this._handleClickRename,
                            onSaveAsChart: this._handleClickSaveAs,
                            onLoadChart: this._handleClickLoad,
                        };
                    return i.createElement(_.a, { rule: y.a.TabletSmall }, (e) =>
                        i.createElement(gt, { ...u, isTabletSmall: e }),
                    );
                }
                _onLoginStateChange() {
                    this.setState({ isAuthenticated: window.is_authenticated });
                }
                _trackEvent(e) {
                    0;
                }
            }
            wt.contextType = St;
            var Ct = a("QC7+"),
                ft = a("MbIA"),
                _t = a("8woN");
            const yt = new ft.a({ dateTimeSeparator: "_", timeFormat: "%h-%m-%s" }),
                kt = { takeSnapshot: window.t("Take a snapshot") },
                xt = Object(x.b)();
            var Et = a("mNbo");
            const Ot = R.t("Loading...");
            const Mt = async function (e) {
                const t = URL.createObjectURL(
                    new Blob(
                        [
                            `<!doctype html><html style="background-color:${
                                getComputedStyle(document.documentElement).backgroundColor
                            }"><head><meta charset="utf-8"><title>${Ot}</title></head><body style="background-color:${
                                getComputedStyle(document.body).backgroundColor
                            }"></body></html>`,
                        ],
                        { type: "text/html" },
                    ),
                );
                try {
                    const a = open(t);
                    if (!a) throw new Error("cound not open a new tab");
                    const n = await e.catch(() => {});
                    void 0 !== n ? a.location.replace(n) : a.close();
                } finally {
                    URL.revokeObjectURL(t);
                }
            };
            var Tt = a("qHEz"),
                Nt = a("Rdaf"),
                Rt = a("6KyJ"),
                It = a("Owyg");
            function At(e) {
                const t = m(e.isLoading && It.hidden),
                    a = m(!e.isLoading && It.hidden);
                return i.createElement(
                    "div",
                    null,
                    i.createElement("span", { className: t }, e.children),
                    i.createElement("span", { className: a }, i.createElement(Rt.a, null)),
                );
            }
            var jt = a("PR+g"),
                Ft = a("BHQn"),
                Ht = a("K8V9"),
                zt = a("npeR"),
                Lt = a("CGkO"),
                Wt = a("Q6PN"),
                Dt = a("NQJD");
            const Pt = Object(it.a)(d.a, Dt);
            function Ut(e) {
                const { serverSnapshot: t, clientSnapshot: n } = e,
                    [o, l] = Object(i.useState)(!1),
                    [r, c] = Object(i.useState)(!1),
                    [h, u] = Object(i.useState)(!1),
                    v = Object(jt.a)(),
                    p = Object(i.useCallback)(async () => {
                        var e;
                        const t = n(),
                            a = t.then(
                                (e) =>
                                    new Promise((t) =>
                                        e.canvas.toBlob((e) => {
                                            null !== e && t(e);
                                        }),
                                    ),
                            );
                        try {
                            await Object(Tt.b)(a, "image/png"), te.emit("onClientScreenshotCopiedToClipboard");
                        } catch (a) {
                            const { canvas: n } = await t;
                            null === (e = window.open()) ||
                                void 0 === e ||
                                e.document.write(`<img width="100%" src="${n.toDataURL()}"/>`);
                        }
                    }, [n]),
                    b = Object(i.useCallback)(async () => {
                        const e = await n();
                        Object(Nt.a)(e.name + ".png", e.canvas.toDataURL());
                    }, [n]),
                    g = (e) => Mt(e.then((e) => e.imageUrl)),
                    S = Object(i.useCallback)(
                        async (e = !1) => {
                            const a = t();
                            try {
                                if (e) await g(a);
                                else {
                                    const e = a.then((e) => new Blob([e.imageUrl], { type: "text/plain" }));
                                    await Object(Tt.b)(e, "text/plain"), te.emit("onServerScreenshotCopiedToClipboard");
                                }
                                return !0;
                            } catch (e) {
                                return g(a), !0;
                            } finally {
                                v.current && (c(!1), l(!1), Object(Ne.b)());
                            }
                        },
                        [t],
                    ),
                    w = Object(i.useCallback)(async () => {
                        u(!0);
                        const [e, n] = await Promise.all([
                            a.e("share-chart-to-social-utils").then(a.bind(null, "E5mD")),
                            t(),
                        ]);
                        e.Twitter.shareSnapshotInstantly(n.symbol, n.imageUrl), v.current && (u(!1), Object(Ne.b)());
                    }, [t]);
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(d.b, {
                        "data-name": "save-chart-image",
                        label: Object(R.t)("Save chart image"),
                        icon: zt,
                        onClick: b,
                        shortcut: Object(qe.humanReadableHash)(qe.Modifiers.Mod + qe.Modifiers.Alt + 83),
                        theme: Pt,
                    }),
                    s.a.createElement(d.b, {
                        "data-name": "copy-chart-image",
                        label: Object(R.t)("Copy chart image"),
                        icon: Ht,
                        onClick: p,
                        shortcut: Object(qe.humanReadableHash)(qe.Modifiers.Mod + qe.Modifiers.Shift + 83),
                        theme: Pt,
                    }),
                    s.a.createElement(d.b, {
                        "data-name": "copy-link-to-the-chart-image",
                        label: s.a.createElement(At, { isLoading: o }, Object(R.t)("Copy link to the chart image")),
                        icon: Lt,
                        onClick: () => {
                            l(!0), S(!1);
                        },
                        dontClosePopup: !0,
                        isDisabled: o,
                        shortcut: Object(qe.humanReadableHash)(qe.Modifiers.Alt + 83),
                        className: m(o && Dt.loading),
                        theme: Pt,
                    }),
                    s.a.createElement(d.b, {
                        "data-name": "open-image-in-new-tab",
                        label: s.a.createElement(At, { isLoading: r }, Object(R.t)("Open image in new tab")),
                        icon: Wt,
                        onClick: () => {
                            c(!0), S(!0);
                        },
                        dontClosePopup: !0,
                        isDisabled: r,
                        className: m(r && Dt.loading),
                        theme: Pt,
                    }),
                    s.a.createElement(d.b, {
                        "data-name": "tweet-chart-image",
                        label: s.a.createElement(At, { isLoading: h }, Object(R.t)("Tweet chart image")),
                        icon: Ft,
                        onClick: w,
                        dontClosePopup: !0,
                        isDisabled: h,
                        className: m(h && Dt.loading),
                        theme: Pt,
                    }),
                );
            }
            function Vt(e) {
                const [t, a] = Object(i.useState)(!1),
                    n = Object(jt.a)(),
                    o = Object(i.useCallback)(async () => {
                        a(!0), await e.serverSnapshot(), n.current && a(!1);
                    }, [e.serverSnapshot]);
                return s.a.createElement(g.b, {
                    id: e.id,
                    className: e.className,
                    isDisabled: t,
                    onClick: o,
                    title: e.tooltip,
                    icon: e.icon,
                });
            }
            var Bt = a("koZ+");
            const Kt =
                ((Qt = function (e) {
                    return Object(Et.isOnMobileAppPage)("any")
                        ? s.a.createElement(Vt, { ...e, icon: Bt })
                        : s.a.createElement(
                              u.a,
                              {
                                  content: s.a.createElement(g.b, {
                                      id: e.id,
                                      className: e.className,
                                      title: e.tooltip,
                                      icon: Bt,
                                  }),
                                  drawerPosition: "Bottom",
                                  drawerBreakpoint: y.a.TabletSmall,
                                  arrow: !1,
                              },
                              s.a.createElement(Ut, { ...e }),
                          );
                }),
                ((Gt = class extends i.PureComponent {
                    constructor(e, t) {
                        super(e, t),
                            (this._clientSnapshot = async () => {
                                const e = this.context.chartWidgetCollection.activeChartWidget
                                    .value()
                                    .model()
                                    .mainSeries()
                                    .actualSymbol();
                                return {
                                    canvas: await this.context.chartWidgetCollection.clientSnapshot(),
                                    name: `${Object(_t.shortName)(e)}_${yt.formatLocal(new Date())}`,
                                };
                            }),
                            (this._serverSnapshot = async () => {
                                const e = this.context.chartWidgetCollection.activeChartWidget
                                        .value()
                                        .model()
                                        .mainSeries()
                                        .actualSymbol(),
                                    t = await this.context.chartWidgetCollection.takeScreenshot(),
                                    a =
                                        n.enabled("charting_library_base") && void 0 !== this.context.snapshotUrl
                                            ? t
                                            : Object(Ct.a)(t);
                                return { symbol: Object(_t.shortName)(e), imageUrl: a };
                            }),
                            Object(x.c)(t, { chartWidgetCollection: o.any.isRequired });
                    }
                    render() {
                        const { className: e, id: t } = this.props;
                        return i.createElement(Qt, {
                            id: t,
                            className: e,
                            tooltip: kt.takeSnapshot,
                            serverSnapshot: this._serverSnapshot,
                            clientSnapshot: this._clientSnapshot,
                        });
                    }
                }).contextType = xt),
                Gt);
            var Qt,
                Gt,
                Xt = a("FA0h"),
                qt = a("h24c"),
                Jt = a("tOje"),
                Yt = a("QOH/");
            const Zt = Object(it.a)(g.a, Yt);
            class $t extends s.a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._promise = null),
                        (this._openSymbolSearchDialog = (e) => {
                            if (Object(qe.modifiersFromEvent)(e) === qe.Modifiers.Alt)
                                return void navigator.clipboard.writeText(this.state.symbol);
                            const t = (this._promise = Object(Xt.a)().then((e) => {
                                t === this._promise &&
                                    (e.showDefaultSearchDialog({
                                        defaultValue: this._isSpread(this.state.symbol)
                                            ? this.state.symbol
                                            : this.state.shortName,
                                        showSpreadActions: Object(qt.a)() && this.props.isActionsVisible,
                                        source: "searchBar",
                                        footer: fe.mobiletouch
                                            ? void 0
                                            : s.a.createElement(
                                                  Jt.a,
                                                  null,
                                                  Object(R.t)(
                                                      "Simply start typing while on the chart to pull up this search box",
                                                  ),
                                              ),
                                    }),
                                    Object(F.trackEvent)("GUI", "SS", "main search"));
                            }));
                        }),
                        (this._isSpread = (e) => !1),
                        (this._onSymbolChanged = () => {
                            this.setState({ symbol: ce.linking.symbol.value(), shortName: ea() });
                        }),
                        (this.state = { symbol: ce.linking.symbol.value(), shortName: ea() });
                }
                componentDidMount() {
                    ce.linking.seriesShortSymbol.subscribe(this._onSymbolChanged), Object(Xt.a)();
                }
                componentWillUnmount() {
                    ce.linking.seriesShortSymbol.unsubscribe(this._onSymbolChanged), (this._promise = null);
                }
                render() {
                    const { id: e, className: t } = this.props;
                    return s.a.createElement(g.b, {
                        id: e,
                        className: m(t, n.enabled("uppercase_instrument_names") && Yt.uppercase),
                        theme: Zt,
                        text: this.state.shortName,
                        title: Object(R.t)("Symbol Search"),
                        onClick: this._openSymbolSearchDialog,
                    });
                }
            }
            function ea() {
                return ce.linking.seriesShortSymbol.value() || ce.linking.symbol.value() || "";
            }
            var ta = a("9NBK");
            class aa extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._handleClick = (e) => {
                            e.stopPropagation();
                            const { onApply: t, item: a } = this.props;
                            t(a);
                        });
                }
                render() {
                    const { className: e, item: t } = this.props;
                    return i.createElement(
                        "div",
                        { className: m(e, ta.item, "apply-common-tooltip"), onClick: this._handleClick, title: t.name },
                        i.createElement(
                            "div",
                            { className: ta.round },
                            t.name.length > 0 ? t.name[0].toUpperCase() : " ",
                        ),
                    );
                }
            }
            var na = a("8RO/"),
                ia = a("s0T6");
            function sa(e) {
                return i.createElement("div", { className: m(ia.description, e.className) }, e.children);
            }
            var oa = a("fESK");
            const la = Object(it.a)(d.a, { labelRow: oa.labelRow, toolbox: oa.toolbox, item: oa.titleItem }),
                ra = Object(it.a)(d.a, { labelRow: oa.labelRow, toolbox: oa.toolbox, item: oa.titleItemTabletSmall }),
                ca = Object(it.a)(d.a, { item: oa.item }),
                ha = Object(it.a)(d.a, { item: oa.itemTabletSmall });
            function da(e) {
                const {
                        item: t,
                        onApply: a,
                        onRemove: n,
                        onFavor: o,
                        favorite: l,
                        isFavoritingAllowed: r,
                        isTabletSmall: h,
                    } = e,
                    [u, m] = Object(Ce.c)(),
                    p = t.meta_info,
                    b = p ? Object(na.b)(p.indicators) : void 0,
                    g = h ? ra : la,
                    S = h ? ha : ca,
                    w = Object(i.useCallback)(() => a(t), [a, t]),
                    C = Object(i.useCallback)(() => n(t), [n, t]),
                    f = Object(i.useCallback)(() => {
                        o && o(t);
                    }, [o, t]);
                return s.a.createElement(
                    "div",
                    {
                        ...m,
                        className: oa.wrap,
                        "data-name": t.name,
                        "data-id": t.id,
                        "data-is-default": Boolean(t.is_default),
                    },
                    s.a.createElement(d.b, {
                        theme: g,
                        label: t.name,
                        labelRowClassName: v()(h && oa.itemLabelTabletSmall),
                        isHovered: u,
                        showToolboxOnHover: !l && !u,
                        onClick: w,
                        toolbox: s.a.createElement(
                            s.a.Fragment,
                            null,
                            !t.is_default &&
                                s.a.createElement(we.a, { key: "remove", hidden: !fe.touch && !u, onClick: C }),
                            Boolean(o) &&
                                r &&
                                s.a.createElement(c.a, { key: "favorite", isFilled: Boolean(l), onClick: f }),
                        ),
                    }),
                    b &&
                        s.a.createElement(d.b, {
                            theme: S,
                            label: s.a.createElement(
                                sa,
                                { className: v()(oa.description, h && oa.descriptionTabletSmall) },
                                b,
                            ),
                            onClick: w,
                            isHovered: u,
                        }),
                );
            }
            var ua = a("jKyl"),
                ma = a("23di");
            const va = Object(it.a)(d.a, ma),
                pa = { text: Object(lt.appendEllipsis)(window.t("Save Indicator template")) };
            function ba(e) {
                const { onClick: t, isTabletSmall: a } = e;
                return s.a.createElement(d.b, {
                    theme: va,
                    className: ma.wrap,
                    label: s.a.createElement(
                        "div",
                        { className: ma.titleWrap },
                        s.a.createElement(
                            "div",
                            { className: v()(ma.title, a && ma.titleTabletSmall) },
                            s.a.createElement(h.a, { className: ma.icon, icon: ua }),
                            s.a.createElement("div", { className: ma.text }, pa.text),
                        ),
                    ),
                    onClick: t,
                });
            }
            var ga = a("gla1"),
                Sa = a("PN6A");
            const wa = s.a.createContext(null);
            var Ca = a("Sl3V");
            function fa(e) {
                const {
                        templates: t,
                        favorites: a,
                        onTemplateSave: n,
                        onTemplateRemove: o,
                        onTemplateSelect: l,
                        onTemplateFavorite: r,
                        isTabletSmall: c,
                        isLoading: h,
                    } = e,
                    d = Object(i.useMemo)(() => t.filter((e) => e.is_default), [t]),
                    u = Object(i.useMemo)(() => t.filter((e) => !e.is_default), [t]),
                    m = Object(i.useMemo)(() => new Set(a.map((e) => e.name)), [a]),
                    p = Object(i.useContext)(wa),
                    b = Object(i.useContext)(Sa.a),
                    g = Object(ga.a)();
                Object(i.useEffect)(() => {
                    if (null !== p) {
                        const e = {};
                        return (
                            p.getOnChange().subscribe(e, () => {
                                g(), b && b.update();
                            }),
                            () => p.getOnChange().unsubscribeAll(e)
                        );
                    }
                    return () => {};
                }, []);
                const S = (e) =>
                    s.a.createElement(da, {
                        key: e.name,
                        item: e,
                        isFavoritingAllowed: Boolean(r),
                        favorite: m.has(e.name),
                        onApply: l,
                        onFavor: r,
                        onRemove: o,
                        isTabletSmall: c,
                    });
                return s.a.createElement(
                    "div",
                    { className: v()(Ca.menu, c && Ca.menuSmallTablet) },
                    s.a.createElement(ba, { onClick: n, isTabletSmall: c }),
                    h &&
                        s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(f.a, null),
                            s.a.createElement(Z.a, null),
                        ),
                    !h &&
                        (c
                            ? s.a.createElement(_a, { defaults: d, customs: u, render: S })
                            : s.a.createElement(ya, { defaults: d, customs: u, render: S, state: p })),
                );
            }
            function _a(e) {
                const { defaults: t, customs: a, render: n } = e;
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    a.length > 0 &&
                        s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(f.a, null),
                            s.a.createElement(
                                ee,
                                { className: Ca.menuItemHeaderTabletSmall },
                                Object(R.t)("My templates"),
                            ),
                            a.map(n),
                        ),
                    t.length > 0 &&
                        s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(f.a, null),
                            s.a.createElement(
                                ee,
                                { className: Ca.menuItemHeaderTabletSmall },
                                Object(R.t)("Default templates"),
                            ),
                            t.map(n),
                        ),
                );
            }
            function ya(e) {
                const { defaults: t, customs: a, render: n, state: i } = e;
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    a.length > 0 &&
                        s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(f.a, null),
                            s.a.createElement(ee, { className: Ca.menuItemHeader }, Object(R.t)("My templates")),
                            a.map(n),
                        ),
                    a.length > 0 &&
                        t.length > 0 &&
                        i &&
                        s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(f.a, null),
                            s.a.createElement(
                                Ee.a,
                                {
                                    summary: Object(R.t)("Default templates"),
                                    open: !i.get().defaultsCollapsed,
                                    onStateChange: (e) => i.set({ defaultsCollapsed: !e }),
                                },
                                t.map(n),
                            ),
                        ),
                    0 === a.length &&
                        t.length > 0 &&
                        s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(f.a, null),
                            s.a.createElement(ee, { className: Ca.menuItemHeader }, Object(R.t)("Default templates")),
                            t.map(n),
                        ),
                );
            }
            var ka = a("hY0g"),
                xa = a.n(ka);
            class Ea {
                constructor(e, t) {
                    var a, i;
                    (this._isFavoriteEnabled = n.enabled("items_favoriting")),
                        (this.handleFavorTemplate = (e) => {
                            if (!this._isFavoriteEnabled) return;
                            const { name: t } = e;
                            this._isTemplateFavorite(t)
                                ? this._removeFavoriteTemplate(t)
                                : this._addFavoriteTemplate(t);
                        }),
                        (this.handleDropdownOpen = () => {
                            this._setState({ isLoading: !0 }),
                                this._studyTemplates.invalidate(),
                                this._studyTemplates.refreshStudyTemplateList(() => this._setState({ isLoading: !1 }));
                        }),
                        (this.handleApplyTemplate = (e) => {
                            this._studyTemplates.applyTemplate(e.name);
                        }),
                        (this.handleRemoveTemplate = (e) => {
                            this._studyTemplates.deleteStudyTemplate(e.name);
                        }),
                        (this.handleSaveTemplate = () => {
                            this._studyTemplates.showSaveAsDialog();
                        }),
                        (this._studyTemplates = e),
                        (this._favoriteStudyTemplatesService = t);
                    const s =
                            (null === (a = this._favoriteStudyTemplatesService) || void 0 === a ? void 0 : a.get()) ||
                            [],
                        o = this._studyTemplates.list();
                    (this._state = new xa.a({ isLoading: !1, studyTemplatesList: o, favorites: s })),
                        this._studyTemplates.getOnChange().subscribe(this, this._handleTemplatesChange),
                        this._studyTemplates.refreshStudyTemplateList(),
                        this._isFavoriteEnabled &&
                            (null === (i = this._favoriteStudyTemplatesService) ||
                                void 0 === i ||
                                i.getOnChange().subscribe(this, this._handleFavoritesChange));
                }
                destroy() {
                    var e;
                    this._studyTemplates.getOnChange().unsubscribe(this, this._handleTemplatesChange),
                        this._isFavoriteEnabled &&
                            (null === (e = this._favoriteStudyTemplatesService) ||
                                void 0 === e ||
                                e.getOnChange().unsubscribe(this, this._handleFavoritesChange));
                }
                state() {
                    return this._state.readonly();
                }
                _setState(e) {
                    this._state.setValue({ ...this._state.value(), ...e });
                }
                _handleTemplatesChange() {
                    this._setState({ studyTemplatesList: this._studyTemplates.list() });
                }
                _handleFavoritesChange(e) {
                    this._isFavoriteEnabled && this._setState({ favorites: e });
                }
                _removeFavoriteTemplate(e) {
                    var t;
                    const { favorites: a } = this._state.value();
                    null === (t = this._favoriteStudyTemplatesService) ||
                        void 0 === t ||
                        t.set(a.filter((t) => t !== e));
                }
                _addFavoriteTemplate(e) {
                    var t;
                    const { favorites: a } = this._state.value();
                    null === (t = this._favoriteStudyTemplatesService) || void 0 === t || t.set([...a, e]);
                }
                _isTemplateFavorite(e) {
                    const { favorites: t } = this._state.value();
                    return t.includes(e);
                }
            }
            var Oa = a("zgWb"),
                Ma = a("yGrx");
            const Ta = { title: Object(R.t)("Templates"), tooltip: Object(R.t)("Indicator Templates") },
                Na = Object(x.b)();
            class Ra extends s.a.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._updateState = (e) => {
                            this.setState({ ...e, isActive: this.state.isActive });
                        }),
                        (this._handleApplyTemplate = (e) => {
                            this._handleClose(), this._model.handleApplyTemplate(e);
                        }),
                        (this._handleRemoveTemplate = (e) => {
                            this._handleClose(), this._model.handleRemoveTemplate(e);
                        }),
                        (this._handleClose = () => {
                            this._handleToggleDropdown(!1);
                        }),
                        (this._handleToggleDropdown = (e) => {
                            const { isActive: t } = this.state,
                                a = "boolean" == typeof e ? e : !t;
                            this.setState({ isActive: a });
                        }),
                        Object(x.c)(t, {
                            favoriteStudyTemplatesService: o.any,
                            studyTemplates: o.any.isRequired,
                            templatesMenuViewStateService: o.any,
                        });
                    const { favoriteStudyTemplatesService: a, studyTemplates: n } = t;
                    (this._model = new Ea(n, a)), (this.state = { ...this._model.state().value(), isActive: !1 });
                }
                componentDidMount() {
                    this._model.state().subscribe(this._updateState);
                }
                componentWillUnmount() {
                    this._model.state().unsubscribe(this._updateState), this._model.destroy();
                }
                render() {
                    const { studyTemplatesList: e, favorites: t } = this.state,
                        { isShownQuicks: a, className: n, displayMode: i, id: o } = this.props;
                    return s.a.createElement(
                        wa.Provider,
                        { value: this.context.templatesMenuViewStateService || null },
                        s.a.createElement(Ia, {
                            id: o,
                            className: n,
                            mode: i,
                            templates: e,
                            favorites: t,
                            onMenuOpen: this._model.handleDropdownOpen,
                            onTemplateFavorite: a ? this._model.handleFavorTemplate : void 0,
                            onTemplateSelect: this._handleApplyTemplate,
                            onTemplateRemove: this._handleRemoveTemplate,
                            onTemplateSave: this._model.handleSaveTemplate,
                        }),
                    );
                }
            }
            function Ia(e) {
                const {
                        id: t,
                        className: a,
                        mode: n,
                        favorites: i,
                        templates: o,
                        isMenuOpen: l,
                        onTemplateSelect: r,
                        onTemplateSave: c,
                        onTemplateFavorite: h,
                        onTemplateRemove: d,
                    } = e,
                    m = v()(a, Ma.wrap, { [Ma.full]: "full" === n, [Ma.medium]: "medium" === n }),
                    p = o.filter((e) => i.includes(e.name)),
                    g = "small" !== n && h && p.length > 0;
                return s.a.createElement(
                    b,
                    { id: t, className: m },
                    s.a.createElement(_.a, { rule: y.a.TabletSmall }, (t) =>
                        s.a.createElement(
                            u.a,
                            {
                                onOpen: e.onMenuOpen,
                                isDrawer: t,
                                drawerPosition: "Bottom",
                                arrow: !1,
                                content: s.a.createElement(j, {
                                    className: v()(g && Ma.buttonWithFavorites),
                                    displayMode: n,
                                    isOpened: l,
                                    icon: Oa,
                                    text: Ta.title,
                                    title: Ta.tooltip,
                                    forceInteractive: !0,
                                }),
                            },
                            s.a.createElement(fa, {
                                onTemplateSave: c,
                                onTemplateSelect: r,
                                onTemplateRemove: d,
                                onTemplateFavorite: h,
                                templates: o,
                                favorites: p,
                                isTabletSmall: t,
                            }),
                        ),
                    ),
                    g && s.a.createElement(Aa, { favorites: p, onTemplateSelect: r }),
                );
            }
            function Aa(e) {
                return s.a.createElement(
                    s.a.Fragment,
                    null,
                    e.favorites.map((t, a, n) =>
                        s.a.createElement(aa, {
                            key: t.name,
                            item: t,
                            onApply: e.onTemplateSelect,
                            className: v()({ [Ma.first]: 0 === a, [Ma.last]: a === n.length - 1 }),
                        }),
                    ),
                );
            }
            Ra.contextType = Na;
            a("HbRj");
            var ja = a("S+Ii"),
                Fa = a("bQ7Y"),
                Ha = a("wnRL"),
                za = a("2xRE");
            const La = { undoHint: Object(R.t)("Undo {hint}"), redoHint: Object(R.t)("Redo {hint}") },
                Wa = {
                    undoHotKey: Object(Q.b)({ keys: ["Ctrl", "Z"], text: "{0} + {1}" }),
                    redoHotKey: Object(Q.b)({ keys: ["Ctrl", "Y"], text: "{0} + {1}" }),
                },
                Da = Object(it.b)(Fa, ja, { buttonUndo: "button", buttonRedo: "button" }),
                Pa = { ...Fa, button: Da.buttonUndo },
                Ua = { ...Fa, button: Da.buttonRedo },
                Va = Object(x.b)();
            class Ba extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._batched = null),
                        (this._handleClickUndo = () => {
                            Object(F.trackEvent)("GUI", "Undo");
                            const { chartWidgetCollection: e } = this.context;
                            e.undoHistory.undo();
                        }),
                        (this._handleClickRedo = () => {
                            Object(F.trackEvent)("GUI", "Redo");
                            const { chartWidgetCollection: e } = this.context;
                            e.undoHistory.redo();
                        }),
                        Object(x.c)(t, { chartWidgetCollection: o.any.isRequired }),
                        (this.state = this._getStateFromUndoHistory());
                }
                componentDidMount() {
                    const { chartWidgetCollection: e } = this.context;
                    e.undoHistory.redoStack().onChange().subscribe(this, this._onChangeStack),
                        e.undoHistory.undoStack().onChange().subscribe(this, this._onChangeStack);
                }
                componentWillUnmount() {
                    const { chartWidgetCollection: e } = this.context;
                    e.undoHistory.redoStack().onChange().unsubscribe(this, this._onChangeStack),
                        e.undoHistory.undoStack().onChange().unsubscribe(this, this._onChangeStack),
                        (this._batched = null);
                }
                render() {
                    const { id: e } = this.props,
                        { isEnabledRedo: t, isEnabledUndo: a, redoStack: n, undoStack: s } = this.state;
                    return i.createElement(
                        b,
                        { id: e },
                        i.createElement(g.b, {
                            icon: Ha,
                            isDisabled: !a,
                            onClick: this._handleClickUndo,
                            title: a ? La.undoHint.format({ hint: s }) : void 0,
                            "data-tooltip-hotkey": a ? Wa.undoHotKey : void 0,
                            theme: Pa,
                        }),
                        i.createElement(g.b, {
                            icon: za,
                            isDisabled: !t,
                            onClick: this._handleClickRedo,
                            title: t ? La.redoHint.format({ hint: n }) : void 0,
                            "data-tooltip-hotkey": t ? Wa.redoHotKey : void 0,
                            theme: Ua,
                        }),
                    );
                }
                _onChangeStack() {
                    null === this._batched &&
                        (this._batched = Promise.resolve().then(() => {
                            if (null === this._batched) return;
                            this._batched = null;
                            const e = this._getStateFromUndoHistory();
                            this.setState(e);
                        }));
                }
                _getStateFromUndoHistory() {
                    const { chartWidgetCollection: e } = this.context,
                        t = e.undoHistory.undoStack(),
                        a = e.undoHistory.redoStack(),
                        n = a.head(),
                        i = t.head();
                    return {
                        isEnabledRedo: !a.isEmpty(),
                        isEnabledUndo: !t.isEmpty(),
                        redoStack: n ? n.text() : "",
                        undoStack: i ? i.text() : "",
                    };
                }
            }
            Ba.contextType = Va;
            var Ka = a("i8i4"),
                Qa = a("cvc5");
            class Ga extends i.PureComponent {
                constructor() {
                    super(...arguments),
                        (this._ref = null),
                        (this._update = () => {
                            this.forceUpdate();
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleMeasure = ({ width: e }) => {
                            this.props.width.setValue(e);
                        });
                }
                componentDidMount() {
                    const { element: e, isFake: t, width: a } = this.props;
                    if (t) a.subscribe(this._update);
                    else {
                        const t = Object(K.ensureNotNull)(this._ref);
                        Ka.findDOMNode(t).appendChild(e);
                    }
                }
                componentWillUnmount() {
                    const { width: e, isFake: t } = this.props;
                    t && e.unsubscribe(this._update);
                }
                render() {
                    const { isFake: e = !1, width: t } = this.props;
                    return i.createElement(
                        Qa,
                        { shouldMeasure: !e, whitelist: ["width"], onMeasure: this._handleMeasure },
                        i.createElement(b, {
                            ref: this._setRef,
                            style: e ? { width: t.value() } : void 0,
                            "data-is-custom-header-element": !0,
                        }),
                    );
                }
            }
            function Xa(e) {
                const { displayMode: t, params: a } = e;
                return s.a.createElement(
                    u.a,
                    {
                        content: s.a.createElement(j, {
                            collapseWhen: void 0 !== a.icon ? void 0 : [],
                            displayMode: t,
                            icon: a.icon,
                            text: a.title,
                            title: a.tooltip,
                            "data-name": "dropdown",
                            "data-is-custom-header-element": !0,
                        }),
                        drawerPosition: "Bottom",
                        drawerBreakpoint: y.a.TabletSmall,
                        arrow: !1,
                    },
                    a.items.map((e, t) =>
                        s.a.createElement(d.b, {
                            key: t,
                            label: e.title,
                            onClick: () => e.onSelect(),
                            "data-name": "dropdown-item",
                        }),
                    ),
                );
            }
            function qa() {
                return {
                    Bars: n.enabled("header_chart_type") ? N : void 0,
                    Compare: n.enabled("header_compare") ? W : void 0,
                    Custom: Ga,
                    Fullscreen: n.enabled("header_fullscreen_button") ? B : void 0,
                    Indicators: n.enabled("header_indicators") ? le : void 0,
                    Intervals: n.enabled("header_resolutions") ? Le : void 0,
                    OpenPopup: Ve,
                    Properties: n.enabled("header_settings") && n.enabled("show_chart_property_page") ? Ge : void 0,
                    SaveLoad: n.enabled("header_saveload") ? wt : void 0,
                    Screenshot: n.enabled("header_screenshot") ? Kt : void 0,
                    SymbolSearch: n.enabled("header_symbol_search") ? $t : void 0,
                    Templates: n.enabled("study_templates") ? Ra : void 0,
                    Dropdown: Xa,
                    UndoRedo: n.enabled("header_undo_redo") ? Ba : void 0,
                    Layout: void 0,
                };
            }
            a.d(t, "getRestrictedToolSet", function () {
                return qa;
            });
        },
        nPPD: function (e, t, a) {
            "use strict";
            function n(e, t, a = {}) {
                const n = Object.assign({}, t);
                for (const i of Object.keys(t)) {
                    const s = a[i] || i;
                    s in e && (n[i] = [e[s], t[i]].join(" "));
                }
                return n;
            }
            function i(e, t, a = {}) {
                return Object.assign({}, e, n(e, t, a));
            }
            a.d(t, "b", function () {
                return n;
            }),
                a.d(t, "a", function () {
                    return i;
                });
        },
        npeR: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path stroke="currentColor" d="M6.5 16v4.5a1 1 0 001 1h14a1 1 0 001-1V16M14.5 5V17m-4-3.5l4 4l4-4"/></svg>';
        },
        nrMg: function (e, t, a) {
            e.exports = {
                dottedCloud: "dottedCloud-3RnJMRVd",
                check: "check-3RnJMRVd",
                spinningCloud: "spinningCloud-3RnJMRVd",
                arrow: "arrow-3RnJMRVd",
                arrowGap: "arrowGap-3RnJMRVd",
                container: "container-3RnJMRVd",
                unsaved: "unsaved-3RnJMRVd",
                hovered: "hovered-3RnJMRVd",
                saving: "saving-3RnJMRVd",
                saved: "saved-3RnJMRVd",
            };
        },
        os48: function (e, t, a) {
            e.exports = { footer: "footer-3r-9t_XG" };
        },
        "p0W+": function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return l;
            });
            var n = a("q1tI"),
                i = a("TSYQ"),
                s = a("tU7i"),
                o = a("EvtC");
            const l = n.forwardRef((e, t) => {
                const { className: a, ...l } = e;
                return n.createElement(s.b, { ...l, ref: t, className: i(a, o.button) });
            });
        },
        pqsj: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M17 11v6h3v-6h-3zm-.5-1h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5z"/><path d="M18 7h1v3.5h-1zm0 10.5h1V21h-1z"/><path d="M9 8v12h3V8H9zm-.5-1h4a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5z"/><path d="M10 4h1v3.5h-1zm0 16.5h1V24h-1z"/></svg>';
        },
        pr86: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return h;
            });
            a("YFKU");
            var n = a("q1tI"),
                i = a("TSYQ"),
                s = a("Iivm"),
                o = a("sg5d"),
                l = a("XfUw"),
                r = a("fEjm");
            const c = { add: window.t("Add to favorites"), remove: window.t("Remove from favorites") };
            function h(e) {
                const { className: t, isFilled: a, isActive: h, onClick: d, ...u } = e;
                return n.createElement(s.a, {
                    ...u,
                    className: i(r.favorite, "apply-common-tooltip", a && r.checked, h && r.active, t),
                    icon: a ? o : l,
                    onClick: d,
                    title: a ? c.remove : c.add,
                });
            }
        },
        s0T6: function (e, t, a) {
            e.exports = { description: "description-2U1ZnBls" };
        },
        sHKj: function (e, t, a) {
            e.exports = { title: "title-2VoDfDWK" };
        },
        sbT4: function (e, t, a) {
            e.exports = { button: "button-2twPcS_V" };
        },
        sg5d: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>';
        },
        t2Sj: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11.982 16.689L17.192 12h3.033l4.149-4.668-.748-.664L19.776 11h-2.968l-4.79 4.311L9 12.293l-4.354 4.353.708.708L9 13.707z"/></svg>';
        },
        tOje: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return r;
            });
            var n = a("q1tI"),
                i = a.n(n),
                s = a("TSYQ"),
                o = a.n(s),
                l = a("os48");
            function r(e) {
                const { className: t, children: a } = e;
                return i.a.createElement("div", { className: o()(l.footer, t) }, a);
            }
        },
        uPhS: function (e, t, a) {
            e.exports = { smallWidthMenuItem: "smallWidthMenuItem-2BP6_jxN" };
        },
        uafl: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"/></g></svg>';
        },
        uhCe: function (e, t, a) {
            "use strict";
            a.d(t, "a", function () {
                return i;
            });
            var n = a("ASyk");
            const i = {
                SmallHeight: n["small-height-breakpoint"],
                TabletSmall: n["tablet-small-breakpoint"],
                TabletNormal: n["tablet-normal-breakpoint"],
            };
        },
        wnRL: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M8.707 13l2.647 2.646-.707.708L6.792 12.5l3.853-3.854.708.708L8.707 12H14.5a5.5 5.5 0 0 1 5.5 5.5V19h-1v-1.5a4.5 4.5 0 0 0-4.5-4.5H8.707z"/></svg>';
        },
        yGrx: function (e, t, a) {
            e.exports = {
                wrap: "wrap-13GsG5XA",
                full: "full-13GsG5XA",
                first: "first-13GsG5XA",
                last: "last-13GsG5XA",
                medium: "medium-13GsG5XA",
                buttonWithFavorites: "buttonWithFavorites-13GsG5XA",
            };
        },
        zgWb: function (e, t) {
            e.exports =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M6 12l3.88-4.31a1 1 0 0 1 1.35-.13l5.07 3.9a1 1 0 0 0 1.32-.08L23 6M6.5 22v-4m4 4v-8m4 8v-6m4 6v-4m4 4v-8"/></svg>';
        },
    },
]);
