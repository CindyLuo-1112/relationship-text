const questions = [
  {
    question: "你们最常见的联系状态是？",
    answers: [
      { text: "每天都会聊几句", type: "情绪共振型" },
      { text: "很久不聊，但见面不尴尬", type: "线下续命型" },
      { text: "一阵很热，一阵很冷", type: "阶段性亲密型" },
      { text: "主要是我在维持", type: "单向供氧型" }
    ]
  },
  {
    question: "你们聊天更像什么？",
    answers: [
      { text: "自然分享生活", type: "情绪共振型" },
      { text: "偶尔更新近况", type: "低频陪伴型" },
      { text: "像完成社交任务", type: "礼貌存活型" },
      { text: "只有情绪上来才会聊", type: "阶段性亲密型" }
    ]
  },
  {
    question: "如果你突然不主动联系，对方会怎样？",
    answers: [
      { text: "会主动找我", type: "情绪共振型" },
      { text: "可能会，但不一定", type: "阶段性亲密型" },
      { text: "大概率不会", type: "单向供氧型" },
      { text: "我感觉关系会直接断掉", type: "单向供氧型" }
    ]
  },
  {
    question: "你们线下见面时的状态更像？",
    answers: [
      { text: "一见面就自然熟起来", type: "线下续命型" },
      { text: "和线上差不多，都挺稳定", type: "低频陪伴型" },
      { text: "会有一点尴尬", type: "礼貌存活型" },
      { text: "很少线下见面", type: "阶段性亲密型" }
    ]
  },
  {
    question: "你觉得这段关系现在靠什么维持？",
    answers: [
      { text: "真实的理解，磁场很合", type: "情绪共振型" },
      { text: "以前的感情基础", type: "回忆绑定型" },
      { text: "习惯和惯性", type: "惯性维持型" },
      { text: "我的主动", type: "单向供氧型" }
    ]
  },
  {
    question: "你们最近一次很开心地聊天，大概是什么时候？",
    answers: [
      { text: "最近几天", type: "情绪共振型" },
      { text: "有一阵子了，但不影响关系", type: "低频陪伴型" },
      { text: "想不起来了", type: "惯性维持型" },
      { text: "以前经常，现在很少", type: "回忆绑定型" }
    ]
  },
  {
    question: "你们的关系最怕什么？",
    answers: [
      { text: "长期不见面", type: "线下续命型" },
      { text: "我不主动", type: "单向供氧型" },
      { text: "没有新话题", type: "惯性维持型" },
      { text: "情绪一过就冷掉", type: "阶段性亲密型" }
    ]
  },
  {
    question: "你们聊天时，你最常有的感觉是？",
    answers: [
      { text: "被理解", type: "情绪共振型" },
      { text: "还算舒服，但不用天天聊", type: "低频陪伴型" },
      { text: "有点客气", type: "礼貌存活型" },
      { text: "我在努力找话题", type: "单向供氧型" }
    ]
  },
  {
    question: "你们有没有一种“回不去以前”的感觉？",
    answers: [
      { text: "没有，现在也很好", type: "情绪共振型" },
      { text: "偶尔有，但见面会好", type: "线下续命型" },
      { text: "有，而且越来越明显", type: "回忆绑定型" },
      { text: "有，但大家都不说", type: "礼貌存活型" }
    ]
  },
  {
    question: "这段关系里，谁更容易推进关系？",
    answers: [
      { text: "双方都会", type: "情绪共振型" },
      { text: "不需要推进，也挺稳", type: "低频陪伴型" },
      { text: "主要是我", type: "单向供氧型" },
      { text: "基本没人推进", type: "惯性维持型" }
    ]
  },
  {
    question: "你们断联一阵后重新联系，会怎样？",
    answers: [
      { text: "很快恢复自然", type: "低频陪伴型" },
      { text: "见面后才恢复", type: "线下续命型" },
      { text: "会热一阵，然后又冷", type: "阶段性亲密型" },
      { text: "越来越难接上话", type: "礼貌存活型" }
    ]
  },
  {
    question: "如果用一句话形容你们，你会选？",
    answers: [
      { text: "不用天天联系，但我知道你在", type: "低频陪伴型" },
      { text: "一见面就活过来", type: "线下续命型" },
      { text: "以前真的很好", type: "回忆绑定型" },
      { text: "好像还在，但没那么近了", type: "惯性维持型" }
    ]
    },
  {
    question: "你们现在的分享欲更像？",
    answers: [
      { text: "看到什么都还想发给TA", type: "情绪共振型" },
      { text: "不常分享，但重要事会说", type: "低频陪伴型" },
      { text: "想分享，但会犹豫要不要发", type: "单向供氧型" },
      { text: "已经很少第一时间想到TA", type: "惯性维持型" }
    ]
  },
  {
    question: "如果对方很久没回你，你通常会怎么想？",
    answers: [
      { text: "不会太在意，关系本来就稳定", type: "低频陪伴型" },
      { text: "会想是不是自己太主动了", type: "单向供氧型" },
      { text: "会有点失落，但习惯了", type: "礼貌存活型" },
      { text: "等见面就好了", type: "线下续命型" }
    ]
  },
  {
    question: "你们最容易在哪种时候变亲近？",
    answers: [
      { text: "深聊或者情绪低落时", type: "情绪共振型" },
      { text: "线下见面时", type: "线下续命型" },
      { text: "突然某段时间频繁聊天时", type: "阶段性亲密型" },
      { text: "聊起过去的时候", type: "回忆绑定型" }
    ]
  },
  {
    question: "你觉得这段关系现在最缺什么？",
    answers: [
      { text: "稳定的回应", type: "阶段性亲密型" },
      { text: "新的共同话题", type: "惯性维持型" },
      { text: "对方多主动一点", type: "单向供氧型" },
      { text: "一次好好见面", type: "线下续命型" }
    ]
  },
  {
    question: "你们现在的聊天结束方式通常是？",
    answers: [
      { text: "自然结束，不会尴尬", type: "低频陪伴型" },
      { text: "聊着聊着就没人回了", type: "惯性维持型" },
      { text: "我常常是最后回复的人", type: "单向供氧型" },
      { text: "客气地结束，比如哈哈/嗯嗯", type: "礼貌存活型" }
    ]
  },
  {
  question: "你们现在更像哪一种关系？",
  answers: [
    { text: "很稳定，但不高频", type: "低频陪伴型" },
    { text: "靠某些情绪时刻维持", type: "阶段性亲密型" },
    { text: "还在联系，但有点陌生", type: "礼貌存活型" },
    { text: "其实已经不像以前了", type: "回忆绑定型" }
  ]
},
{
  question: "你最常在哪个瞬间感觉关系变了？",
  answers: [
    { text: "开始没那么想分享", type: "惯性维持型" },
    { text: "聊天越来越客气", type: "礼貌存活型" },
    { text: "对方开始很少主动", type: "单向供氧型" },
    { text: "热络期结束之后", type: "阶段性亲密型" }
  ]
},
{
  question: "你们之间最舒服的状态是？",
  answers: [
    { text: "哪怕不聊天也不会尴尬", type: "低频陪伴型" },
    { text: "能聊很深的情绪", type: "情绪共振型" },
    { text: "见面的时候", type: "线下续命型" },
    { text: "突然特别热络的时候", type: "阶段性亲密型" }
  ]
},
{
  question: "如果关系真的结束了，你最舍不得什么？",
  answers: [
    { text: "被理解的感觉", type: "情绪共振型" },
    { text: "以前很好的时候", type: "回忆绑定型" },
    { text: "那个聊天习惯", type: "惯性维持型" },
    { text: "只有我知道的那个TA", type: "单向供氧型" }
  ]
},
{
  question: "你们之间的沉默更像哪一种？",
  answers: [
    { text: "舒服的安静", type: "低频陪伴型" },
    { text: "不知道该聊什么", type: "礼貌存活型" },
    { text: "都在等对方开口", type: "单向供氧型" },
    { text: "情绪过去后的冷却", type: "阶段性亲密型" }
  ]
},
{
  question: "你觉得你们现在最缺什么？",
  answers: [
    { text: "真实表达", type: "礼貌存活型" },
    { text: "稳定回应", type: "阶段性亲密型" },
    { text: "新的共同经历", type: "惯性维持型" },
    { text: "见面机会", type: "线下续命型" }
  ]
},
{
  question: "你们更像哪一种天气？",
  answers: [
    { text: "长期稳定的阴天", type: "低频陪伴型" },
    { text: "忽然下很大的阵雨", type: "阶段性亲密型" },
    { text: "冬天里的暖气", type: "情绪共振型" },
    { text: "已经停掉的晚夏", type: "回忆绑定型" }
  ]
},
{
  question: "现在的你，更像在维持什么？",
  answers: [
    { text: "一段真实关系", type: "情绪共振型" },
    { text: "一种习惯", type: "惯性维持型" },
    { text: "过去留下的温度", type: "回忆绑定型" },
    { text: "不想失去的连接", type: "单向供氧型" }
  ]
},
  {
    question: "如果这段关系变淡，你最可能的感觉是？",
    answers: [
      { text: "可惜，但不会觉得它完全消失", type: "低频陪伴型" },
      { text: "会怀念以前很好的时候", type: "回忆绑定型" },
      { text: "会觉得是不是自己没维持好", type: "单向供氧型" },
      { text: "其实早就感觉到了，只是没说", type: "礼貌存活型" }
    ]
  }
];

