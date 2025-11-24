---
title: "Implementations"
layout: archive
permalink: /implementations/
author_profile: true
---

<h2 class="archive__subtitle">Deep Learning</h2>
<div class="grid__wrapper">
  {% for post in site.implementations %}
    {% if post.category == "deep-learning" %}
      {% include archive-card.html %}
    {% endif %}
  {% endfor %}
</div>

<h2 class="archive__subtitle">ML Algorithms</h2>
<div class="grid__wrapper">
  {% for post in site.implementations %}
    {% if post.category == "ml-algorithms" %}
      {% include archive-card.html %}
    {% endif %}
  {% endfor %}
</div>

<h2 class="archive__subtitle">Advanced</h2>
<div class="grid__wrapper">
  {% for post in site.implementations %}
    {% if post.category == "advanced" %}
      {% include archive-card.html %}
    {% endif %}
  {% endfor %}
</div>
