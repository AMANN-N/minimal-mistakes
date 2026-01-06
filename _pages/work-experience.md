---
title: "Work Experience"
layout: archive
permalink: /work-experience/
author_profile: true
---

<div class="grid__wrapper">
  {% assign experience = site.experience | sort: 'weight' %}
  {% for post in experience %}
    {% include archive-card.html %}
  {% endfor %}
</div>
