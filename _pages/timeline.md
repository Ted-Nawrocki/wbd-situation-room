---
title: "Timeline"
permalink: /timeline/
---

<div class="timeline-header">
  <p class="muted">
    A chronological view of major developments. Verified facts are shown first.
    Banker context is clearly labeled and collapsible.
  </p>
</div>

<div class="timeline">
  {% assign items = site.timeline | sort: "date" %}
  {% for item in items %}
    <div class="timeline-item">
      <div class="timeline-rail">
        <div class="timeline-dot"></div>
        {% unless forloop.last %}
        <div class="timeline-line"></div>
        {% endunless %}
      </div>

      <div class="timeline-content">
        <div class="timeline-meta">
          <div class="timeline-date">{{ item.date | date: "%B %-d, %Y" }}</div>
          <div class="timeline-tag">Timeline</div>
        </div>

        <h2 class="timeline-title">{{ item.title }}</h2>

        {% if item.fact %}
          <div class="timeline-fact">
            <div class="label">Verified fact</div>
            <p>{{ item.fact }}</p>
          </div>
        {% endif %}

        {% if item.content and item.content != "" %}
          <div class="timeline-notes">
            {{ item.content }}
          </div>
        {% endif %}

        {% if item.context %}
          <details class="timeline-details">
            <summary>Banker context</summary>
            <div class="timeline-context">
              <p>{{ item.context }}</p>
            </div>
          </details>
        {% endif %}

        {% if item.sources %}
          <details class="timeline-details">
            <summary>Sources</summary>
            <div class="timeline-sources">
              <ol>
                {% for s in item.sources %}
                  <li>
                    {% if s.label %}<strong>{{ s.label }}</strong>{% endif %}
                    {% if s.date %} ({{ s.date }}){% endif %}
                    {% if s.url %}<br><a href="{{ s.url }}" target="_blank" rel="noopener">{{ s.url }}</a>{% endif %}
                    {% if s.snippet %}<br><span class="muted">Snippet: {{ s.snippet }}</span>{% endif %}
                  </li>
                {% endfor %}
              </ol>
            </div>
          </details>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
