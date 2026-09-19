(function(){
      var root = document.documentElement;
      var toggle = document.getElementById('themeToggle');
      var label = document.getElementById('themeLabel');
      var icon = document.getElementById('thumbIcon');

      function applyTheme(theme){
        if(theme === 'dark'){
          root.setAttribute('data-theme','dark');
          label.textContent = 'Dark';
          icon.className = 'fa-solid fa-moon';
        } else {
          root.removeAttribute('data-theme');
          label.textContent = 'Light';
          icon.className = 'fa-solid fa-sun';
        }
      }

      var saved = null;
      try { saved = localStorage.getItem('amazon-clone-theme'); } catch(e) {}
      if(!saved){
        saved = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
      }
      applyTheme(saved);

      toggle.addEventListener('click', function(){
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try { localStorage.setItem('amazon-clone-theme', next); } catch(e) {}
      });

      // Mobile hamburger menu
      var hamburgerBtn = document.getElementById('hamburgerBtn');
      var panel = document.getElementById('panel');
      hamburgerBtn.addEventListener('click', function(){
        var isOpen = panel.classList.toggle('open');
        hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      // Back to top
      var toTopBtn = document.getElementById('toTopBtn');
      window.addEventListener('scroll', function(){
        if(window.scrollY > 400){ toTopBtn.classList.add('show'); }
        else { toTopBtn.classList.remove('show'); }
      });
      function scrollTop(){ window.scrollTo({ top:0, behavior:'smooth' }); }
      toTopBtn.addEventListener('click', scrollTop);
      document.getElementById('backToTopFooter').addEventListener('click', scrollTop);
    })();