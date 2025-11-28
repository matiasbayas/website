---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: markdown
    id: intro
    content:
      title: 'Matias Bayas-Erazo'
      text: |-
        Economist studying optimal taxation and macroeconomics.

        I am a Postdoctoral Researcher at the [University of Zürich](https://www.econ.uzh.ch/en.html). My research focuses on macroeconomics and public finance. I use theory and computational tools to identify new mechanisms and quantify their impact.

        I received my Ph.D. in Economics from [Northwestern University](https://economics.northwestern.edu/) in 2024.

        Driven by a curiosity for AI, I build systems to explore its emerging applications.

        <div class="intro-links">
        <a href="/uploads/resume.pdf">CV</a>
        <a href="https://github.com/matiasbayas">GitHub</a>
        <a href="mailto:matias.bayas-erazo@econ.uzh.ch">Email</a>
        </div>

  - block: collection
    id: research
    content:
      title: Research
      count: 0
      filters:
        folders:
          - working-papers
          - work-in-progress
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
