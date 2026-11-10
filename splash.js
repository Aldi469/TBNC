(function () {
  var splash = document.getElementById("splash");
  if (!splash) return;

  var timeoutId;
  var completed = false;

  function done() {
    if (completed) return;
    completed = true;
    window.clearTimeout(timeoutId);
    splash.remove();
    document.body.classList.remove("splash-active");
  }

  splash.addEventListener("animationend", function (e) {
    if (e.target === splash && e.animationName === "splash-lift") {
      done();
    }
  });

  timeoutId = window.setTimeout(done, 3500);
})();