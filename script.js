
// Matrix rain
const mc=document.getElementById('matrix'),mctx=mc.getContext('2d');
let mW,mH;function resizeM(){mW=mc.width=window.innerWidth;mH=mc.height=window.innerHeight}resizeM();window.addEventListener('resize',resizeM);
const chars='アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF';
const cols=Math.floor(window.innerWidth/14);const drops=Array(cols).fill(1);
setInterval(()=>{
  mctx.fillStyle='rgba(8,8,16,0.04)';mctx.fillRect(0,0,mW,mH);
  mctx.fillStyle='#00f5ff';mctx.font='12px Share Tech Mono';
  drops.forEach((y,i)=>{const c=chars[Math.floor(Math.random()*chars.length)];mctx.fillText(c,i*14,y*14);if(y*14>mH&&Math.random()>0.975)drops[i]=0;drops[i]++;});
},50);
 
// Custom cursor
const cur=document.getElementById('cur'),curDot=document.getElementById('cur-dot');
let mx=0,my=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';curDot.style.left=mx+'px';curDot.style.top=my+'px'});
document.querySelectorAll('button,a,.proj-card,.skill-chip,.a-stat').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.width='32px';cur.style.height='32px';cur.style.borderColor='var(--magenta)'});
  el.addEventListener('mouseleave',()=>{cur.style.width='16px';cur.style.height='16px';cur.style.borderColor='var(--cyan)'});
});
 
// Typewriter
const roles=['FRONTEND ENGINEER','UI/UX DEVELOPER','CREATIVE CODER','ANIMATION NERD','OPEN SOURCE CONTRIBUTOR'];
let ri=0,ci=0,del=false;const typed=document.getElementById('typed-role');
setInterval(()=>{
  const role=roles[ri];
  if(!del){if(ci<role.length){typed.textContent=role.substring(0,++ci)}else{setTimeout(()=>del=true,2000)}}
  else{if(ci>0){typed.textContent=role.substring(0,--ci)}else{del=false;ri=(ri+1)%roles.length}}
},80);
 
// Reveal
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.classList.contains('skills-grid')){e.target.querySelectorAll('.skill-chip').forEach((chip,i)=>{setTimeout(()=>{chip.classList.add('animate');chip.querySelector('.skill-bar').style.width=(chip.dataset.level*100)+'%'},i*60)})}}})},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
 
// Counters
const cObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const t=parseInt(e.target.dataset.count);let s=0,dur=1500,start=null;const step=ts=>{if(!start)start=ts;const p=Math.min((ts-start)/dur,1);e.target.textContent=Math.floor(p*t);if(p<1)requestAnimationFrame(step);else e.target.textContent=t;};requestAnimationFrame(step);cObs.unobserve(e.target)}})},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>cObs.observe(el));
