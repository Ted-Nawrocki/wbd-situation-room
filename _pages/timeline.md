---
title: "Timeline"
permalink: /timeline/
---

**As of December 13, 2025**

This timeline presents the Warner Bros. Discovery situation as a sequence of plot beats.
Each event is anchored to a continuous timeline and presented with
**Just the facts** followed by **Ted’s Takes**.

<div class="timeline-container">
  {% assign events = site.timeline | sort: "date" %}
  {% for e in events %}
    <div class="timeline-row">
      <div class="timeline-marker">
        <div class="timeline-dot"></div>
        {% unless forloop.last %}
        <div class="timeline-line"></div>
        {% endunless %}
      </div>

      <div class="timeline-card">
        <div class="timeline-header">
          <div class="timeline-date">{{ e.date | date: "%B %-d, %Y" }}</div>
        </div>

        <h2 class="timeline-title">{{ e.title }}</h2>

        {% if e.fact %}
        <div class="timeline-section">
          <div class="timeline-label">Just the facts</div>
          <p>{{ e.fact | markdownify }}</p>
        </div>
        {% endif %}

        {% if e.context %}
<div class="timeline-section commentary desktop-only">
  <div class="timeline-label">Ted’s Takes</div>
  <p>{{ e.context | markdownify }}</p>
</div>

<details class="timeline-section commentary mobile-only">
  <summary>Ted’s Takes</summary>
  <div class="timeline-mobile-content">
    <p>{{ e.context | markdownify }}</p>
  </div>
</details>
{% endif %}


        {% if e.sources %}
        <details class="timeline-sources">
          <summary>Sources</summary>
          <ul>
            {% for s in e.sources %}
              <li>{{ s | markdownify }}</li>
            {% endfor %}
          </ul>
        </details>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
