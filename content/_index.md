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
        I am a Postdoctoral Researcher at the University of Zürich. I study macroeconomics and public finance, with a focus on fiscal policy, heterogeneity, and rational inattention.

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

  - block: collection
    id: code
    content:
      title: Code
      count: 0
      filters:
        folders:
          - project
    design:
      view: li-list
      columns: '1'
      show_date: false
      show_read_more: false
---
