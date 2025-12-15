function fmtChange(open, close) {
  if (!Number.isFinite(open) || open === 0 || !Number.isFinite(close)) return null;
  const chg = close - open;
  const pct = (chg / open) * 100;
  const sign = chg >= 0 ? "+" : "";
  return { chg, pct, text: `${sign}${chg.toFixed(2)} (${sign}${pct.toFixed(2)}%)` };
}

async function loadQuote(url, prefix) {
  const elPrice = document.getElementById(`${prefix}-price`);
  const elChange = document.getElementById(`${prefix}-change`);
  const elUpdated = document.getElementById(`${prefix}-updated`);
  if (!elPrice || !elChange || !elUpdated) return;

  try {
    const res = await fetch(`${url}?v=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const q = await res.json();

    const open = parseFloat(q.open);
    const close = parseFloat(q.close);
    if (!Number.isFinite(close)) throw new Error("Invalid close in JSON");

    elPrice.textContent = `$${close.toFixed(2)}`;

    const c = fmtChange(open, close);
    if (c) {
      elChange.textContent = c.text;
      elChange.style.color = c.chg >= 0 ? "#137333" : "#b3261e";
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
    console.warn(`Quote load failed (${prefix}):`, err);
  }
}

const BASE = "/wbd-situation-room/assets/data";

loadQuote(`${BASE}/wbd.json`, "wbd");
loadQuote(`${BASE}/nflx.json`, "nflx");
loadQuote(`${BASE}/psky.json`, "psky");
