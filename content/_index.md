---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: markdown
    id: intro
    content:
      title: ''
      text: |-
        <div class="intro-container">
        <div class="intro-text">

        <h1>Matias Bayas-Erazo</h1>

        Economist studying optimal taxation and macroeconomics.

        I am a Postdoctoral Researcher at the [University of Zürich](https://www.econ.uzh.ch/en.html). My research focuses on macroeconomics and public finance. I use theory and computational tools to identify new mechanisms and quantify their impact. I'm also curious about AI and its applications to economics and beyond.

        I received my Ph.D. in Economics from [Northwestern University](https://economics.northwestern.edu/) in 2024.

        <span class="now-label">Now</span> Finishing tariffs paper with Lorenzoni and inattention paper with Angeletos. Solving for optimal transitions in sequence space. Training for a half marathon. Building a side project that helps runners plan training with AI. Reading about RL, AL, and AI systems in general. 

        <div class="intro-links">
        <a href="/uploads/resume.pdf">CV</a>
        <a href="https://github.com/matiasbayas">GitHub</a>
        <a href="https://www.linkedin.com/in/matias-bayas-erazo-46a1192a5/">LinkedIn</a>
        <a href="mailto:matias.bayas-erazo@econ.uzh.ch">Email</a>
        </div>

        </div>
        <div class="intro-image">
        <img src="authors/admin/avatar.jpg" alt="Matias Bayas-Erazo">
        </div>
        </div>

  - block: markdown
    id: research
    content:
      title: 'Research'
      text: ""

  - block: collection
    id: working-papers
    content:
      title: Working Papers
      count: 0
      sort_by: 'Date'
      sort_ascending: true
      filters:
        folders:
          - working-papers
          - work-in-progress
    design:
      view: custom-li-list
      columns: '1'
      show_date: false
      show_read_more: false

  - block: collection
    id: policy
    content:
      title: Policy/Book Chapters
      count: 0
      filters:
        folders:
          - policy
    design:
      view: custom-li-list
      columns: '1'
      show_date: false
      show_read_more: false

  - block: markdown
    id: code-and-notes
    content:
      title: Code & Notes
      text: ""

  - block: collection
    id: comp-econ
    content:
      title: ECON
      count: 0
      filters:
        folders: ["project"]
        tag: "compecon"
    design:
      view: custom-li-list
      columns: '1'
      show_date: false
      show_read_more: false

  - block: collection
    id: ai-systems
    content:
      title: AI
      count: 0
      filters:
        folders: ["project"]
        tag: "aisystems"
    design:
      view: custom-li-list
      columns: '1'
      show_date: false
      show_read_more: false

  - block: collection
    id: notes
    content:
      title: Notes
      count: 0
      filters:
        folders:
          - notes
    design:
      view: custom-li-list
      columns: '1'
      show_date: false
      show_read_more: false
---
