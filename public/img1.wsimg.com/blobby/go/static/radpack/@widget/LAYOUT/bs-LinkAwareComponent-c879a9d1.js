define(
  "@widget/LAYOUT/bs-LinkAwareComponent-c879a9d1.js",
  ["exports", "~/bs-FlyoutMenu-Component", "~/c/bs-_rollupPluginBabelHelpers"],
  function (e, t, o) {
    "use strict";
    const { PUBLISH: n } = (global.Core || guac["@wsb/guac-widget-core"])
      .constants.renderModes;
    var i,
      s,
      a,
      c =
        ((i = t.default),
        (s = class extends (global.React || guac.react).Component {
          constructor() {
            super(...arguments),
              (this.checkActiveLink = this.checkActiveLink.bind(this)),
              (this.state = { isActive: !1 });
          }
          componentDidMount() {
            const { toggleId: e } = this.props;
            (this.moreDropdownElement = document.getElementById(e)),
              this.moreDropdownElement &&
                (this.checkActiveLink(),
                window.addEventListener(
                  "NavItemsResized",
                  this.checkActiveLink,
                  { passive: !0 }
                ));
          }
          componentWillUnmount() {
            this.moreDropdownElement &&
              window.removeEventListener(
                "NavItemsResized",
                this.checkActiveLink,
                { passive: !0 }
              );
          }
          checkActiveLink() {
            const { renderMode: e } = this.props;
            window.requestAnimationFrame(() => {
              var t;
              let o = !1;
              const i =
                  this.moreDropdownElement.querySelector(
                    '[data-ux="NavLinkActive"]'
                  ) ||
                  this.moreDropdownElement.querySelector(
                    '[data-ux="NavMoreMenuLinkActive"]'
                  ) ||
                  this.moreDropdownElement.querySelector(
                    '[data-ux="NavMoreMenuLinkNestedActive"]'
                  ),
                s = i && i.closest("li");
              i &&
                "visible" ===
                  (null == s || null === (t = s.style) || void 0 === t
                    ? void 0
                    : t.visibility) &&
                (o =
                  e === n
                    ? i.href.includes(window.location.pathname)
                    : window.location.pathname.includes(i.dataset.page)),
                this.setState({ isActive: o });
            });
          }
          render() {
            return (global.React || guac.react).createElement(
              i,
              o.a({}, this.props, this.state)
            );
          }
        }),
        o._(
          s,
          "displayName",
          `WithActiveLinkDetection(${
            ((a = i), a.displayName || a.name || "Component")
          })`
        ),
        o._(s, "propTypes", {
          renderMode: (global.PropTypes || guac["prop-types"]).oneOf(
            Object.values(
              (global.Core || guac["@wsb/guac-widget-core"]).constants
                .renderModes
            )
          ),
          toggleId: (global.PropTypes || guac["prop-types"]).string,
        }),
        s);
    (e.default = c), Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-LinkAwareComponent-c879a9d1.js.map
