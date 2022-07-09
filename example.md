---
theme: ./
title: 'Title : Working on theme'
lineNumbers: true
layout: cover
fonts: 
  sans: 'Inter'
  serif: 'Inter'
  mono: 'Fira Code'
---


# Slidev Theme Starter 

<!-- <Marker>And the good things</Marker> -->

Presentation slides for developers

<div class="pt-12">
  <span @click="next" class="px-2 p-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: center
---


# Table of Content

<Toc columns='3'/>

---


# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more about [Why Slidev?](https://sli.dev/guide/why)

---
layout: intro
presenterImage: 'images/avatar.JPG'
---

# Me, Myself & I ❤️

* Blabla je raconte ma vie 🚀
* Blabla la vie de mon chat  📦 
* Blabla vive mon caddy 🛒


---
layout: iframe

# the web page source
url: https://www.typescriptlang.org/play?#code/DYUwLgBAtg9gdgFQE4FcDGEC8EDkZVo5A
---


---
layout: iframe

# the web page source
url: https://windicss.org/utilities/layout/spacing.html#margin-tops
---

---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|     |     |
| --- | --- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | previous animation or slide |
| <kbd>up</kbd> | previous slide |
| <kbd>down</kbd> | next slide |

---
layout: image-right
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# Code

Use code snippets and get the highlighting directly!

```ts {1-3|4-8}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: code
---

# Code

Use code snippets and get the highlighting directly!

```ts {monaco} {height:'300px'}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
---

# Bullet Points

 * <Warning v-click>C'est vraiment la merde: WARNING</Warning>
 * <Accent v-click> C'était vraiment trop bien : ACCENT</Accent>
 * <Highlight v-click> C'était vraiment trop bien : HIGHLIGHT</Highlight>
 * <Info v-click> C'était vraiment trop bien : INFO</Info>


---
layout: quote
---

# Layout : Quote

::quote::

“You know, being Caroline taught me a valuable lesson. I thought you were my greatest enemy, when all along you were my best friend. The surge of emotion that shot through me when I saved your life taught me an even more valuable lesson – where Caroline lives in my brain.” 


::author::
GLaDOS, Portal2

---
layout: center
---

# A note

 <Note>C'est un petite <Accent>ACCENT</Accent>  ceci est un <Highlight>HIGHLIGHT</Highlight> et surtour un <Info>INFO</Info> note pour vous dire que Slidev <Marker><Warning>WARNING</Warning></Marker> c'est très stylé</Note>

---
layout: card
---

<!-- # Layout : Card -->

::title::

<!-- # Layout : Card -->


::card::

# Shitty idea

<v-clicks>

<Note>
Un petit mot à propos de <Accent>Monkey Island</Accent>
<Youtube id='p3mxq44HhnU' height="360" width="480"/>
</Note>

* Conclusion c'est vraiment trop bien

</v-clicks>

---
layout: center
class: "text-center"
---

# Layout : Center

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: cover
---

# Layout : Cover

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


---
layout: default
---

# Layout : Default

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: fact
---

# Layout : Fact

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: full
---

# Layout : Full

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: iframe-left
url: https://windicss.org/utilities/layout/spacing.html#margin-tops
---

# Layout : Iframe-left

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.



---
layout: iframe-right
url: https://windicss.org/utilities/layout/spacing.html#margin-tops
---

# Layout : Iframe-right

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: image-right
image: ./images/cat.jpg
---

# Layout : image-right

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: image-left
image: images/cat.jpg
---

# Layout : image-left

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: image
image: images/cat.jpg
---

# Cats

---
layout: none
---

# Layout : none

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 0
---

# Layout : Section - 0

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 1
---

# Layout : Section - 1

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 2
---

# Layout : Section - 2

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 3
---

# Layout : Section - 3

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 4
---

# Layout : Section - 4

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 5
---

# Layout : Section - 5

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 6
---

# Layout : Section - 6

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 7
---

# Layout : Section - 7

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


---
layout: section
number: 8
---

# Layout : Section - 8

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: section
number: 9
---

# Layout : Section - 9

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: statement
---

# Layout : Statement

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

---
layout: center
---


<!-- <img src="https://media.giphy.com/media/Pw5CzEs8km6qc/giphy.gif" /> -->
<!-- <img src="https://media.giphy.com/media/DvtTq0fXVGNeU/giphy.gif" /> -->
<!-- <img src="https://media.giphy.com/media/LWHarNatG80msNZW4W/giphy.gif" /> -->

<!-- <img src="https://media.giphy.com/media/L3cbOJBBs8KgvU0bbI/giphy.gif" /> -->
<!-- <img src="https://c.tenor.com/7E8FEfi0BNQAAAAi/zealot-carbot-animations.gif" /> -->
<!-- <img src="https://c.tenor.com/qRLkPZgMrOIAAAAj/anikhai-zagreus.gif" /> -->
<!-- <img src="https://c.tenor.com/2K2syw67pf0AAAAi/hades.gif" /> -->
<img src="https://c.tenor.com/eZF5jNqx1-QAAAAi/pixel-pixel-art.gif" />

 <!-- <img src="https://c.tenor.com/_08sfOF0P0gAAAAi/hornet-hollow-knight.gif" /> -->

<!-- <img src="https://c.tenor.com/eGI4bwQzMO0AAAAi/guybrush-threepwood.gif" />  -->
<!-- <img src="https://c.tenor.com/51cCmU2HvSkAAAAi/advance-wars.gif" />  -->


---
layout: two-cols
---

# Layout : Left - col

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

::right::

# Layout : Right - col

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.saveUser




---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: end
---

# Layout: All good things come to an end <Marker>End</Marker>

Thanks you for your attention