const resultDetails = {
  "低频陪伴型": {
    subtitle: "不靠高频联系维持的人",
    tagline: "不常联系，但关系没有真的断。",
    quote: "你们不是冷淡，只是不靠每天聊天证明关系。",
    keywords: "低频 / 稳定 / 需要时出现",
    description: "你们不是靠每天聊天维持关系，而是靠一种比较深的信任感。",
    advice: "偶尔认真见一次面，比天天闲聊更重要。"
  },
  "线下续命型": {
    subtitle: "只能在现实里复活的人",
    tagline: "线上像陌生人，线下又能活过来。",
    quote: "你们的关系不是靠消息续命，而是靠见面重启。",
    keywords: "见面恢复 / 线上冷淡",
    description: "你们更适合真实接触，而不是高频聊天。",
    advice: "长期不见面时，关系容易慢慢降温。"
  },
  "惯性维持型": {
    subtitle: "被习惯维系的人",
    tagline: "还在联系，但更像习惯。",
    quote: "关系没有结束，只是慢慢失去了新的内容。",
    keywords: "惯性 / 分享欲下降",
    description: "你们没有明显闹翻，但温度正在慢慢下降。",
    advice: "试着重新建立新的共同话题。"
  },
  "阶段性亲密型": {
    subtitle: "靠情绪反复靠近的人",
    tagline: "会突然靠近，也会突然冷掉。",
    quote: "你们像一阵风，靠近时很近，冷掉时也很突然。",
    keywords: "忽冷忽热 / 情绪驱动",
    description: "关系温度波动很大，很容易被情绪影响。",
    advice: "不要只看热络期，也要看冷淡期。"
  },
  "单向供氧型": {
     subtitle: "关系里先低头的人",
    tagline: "这段关系主要靠一个人在续命。",
    quote: "有时候你不是舍不得，只是已经习惯主动了。",
    keywords: "单方面主动 / 消耗",
    description: "你承担了更多主动推进关系的责任。",
    advice: "试着减少一点主动，看看对方会不会靠近。"
  },
  "回忆绑定型": {
    subtitle: "被过去困住的人",
    tagline: "你们靠过去很好，撑到现在。",
    quote: "你们现在最稳定的部分，是过去。",
    keywords: "旧关系 / 回忆",
    description: "现在的联系已经不如从前，但你们舍不得彻底散开。",
    advice: "问问自己，你留恋的是现在，还是过去。"
  },
  "礼貌存活型": {
  subtitle: "还在联系的陌生人",
    tagline: "没有散，但已经进入礼貌区。",
    quote: "关系没有断，只是越来越像礼貌。",
    keywords: "客气 / 社交流程感",
    description: "很多交流已经变成习惯性的回应。",
    advice: "试着说一次真正想说的话。"
  },
  "情绪共振型": {
     subtitle: "情绪频率相同的人",
    tagline: "你们最强的是情绪连接。",
    quote: "你们最像的不是朋友类型，而是情绪频率。",
    keywords: "共鸣 / 理解",
    description: "很多情绪不用解释，对方也能懂一点。",
    advice: "别只在难过的时候联系彼此。"
  }
};

