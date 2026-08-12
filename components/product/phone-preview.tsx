export function PhonePreview({ label="Concept preview" }: {label?:string}) { return <div className="phone-stage" aria-label={label}>
  <div className="product-orbit product-orbit-one"/><div className="product-orbit product-orbit-two"/>
  <div className="floating-insight"><span className="insight-mark">✓</span><div><small>PRONUNCIATION</small><strong>Clearer than yesterday</strong></div></div>
  <div className="phone"><div className="phone-rail"><span>9:41</span><i/><span>● ◒</span></div><span className="concept-label">{label}</span><div className="phone-screen">
    <div className="app-brand"><span className="app-brand-mark">e</span><span>E-Talk</span><button aria-label="Profile">RB</button></div>
    <div className="app-greeting"><small>YOUR DAILY PRACTICE</small><h3>Good morning, Rakesh.</h3><p>Ready for a 12-minute speaking session?</p><div className="level-chip"><span>B1</span><div><small>CURRENT LEVEL</small><strong>Intermediate · 64%</strong></div></div></div>
    <div className="lesson-card"><div className="lesson-meta"><span>INTERVIEW ENGLISH</span><span>12 MIN</span></div><h3>Introduce yourself<br/>with confidence</h3><div className="lesson-footer"><span className="play-control">▶</span><span>Start speaking</span><span>2 of 5</span></div></div>
    <div className="daily-row"><div><small>WEEKLY GOAL</small><strong>4 / 5 sessions</strong></div><div className="day-dots"><i className="done"/><i className="done"/><i className="done"/><i className="done"/><i/></div></div>
    <div className="coach-note"><span className="coach-avatar">AI</span><div><small>COACH NOTE</small><p>Your pace is natural. Focus on the <strong>“th”</strong> sound today.</p></div></div>
  </div></div>
  <div className="floating-score"><span>92</span><div><small>SPEECH SCORE</small><strong>Excellent clarity</strong></div></div>
</div> }
