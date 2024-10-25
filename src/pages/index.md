---
layout: base.njk
meta:
  title: Kasey Bonifacio
  description: Kasey Bonifacio is a frontend developer specializing in accessibility and design systems.
---

<div class="hero">
  {% include "svg-keyboard.njk" %}

  <h1 class="text-featured">Stitching together <span class="text-highlight">handcrafted</span> websites for over a decade.</h1>
</div>

<div class="section">
  <h2 class="text-section">A little about me</h2>

  <p>I'm Kasey Bonifacio and I have been building things on the Internet since 2011. I have a diverse background in design, frontend development, and backend development—but the frontend is where my heart is. In 2015 I joined the folks at <a href="https://sparkbox.com">Sparkbox</a> and have focused my career on building accessible websites and usable design systems.</p>
</div>

<nav aria-labelledby="certifications" class="section">
  <h3 id="certifications">Certifications</h3>
  <ul>
    <li>
      <a href="https://www.accessibilityassociation.org/cpwacertification" class="link-pill"><abbr title="Certified Professional in Web Accessibility">CPWA</abbr></a>
    </li>
    <li>
      <a href="https://www.accessibilityassociation.org/wascertification" class="link-pill"><abbr title="Web Accessibility Specialist">WAS</abbr></a>
    </li>
    <li>
      <a href="https://www.accessibilityassociation.org/cpacccertification" class="link-pill"><abbr title="Certified Professional in Accessibility Core Competencies">CPACC</abbr></a>
    </li>
  </ul>
</nav>

<nav aria-labelledby="writing" class="section">
  <h3 id="writting">Things I've written</h3>
  
  <ul>
    {%- for post in collections.post -%}
      <li class="list-block">
        <a href="{{ post.url }}">{{ post.data.meta.title }}</a>
      </li>
    {%- endfor -%}
    <li class="list-block">I also write on the <a href="https://sparkbox.com/foundry/author/kasey_bonifacio">Sparkbox Foundry</a></li>
  </ul>
</nav>

<nav aria-labelledby="built" class="section">
  <h3 id="built">Things I've built</h3>

  <ul>
    <li class="list-block">
      <a href="http://a11ycalendar.kaseybon.com">Accessibility Calendar</a>
    </li>
    <li class="list-block">
      <a href="https://codepen.io/collection/GoQqgz">SVG Cross-Stitch</a>
    </li>
    <li class="list-block">
      <a href="https://codepen.io/collection/DyJPrP">Obscure CSS Properties</a>
    </li>
  </ul>
</nav>