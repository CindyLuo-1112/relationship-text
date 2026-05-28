const questions = [
  {
    text: "你们最常见的联系状态是？",
    options: [
      { text: "每天都会聊几句", scores: { 情绪共振型: 2 } },
      { text: "很久不聊，但见面不尴尬", scores: { 线下续命型: 3, 低频陪伴型: 2 } },
      { text: "一阵很热，一阵很冷", scores: { 阶段性亲密型: 4 } },
      { text: "主要是我在维持", scores: { 单向供氧型: 4 } }
    ]
  },
  {
    text: "如果你突然三天不找TA，会怎样？",
    options: [
      { text: "TA会主动来找我", scores: { 情绪共振型: 3, 低频陪伴型: 1 } },
      { text: "可能会，但不一定", scores: { 阶段性亲密型: 2 } },
      { text: "大概率不会", scores: { 单向供氧型: 3, 礼貌存活型: 2 } },
      { text: "我不敢试", scores: { 单向供氧型: 4 } }
    ]
  },
  {
    text: "你们聊天最像什么？",
    options: [
      { text: "自然分享生活", scores: { 情绪共振型: 4 } },
      { text: "偶尔更新近况", scores: { 低频陪伴型: 3 } },
      { text: "像完成社交任务", scores: { 礼貌存活型: 4, 惯性维持型: 2 } },
      { text: "只有情绪上来才会聊", scores: { 阶段性亲密型: 3 } }
    ]
  },
  {
    text: "你们现在最像哪种状态？",
    options: [
      { text: "不常联系，但关系还在", scores: { 低频陪伴型: 4 } },
      { text: "线上冷，线下熟", scores: { 线下续命型: 4 } },
      { text: "靠以前的回忆撑着", scores: { 回忆绑定型: 4 } },
      { text: "还在聊，但没以前有分享欲", scores: { 惯性维持型: 4 } }
    ]
  }
];

const results = {
  低频陪伴型: "你们不需要每天聊天来证明关系还在。真正重要的时候，对方依然是你会想到的人。",
  线下续命型: "你们在线上可能很冷，但只要见面，关系就会重新启动。见面比聊天更能维持你们。",
  惯性维持型: "你们还没有散，但很多联系已经变成习惯。危险的不是吵架，而是越来越没话说。",
  阶段性亲密型: "你们会突然靠近，也会突然冷掉。这段关系的温度很强，但不太稳定。",
  单向供氧型: "这段关系现在主要靠一个人在维持。如果你停下来，它可能会明显降温。",
  回忆绑定型: "你们现在维持关系的原因，很大一部分来自过去很好。不是没有感情，只是现在变少了。",
  礼貌存活型: "你们没有闹翻，只是逐渐进入礼貌区。关系还在，但已经少了一点真实的靠近。",
  情绪共振型: "你们之间最强的是情绪连接。很多话不用说完，对方也能懂一点。"
};

let currentQuestion = 0;
let scores = {};

function startTest() {
  currentQuestion = 0;
  scores = {};
  showQuestion();
}

function showQuestion() {
  const app = document.getElementById("app");
  const q = questions[currentQuestion];

  app.innerHTML = `
    <p class="progress">${currentQuestion + 1} / ${questions.length}</p >
    <h2>${q.text}</h2>
    <div class="options">
      ${q.options.map((option, index) => `
        <button onclick="chooseOption(${index})">${option.text}</button>
      `).join("")}
    </div>
  `;
}

function chooseOption(index) {
  const option = questions[currentQuestion].options[index];

  for (let type in option.scores) {
    scores[type] = (scores[type] || 0) + option.scores[type];
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
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

  const app = document.getElementById("app");

  app.innerHTML = `
    <p class="progress">检测完成</p >
    <h1>${topType}</h1>
    <p>${results[topType]}</p >
    <button onclick="startTest()">重新测试</button>
  `;
}