console.log("quotes.js loaded");
alert("quotes.js loaded");

(async function () {
  const elPrice = document.getElementById("wbd-price");
  const elChange = document.getElementById("wbd-change");
  const elUpdated = document.getElementById("wbd-updated");
  if (!elPrice || !elChange || !elUpdated) return;

  try {
    const res = await fetch("/wbd-situation-room/assets/data/wbd.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const q = await res.json();

    const open = parseFloat(q.open);
    const close = parseFloat(q.close);

    if (!Number.isFinite(close)) throw new Error("Invalid close");

    elPrice.textContent = `$${close.toFixed(2)}`;

    if (Number.isFinite(open) && open !== 0) {
      const chg = close - open;
      const pct = (chg / open) * 100;
      const sign = chg >= 0 ? "+" : "";
      elChange.textContent = `${sign}${chg.toFixed(2)} (${sign}${pct.toFixed(2)}%)`;
      elChange.style.color = chg >= 0 ? "#137333" : "#b3261e";
    } else {
      elChange.textContent = "";
    }

    const stamp =
      q.date && q.time && q.date !== "—" && q.time !== "—"
        ? `${q.date} ${q.time}`
        : (q.asof_utc || "—");

    elUpdated.textContent = stamp;
  } catch (err) {
    elPrice.textContent = "Quote unavailable";
    elChange.textContent = "";
    elUpdated.textContent = "—";
    console.warn("Local quote load failed:", err);
  }
})();
