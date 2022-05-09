- TODO: Find a way to support "@trivago/prettier-plugin-sort-imports"
  Prettier doesn't support plugins. You can hack around it with the caveat that
  you can use only one plugin at a time. So I removed it in favor of "prettier-plugin-tailwindcss" for now.
  💡 Can we run prettier twice?
  See https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
- analytics
- fix date on safari
- package up withClassNameProp and withStyleProp
- from blog post page
  - go back to index page
  - go to next blog
- contact
- about
- footer
- reading-time
- editedAt
- MDX processing
  - switch to next-mdx-remote
  - validate front matter (e.g., "title" must be provided)
  - programtically supply publishedAt if not defined and write to the file
- search
  - maybe look into algolia
- SEO (research)
- Note component:
  - scan for !!!
  - interpolate \* and \*\*
  - key prop
- tags
- Fix publishedAt date timezone
- code block:
  - **copy button** (use white bg with solid icon)
  - indentaion (switch between 2 and 4)
  - prism - load used languages only
  - renderable html/css/js - joshwcomeau
  - language label
  - fixed line numbers?
- adjust withClassName and withStyle utilities' types so they can't accept components that have className and style defined?
- themes (dark, light, christmas, ...)

# Blog Ideas

- advent of code
- gitmoji program
- remix + benchmark comparison

# Cool libraries

- react-dom-confetti
- node-git
- react-spring
