import { t as e } from './rolldown-runtime.Dh6celcD.mjs'
import {
  B as t,
  I as n,
  M as r,
  P as i,
  R as a,
  T as o,
  k as s,
  l as c,
  s as l,
  u
} from './react.B6_Bgyyf.mjs'
import { M as d, X as f, o as p, w as m } from './framer.TvqgXthY.mjs'
function h(e) {
  if (!e?.trim()) return {}
  try {
    let t = JSON.parse(e)
    return t && typeof t == `object` && !Array.isArray(t) ? t : {}
  } catch (e) {
    return (console.warn(`[UnicornStudioEmbed] Invalid Variables JSON`, e), {})
  }
}
function g(e) {
  return {
    ...h(e.initialVariables)
  }
}
function _(e) {
  let a = e.sdkVersion?.trim() || v,
    o = e.controls !== !1,
    l = e.preset?.trim() || ``,
    d = s(null),
    f = s(null),
    p = s(null),
    h = s(`unicorn-project-${Math.random().toString(36).substr(2, 9)}`),
    [_, y] = n(null),
    [b, x] = n(e.initialVariables || ``),
    S = r(() => g(e), [e.initialVariables, e.variableControls]),
    C = (e = f.current) => {
      let n = d.current
      if (!n) return
      let r = t.UnicornStudioControls
      if (r?.initControls && e)
        try {
          let t = document.createElement(`div`)
          r.initControls({
            scene: e,
            element: n,
            container: t
          })?.destroy?.()
        } catch (e) {
          console.warn(`[UnicornStudioEmbed] Failed to destroy controls`, e)
        }
      n.querySelectorAll(`[data-us-controls-root]`).forEach((e) => e.remove())
    },
    w = (e) => /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(e.trim())
  return (
    i(() => {
      let n = m.current(),
        r = n === `CANVAS`,
        i = [`CANVAS`, `PREVIEW`].includes(n)
      if (!w(a)) {
        ;(console.error(
          `[UnicornStudioEmbed] Invalid SDK version "${a}". Expected format: x.y.z (e.g. 1.5.3)`
        ),
          y(`Invalid SDK version "${a}". Use x.y.z (e.g. 1.5.3).`))
        return
      }
      return (
        y(null),
        (e.projectId || e.projectJSON) &&
          ((e) => {
            let n = `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v${a}/dist/unicornStudio.umd.js`
            if (
              !document.querySelector(
                `script[src^="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js"]`
              )
            ) {
              let t = document.createElement(`script`)
              ;((t.src = n),
                (t.onload = e),
                (t.onerror = () =>
                  console.error(`Failed to load UnicornStudio script at ` + n)),
                document.body.appendChild(t))
            } else if (t.UnicornStudio) e()
            else {
              let n = setInterval(() => {
                t.UnicornStudio && (clearInterval(n), e())
              }, 100)
            }
          })(() => {
            if (e.projectJSON) {
              let t = document.createElement(`script`)
              ;((t.id = h.current),
                (t.type = `application/json`),
                (t.textContent = e.projectJSON),
                document.body.appendChild(t),
                d.current?.setAttribute(`data-us-project-src`, h.current))
            } else if (e.projectId) {
              let t = e.projectId.split(`?`),
                n = t[0],
                r = t[1] && t[1].includes(`production`),
                a = i ? `?update=` + Math.random() : ``
              ;(d.current?.setAttribute(`data-us-project`, n + a),
                r && d.current?.setAttribute(`data-us-production`, `1`))
            }
            let n = t.UnicornStudio
            if (!n || !d.current) return
            let a = n.scenes?.find((e) => e.element === d.current)
            a && (C(a), a.destroy())
            let s = {
              element: d.current,
              dpi: e.dpi,
              scale: e.scale,
              fps: e.fps,
              lazyLoad: !!e.lazyLoad,
              fixed: !!e.fixed,
              altText: e.altText,
              ariaLabel: e.ariaLabel,
              controls: o,
              initialPreset: l,
              initialVariables: S
            }
            ;(e.projectJSON
              ? (s.filePath = h.current)
              : (s.projectId = e.projectId),
              n.addScene(s).then((e) => {
                ;((f.current = e),
                  r && (e.paused = !0),
                  x(JSON.stringify(e.getVariables?.() || S, null, 2)),
                  (p.current = e.onVariableChange?.((e, t, n) => {
                    x(JSON.stringify(n, null, 2))
                  })))
              }))
          }),
        () => {
          ;(p.current?.(),
            (p.current = null),
            C(),
            (f.current &&= (f.current.destroy(), null)))
          let e = document.getElementById(h.current)
          e && e.remove()
        }
      )
    }, [e.projectId, e.projectJSON, a, o, l]),
    i(() => {
      f.current && (f.current.setVariables?.(S), x(JSON.stringify(S, null, 2)))
    }, [S]),
    u(`div`, {
      style: {
        width: `100%`,
        height: `100%`,
        position: `relative`
      },
      children: [
        c(`div`, {
          ref: d,
          'data-us-dpi': e.dpi,
          'data-us-scale': e.scale,
          'data-us-fps': e.fps,
          'data-us-altText': e.altText,
          'data-us-ariaLabel': e.ariaLabel,
          'data-us-preset': l || void 0,
          'data-us-controls': o ? `true` : void 0,
          ...(e.lazyLoad
            ? {
                'data-us-lazyload': `true`
              }
            : {}),
          style: {
            width: `100%`,
            height: `100%`,
            ...e.style
          },
          children:
            e.header &&
            c(`h1`, {
              style: {
                width: `1px`,
                height: `1px`,
                margin: `-1px`,
                padding: `0`,
                overflow: `hidden`,
                clip: `rect(0, 0, 0, 0)`,
                border: `0`
              },
              children: e.header
            })
        }),
        _
          ? c(`div`, {
              style: {
                position: `absolute`,
                inset: 8,
                background: `rgba(239, 68, 68, 0.12)`,
                border: `1px solid rgba(239, 68, 68, 0.5)`,
                borderRadius: 6,
                padding: `8px 10px`,
                fontSize: 12,
                color: `#991B1B`,
                pointerEvents: `none`
              },
              children: _
            })
          : null
      ]
    })
  )
}
var v,
  y = e(() => {
    ;(a(),
      l(),
      o(),
      f(),
      (v = `2.2.1`),
      (_.displayName = `Unicorn Studio Embed`),
      d(_, {
        projectId: {
          type: p.String,
          title: `Project ID`
        },
        projectJSON: {
          type: p.String,
          title: `Project JSON`
        },
        sdkVersion: {
          type: p.String,
          title: `SDK version`,
          defaultValue: v,
          placeholder: v
        },
        preset: {
          type: p.String,
          title: `Preset`,
          placeholder: `Brand Dark`
        },
        initialVariables: {
          type: p.String,
          title: `Variables JSON`,
          displayTextArea: !0,
          placeholder: `{"accentColor":"#88bbff","intensity":0.75}`
        },
        controls: {
          type: p.Boolean,
          title: `Controls`,
          defaultValue: !0
        },
        scale: {
          type: p.Number,
          title: `Scale`,
          defaultValue: 1,
          min: 0.25,
          max: 1,
          step: 0.01
        },
        dpi: {
          type: p.Number,
          title: `DPI`,
          defaultValue: 1.5,
          min: 0.5,
          max: 2,
          step: 0.1
        },
        fps: {
          type: p.Number,
          title: `FPS`,
          defaultValue: 60,
          min: 10,
          max: 120,
          step: 5
        },
        header: {
          type: p.String,
          title: `H1 text`
        },
        altText: {
          type: p.String,
          title: `Alt text`
        },
        ariaLabel: {
          type: p.String,
          title: `Aria label`
        },
        lazyLoad: {
          type: p.Boolean,
          title: `Lazy Load`,
          defaultValue: !1
        },
        fixed: {
          type: p.Boolean,
          title: `Fixed`,
          defaultValue: !1
        }
      }))
  })
export { y as n, _ as t }
//# sourceMappingURL=UnicornStudioEmbed.BDxrCmNE.mjs.map
