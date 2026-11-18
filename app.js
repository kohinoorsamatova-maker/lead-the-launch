// EDITABLE SIMULATION CONTENT: all scenario, consequence, and outcome copy lives here.
const CONTENT = {
  intro: {
    title: "Lead the Launch",
    subtitle: "A leadership decision simulator",
    description: "You are leading a startup preparing for a major product launch. Across five situations, you will decide how to respond to concerns, mistakes, and silence within your team. Your choices will shape how safe people feel to speak up.",
    duration: "Time required: 4–5 minutes",
    nuance: "There are no universally right or wrong answers; leadership effectiveness depends on the situation, the people involved, and the consequences of your response."
  },
  disclaimer: "This activity is designed for reflection, not to diagnose your personality or define you as a leader.",
  scenarios: [
    {
      title: "The Uncomfortable Truth",
      situation: [
        "Your startup is preparing to launch a new product in two weeks. During a team meeting, a junior employee raises concerns about a potential defect in the product. However, the launch date has already been promised to investors, and delaying it could damage the company’s reputation.",
        "The team is watching to see how you react."
      ],
      question: "What would you do?",
      choices: {
        A: "Thank the employee for raising the concern and invite them to explain it in more detail. Ask the rest of the team to share their opinions and work together to decide how to address the issue.",
        B: "Ask the employee to take ownership of the concern by investigating the defect independently and developing a possible solution. Give them the autonomy to propose next steps while offering guidance and support.",
        C: "Tell the employee that the launch date has already been decided and that everyone should focus on executing the plan."
      },
      consequences: {
        A: "The concern becomes a shared conversation. Colleagues see that raising a risk can lead to investigation rather than dismissal, although the team must still decide quickly.",
        B: "The employee has room to investigate and propose a fix. Ownership may grow, provided they have enough time, resources, and support before launch.",
        C: "The launch plan remains clear, but the defect is unresolved. Others may conclude that raising concerns is unwelcome when deadlines are tight."
      }
    },
    {
      title: "The Blame Game",
      situation: [
        "Your startup has just lost an important client because of an error in a financial report. After investigating, you discover that one team member noticed the error several days earlier but did not report it because they were unsure how to handle the situation.",
        "The team is now under pressure, and you need to decide how to respond to the mistake."
      ],
      question: "What would you do?",
      choices: {
        A: "Discuss the incident openly with the team. Encourage everyone to share their perspectives and work together to identify a solution and prevent similar mistakes.",
        B: "Ask the employee responsible to take ownership of the problem, identify what went wrong, and develop a prevention plan. Give them autonomy to propose and implement improvements while offering guidance and support.",
        C: "Publicly scold the employee responsible and introduce stricter approval procedures to ensure that no one makes similar mistakes again."
      },
      consequences: {
        A: "The team examines both the error and the conditions that kept it hidden. Openness can support learning, as long as responsibilities and next steps are explicit.",
        B: "The employee is accountable for improving the process, with space to design a solution. Clear check-ins will matter so ownership does not become isolation.",
        C: "The new controls clarify expectations, but public blame can make future errors harder to surface. People may focus on avoiding punishment rather than sharing early warnings."
      },
      priorSilence: "Because the earlier product concern was dismissed, people may now hesitate before reporting problems. This mistake may be part of a wider pattern of silence."
    },
    {
      title: "The Silent Meeting",
      situation: [
        "Your startup is considering expanding into a new market. During the strategy meeting, you present your expansion plan. Everyone nods, but nobody offers suggestions or raises concerns.",
        "Later, you discover that several employees privately believe the expansion is unrealistic because of limited resources and insufficient market research."
      ],
      question: "What would you do?",
      choices: {
        A: "Reopen the discussion, explicitly invite opposing opinions, and make sure quieter employees have an opportunity to contribute.",
        B: "Give the team authority to review the expansion plan, allocate research responsibilities, and propose an alternative strategy.",
        C: "Interpret their silence as agreement and proceed with the expansion plan without further discussion."
      },
      consequences: {
        A: "Different perspectives enter the discussion. The plan may improve through challenge, provided the group also sets a deadline for deciding.",
        B: "The team can test assumptions and shape a revised proposal. This can strengthen initiative when the scope, resources, and decision rights are clear.",
        C: "The expansion proceeds quickly, but unspoken resource and research concerns remain. Silence may conceal disagreement rather than signal genuine support."
      }
    },
    {
      title: "The Clash of Priorities",
      situation: ["Your startup is working on an important project with a tight deadline. Marketing wants to promote the product immediately, while Product Development believes more time is needed to improve its features. The disagreement is slowing progress and both teams are frustrated."],
      question: "What would you do?",
      choices: {
        A: "Give both teams equal opportunities to explain their priorities, encourage them to understand each other’s perspectives, and work toward a mutual agreement.",
        B: "Ask both teams to develop a joint solution and propose how to move forward, while you provide guidance and support.",
        C: "Make a final decision yourself about which priority comes first and instruct both teams to follow it without further discussion."
      },
      consequences: {
        A: "Both teams feel heard, and shared priorities begin to emerge. A decision deadline will help turn discussion into action.",
        B: "The teams take responsibility for a joint proposal. They need clear decision rights and a practical deadline.",
        C: "The immediate dispute ends, but some employees feel their expertise was disregarded."
      }
    },
    {
      title: "The Overloaded Team",
      situation: ["The product launch is three days away. The team has worked late for several weeks. A junior employee privately tells you that people are exhausted, but many are afraid to say they cannot keep working at this pace because they do not want to seem uncommitted."],
      question: "What would you do?",
      choices: {
        A: "Hold a short meeting, invite honest concerns about capacity, and decide transparently with the team what can be reduced, delayed, or reprioritised.",
        B: "Ask team leads to create a minimum viable launch plan, redistribute work, and decide which features are essential, while you provide resources and support.",
        C: "Confirm that the deadline will not change, require overtime, and say there will be no further discussion about scope."
      },
      consequences: {
        A: "The team can name its limits and reset priorities together. The leader must still protect the revised plan.",
        B: "Team leads take ownership of a realistic launch scope, provided resources and workload boundaries are respected.",
        C: "The deadline stays fixed, but exhaustion deepens and people become less likely to report capacity risks."
      }
    }
  ],
  reactions: [
    {A:"The junior employee visibly relaxes. Two teammates add concerns they had not raised before.",B:"The employee agrees to investigate, then asks which resources and deadlines are available.",C:"The room goes quiet. Later, teammates discuss the defect privately."},
    {A:"Colleagues begin describing how the error escaped notice, rather than blaming one person.",B:"The employee drafts a prevention plan and requests a check-in to confirm expectations.",C:"People become defensive. Some decide to keep future mistakes to themselves."},
    {A:"A quieter colleague finally explains the market-research gap.",B:"Team members volunteer to test the expansion assumptions and return with evidence.",C:"Everyone nods again, but doubts continue in private conversations."},
    {A:"Marketing and Product Development begin listening to each other's constraints.",B:"Both teams agree to jointly own a proposal, with a clear review point.",C:"The dispute ends publicly, while frustration continues behind the scenes."},
    {A:"Employees admit they are exhausted and help identify work that can wait.",B:"Team leads sketch a smaller launch and ask for help protecting the team's capacity.",C:"The team stays late again. Several people stop reporting how stretched they are."}
  ],
  culture: {
    starting: {voice:50,ownership:50,clarity:50,wellbeing:50},
    effects: {
      A:{voice:12,ownership:5,clarity:2,wellbeing:10},
      B:{voice:5,ownership:13,clarity:7,wellbeing:5},
      C:{voice:-14,ownership:-9,clarity:10,wellbeing:-15}
    },
    labels: {
      voice:["Silent","Cautious","Open"],
      ownership:["Low","Developing","Strong"],
      clarity:["Unclear","Mixed","Clear"],
      wellbeing:["Burnt out","Under pressure","Supported"]
    },
    titles:{voice:"Team voice",ownership:"Ownership",clarity:"Clarity",wellbeing:"Wellbeing"},
    thresholds:[40,70],
    priorClosed:"Earlier dismissals are still felt: colleagues pause before raising concerns.",
    priorOpen:"Earlier constructive responses help: teammates are quicker to share what they notice."
  },
  styles: { A: "Inclusive leadership", B: "Empowering leadership", C: "Authoritarian leadership" },
  results: {
    inclusive: {
      title: "Inclusive Leader",
      icon: "◎",
      summary: "You tend to invite views, questions, and concerns. By treating disagreement as useful information, you can build belonging and psychological safety—making it easier for people to speak up.",
      benefits: ["Builds trust and a sense of belonging.", "Helps identify problems earlier.", "Supports learning from mistakes.", "Enables better-informed decisions."],
      limitation: "Too much consultation can slow action or blur accountability if the leader does not establish clear ownership and decision deadlines.",
      reflection: "Do you create enough space for your team to share their views while still making timely, clear decisions when needed?"
    },
    empowering: {
      title: "Empowering Leader",
      icon: "↗",
      summary: "You tend to give people autonomy, responsibility, and room to develop solutions while providing support. This can help employees see themselves as capable contributors.",
      benefits: ["Encourages ownership and initiative.", "Builds confidence and motivation.", "Develops skills and capability.", "Creates opportunities for independent problem-solving."],
      limitation: "Employees can feel overwhelmed when autonomy is not matched with guidance, resources, and clear boundaries.",
      reflection: "Do you give your team enough autonomy to make decisions while ensuring they have the guidance and support they need to succeed?"
    },
    authoritarian: {
      title: "Authoritarian Leader",
      icon: "→",
      summary: "You tend to prioritise speed, direction, clarity, consistency, and clear accountability. A decisive approach can coordinate urgent work, but it also affects what people feel able to say.",
      benefits: ["Supports swift coordination in urgent situations.", "Makes expectations unambiguous.", "Provides a clear direction when decisions cannot wait."],
      limitation: "Team members may hide problems, disengage, stop challenging decisions, or become overly dependent on the leader.",
      reflection: "Would you leave enough room for your team to challenge your thinking and surface problems early, while still providing clear direction and timely decisions?"
    },
    rounded: {
      title: "All-Rounded Leader",
      icon: "✳",
      summary: "Your choices show no single dominant approach. You may be adapting to the situation, the people involved, and the team’s needs. This is not automatically more effective: flexibility works only when people understand why your approach changes.",
      benefits: ["Offers flexibility across situations.", "Demonstrates situational awareness.", "Balances participation with direction.", "Can respond to different team needs."],
      limitation: "Changing approaches without explaining why can feel inconsistent or confusing. Adaptation works best when the underlying principles remain clear.",
      reflection: "Can your team understand why you are changing your approach, and do they experience your flexibility as principled adaptation rather than unpredictability?"
    }
  },
  learning: [
    "Leaders shape whether people speak up, stay silent, admit mistakes, or challenge risky decisions.",
    "Psychological safety does not mean avoiding accountability.",
    "Empowerment requires support, resources, and clear boundaries.",
    "Clear direction can be useful under pressure, but silence should never automatically be treated as agreement.",
    "Repeated behaviour builds a team culture over time."
  ]
};

