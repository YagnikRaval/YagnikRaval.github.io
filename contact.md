---
layout: default
title: "Contact"
permalink: /contact/
---

<section class="container contact">
  <h1>Contact</h1>
  <p>You can reach me by email: <a href="mailto:you@example.com">you@example.com</a></p>

  <h2>Send a message</h2>
  <p>To receive messages via a contact form, sign up at Formspree (https://formspree.io/) and replace <code>YOUR_FORMSPREE_ID</code> in the form below with your Formspree form ID.</p>

  <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
    <label>
      Your name<br>
      <input type="text" name="name" required>
    </label>
    <br>
    <label>
      Your email<br>
      <input type="email" name="email" required>
    </label>
    <br>
    <label>
      Message<br>
      <textarea name="message" rows="6" required></textarea>
    </label>
    <br>
    <button type="submit">Send</button>
  </form>

  <p>If you prefer, you can also email directly: <a href="mailto:you@example.com">you@example.com</a></p>
</section>
