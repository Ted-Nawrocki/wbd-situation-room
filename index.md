---
layout: page
title: "Executive Brief"
permalink: /
---

## The situation room

A corporate actions drama is unfolding around **Warner Bros. Discovery**.

This site tracks the situation as it develops, grounded in public disclosures and reputable reporting, with **Just the facts** and **Ted’s Takes** clearly separated.

---

## Quick links

- [Deal Hub]({{ '/deal-hub/' | relative_url }})
- [Timeline]({{ '/timeline/' | relative_url }})
- [Filings & Sources]({{ '/filings/' | relative_url }})
- [About]({{ '/about/' | relative_url }})

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
