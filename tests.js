const fs=require("fs"),vm=require("vm"),assert=require("assert");
const code=fs.readFileSync(__dirname+"/app.js","utf8");
let html="", handler, focused=0;
const app={set innerHTML(x){html=x},get innerHTML(){return html},focus(){focused++},addEventListener(t,cb){handler=cb}};
const context={document:{getElementById(){return app}},window:{scrollTo(){}}};
vm.createContext(context);vm.runInContext(code,context);
const {getResult,getCulture,cultureLabel,CONTENT,state}=context.window.LeadTheLaunch;
assert.equal(CONTENT.scenarios.length,5);
const keys=["A","B","C"];
let total=0;const outcomes=new Set();
const clickChoice=a=>handler({target:{closest:selector=>selector==="button[data-choice]"?{dataset:{choice:a}}:null}});
const clickAction=a=>handler({target:{closest:selector=>selector==="button[data-action]"?{dataset:{action:a}}:null}});
function expected(seq){const c={A:0,B:0,C:0};seq.forEach(x=>c[x]++);const m=Math.max(...Object.values(c));const winners=keys.filter(k=>c[k]===m);return winners.length===1?{A:"inclusive",B:"empowering",C:"authoritarian"}[winners[0]]:"rounded"}
function test(seq){
 clickAction("restart");
 assert.equal(state.answers.length,0);
 assert.equal(state.step,0);
 assert(html.includes("Scenario 1 of 5"));
 for(let i=0;i<5;i++){
  assert(html.includes(CONTENT.scenarios[i].title));
  assert(html.includes("scenario-visual"));
  clickChoice(seq[i]);
  assert.equal(state.view,"consequence");
  assert(html.includes(CONTENT.reactions[i][seq[i]].replace(/\x27/g,"&#39;")));
  assert(html.includes(CONTENT.scenarios[i].consequences[seq[i]].replace(/\x27/g,"&#39;")));
  if(i===1&&seq[0]==="C") assert(html.includes("earlier product concern was dismissed"));
  clickAction("next");
  if(i<4) assert.equal(state.view,"scenario");
 }
 assert.equal(state.view,"result");
 assert.equal(getResult(seq),expected(seq));
 outcomes.add(getResult(seq));
 assert(html.includes(CONTENT.results[expected(seq)].title));
 for(const key of Object.keys(CONTENT.culture.starting)) {
  const v=getCulture(seq)[key];
  assert(v>=0&&v<=100);
  assert(html.includes(cultureLabel(key,v)));
 }
 assert(html.includes("Your five decisions"));
 assert(html.includes(CONTENT.disclaimer));
 clickAction("review");
 assert.equal(state.view,"review");
 for(let i=0;i<5;i++)assert(html.includes(CONTENT.scenarios[i].choices[seq[i]].replace(/\x27/g,"&#39;")));
 clickAction("result");
 assert.equal(state.view,"result");
 total++;
}
for(const a of keys)for(const b of keys)for(const c of keys)for(const d of keys)for(const e of keys)test([a,b,c,d,e]);
assert.equal(outcomes.size,4);
assert.equal(getResult(["A","A","B","B","C"]),"rounded");
assert.equal(getResult(["A","A","A","B","C"]),"inclusive");
assert.equal(getResult(["B","B","B","A","C"]),"empowering");
assert.equal(getResult(["C","C","C","A","B"]),"authoritarian");
assert.throws(()=>getResult(["A"]));
clickAction("restart");assert.equal(state.answers.length,0);assert.equal(state.view,"scenario");
console.log(`PASS: ${total} complete paths; all 5 reaction flows, culture calculations, 4 results, review and replay/reset.`);