const app = document.getElementById("app");
const state = { step: -1, answers: [], view: "intro" };
const esc = value => String(value).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const button = (label, action, type = "primary") => `<button type="button" class="btn btn-${type}" data-action="${action}">${esc(label)}${type === "primary" ? ' <span aria-hidden="true">→</span>' : ""}</button>`;
const disclaimer = () => `<p class="disclaimer">${esc(CONTENT.disclaimer)}</p>`;
function show(html, focus = true) {
  app.innerHTML = html;
  window.scrollTo({top:0,behavior:"instant"});
  if (focus) {
    app.focus({preventScroll:true});
  }
}
function progress(index) {
  return `<div class="progress-top"><span>Scenario ${index + 1} of ${CONTENT.scenarios.length}</span><span>${Math.round((index + 1) / CONTENT.scenarios.length * 100)}% of story</span></div><div class="progress-track" role="progressbar" aria-label="Scenario progress" aria-valuemin="0" aria-valuemax="${CONTENT.scenarios.length}" aria-valuenow="${index + 1}"><div class="progress-fill" style="width:${(index + 1) / CONTENT.scenarios.length * 100}%"></div></div>`;
}
const graphic = `<div class="illustration" aria-hidden="true">
  <div class="orbit center"><svg viewBox="0 0 64 64" fill="none"><path d="M14 19h36v24H32l-10 9v-9h-8V19Z" stroke="currentColor" stroke-width="2.5"/><path d="M23 29h18M23 35h13" stroke="#8dd5c9" stroke-width="2.5" stroke-linecap="round"/></svg></div>
  <div class="orbit one"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="20" cy="12" r="5"/><path d="M9 31c0-9 22-9 22 0"/></svg></div>
  <div class="orbit two"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 11h20v15H19l-6 5v-5h-3z"/><path d="M15 17h10M15 21h7"/></svg></div>
  <div class="orbit three"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 7 35 33H5L20 7Z"/><path d="M20 17v8M20 29v2"/></svg></div>
  <div class="visual-caption">YOUR RESPONSE CHANGES THE ROOM</div>
</div>`;
function renderIntro() {
  state.view = "intro";
  show(`<section class="stage intro-grid"><div><p class="eyebrow">An interactive leadership experience / 01</p><h1 class="hero-title">Lead the<br><span>Launch.</span></h1><p class="subtitle">${esc(CONTENT.intro.subtitle)}</p><p class="lead">${esc(CONTENT.intro.description)}</p><div class="intro-notes"><div class="note-line"><span class="dot"></span><span><strong>${esc(CONTENT.intro.duration)}</strong> · Five decisions, one connected story.</span></div><div class="note-line"><span class="dot"></span><span>${esc(CONTENT.intro.nuance)}</span></div></div>${button("Begin simulation","start")}${disclaimer()}</div>${graphic}</section>`);
}
const motifs = [
  ["Defect flagged","⚑"],["Accountability","◇"],["Unspoken doubts","◌"],["Competing priorities","⇄"],["Team capacity","▥"]
];
function scenarioVisual(index, compact = false) {
  const [label, symbol] = motifs[index];
  return `<div class="scenario-visual ${compact ? "compact" : ""} ${index < 5 ? "with-artwork" : ""}" aria-hidden="true">${index < 5 ? `<img class="scenario-artwork" src="assets/scenario-${index+1}.png" alt="" loading="eager">` : `<div class="visual-rings"><span class="visual-symbol">${symbol}</span><span class="visual-node node-a"></span><span class="visual-node node-b"></span><span class="visual-node node-c"></span></div>`}<span class="visual-tag">CHAPTER ${String(index+1).padStart(2,"0")} · ${esc(label)}</span></div>`;
}
function getCulture(answers) {
  const scores = {...CONTENT.culture.starting};
  for (const a of answers) {
    if (!CONTENT.culture.effects[a]) throw Error("Invalid decision");
    for (const key of Object.keys(scores)) scores[key] = Math.max(0,Math.min(100,scores[key]+CONTENT.culture.effects[a][key]));
  }
  return scores;
}
function cultureLabel(key, value) {
  const [low,high] = CONTENT.culture.thresholds;
  return CONTENT.culture.labels[key][value < low ? 0 : value < high ? 1 : 2];
}
function culturePanel() {
  const scores = getCulture(state.answers);
  return `<section class="culture-panel" aria-label="Team culture dashboard"><p class="section-kicker">Cumulative impact / Five decisions</p><h2>How your team culture may feel</h2><p class="culture-intro">These illustrative indicators reflect your decisions, not measured employee outcomes.</p><div class="culture-grid">${Object.entries(scores).map(([key,value])=>`<div class="culture-item"><span>${esc(CONTENT.culture.titles[key])}</span><strong>${esc(cultureLabel(key,value))}</strong><div class="culture-track" aria-hidden="true"><span style="width:${value}%"></span></div></div>`).join("")}</div></section>`;
}
function cumulativeNote() {
  const previous = state.answers.slice(0,-1);
  if (!previous.length) return "";
  const c = getCulture(previous);
  if (c.voice < 45 || previous.filter(a=>a==="C").length >= 2) return CONTENT.culture.priorClosed;
  if (c.voice >= 65) return CONTENT.culture.priorOpen;
  return "";
}
function renderScenario() {
  state.view = "scenario";
  const s = CONTENT.scenarios[state.step];
  show(`<section class="stage content-width">${progress(state.step)}<p class="section-kicker">Chapter ${String(state.step + 1).padStart(2,"0")} / Leadership in practice</p><h1 class="chapter">${esc(s.title)}</h1>${scenarioVisual(state.step)}<div class="situation">${s.situation.map(t => `<p>${esc(t)}</p>`).join("")}</div><h2 class="prompt">${esc(s.question)}</h2><div class="choices" role="group" aria-label="Choose your response">${Object.entries(s.choices).map(([key, text]) => `<button type="button" class="choice" data-choice="${key}"><span class="choice-letter" aria-hidden="true">${key}</span><span class="choice-copy"><span class="sr-only">${key}: </span>${esc(text)}</span></button>`).join("")}</div><p class="helper">Choose the response you would be most likely to take. You can explore a different path by trying again.</p></section>`);
}
function renderConsequence() {
  state.view = "consequence";
  const s = CONTENT.scenarios[state.step], answer = state.answers[state.step];
  const warning = answer === "C";
  const note = cumulativeNote();
  const prior = state.step === 1 && state.answers[0] === "C" ? s.priorSilence : note;
  show(`<section class="stage content-width">${progress(state.step)}<div class="consequence-card">${scenarioVisual(state.step,true)}<div class="consequence-icon ${warning ? "warning" : ""}" aria-hidden="true">${warning ? "!" : "↗"}</div><p class="section-kicker">Employee reaction / Decision ${state.step + 1}</p><h1>The team responds.</h1><p class="employee-quote">“${esc(CONTENT.reactions[state.step][answer])}”</p><h2 class="impact-heading">Possible culture consequence</h2><p>${esc(s.consequences[answer])}</p>${prior?`<p class="cumulative"><strong>Earlier decisions matter:</strong> ${esc(prior)}</p>`:""}${button(state.step === CONTENT.scenarios.length - 1 ? "See my leadership reflection" : "Continue","next")}</div></section>`);
}
function getResult(answers) {
  if (answers.length !== CONTENT.scenarios.length || answers.some(a => !["A","B","C"].includes(a))) throw Error("Five valid answers required");
  const counts = {A:0,B:0,C:0};
  answers.forEach(a => counts[a]++);
  const max = Math.max(...Object.values(counts));
  const winners = Object.keys(counts).filter(k=>counts[k]===max);
  return winners.length !== 1 ? "rounded" : {A:"inclusive",B:"empowering",C:"authoritarian"}[winners[0]];
}
function renderResult() {
  state.view = "result";
  const r = CONTENT.results[getResult(state.answers)];
  show(`<section class="stage content-width"><p class="section-kicker">Your leadership reflection / Result</p><div class="results-hero"><div><h1 class="result-title">${esc(r.title)}</h1><p class="result-summary">${esc(r.summary)}</p></div><div class="result-symbol result-artwork" aria-hidden="true"><img src="assets/${getResult(state.answers)}.png" alt="" loading="eager"></div></div>${culturePanel()}<div class="result-grid"><div class="panel"><h2>Potential strengths</h2><ul>${r.benefits.map(b=>`<li>${esc(b)}</li>`).join("")}</ul></div><div class="panel risk"><h2>A tension to consider</h2><p>${esc(r.limitation)}</p></div></div><div class="reflection"><p class="section-kicker">Pause & reflect</p><p>${esc(r.reflection)}</p></div><div class="decisions"><h2>Your five decisions</h2>${state.answers.map((a,i)=>`<div class="decision-row"><strong>Scenario ${i+1} · ${a}</strong><span>${esc(CONTENT.scenarios[i].title)} — ${esc(CONTENT.styles[a])}</span></div>`).join("")}</div><div class="learning"><h2>What this simulation shows</h2><ul>${CONTENT.learning.map(item=>`<li>${esc(item)}</li>`).join("")}</ul></div><div class="actions">${button("Try again","restart")}${button("Review my decisions","review","secondary")}</div>${disclaimer()}</section>`);
}
function renderReview() {
  state.view = "review";
  show(`<section class="stage content-width"><p class="section-kicker">Look back / Your decision trail</p><h1 class="chapter">Review my decisions</h1><p class="lead">Consider not only what you chose, but how your team might interpret your response.</p>${state.answers.map((a,i)=>{const s=CONTENT.scenarios[i];return `<article class="review-item"><p class="review-label">Scenario ${i+1} / ${esc(s.title)}</p><h2>${esc(s.title)}</h2><div class="review-choice"><strong>Your choice · ${a}</strong><p>${esc(s.choices[a])}</p></div><p><strong>Possible consequence:</strong> ${esc(s.consequences[a])}</p>${i===1&&state.answers[0]==="C"?`<p><strong>Earlier decision:</strong> ${esc(s.priorSilence)}</p>`:""}</article>`}).join("")}<div class="actions">${button("Back to my result","result")}${button("Try again","restart","secondary")}</div></section>`);
}
app.addEventListener("click", event => {
  const choice = event.target.closest("button[data-choice]");
  if (choice && state.view === "scenario") {
    const value = choice.dataset.choice;
    if (!["A","B","C"].includes(value)) return;
    state.answers[state.step] = value;
    renderConsequence();
    return;
  }
  const action = event.target.closest("button[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "start" || action === "restart") {state.answers=[];state.step=0;renderScenario();}
  else if (action === "next" && state.view === "consequence") {if(state.step<CONTENT.scenarios.length-1){state.step++;renderScenario();}else renderResult();}
  else if (action === "review" && state.view === "result") renderReview();
  else if (action === "result" && state.view === "review") renderResult();
});
renderIntro();
// Exposed only for local automated checks; no network or persistent data.
window.LeadTheLaunch = {getResult, getCulture, cultureLabel, CONTENT, state};
