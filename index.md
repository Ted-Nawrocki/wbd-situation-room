---
layout: page
title: "Home"
---

## What to know now

- This site is a neutral, source-driven factbook tracking the Warner Bros. Discovery situation involving Netflix and Paramount.
- Facts are sourced from public filings and reputable reporting. Commentary is clearly labeled.

## Latest updates

{% for post in site.posts limit:5 %}
- [{{ post.title }}]({{ site.baseurl }}{{ post.url }}) (As of {{ post.as_of }})
{% endfor %}
