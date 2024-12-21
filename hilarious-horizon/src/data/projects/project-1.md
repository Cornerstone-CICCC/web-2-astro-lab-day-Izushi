---
title: "Project 1"
id: "project-1"
author: "Jane Doe"
---

![Project](https://sourcebae.com/blog/wp-content/uploads/2023/09/project-planning-header@2x-678x381-1.png)

```javascript
useGSAP(
  () => {
    gsap.from(".about-container h1", {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
    });
  },
  { scope: aboutRef }
);
```
