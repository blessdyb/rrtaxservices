define(
  "@wsb/guac-widget-shared/lib/components/ColorSwatch-4196a0a9.js",
  ["exports"],
  function (e) {
    "use strict";
    const o = (e) => {
      let { color: o, isActive: t, inStock: r, isSmall: l } = e;
      const a = r || void 0 === r,
        c = l ? "24px" : "38px",
        n = l ? "20px" : "32px",
        i = { borderRadius: "50%", borderWidth: "1px", borderStyle: "solid" },
        s = {
          outer: {
            ...i,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: c,
            height: c,
            borderColor: t ? "lowContrast" : "transparent",
          },
          inner: {
            ...i,
            borderColor: "ultraLowContrast",
            color: "ultraLowContrast",
            width: n,
            height: n,
            background: a
              ? o
              : `linear-gradient(to left top, ${o} calc(50% - 1px), currentColor, ${o} calc(50% + 1px) )`,
          },
        };
      return (global.React || guac.react).createElement(
        (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
        { style: s.outer },
        (global.React || guac.react).createElement(
          (global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block,
          { style: s.inner }
        )
      );
    };
    (o.propTypes = {
      color: (global.PropTypes || guac["prop-types"]).string.isRequired,
      isActive: (global.PropTypes || guac["prop-types"]).bool,
      inStock: (global.PropTypes || guac["prop-types"]).bool,
      isSmall: (global.PropTypes || guac["prop-types"]).bool,
    }),
      (e.default = o),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
),
  "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=ColorSwatch-4196a0a9.js.map