let currentQuestion = 0;
let scores = {};
let answerHistory = [];

function startTest() {
  currentQuestion = 0;
  scores = {};
  showQuestion();
}

function showQuestion() {
  const app = document.getElementById("app");
  const q = questions[currentQuestion];

 const percent = ((currentQuestion + 1) / questions.length) * 100;

app.innerHTML = `
    <p class="progress-text">正在分析关系模式 ${currentQuestion + 1} / ${questions.length}</p >

    <div class="progress-bar">
      <div class="progress-fill" style="width: ${percent}%"></div>
    </div>

    <h2>${q.question}</h2>
    <div class="options"> 
      ${q.answers.map((answer, index) => `
        <button onclick="chooseAnswer(${index})">${answer.text}</button>
      `).join("")}
    </div>
    ${currentQuestion > 0 ? `
  <button class="back-btn" onclick="goBack()">
    返回上一题
  </button>
` : ""}
  `;
}

function chooseAnswer(index) {
  document.activeElement.blur();
  const answer = questions[currentQuestion].answers[index];

  scores[answer.type] = (scores[answer.type] || 0) + 1;
  answerHistory.push(answer.type);

  const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

  button.disabled = true;

});
currentQuestion++;

  setTimeout(() => {

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    showLoading();

  }

}, 150);
}

