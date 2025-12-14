---
title: "Timeline"
permalink: /timeline/
---

{% assign items = site.timeline | sort: "date" | reverse %}
{% for item in items %}
- **{{ item.date | date: "%B %-d, %Y" }}:** [{{ item.title }}]({{ site.baseurl }}{{ item.url }})
{% endfor %}
