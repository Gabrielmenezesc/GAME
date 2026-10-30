export class AudioEngine{
  constructor(){this.ctx=null;this.master=null;this.muted=false}
  start(){if(this.ctx)return;this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.master=this.ctx.createGain();this.master.gain.value=.18;this.master.connect(this.ctx.destination)}
  tone(freq=220,duration=.12,type='sine',volume=.18){if(!this.ctx||this.muted)return;const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,this.ctx.currentTime);g.gain.setValueAtTime(volume,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+duration);o.connect(g);g.connect(this.master);o.start();o.stop(this.ctx.currentTime+duration)}
  dice(){[180,250,340].forEach((f,i)=>setTimeout(()=>this.tone(f,.08,'square',.11),i*85))} move(){this.tone(105,.18,'sawtooth',.1)} match(){this.tone(440,.12,'triangle');setTimeout(()=>this.tone(660,.25,'triangle'),110)} event(){this.tone(310,.1,'square')} finish(){[440,554,660,880].forEach((f,i)=>setTimeout(()=>this.tone(f,.22,'triangle'),i*130))} toggle(){this.muted=!this.muted;return this.muted}
}

