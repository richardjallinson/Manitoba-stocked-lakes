// Language switch for the privacy page. Kept in its own file so privacy.html
// carries no inline script — same reason as sw-register in the Estate File
// package: an inline script needs a CSP exception the rest of the app doesn't.
(function () {
  var en = document.getElementById("enBtn"), fr = document.getElementById("frBtn");
  function show(lang) {
    var isFR = lang === "fr";
    document.documentElement.lang = isFR ? "fr-CA" : "en-CA";
    [["en", !isFR], ["fr", isFR]].forEach(function (pair) {
      var suffix = pair[0], visible = pair[1];
      ["title-", "date-", "foot-"].forEach(function (p) {
        var el = document.getElementById(p + suffix);
        if (el) el.hidden = !visible;
      });
      var section = document.getElementById(suffix);
      if (section) section.hidden = !visible;
    });
    en.setAttribute("aria-pressed", String(!isFR));
    fr.setAttribute("aria-pressed", String(isFR));
    try { localStorage.setItem("osl-language", isFR ? "fr" : "en"); } catch (e) {}
  }
  en.onclick = function () { show("en"); };
  fr.onclick = function () { show("fr"); };

  // Follow whatever the app itself is set to, then the device language.
  var saved = null;
  try { saved = localStorage.getItem("osl-language"); } catch (e) {}
  show(saved || ((navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en"));
})();
