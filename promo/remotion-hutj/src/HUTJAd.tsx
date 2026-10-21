import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

const W=1080, H=1920;
const clamp={extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
const ease=Easing.bezier(.2,.8,.2,1);
const lerp=(f:number,a:number,b:number,x:number,y:number)=>interpolate(f,[a,b],[x,y],{...clamp,easing:ease});
const pulse=(f:number,at:number)=>Math.max(0,1-Math.abs(f-at)/24);
const C={bg:'#070C16',panel:'#101B2C',blue:'#246BFF',cyan:'#4CEAFF',white:'#F3F8FF',muted:'#91A8C5'};
const systems=['LG webOS','Samsung Tizen','Android TV','Google TV','Fire TV','Apple tvOS','Roku','VIDAA'];
const headlines=[
 {from:0,to:132,ar:'كل تلفزيون… عالم مختلف.',en:'Every TV is a different world.'},
 {from:132,to:250,ar:'مهارة واحدة. لكل الأنظمة.',en:'One skill. Every platform.'},
 {from:250,to:402,ar:'كودكس أو كلود… على جهازك.',en:'Codex or Claude. On your computer.'},
 {from:402,to:560,ar:'اكتشف جهازك داخل الشبكة.',en:'Discover your TV on your local network.'},
 {from:560,to:720,ar:'افحص. خطّط. ثم وافق.',en:'Inspect. Plan. Then approve.'},
 {from:720,to:900,ar:'HUTJ — تحكم أذكى بتلفزيونك.',en:'HUTJ — Smarter TV engineering.'}
];
const textShadow='0 8px 35px rgba(0,0,0,.7)';
const frameBox:React.CSSProperties={border:'1px solid rgba(104,184,255,.32)',background:'linear-gradient(140deg,rgba(22,40,69,.95),rgba(8,16,32,.94))',boxShadow:'0 30px 80px rgba(0,0,0,.3)',borderRadius:32};
const device=(name:string,i:number,f:number)=>{const start=112+i*9;const s=spring({fps:60,frame:f-start,config:{damping:16,stiffness:105}});return <div key={name} style={{...frameBox,width:390,height:100,display:'flex',alignItems:'center',gap:18,padding:'0 25px',opacity:Math.max(0,Math.min(1,s)),transform:`translateY(${(1-s)*110}px) rotateY(${(1-s)*50}deg)`}}><span style={{fontSize:29,color:C.cyan}}>▣</span><span style={{fontSize:29,fontWeight:700}}>{name}</span></div>};
export const HUTJAd:React.FC=()=>{
 const f=useCurrentFrame();const {fps}=useVideoConfig();
 const cameraScale=interpolate(f,[0,115,250,402,560,720,899],[1.16,1.04,1.10,1.06,1.12,1.04,1],clamp);
 const cameraY=interpolate(f,[0,250,560,899],[60,0,-28,0],clamp);
 const introFade=lerp(f,0,22,0,1)*(1-lerp(f,104,150,0,1));
 const platformFade=lerp(f,115,165,0,1)*(1-lerp(f,255,290,0,1));
 const terminalFade=lerp(f,245,280,0,1)*(1-lerp(f,398,435,0,1));
 const networkFade=lerp(f,390,430,0,1)*(1-lerp(f,560,590,0,1));
 const approvalFade=lerp(f,552,595,0,1)*(1-lerp(f,717,745,0,1));
 const heroFade=lerp(f,710,770,0,1);
 const current=headlines.find(x=>f>=x.from&&f<x.to)??headlines[5];
 const subtitleOpacity=Math.min(1,(f-current.from)/12,(current.to-f)/12);
 const glint=lerp(f,135,200,-500,1450);
 return <AbsoluteFill style={{background:C.bg,color:C.white,fontFamily:'Arial, Tahoma, sans-serif',overflow:'hidden'}}>
  <AbsoluteFill style={{background:'radial-gradient(ellipse at 55% 45%, #163A6A 0%, #091322 47%, #060B14 100%)'}}/>
  <AbsoluteFill style={{opacity:.22,backgroundImage:'linear-gradient(rgba(104,170,255,.12) 1px, transparent 1px),linear-gradient(90deg,rgba(104,170,255,.12) 1px,transparent 1px)',backgroundSize:'75px 75px',transform:`perspective(1200px) rotateX(25deg) scale(1.5) translateY(${f*.08}px)`}}/>
  <div style={{position:'absolute',inset:0,transform:`translateY(${cameraY}px) scale(${cameraScale})`}}>
   <div style={{position:'absolute',top:250,width:'100%',textAlign:'center',fontSize:32,fontWeight:800,letterSpacing:8,color:C.cyan}}>HAZIM UNIVERSAL TV JAILBREAK</div>
   <div style={{position:'absolute',top:420,width:'100%',textAlign:'center',opacity:introFade,transform:`scale(${lerp(f,0,110,.8,1.1)})`}}>
    <div style={{fontSize:230,fontWeight:900,letterSpacing:-18,textShadow:'0 0 80px rgba(76,234,255,.5)'}}>HUTJ</div>
    <div style={{fontSize:49,fontWeight:800,direction:'rtl'}}>كل تلفزيون… عالم مختلف.</div>
    <div style={{display:'flex',justifyContent:'center',gap:30,marginTop:90}}>{['TV','CODE','AI'].map((x,i)=><div key={x} style={{...frameBox,padding:'22px 26px',fontSize:34,transform:`translateY(${Math.sin((f+i*20)/14)*15}px)`}}>{x}</div>)}</div>
   </div>
   <div style={{position:'absolute',top:440,left:95,right:95,opacity:platformFade}}>
    <div style={{fontSize:74,fontWeight:900,textAlign:'center',marginBottom:55}}>8 TV PLATFORMS</div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>{systems.map((x,i)=>device(x,i,f))}</div>
    <div style={{position:'absolute',top:-70,left:glint,width:160,height:950,background:'linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent)',transform:'rotate(20deg)',pointerEvents:'none'}}/>
   </div>
   <div style={{position:'absolute',top:480,left:80,right:80,opacity:terminalFade,...frameBox,padding:38}}>
    <div style={{fontSize:31,color:C.muted,marginBottom:28}}>● ● ● &nbsp; LOCAL AI TERMINAL</div>
    <div style={{fontSize:54,fontWeight:800,marginBottom:24}}>Codex / Claude Code</div>
    <div style={{fontSize:31,fontFamily:'monospace',lineHeight:2,color:C.cyan}}>
     <div>$ hutj discover --local</div>
     <div style={{color:C.white}}>✓ Load SKILL.md</div>
     <div style={{color:C.white}}>✓ Select TV platform</div>
     <div style={{color:C.white}}>✓ Read-only inspection</div>
     <div style={{color:C.muted}}>→ Waiting for approval_</div>
    </div>
   </div>
   <div style={{position:'absolute',top:455,left:90,right:90,opacity:networkFade,textAlign:'center'}}>
    <div style={{fontSize:62,fontWeight:900,marginBottom:100}}>LOCAL NETWORK</div>
    <div style={{margin:'auto',width:200,height:200,borderRadius:55,background:C.blue,display:'grid',placeItems:'center',fontSize:92,boxShadow:'0 0 100px #246BFF88'}}>⌘</div>
    <svg width="900" height="320" viewBox="0 0 900 320" style={{overflow:'visible'}}><path d="M450 0 V110 H135 V210 M450 110 H765 V210 M450 110 V210" fill="none" stroke={C.cyan} strokeWidth="6" strokeDasharray="16 12" strokeDashoffset={-f*3}/></svg>
    <div style={{display:'flex',justifyContent:'space-between',gap:18}}>{['webOS','Tizen','Android'].map(x=><div key={x} style={{...frameBox,width:260,padding:'35px 10px',fontSize:34}}>▣<div style={{fontSize:27,marginTop:15}}>{x}</div></div>)}</div>
   </div>
   <div style={{position:'absolute',top:500,left:90,right:90,opacity:approvalFade,...frameBox,padding:48,textAlign:'center'}}>
    <div style={{fontSize:64,fontWeight:900,marginBottom:55}}>AI DEVICE ENGINEER</div>
    {['✓ Identify model + firmware','✓ Check supported capabilities','✓ Plan safe changes','◉ Request user approval'].map((x,i)=><div key={x} style={{fontSize:36,textAlign:'left',padding:'22px 0',color:i===3?C.cyan:C.white,opacity:lerp(f,575+i*24,595+i*24,0,1)}}>{x}</div>)}
    <div style={{marginTop:45,borderRadius:30,background:C.blue,padding:24,fontSize:39,fontWeight:800,transform:`scale(${1+.035*Math.sin(f/9)})`}}>APPROVAL REQUIRED</div>
   </div>
   <div style={{position:'absolute',top:490,left:70,right:70,opacity:heroFade,textAlign:'center'}}>
    <div style={{fontSize:170,fontWeight:900,letterSpacing:-14,textShadow:'0 0 100px #4CEAFF77'}}>HUTJ</div>
    <div style={{fontSize:49,fontWeight:800,color:C.cyan,marginTop:10}}>ONE AI. EVERY TV.</div>
    <div style={{marginTop:110,fontSize:40,fontWeight:700,direction:'rtl'}}>مهارات محلية لكودكس وكلود</div>
    <div style={{...frameBox,marginTop:70,padding:'30px 20px',fontSize:31,overflowWrap:'anywhere'}}>github.com/hazim5-stack/HUTJ</div>
    <div style={{fontSize:29,color:C.muted,marginTop:30}}>OPEN SOURCE · MIT LICENSE</div>
   </div>
  </div>
  <div style={{position:'absolute',left:80,right:80,bottom:245,textAlign:'center',opacity:Math.max(0,subtitleOpacity),textShadow}}>
   <div dir="rtl" style={{fontSize:50,fontWeight:900,lineHeight:1.45}}>{current.ar}</div>
   <div style={{fontSize:31,color:C.cyan,marginTop:12,fontWeight:700}}>{current.en}</div>
  </div>
  <div style={{position:'absolute',bottom:110,left:100,right:100,height:5,borderRadius:5,background:'#263449'}}><div style={{height:'100%',width:`${(f/899)*100}%`,background:C.cyan,borderRadius:5}}/></div>
  <div style={{position:'absolute',bottom:75,right:95,fontSize:20,color:C.muted}}>15 SEC · 60 FPS</div>
 </AbsoluteFill>;
};
