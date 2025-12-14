---
title: "Timeline"
permalink: /timeline/
---

**As of December 13, 2025**

This timeline presents the Warner Bros. Discovery situation as a chronological sequence of verified events.  
Each entry is structured with a factual statement followed by clearly labeled banker context.

---

{% assign events = site.timeline | sort: "date" %}
{% for event in events %}
### {{ event.date | date: "%B %-d, %Y" }}  
**{{ event.title }}**

**Verified fact**  
{{ event.fact }}

{% if event.context %}
**Banker context**  
{{ event.context }}
{% endif %}

{% if event.sources %}
**Sources**  
{% for s in event.sources %}
- {{ s }}
{% endfor %}
{% endif %}

---
{% endfor %}
