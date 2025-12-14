(async function () {
  // Stooq ticker for Warner Bros. Discovery (US)
  const symbol = "wbd.us";
  const url = `https://stooq.com/q/l/?s=${encodeURIComponent(symbol)}&f=sd2t2ohlcv&h&e=csv`;

  const elPrice = document.getElementById("wbd-price");
  const elChange = document.getElementById("wbd-change");
  const elUpdated = document.getElementById("wbd-updated");

  // If the widget isn't on the page, exit quietly (prevents any sitewide side effects).
  if (!elPrice || !elChange || !elUpdated) return;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const text = await res.text();
    // CSV format:
    // Symbol,Date,Time,Open,High,Low,Close,Volume
    const lines = text.trim().split("\n");
    if (lines.length < 2) throw new Error("No data returned");

    const cols = lines[1].split(",");
    const open = parseFloat(cols[3]);
    const close = parseFloat(cols[6]);
    const date = cols[1];
    const time = cols[2];

    if (!Number.isFinite(close)) throw new Error("Invalid price");

    elPrice.textContent = `$${close.toFixed(2)}`;

    // Approx change using Open -> Close (simple and reliable given this endpoint)
    if (Number.isFinite(open) && open !== 0) {
      const chg = close - open;
      const pct = (chg / open) * 100;
      const sign = chg >= 0 ? "+" : "";
      elChange.textContent = `${sign}${chg.toFixed(2)} (${sign}${pct.toFixed(2)}%)`;
      // Use your theme variables if present; fall back to readable defaults
      elChange.style.color = chg >= 0 ? "var(--good, #137333)" : "var(--bad, #b3261e)";
    } else {
      elChange.textContent = "";
    }

    elUpdated.textContent = `${date} ${time}`;
  } catch (err) {
    elPrice.textContent = "Quote unavailable";
    elChange.textContent = "";
    elUpdated.textContent = "—";
    // Non-critical enhancement: fail silently for users; log for debugging.
    console.warn("WBD quote fetch failed:", err);
  }
})();
