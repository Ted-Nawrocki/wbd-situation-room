---
layout: page
title: "Executive Brief"
---

## The situation room

A corporate actions drama is unfolding around **Warner Bros. Discovery**.  
It has all the ingredients practitioners recognize immediately: leverage, liability management, a separation plan, and competing transaction paths that turn timelines into weapons.

This site tracks the situation as it develops, grounded in public disclosures and reputable reporting, and told from the perspective of the people who understand what happens after the press release.

---

## Why this matters

This is not just a media story. It is a live case study in how corporate actions actually work:

- Capital structure decisions made years earlier resurfacing under pressure
- Liability management clearing the runway for structural moves
- Competing processes forcing shareholders into decision mechanics
- Operations teams executing under compressed timelines and heavy scrutiny

The drama is real because the mechanics are real.

---

## The plot so far

The story begins with AT&T’s decision to separate WarnerMedia and combine it with Discovery, creating Warner Bros. Discovery as a newly leveraged public company. It accelerates with a mid-2025 restructuring and separation plan that reshaped what could be sold, spun, or separated. It enters a new phase as Netflix and Paramount pursue competing paths that would lead to meaningfully different outcomes.

Each move sets up the next.

---

## How to navigate

- **Deal Hub**: the narrative, told in episodes  
  [Go to Deal Hub]({{ '/deal-hub/' | relative_url }})

- **Timeline**: the plot beats, anchored to facts and Ted’s Takes  
  [Go to Timeline]({{ '/timeline/' | relative_url }})

- **Filings & Sources**: the document trail  
  [Go to Filings & Sources]({{ '/filings/' | relative_url }})

- **About**: what this is and what it is not  
  [Go to About]({{ '/about/' | relative_url }})

---

## Latest developments

{% if site.posts and site.posts.size > 0 %}
{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ post.url | relative_url }})  
  <span style="color:#64748b;font-size:13px;">As of {{ post.as_of }}</span>
{% endfor %}
{% else %}
_No posts published yet._
{% endif %}
