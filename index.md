---
layout: page
title: "Executive Brief"
permalink: /
last_updated: 2026-09-26
---

<section class="hero" style="background-image:url('{{ '/assets/img/boardroom-hero.jpg' | relative_url }}');">
  <div class="hero-inner">
    <div class="hero-kicker">Situation Room &bull; Studio Cut</div>
    <div class="hero-rule"></div>
    <h1 class="hero-title">WBD Situation Room</h1>
    <p class="hero-sub">A neutral executive briefing told like a Hollywood deal drama. Just the facts, plus Ted's Takes when the plot turns.</p>
  </div>
</section>

<div class="panel" markdown="1">

## Welcome to the Situation Room

Some corporate actions are routine. Some are complicated. And once in a while, one comes along that reads like a Hollywood pitch.

The situation around **Warner Bros. Discovery** is firmly in that last category: a bidding war, a signed deal, a debt management exercise, a state antitrust fight, and now a settlement awaiting a judge's signature.

---

## What this site is (and what it is not)

This site is not a rumor feed, a cheerleading exercise, or a prediction market.

**WBD Situation Room** is a living narrative built from public filings, court records, issuer communications, and credible financial journalism, in two layers:

- **Just the facts:** what has been disclosed, filed, or ordered.
- **Ted's Takes:** informed interpretation from someone who has spent years watching how these situations get executed when the cameras are off.

---

## Why this story matters

For anyone who works in corporate actions, the story has every familiar element: a company built through a complex separation and carrying leverage from day one; a bidding war resolved into a signed deal; a concurrent debt management exercise with hard deadlines; a regulatory and litigation track that controls the closing date; and a financing structure that has to perform on the day the money moves.

---

## The story so far

AT&T combines WarnerMedia with Discovery in 2022, and Warner Bros. Discovery enters the public markets with scale and a balance sheet that demands discipline.

In June 2025, WBD announces a separation plan and refinances its debt. By December, Netflix and Paramount are both in the frame. Netflix signs first at $27.75 per share for Streaming and Studios. Paramount launches a hostile tender at $30.00 for the whole company, then raises to $31.00. WBD's board declares it a Superior Proposal, Netflix declines to match, and the companies sign on February 27, 2026. Shareholders approve on April 23.

In May, WBD's subsidiary issuers clear consent solicitations across 17 note series, and Paramount launches tender and exchange offers on the same instruments, settling on the acquisition closing.

The DOJ clears the deal without conditions on June 12. The European Commission clears it on July 22. But on July 13, twelve states led by California sue to block it, win a temporary restraining order, and Paramount agrees not to close before June 2027 or the end of the litigation. Trial is set for March 2027.

On September 21, 2026, Paramount and the states file a proposed five-year consent decree built on behavioral commitments. The judge questions it at a September 24 hearing and has not ruled. The ticking fee starts October 1. And as closing comes back into view, so does the financing: a $45.7 billion equity commitment personally guaranteed by Larry Ellison, backed largely by Oracle stock that has been anything but stable.

---

## How to navigate the Situation Room

- **Deal Hub:** the full narrative in episodes, with the comparison table and cast of characters.
- **Timeline:** every plot beat in chronological order.
- **Updates:** new developments as they occur.
- **Filings and Sources:** primary documents and court filings.
- **Why This Matters for Corporate Actions:** where theory meets execution.

---

## A note from the director

I built this site out of professional curiosity and appreciation for the craft. After two decades in operations roles across complex voluntary corporate actions, I have learned that the most interesting deals are rarely understood from the outside in. This one combines the drama of Hollywood with the mechanics of the back office, and it is worth watching how it is made, not just how it ends.

---

## Latest developments

{% if site.posts and site.posts.size > 0 %}
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  <span style="color:#64748b;font-size:13px;">As of {{ post.as_of }}</span>
{% endfor %}
{% else %}
_No updates published yet._
{% endif %}

</div>
