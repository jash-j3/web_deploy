import anime from "animejs"
import React from "react";

export default function Intro() {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime.timeline({
      targets : ".anim .letters",
    })
    .add({
      targets: '.anim .line',
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.anim .line',
      translateX: function(el){
        return [0, el.parentElement.getBoundingClientRect().width+10];
      },
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    }).add({
      targets: '.anim .letter',
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      delay: (el, i) => 34 * (i + 1)
    }, '-=700')
  })
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="anim text-white text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-px">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span className="letters">
            <span className="letter">L</span>
            <span className="letter">a</span>
            <span className="letter">m</span>
            <span className="letter">b</span>
            <span className="letter">d</span>
            <span className="letter">a</span>
          </span>
        </span>
      </h1>
      <h4 className="text-slate-300 text-right mt-5 md:pl-8 w-120">
        <span className="text-slate-100 italic text-lg">Dream. Develop. Do</span><br></br>We are the software development club of IITH.<br></br> We build solutions and help others to do the same<br></br>Read below to know more about our work</h4>
    </section>
  )
}
