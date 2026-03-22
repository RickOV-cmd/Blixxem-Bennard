// Show privacy strip only once per browser session (not on every visit)
  (function(){
    if(!localStorage.getItem('bb_privacy_noted')){
      const s=document.getElementById('privacyStrip');
      if(s) s.style.display='flex';
    }
  })();
