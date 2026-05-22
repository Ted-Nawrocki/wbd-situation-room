---
title: "Why This Matters for Corporate Actions Professionals"
permalink: /why-it-matters/
layout: page
last_updated: 2026-05-21
---

**As of May 21, 2026**

## Why this matters for corporate actions professionals

The bidding war is resolved. The acquisition agreement is signed. Shareholders have approved.

What remains is where the operational work actually lives.

For corporate actions professionals, the WBD situation has always been a concentrated demonstration of what happens when scale, complexity, and compressed timelines converge. That demonstration is not over. It has shifted from the contested phase -- multiple offers, competing structures, proxy campaigns -- to the closing phase, where a different set of operational demands is active right now.

---

## 1. The closing phase has its own operational architecture

The contest phase tested systems' ability to track competing offers, handle conditional eligibility, and communicate across multiple simultaneous transaction paths. That phase is over.

The closing phase tests something different: the ability to manage a multi-instrument liability management exercise running in parallel with a regulatory approval process that operates on its own timeline and cannot be accelerated by either party.

Three concurrent operations were launched on May 19, 2026:
- WBD consent solicitations across 17 note series (consent deadline May 26, 2026)
- Paramount cash tender offers on two short-dated series (expiration June 17, 2026)
- Paramount exchange offers on thirteen longer-dated series (expiration June 17, 2026)

All three are conditioned on the acquisition closing. Settlement of the tender and exchange offers is expected on or shortly after the closing date, targeted Q3 2026 but subject to DOJ and European regulatory timelines. That means operations teams must manage these positions in an open, unsettled state for a window that could extend several months beyond the June 17 expiration date.

---

## 2. The tender and exchange offers are not the same transaction

This distinction matters operationally and analytically, and it is worth stating precisely.

The two short-dated series -- the 3.755% Senior Notes due 2027 and the 3.950% Senior Notes due 2028 -- are targeted in the cash tender offers. Accepted notes are cancelled and retired at settlement. Holders who tender receive cash and exit the WBD capital structure entirely. The WBD subsidiary issuers' obligations on those two series are extinguished at closing.

The thirteen longer-dated series -- 2029 through 2052 across USD and euro denominations -- are targeted in the exchange offers. Holders who exchange receive newly issued Paramount Skydance second-lien secured notes with matching currency, maturity dates, interest payment dates, and interest rates. The existing WBD subsidiary notes are retired and cancelled. The obligor changes from a WBD subsidiary to Paramount Skydance Corporation, and the security package changes from unsecured senior obligations to second-lien secured obligations of the combined company.

These are two different outcomes for two different populations of holders. Operations systems, booking entries, and client communications need to reflect that distinction from the point of exchange instruction through to settlement and beyond.

---

## 3. Consent solicitation mechanics create a sequencing dependency

Participation in either of Paramount's offers -- tender or exchange -- requires prior delivery of consents in the concurrent WBD consent solicitations. That sequencing dependency runs in one direction only: no consent, no eligibility for the offers.

Upon delivering consent, a holder's notes are re-identified with a temporary CUSIP or ISIN. From that point until the offer expiration, notes bearing the temporary identifier trade separately from non-consenting holders' notes in the same series. Operations teams managing positions across that transition need to track both identifiers simultaneously and link them correctly through to settlement.

Missing the consent deadline -- May 26, 2026 -- gates a holder out of the Paramount offers entirely for that series, regardless of their willingness to participate in the tender or exchange. That is an irreversible eligibility consequence from a missed operational deadline.

---

## 4. The exchange offers carry a hard eligibility restriction

The Paramount exchange offers are available only to eligible holders: qualified institutional buyers as defined under Rule 144A, or non-U.S. persons as defined under Regulation S under the Securities Act of 1933. The exchange offers are not registered. Non-QIB domestic holders are ineligible regardless of whether they deliver consents.