function showResult() {
  let topType = "";
  let topScore = -1;

  for (let type in scores) {
    if (scores[type] > topScore) {
      topScore = scores[type];
      topType = type;
    }
  }

  const detail = resultDetails[topType];
  const typeColors = {


  "情绪共振型": "#d8b4f8",

  "低频陪伴型": "#b8c7ff",

  "线下续命型": "#ffd6a5",

  "阶段性亲密型": "#ffb4c8",

  "单向供氧型": "#a0c4d6",

  "回忆绑定型": "#f3d19c",

  "礼貌存活型": "#d6d6d6",

  "惯性维持型": "#c9b6ff"

};
const typeEmojis = {

  "情绪共振型": "🫧",

  "低频陪伴型": "🌙",

  "线下续命型": "🎞️",

  "阶段性亲密型": "🌧️",

  "单向供氧型": "🪫",

  "回忆绑定型": "🕰️",

  "礼貌存活型": "🧊",

  "惯性维持型": "🔄"

};

const currentColor = typeColors[topType];
const currentEmoji = typeEmojis[topType];
  const danger = Math.min(95, 35 + topScore * 8);
  const warmth = 100 - danger;
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="result-show">
    <p class="progress">检测完成</p >
   <p class="report-label">
  系统已完成关系模式分析
</p >
 <h1 style="color:${currentColor}">
  ${currentEmoji} ${topType}
</h1>
<p class="subtitle">
  ${detail.subtitle}
</p >
    <p class="tagline">${detail.tagline}</p >
   <div 
  class="quote-box"
  style="border-left: 6px solid ${currentColor}"
>
  “${detail.quote}”
</div>

    <div class="result-card">
    <div class="warmth-section">

  <p>
    <strong>关系温度：</strong>
    ${warmth}%
  </p >

  <div class="warmth-bar">

    <div 
      class="warmth-fill"
      style="width:${warmth}%"
    ></div>

  </div>

</div>
      <p><strong>关系关键词：</strong>${detail.keywords}</p >
      <p><strong>人格匹配度：</strong>${danger}%</p >
      <p><strong>关系说明：</strong>${detail.description}</p >
      <p><strong>系统建议：</strong>${detail.advice}</p >
    </div>

    <button onclick="startTest()">重新测试</button>
  `;
}

function goBack(){

  currentQuestion--;

  const lastType = answerHistory.pop();

  scores[lastType]--;

  showQuestion();

}
function showLoading(){

  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="loading-box">
      <p class="loading-text">正在生成你们的关系人格报告...</p >
      <div class="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
 </div>
  `;

  setTimeout(function(){
    showResult();
  }, 1200);

}