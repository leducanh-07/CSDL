"use strict";
const { useState, useEffect, useMemo } = React;
const MC = [
  "#6366f1",
  "#0ea5e9",
  "#14b8a6",
  "#22c55e",
  "#eab308",
  "#f97316",
  "#ef4444",
  "#ec4899",
  "#a855f7",
  "#8b5cf6",
  "#06b6d4",
  "#84cc16",
  "#f43f5e",
];
const mc = (m) => MC[(m - 1) % MC.length];
const LET = ["A", "B", "C", "D"];
const SQLRE =
  /^\s*(select|insert|update|delete|create|alter|drop|merge|truncate|grant|revoke|commit|rollback|savepoint|from|where|group by|order by|having|union|intersect|minus|with|set|values|desc|describe)\b|;\s*$|\bfrom\s+\w+\s*(where|;|$)/i;
function load(k, d) {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : d;
  } catch (e) {
    return d;
  }
}
function save(k, v) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch (e) {}
}
const shuffle = (a) => {
  a = [...a];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const fmt = (s) => {
  s = Math.max(0, s);
  const h = Math.floor(s / 3600),
    m = Math.floor((s % 3600) / 60);
  return (
    (h ? h + ":" : "") +
    String(m).padStart(h ? 2 : 2, "0") +
    ":" +
    String(s % 60).padStart(2, "0")
  );
};
function Rich({ text }) {
  return text
    .split("\n")
    .map((l, i) =>
      SQLRE.test(l) && l.trim()
        ? React.createElement("code", { key: i, className: "code" }, l)
        : React.createElement("p", { key: i }, l),
    );
}
function Opt({ text }) {
  return SQLRE.test(text)
    ? React.createElement(
        "code",
        { className: "code", style: { margin: 0, flex: 1 } },
        text,
      )
    : React.createElement("span", { className: "ot" }, text);
}
function App() {
  const [theme, setTheme] = useState(() => load("dbms_theme", "light"));
  const [bm, setBm] = useState(() => load("dbms_bm", []));
  const [mode, setMode] = useState("study");
  const [mod, setMod] = useState(0),
    [kw, setKw] = useState(""),
    [onlyBm, setOnlyBm] = useState(false);
  const [ans, setAns] = useState({}),
    [idx, setIdx] = useState(0);
  const [ex, setEx] = useState(null); // {list,end,done,used}
  const [cnt, setCnt] = useState(20);
  const [open, setOpen] = useState(false),
    [result, setResult] = useState(false),
    [left, setLeft] = useState(0);
  useEffect(() => {
    document.documentElement.setAttribute("data-t", theme);
    save("dbms_theme", theme);
  }, [theme]);
  useEffect(() => save("dbms_bm", bm), [bm]);
  const filtered = useMemo(() => {
    const k = kw.trim().toLowerCase();
    return DATA.filter(
      (q) =>
        (!mod || q.m === mod) &&
        (!onlyBm || bm.includes(q.id)) &&
        (!k ||
          (q.q + " " + q.qv + " " + q.o.join(" ") + " " + q.ov.join(" "))
            .toLowerCase()
            .includes(k)),
    );
  }, [mod, kw, onlyBm, bm]);
  const exam = mode === "exam" && ex;
  const list = exam ? ex.list : filtered;
  const i = Math.min(idx, Math.max(0, list.length - 1));
  const q = list[i];
  const finish = () => {
    setEx((e) =>
      e && !e.done
        ? { ...e, done: true, used: Math.round((Date.now() - e.t0) / 1000) }
        : e,
    );
    setResult(true);
  };
  useEffect(() => {
    if (!exam || ex.done) return;
    const t = () => {
      const r = Math.round((ex.end - Date.now()) / 1000);
      setLeft(r);
      if (r <= 0) finish();
    };
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, [exam && ex.done, ex && ex.end]);
  const switchMode = (m) => {
    setMode(m);
    setIdx(0);
    setAns({});
    setEx(null);
    setResult(false);
  };
  const startExam = () => {
    const l = shuffle(filtered).slice(0, cnt);
    setAns({});
    setIdx(0);
    setResult(false);
    setOpen(false);
    setEx({
      list: l,
      t0: Date.now(),
      end: Date.now() + Math.ceil(l.length * 1.5) * 60000,
      done: false,
    });
    window.scrollTo(0, 0);
  };
  const toggleBm = (id) =>
    setBm((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id]));
  const reveal = exam ? ex.done : q && ans[q.id] != null;
  const pick = (n) => {
    if (!q || reveal || (exam && ex.done)) return;
    setAns({ ...ans, [q.id]: n });
  };
  const answered = list.filter((x) => ans[x.id] != null).length;
  const correct = list.filter((x) => ans[x.id] === x.c).length;
  const gstat = (x) => {
    const a = ans[x.id];
    if (a == null) return "";
    if (exam && !ex.done) return "ans";
    return a === x.c ? "ok" : "bad";
  };
  const goto = (n) => {
    setIdx(n);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const pct = list.length ? Math.round((correct * 100) / list.length) : 0;
  const opts = q ? (q.ov.length ? q.ov : q.o) : [];
  const lock = exam && !ex.done;
  const Side = React.createElement(
    "aside",
    {
      className: "side" + (open ? " open" : ""),
      "aria-label": "\u0110i\u1EC1u h\u01B0\u1EDBng",
    },
    React.createElement(
      "div",
      { style: { display: "flex", alignItems: "center" } },
      React.createElement(
        "b",
        { style: { fontSize: 17 } },
        React.createElement("i", { className: "fa-solid fa-sliders" }),
        " B\u1ED9 l\u1ECDc & \u0111i\u1EC1u h\u01B0\u1EDBng",
      ),
      React.createElement("span", { className: "sp" }),
      React.createElement(
        "button",
        {
          className: "ib dr-x",
          onClick: () => setOpen(false),
          "aria-label": "\u0110\u00F3ng",
        },
        React.createElement("i", { className: "fa-solid fa-xmark" }),
      ),
    ),
    React.createElement("span", { className: "lbl" }, "Ch\u1EBF \u0111\u1ED9"),
    React.createElement(
      "div",
      { className: "seg" },
      React.createElement(
        "button",
        {
          className: mode === "study" ? "on" : "",
          onClick: () => switchMode("study"),
        },
        React.createElement("i", { className: "fa-solid fa-book-open" }),
        " \u00D4n t\u1EADp",
      ),
      React.createElement(
        "button",
        {
          className: mode === "exam" ? "on" : "",
          onClick: () => switchMode("exam"),
        },
        React.createElement("i", { className: "fa-solid fa-stopwatch" }),
        " Thi th\u1EED",
      ),
    ),
    !lock &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "label",
          { className: "lbl", htmlFor: "s" },
          "T\u00ECm theo t\u1EEB kh\u00F3a SQL",
        ),
        React.createElement("input", {
          id: "s",
          className: "inp",
          value: kw,
          onChange: (e) => {
            setKw(e.target.value);
            setIdx(0);
          },
          placeholder: "VD: GROUP BY, NVL, JOIN\u2026",
        }),
        React.createElement(
          "label",
          { className: "lbl", htmlFor: "m" },
          "Ch\u1EE7 \u0111\u1EC1 (Module)",
        ),
        React.createElement(
          "select",
          {
            id: "m",
            className: "inp",
            value: mod,
            onChange: (e) => {
              setMod(+e.target.value);
              setIdx(0);
            },
          },
          React.createElement(
            "option",
            { value: 0 },
            "T\u1EA5t c\u1EA3 ch\u1EE7 \u0111\u1EC1 (",
            DATA.length,
            ")",
          ),
          MODULES.map((m, k) =>
            React.createElement(
              "option",
              { key: k, value: k + 1 },
              k + 1,
              ". ",
              m,
              " (",
              DATA.filter((x) => x.m === k + 1).length,
              ")",
            ),
          ),
        ),
        React.createElement(
          "span",
          { className: "lbl" },
          "C\u00E2u \u0111\u00E3 \u0111\u00E1nh d\u1EA5u",
        ),
        React.createElement(
          "button",
          {
            className: "tg" + (onlyBm ? " on" : ""),
            onClick: () => {
              setOnlyBm(!onlyBm);
              setIdx(0);
            },
            "aria-pressed": onlyBm,
          },
          React.createElement("i", {
            className: (onlyBm ? "fa-solid" : "fa-regular") + " fa-star",
          }),
          " Ch\u1EC9 xem c\u00E2u \u0111\u00E1nh d\u1EA5u (",
          bm.length,
          ")",
        ),
      ),
    mode === "exam" &&
      !ex &&
      React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "label",
          { className: "lbl", htmlFor: "c" },
          "S\u1ED1 c\u00E2u thi",
        ),
        React.createElement(
          "select",
          {
            id: "c",
            className: "inp",
            value: cnt,
            onChange: (e) => setCnt(+e.target.value),
          },
          [10, 20, 40, 60, 100].map((n) =>
            React.createElement(
              "option",
              { key: n, value: n },
              n,
              " c\u00E2u (~",
              Math.ceil(n * 1.5),
              " ph\u00FAt)",
            ),
          ),
        ),
        React.createElement(
          "button",
          {
            className: "btn pr wide",
            style: { marginTop: 14 },
            disabled: !filtered.length,
            onClick: startExam,
          },
          React.createElement("i", { className: "fa-solid fa-play" }),
          " B\u1EAFt \u0111\u1EA7u thi th\u1EED",
        ),
      ),
    lock &&
      React.createElement(
        "button",
        {
          className: "btn gr wide",
          style: { marginTop: 14 },
          onClick: () => {
            if (
              confirm(
                list.length - answered
                  ? `Còn ${list.length - answered} câu chưa trả lời. Nộp bài?`
                  : "Nộp bài ngay?",
              )
            )
              finish();
          },
        },
        React.createElement("i", { className: "fa-solid fa-paper-plane" }),
        " N\u1ED9p b\u00E0i",
      ),
    mode === "study" &&
      answered > 0 &&
      React.createElement(
        "button",
        {
          className: "btn wide",
          style: { marginTop: 12 },
          onClick: () => setAns({}),
        },
        React.createElement("i", { className: "fa-solid fa-rotate-left" }),
        " L\u00E0m l\u1EA1i t\u1EEB \u0111\u1EA7u",
      ),
    React.createElement(
      "span",
      { className: "lbl" },
      "L\u01B0\u1EDBi c\u00E2u h\u1ECFi (",
      list.length,
      ")",
    ),
    React.createElement(
      "div",
      { className: "grid" },
      list.map((x, k) =>
        React.createElement(
          "button",
          {
            key: x.id,
            style: { "--mc": mc(x.m) },
            className: "gb " + gstat(x) + (k === i ? " cur" : ""),
            onClick: () => goto(k),
            "aria-label": "Câu " + (k + 1),
          },
          k + 1,
          bm.includes(x.id) &&
            React.createElement("i", { className: "fa-solid fa-star" }),
        ),
      ),
    ),
    React.createElement(
      "div",
      { className: "leg" },
      React.createElement(
        "span",
        { style: { "--c": "var(--soft)" } },
        "Ch\u01B0a l\u00E0m",
      ),
      React.createElement(
        "span",
        { style: { "--c": "var(--ok)" } },
        "\u0110\u00FAng",
      ),
      React.createElement("span", { style: { "--c": "var(--bad)" } }, "Sai"),
      React.createElement(
        "span",
        { style: { "--c": "var(--ac)" } },
        lock ? "Đã chọn" : "Đang xem",
      ),
      React.createElement(
        "span",
        { style: { "--c": "var(--warn)" } },
        "\u0110\u00E1nh d\u1EA5u \u2B50",
      ),
    ),
  );
  return React.createElement(
    "div",
    null,
    React.createElement(
      "header",
      { className: "hdr" },
      React.createElement(
        "button",
        {
          className: "ib mb",
          onClick: () => setOpen(true),
          "aria-label": "M\u1EDF b\u1EA3ng \u0111i\u1EC1u h\u01B0\u1EDBng",
        },
        React.createElement("i", { className: "fa-solid fa-bars" }),
      ),
      React.createElement(
        "div",
        { className: "logo" },
        React.createElement("i", { className: "fa-solid fa-database" }),
      ),
      React.createElement(
        "div",
        { className: "ttl" },
        "\u00D4n t\u1EADp DBMS & SQL",
        React.createElement(
          "small",
          null,
          "Ng\u00E2n h\u00E0ng ",
          DATA.length,
          " c\u00E2u tr\u1EAFc nghi\u1EC7m",
        ),
      ),
      React.createElement("span", { className: "sp" }),
      React.createElement(
        "span",
        { className: "badge" },
        React.createElement("i", { className: "fa-solid fa-layer-group" }),
        mod ? mod + ". " + MODULES[mod - 1] : "Tất cả chủ đề",
      ),
      React.createElement(
        "span",
        { className: "badge ok", title: "S\u1ED1 c\u00E2u \u0111\u00FAng" },
        React.createElement("i", { className: "fa-solid fa-circle-check" }),
        !exam || ex.done
          ? `${correct}/${answered} đúng`
          : `${answered}/${list.length} đã làm`,
      ),
      lock &&
        React.createElement(
          "span",
          { className: "badge timer " + (left < 60 ? "warn" : "") },
          React.createElement("i", { className: "fa-solid fa-clock" }),
          fmt(left),
        ),
      React.createElement(
        "button",
        {
          className: "ib",
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          "aria-label": "\u0110\u1ED5i giao di\u1EC7n s\u00E1ng/t\u1ED1i",
        },
        React.createElement("i", {
          className: "fa-solid " + (theme === "dark" ? "fa-sun" : "fa-moon"),
        }),
      ),
    ),
    React.createElement(
      "div",
      { className: "layout" },
      Side,
      open &&
        React.createElement("div", {
          className: "overlay show",
          style: { zIndex: 45 },
          onClick: () => setOpen(false),
        }),
      React.createElement(
        "main",
        { className: "main" },
        mode === "exam" && !ex
          ? React.createElement(
              "div",
              { className: "card empty" },
              React.createElement("i", {
                className: "fa-solid fa-stopwatch",
                style: { fontSize: 44, color: "var(--ac)" },
              }),
              React.createElement(
                "h2",
                { style: { color: "var(--text)" } },
                "Ch\u1EBF \u0111\u1ED9 Thi th\u1EED",
              ),
              React.createElement(
                "p",
                null,
                "Ch\u1ECDn ch\u1EE7 \u0111\u1EC1 v\u00E0 s\u1ED1 c\u00E2u \u1EDF thanh b\u00EAn r\u1ED3i nh\u1EA5n ",
                React.createElement(
                  "b",
                  null,
                  "B\u1EAFt \u0111\u1EA7u thi th\u1EED",
                ),
                ". \u0110\u00E1p \u00E1n ch\u1EC9 hi\u1EC7n sau khi n\u1ED9p b\u00E0i.",
              ),
              React.createElement(
                "button",
                { className: "btn pr mb", onClick: () => setOpen(true) },
                "M\u1EDF c\u00E0i \u0111\u1EB7t",
              ),
            )
          : !q
            ? React.createElement(
                "div",
                { className: "card empty" },
                React.createElement("i", {
                  className: "fa-regular fa-face-frown",
                  style: { fontSize: 44 },
                }),
                React.createElement(
                  "h3",
                  null,
                  "Kh\u00F4ng t\u00ECm th\u1EA5y c\u00E2u h\u1ECFi ph\u00F9 h\u1EE3p",
                ),
                React.createElement(
                  "p",
                  null,
                  "H\u00E3y th\u1EED \u0111\u1ED5i t\u1EEB kh\u00F3a ho\u1EB7c b\u1ECF b\u1ED9 l\u1ECDc.",
                ),
              )
            : React.createElement(
                "div",
                {
                  className: "card",
                  key: q.id + mode,
                  style: { "--mc": mc(q.m) },
                },
                React.createElement(
                  "div",
                  { className: "pg" },
                  React.createElement("div", {
                    style: { width: ((i + 1) * 100) / list.length + "%" },
                  }),
                ),
                React.createElement(
                  "div",
                  { className: "qm" },
                  React.createElement(
                    "span",
                    null,
                    "C\u00E2u ",
                    i + 1,
                    "/",
                    list.length,
                    " \u00B7 Ch\u1EE7 \u0111\u1EC1 ",
                    q.m,
                    ": ",
                    MODULES[q.m - 1],
                  ),
                  React.createElement(
                    "button",
                    {
                      className: "btn bmb" + (bm.includes(q.id) ? " on" : ""),
                      style: { padding: "6px 12px" },
                      onClick: () => toggleBm(q.id),
                      "aria-pressed": bm.includes(q.id),
                    },
                    React.createElement("i", {
                      className:
                        (bm.includes(q.id) ? "fa-solid" : "fa-regular") +
                        " fa-star",
                    }),
                    bm.includes(q.id) ? "Đã đánh dấu" : "Đánh dấu",
                  ),
                ),
                React.createElement(
                  "div",
                  { className: "qt" },
                  React.createElement(Rich, { text: q.qv || q.q }),
                ),
                !q.qv &&
                  React.createElement(
                    "p",
                    {
                      style: {
                        fontSize: 12,
                        color: "var(--warn)",
                        margin: "-10px 0 14px",
                      },
                    },
                    React.createElement("i", {
                      className: "fa-solid fa-language",
                    }),
                    " C\u00E2u n\u00E0y \u0111ang hi\u1EC3n th\u1ECB b\u1EA3n g\u1ED1c ti\u1EBFng Anh (ch\u01B0a c\u00F3 b\u1EA3n d\u1ECBch).",
                  ),
                React.createElement(
                  "div",
                  {
                    role: "radiogroup",
                    "aria-label": "C\u00E1c \u0111\u00E1p \u00E1n",
                  },
                  opts.map((t, n) => {
                    const sel = ans[q.id] === n;
                    let c = "";
                    if (reveal) {
                      c = n === q.c ? "ok" : sel ? "bad" : "dim";
                    } else if (sel) c = "sel";
                    return React.createElement(
                      "button",
                      {
                        key: n,
                        role: "radio",
                        "aria-checked": sel,
                        disabled: reveal && !exam ? true : exam && ex.done,
                        className: "opt " + c,
                        onClick: () => pick(n),
                      },
                      React.createElement("span", { className: "ol" }, LET[n]),
                      React.createElement(Opt, { text: t }),
                      reveal &&
                        n === q.c &&
                        React.createElement("i", {
                          className: "fa-solid fa-circle-check",
                          style: { color: "var(--ok)", fontSize: 20 },
                        }),
                      reveal &&
                        sel &&
                        n !== q.c &&
                        React.createElement("i", {
                          className: "fa-solid fa-circle-xmark",
                          style: { color: "var(--bad)", fontSize: 20 },
                        }),
                    );
                  }),
                ),
                reveal &&
                  React.createElement(
                    "div",
                    { className: "expl", role: "status" },
                    React.createElement(
                      "h4",
                      null,
                      React.createElement("i", {
                        className: "fa-solid fa-lightbulb",
                      }),
                      " Gi\u1EA3i th\u00EDch",
                    ),
                    React.createElement(
                      "p",
                      null,
                      React.createElement(
                        "b",
                        null,
                        ans[q.id] == null
                          ? "Bạn chưa trả lời. "
                          : ans[q.id] === q.c
                            ? "Chính xác! "
                            : "Chưa đúng. ",
                        "\u0110\u00E1p \u00E1n \u0111\u00FAng: ",
                        LET[q.c],
                        ".",
                      ),
                    ),
                    React.createElement(
                      "p",
                      null,
                      q.ex || "Đáp án đúng là: " + opts[q.c],
                    ),
                  ),
                React.createElement(
                  "div",
                  { className: "nav" },
                  React.createElement(
                    "button",
                    {
                      className: "btn",
                      disabled: i === 0,
                      onClick: () => goto(i - 1),
                    },
                    React.createElement("i", {
                      className: "fa-solid fa-arrow-left",
                    }),
                    " C\u00E2u tr\u01B0\u1EDBc",
                  ),
                  React.createElement("span", { className: "sp" }),
                  lock &&
                    React.createElement(
                      "button",
                      {
                        className: "btn gr",
                        onClick: () => {
                          if (confirm("Nộp bài ngay?")) finish();
                        },
                      },
                      React.createElement("i", {
                        className: "fa-solid fa-paper-plane",
                      }),
                      " N\u1ED9p b\u00E0i",
                    ),
                  exam &&
                    ex.done &&
                    React.createElement(
                      "button",
                      { className: "btn", onClick: () => setResult(true) },
                      React.createElement("i", {
                        className: "fa-solid fa-chart-simple",
                      }),
                      " Xem \u0111i\u1EC3m",
                    ),
                  React.createElement(
                    "button",
                    {
                      className: "btn pr",
                      disabled: i === list.length - 1,
                      onClick: () => goto(i + 1),
                    },
                    "C\u00E2u sau ",
                    React.createElement("i", {
                      className: "fa-solid fa-arrow-right",
                    }),
                  ),
                ),
              ),
      ),
    ),
    React.createElement(
      "div",
      {
        className: "overlay" + (result && exam && ex.done ? " show" : ""),
        role: "dialog",
        "aria-modal": "true",
      },
      exam &&
        ex.done &&
        React.createElement(
          "div",
          { className: "modal" },
          React.createElement(
            "h2",
            { style: { margin: 0 } },
            "K\u1EBFt qu\u1EA3 thi th\u1EED",
          ),
          React.createElement(
            "div",
            {
              className: "big",
              style: { color: pct >= 70 ? "var(--ok)" : "var(--bad)" },
            },
            correct,
            "/",
            list.length,
          ),
          React.createElement(
            "p",
            { style: { fontWeight: 700, margin: "0 0 6px" } },
            pct,
            "% \u2014 ",
            pct >= 70 ? "Đạt 🎉" : "Chưa đạt, hãy ôn thêm nhé",
          ),
          React.createElement(
            "p",
            { style: { color: "var(--muted)", fontSize: 14 } },
            "\u0110\u00FAng ",
            correct,
            " \u00B7 Sai ",
            answered - correct,
            " \u00B7 B\u1ECF tr\u1ED1ng ",
            list.length - answered,
            " \u00B7 Th\u1EDDi gian ",
            fmt(ex.used),
          ),
          React.createElement(
            "div",
            { style: { display: "grid", gap: 8, marginTop: 16 } },
            React.createElement(
              "button",
              {
                className: "btn pr",
                onClick: () => {
                  setResult(false);
                  setIdx(0);
                },
              },
              React.createElement("i", { className: "fa-solid fa-eye" }),
              " Xem l\u1EA1i \u0111\u00E1p \u00E1n & gi\u1EA3i th\u00EDch",
            ),
            React.createElement(
              "button",
              { className: "btn", onClick: () => switchMode("exam") },
              React.createElement("i", {
                className: "fa-solid fa-rotate-right",
              }),
              " Thi l\u1EA1i",
            ),
          ),
        ),
    ),
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App, null),
);
