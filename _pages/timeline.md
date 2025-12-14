---
title: "Timeline"
permalink: /timeline/
---

**As of December 13, 2025**

<div class="tl">
  {% assign events = site.timeline | sort: "date" %}
  {% for e in events %}
    <section class="tl-item">
      <div class="tl-rail" aria-hidden="true">
        <div class="tl-dot"></div>
        {% unless forloop.last %}<div class="tl-line"></div>{% endunless %}
      </div>

      <div class="tl-card">
        <div class="tl-meta">
          <div class="tl-date">{{ e.date | date: "%B %-d, %Y" }}</div>
          <div class="tl-badge">Timeline</div>
        </div>

        <h2 class="tl-title">{{ e.title }}</h2>

        {% if e.fact %}
          <div class="tl-block">
            <div class="tl-label">Verified fact</div>
            <div class="tl-text">{{ e.fact | markdownify }}</div>
          </div>
        {% endif %}

        {% if e.context %}
          <details class="tl-details">
            <summary>Banker context</summary>
            <div class="tl-text">{{ e.context | markdownify }}</div>
          </details>
        {% endif %}

        {% if e.sources %}
          <details class="tl-details">
            <summary>Sources</summary>
            <ul class="tl-sources">
              {% for s in e.sources %}
                <li class="tl-text">{{ s | markdownify }}</li>
              {% endfor %}
            </ul>
          </details>
        {% endif %}
      </div>
    </section>
  {% endfor %}
</div>
