---
title: "Blogs"
layout: archive
permalink: /blogs/
author_profile: true
---

<div class="grid__wrapper">
  {% for post in site.blogs %}
    {% include blog-card.html %}
  {% endfor %}
</div>
