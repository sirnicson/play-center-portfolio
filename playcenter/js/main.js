
  const reveals=[...document.querySelectorAll('.reveal')];
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');observer.unobserve(e.target)}}),{threshold:.12});
  reveals.forEach(el=>observer.observe(el));
  const navLinks=[...document.querySelectorAll('.nav-links a[href^="#"]')];
  const sections=[...document.querySelectorAll('section[id],header[id]')];
  const spy=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-30% 0px -60% 0px'});
  sections.forEach(s=>spy.observe(s));