For custodians and intermediaries, this requires a holder population screen before submitting exchange instructions. Submitting instructions for a non-eligible holder is not a recoverable error at the point of settlement. Non-eligible holders of exchange offer note series who deliver consent will receive the $2.50 consent payment, but their notes remain outstanding WBD subsidiary obligations after closing. Systems need to reflect the correct obligor, CUSIP or ISIN, and governing documentation for those positions from closing forward.

---

## 5. Settlement does not occur at expiration

Both offers expire June 17, 2026. Settlement occurs on or shortly after the acquisition closing date, which is targeted for Q3 2026 but subject to regulatory timelines outside the parties' control.

For custody operations, this creates a prolonged unsettled position state that requires active management. Tendered and exchanged notes remain outstanding obligations of the WBD subsidiary issuers until closing. Interest continues to accrue on those instruments and is paid through the settlement date. On the first interest payment date after settlement of the exchange offers, Paramount pays the combined accrued interest on both the tendered WBD notes (through settlement) and the new PSKY notes (from settlement forward).

That interest bridge is clean in the transaction documents. Replicating it cleanly in operations systems across potentially dozens of individual position records requires advance preparation, not post-close reconciliation.

---

## 6. Scale amplifies every point of complexity

The consent solicitations cover 17 note series. The exchange offers cover 13 of those series. The tender offers cover 2. Aggregate principal across all affected instruments is approximately $16.6 billion, denominated in both US dollars and euros, issued by two separate WBD subsidiary entities under separate indentures, held across the global custodian chain.

The number of individual holder positions embedded in that aggregate is substantial. Each position requires eligibility screening, consent instruction, offer participation decision, temporary identifier management, and ultimately settlement reconciliation. The failure modes are not exotic -- they are the standard failure modes of scale: miscommunication, missed deadlines, identifier confusion, and instruction processing gaps under time pressure.

Scale does not change what the failure modes are. It changes how quickly they become material.

---

## 7. Regulatory conditionality is the operational unknown that cannot be managed away

Every element of the debt management exercise -- the consent solicitations, the tender offers, the exchange offers -- is conditioned on the acquisition closing. Operations teams can prepare perfectly for June 17 and still face a months-long unsettled position state if regulatory clearance is delayed.

That conditionality is not a systems problem. It is a reality of acquisition-linked corporate actions. But it requires operations workflows to be designed around two scenarios simultaneously: a Q3 2026 close and a delayed close. Positions need to be trackable, reportable, and manageable under both.

The $5.8 billion reverse termination fee protects against the scenario where close does not happen at all. Operations teams need to understand the fallback mechanics in the WBD indentures and the Paramount offer documents for that tail scenario, even if they hope never to apply them.

---

## 8. Corporate actions expertise is not ancillary to this transaction. It is core risk management.

The strategic rationale for the Paramount-WBD combination was debated, analyzed, and ultimately resolved in boardrooms and on trading floors. Whether that strategic rationale actually delivers value will be determined in part by whether the transaction closes cleanly, on time, and without operational failures that create legal or financial exposure for the parties, their advisors, and the intermediaries in the custody chain.

The consent solicitation deadline is May 26. The offer expiration is June 17. Settlement follows regulatory close. Every one of those dates is a point at which operational readiness is tested.

This is not the back office. This is where the deal either lands or it doesn't.

---

## Closing observation

Contested transactions of this scale do not fail because strategy was unclear.

They fail because execution breaks under complexity.

The WBD situation has demonstrated this in both phases. During the bidding war, the complexity was structural: competing offers, conditional eligibility, multi-step transaction paths, and a proxy campaign running in parallel with a tender and a shareholder vote campaign. During the closing phase, the complexity is operational: a multi-instrument liability management exercise with hard deadlines, eligibility restrictions, sequencing dependencies, and a settlement date tied to a regulatory calendar that neither party controls.

The professionals who understand both phases -- the strategic mechanics and the operational mechanics -- are the ones whose clients get through this cleanly.

That is why this story has always been worth watching.
