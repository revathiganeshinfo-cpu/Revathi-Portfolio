import { useState, useEffect } from "react";

export default function Landing({ onEnter }) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Pinyon+Script&family=poppins:wght@200;300;400&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{minHeight:"100vh",background:"#f5f5f5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"2rem",position:"relative",fontFamily:"'poppins',sans-serif",overflow:"hidden"}}>
      {[{width:420,height:420,top:-160,left:-140},{width:260,height:260,bottom:-80,right:-80},{width:140,height:140,top:"38%",right:"8%"},{width:70,height:70,top:"18%",left:"12%"}].map((s,i)=>(
        <div key={i} style={{position:"absolute",borderRadius:"50%",border:"1px solid rgba(0,0,0,0.07)",pointerEvents:"none",...s}}/>
      ))}
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:"2rem",position:"relative",zIndex:1}}>
        <span style={{display:"block",height:1,width:60,background:"linear-gradient(to right,transparent,#aaa)"}}/>
        <span style={{fontSize:6,color:"#aaa"}}>◆</span>
        <span style={{display:"block",height:1,width:60,background:"linear-gradient(to left,transparent,#aaa)"}}/>
      </div>
      <h1 style={{fontFamily:"'Pinyon Script',cursive",fontSize:"clamp(4.5rem,11vw,9rem)",color:"#8a8a8a",lineHeight:1,position:"relative",zIndex:1}}>Revathi G</h1>
      <p style={{fontSize:"1rem",fontWeight:300,color:"#333",letterSpacing:"0.28em",textTransform:"uppercase",marginTop:"1.4rem",position:"relative",zIndex:1}}>MERN Stack Developer</p>
      <div style={{display:"flex",alignItems:"center",gap:14,margin:"2.4rem 0 2.6rem",position:"relative",zIndex:1}}>
        <div style={{height:1,width:48,background:"rgba(0,0,0,0.1)"}}/>
        <div style={{width:6,height:6,border:"1px solid #aaa",transform:"rotate(45deg)"}}/>
        <div style={{height:1,width:48,background:"rgba(0,0,0,0.1)"}}/>
      </div>

      <button
        onClick={onEnter}
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        style={{display:"inline-flex",alignItems:"center",gap:12,padding:"14px 40px",borderRadius:9999,border:"1.5px solid #333",background:"transparent",color:hovered?"#f5f5f5":"#333",fontFamily:"'poppins',sans-serif",fontSize:"0.78rem",letterSpacing:"0.22em",textTransform:"uppercase",cursor:"pointer",position:"relative",overflow:"hidden",zIndex:10,transition:"color 0.45s ease"}}
      >
        <span style={{position:"absolute",inset:0,background:"#333",borderRadius:9999,transform:hovered?"translateX(0)":"translateX(-102%)",transition:"transform 0.5s cubic-bezier(0.76,0,0.24,1)",pointerEvents:"none"}}/>
        <span style={{position:"relative",zIndex:2}}>See Portfolio</span>
        <span style={{position:"relative",zIndex:2,transition:"transform 0.3s",transform:hovered?"translateX(5px)":"translateX(0)"}}>→</span>
      </button>

      <div style={{position:"fixed",bottom:"2rem",left:0,right:0,display:"flex",justifyContent:"space-between",alignItems:"flex-end",padding:"0 3rem",zIndex:1,pointerEvents:"none"}}>
        <span style={{fontSize:"0.65rem",fontWeight:300,letterSpacing:"0.18em",textTransform:"uppercase",color:"#aaa"}}>© 2025 Revathi G</span>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:6,fontSize:"0.6rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"#aaa"}}>
          <div style={{width:1,height:32,background:"linear-gradient(to bottom,transparent,#aaa)"}}/>
          <span>Scroll</span>
        </div>
        <span style={{fontSize:"0.65rem",fontWeight:300,letterSpacing:"0.18em",textTransform:"uppercase",color:"#aaa"}}>Chennai, India</span>
      </div>
    </div>
  );
}