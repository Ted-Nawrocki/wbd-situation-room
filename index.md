---
layout: page
title: "Executive Brief"
permalink: /
last_updated: 2026-07-24
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

A contested acquisition process resolved into a signed deal, cleared federal and international antitrust review, and is now stopped in federal court by a coalition of states. The stakes are measured in billions. The mechanics are measured in deadlines, elections, consents, and now a litigation calendar.

This is not just a deal. It is a production. And the final act is being argued in a courtroom.

---

## What this site is (and what it is not)

This site is not a rumor feed. It is not a cheerleading exercise. It is not trying to predict the ending before the cameras stop rolling.

**WBD Situation Room** is a living narrative built from public filings, court records, issuer communications, and credible financial journalism, presented in two layers:

- **Just the facts:** what has actually been disclosed, filed, or ordered.
- **Ted's Takes:** informed interpretation from someone who has spent years watching how these situations get executed when the cameras are off.

---

## Why this story matters

On the surface, this is a media industry story. Streaming versus linear. Scale versus legacy. Content libraries, subscriber counts, and strategic ambition.

For anyone who works in corporate actions, the story is recognizable for a different reason. It has all the familiar elements: a company created through a complex separation, carrying leverage from day one; a bidding war that resolved into a signed deal; a concurrent debt management exercise with hard deadlines; and now a regulatory and litigation track that determines whether any of it closes on schedule.

This is where strategy stops being theoretical and starts flowing through custody systems, election platforms, and court dockets.

---

## The story so far

The opening act begins in 2021, when AT&T decides to exit the media business and combine WarnerMedia with Discovery. The deal closes in 2022, and Warner Bros. Discovery enters the public markets with enormous scale and a balance sheet that demands discipline.

In June 2025, WBD announces a separation plan and refinances its debt, setting the stage for what follows. By December 2025, Netflix and Paramount are both in the frame. Netflix signs first, at $27.75 per share for the Streaming and Studios business. Paramount launches a hostile tender at $30.00 for the whole company. After months of rejections, an all-cash amendment from Netflix, and a Delaware lawsuit, Paramount raises to $31.00 per share for the entire enterprise. WBD's board declares it a Superior Proposal, Netflix declines to match, and the two companies sign a definitive agreement on February 27, 2026.

Shareholders approve overwhelmingly on April 23, 2026. Through May, a debt management exercise runs alongside the regulatory process: consent solicitations across 17 WBD note series close on May 26 with requisite consents received, while Paramount's tender and exchange offers on the same instruments remain open, conditioned on the acquisition closing.

The regulatory story then splits in two directions. On June 12, 2026, the DOJ closes its investigation without conditions after an eight-month review. On July 22, 2026, the European Commission clears the deal, subject to Paramount exiting a film distribution joint venture in Europe. But on July 13, 2026, a coalition of 12 states led by California sues to block the merger on antitrust grounds, the WGA files a related suit the next day, and on July 20, 2026, a federal judge grants a temporary restraining order halting the closing. Four days later, on July 24, 2026, Paramount agrees to a standstill: no closing before June 1, 2027, or five days after the litigation resolves, whichever comes first. A ticking fee begins accruing to WBD shareholders starting September 30, 2026 regardless of how long the standstill runs.

The deal is cleared by every regulator that has ruled on it and on hold, for now, under an agreement that could keep it that way for the better part of a year.

---

## How to navigate the Situation Room

- **Deal Hub:** the full narrative in episodes, with the comparison table and cast of characters.
- **Timeline:** every plot beat in chronological order.
- **Updates:** new developments as they occur.
- **Filings and Sources:** the primary documents and court filings, for readers who want to go straight to the record.
- **Why This Matters for Corporate Actions:** where theory meets execution.

---

## A note from the director

I built this site out of professional curiosity and a genuine appreciation for the craft.

After two decades in operations roles across complex voluntary corporate actions, I have learned that the most interesting deals are rarely understood from the outside in. They are equal parts finance, law, process, and human behavior under pressure.

This situation happens to combine the drama of Hollywood with the mechanics of the back office. Like any good production, it is worth paying attention to how it is made, not just how it ends.

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
