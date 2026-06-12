---
layout: page
title: "Executive Brief"
permalink: /
last_updated: 2026-06-12
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

The situation around **Warner Bros. Discovery** is firmly in that last category.

A contested acquisition process that ran for months has resolved. The cast includes iconic studios, global streaming platforms, legacy media businesses, and balance sheets that refused to stay in the background. The stakes were measured in billions. The mechanics were measured in deadlines, elections, consents, and filings.

This is not just a deal. It is a production. And we are in the final act.

---

## What this site is (and what it is not)

This site is not a rumor feed. It is not a cheerleading exercise. It is not trying to predict the ending before the cameras stop rolling.

**WBD Situation Room** is a living narrative built from public filings, issuer communications, and credible financial journalism, presented in two layers:

- **Just the facts:** what has actually been disclosed, filed, or announced.
- **Ted's Takes:** informed interpretation from someone who has spent years watching how these situations get executed when the cameras are off.

---

## Why this story matters

On the surface, this is a media industry story. Streaming versus linear. Scale versus legacy. Content libraries, subscriber counts, and strategic ambition.

For anyone who works in corporate actions, the story is recognizable for a different reason. It has all the familiar elements: a company created through a complex separation, carrying leverage from day one; a carefully timed restructuring that changed what was possible; competing transaction paths that turned calendars, eligibility rules, and tender mechanics into strategic instruments; a contested bidding war that resolved into a signed deal; and a concurrent, multi-instrument debt management exercise running against a regulatory approval clock.

This is where strategy stops being theoretical and starts flowing through custody systems, election platforms, and deadline trackers.

---

## The story so far

The opening act begins in 2021, when AT&T decides to exit the media business and combine WarnerMedia with Discovery. The deal closes in 2022, and Warner Bros. Discovery enters the public markets with enormous scale, famous brands, and a balance sheet that demands discipline.

For a few years, the plot is subdued. Cost controls. Cash flow. Deleveraging.

In June 2025, the tone changes. A separation plan is announced. Debt is refinanced. Consents are sought. The capital structure is adjusted in ways that do more than tidy things up. They set the stage.

By December 2025, Netflix and Paramount have entered the frame with competing visions for how this story could end. Netflix strikes a deal first: a negotiated agreement to acquire the Streaming and Studios business at $27.75 per share following the Discovery Global separation. Paramount responds with a hostile tender offer at $30.00 for the entire company. The WBD board rejects it twice. Netflix moves to shore up its position by converting to all-cash in January 2026.

Then the situation turns. In February 2026, after receiving a contractual waiver from Netflix, WBD's board reopens negotiations with Paramount. Paramount's revised all-cash offer of $31.00 per share for the entire enterprise is declared a Superior Proposal. Netflix declines to match. On February 27, 2026, WBD and Paramount Skydance sign a definitive Agreement and Plan of Merger at $31.00 per share, valuing the enterprise at approximately $110.9 billion.

On April 23, 2026, WBD shareholders vote 1.7 billion to 16.3 million in favor of the transaction.

Through May 2026, the debt management exercise runs: consent solicitations across 17 series of WBD notes close on May 26 with the requisite consents received, while Paramount's $2.4 billion cash tender offers and $12.8 billion exchange offers on the same instruments remain open, expiring June 17 subject to extension and settling on the acquisition close.

As of June 12, 2026, the DOJ Antitrust Division has cleared the acquisition without conditions, according to multiple reports. The California and New York Attorney General offices continue an active review, and a confirmed closing date has not been disclosed.

---

## How to navigate the Situation Room

- **Deal Hub:** the full narrative in episodes, with the comparison table and cast of characters.
- **Timeline:** every plot beat in chronological order.
- **Updates:** new developments as they occur.
- **Filings and Sources:** the primary documents, for readers who want to go straight to the record.
- **Why This Matters for Corporate Actions:** where theory meets execution.

---

## A note from the director

I built this site out of professional curiosity and a genuine appreciation for the craft.

After two decades in operations roles across complex voluntary corporate actions, I have learned that the most interesting deals are rarely understood from the outside in. They are equal parts finance, law, process, and human behavior under pressure.

Everyone watches movies and television. Fewer people watch how deals involving those studios actually get done. This situation happens to combine both. And like any good production, it is worth paying attention to how it is made, not just how it ends.

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
