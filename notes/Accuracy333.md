---
timezone: UTC+8
---

# Accuracy333

**GitHub ID:** Accuracy333

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->
```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gas / 合约执行交互学习</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;font-size:13px;color:#1a1a1a;background:#f5f5f0;padding:24px}
h1{font-size:18px;font-weight:500;margin-bottom:4px;color:#1a1a1a}
.subtitle{font-size:13px;color:#666;margin-bottom:20px}
.card{background:#fff;border:0.5px solid rgba(0,0,0,0.12);border-radius:12px;padding:1rem 1.25rem;margin-bottom:1rem}
.section-title{font-size:14px;font-weight:500;margin-bottom:12px;color:#1a1a1a}
.tab-bar{display:flex;gap:6px;margin-bottom:1rem;border-bottom:0.5px solid rgba(0,0,0,0.1);padding-bottom:8px}
.tab{padding:5px 14px;border-radius:6px;cursor:pointer;font-size:13px;border:0.5px solid transparent;color:#666;transition:all 0.15s}
.tab.active{background:#E6F1FB;color:#185FA5;border-color:#B5D4F4;font-weight:500}
.tab:hover:not(.active){background:#f5f5f0}
.panel{display:none}.panel.active{display:block}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:1rem}
@media(max-width:600px){.metrics{grid-template-columns:repeat(2,1fr)}}
.metric{background:#f5f5f0;border-radius:8px;padding:12px;text-align:center}
.metric-label{font-size:12px;color:#666;margin-bottom:4px}
.metric-value{font-size:20px;font-weight:500;color:#1a1a1a}
.metric-value.danger{color:#A32D2D}
.metric-value.success{color:#3B6D11}
.metric-value.info{color:#185FA5}
.slider-row{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.slider-row label{width:140px;font-size:13px;color:#555;flex-shrink:0}
.slider-row input[type=range]{flex:1;accent-color:#378ADD}
.slider-row .val{width:90px;text-align:right;font-size:13px;color:#1a1a1a;font-weight:500}
.gas-bar-wrap{margin:1rem 0}
.gas-bar-label{display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:4px}
.gas-bar-bg{height:10px;background:#e8e8e4;border-radius:5px;overflow:hidden}
.gas-bar-fill{height:100%;border-radius:5px;transition:width 0.3s,background 0.3s;background:#378ADD}
.gas-bar-fill.warn{background:#EF9F27}
.gas-bar-fill.over{background:#E24B4A}
.opcode-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
@media(max-width:500px){.opcode-grid{grid-template-columns:1fr}}
.op-card{background:#f5f5f0;border-radius:8px;padding:10px 12px;cursor:pointer;border:0.5px solid transparent;transition:border-color 0.15s}
.op-card:hover{border-color:rgba(0,0,0,0.2)}
.op-card.selected{border-color:#378ADD;background:#E6F1FB}
.op-name{font-weight:500;font-size:13px;margin-bottom:2px}
.op-gas{font-size:12px;color:#666}
.op-detail{background:#f5f5f0;border-radius:8px;padding:12px;margin-top:10px;font-size:13px;line-height:1.7;color:#333}
.evm-stack{display:flex;flex-direction:column;gap:4px;min-height:120px}
.stack-item{background:#E6F1FB;border:0.5px solid #B5D4F4;border-radius:6px;padding:4px 10px;font-family:"SF Mono","Fira Code",monospace;font-size:12px;color:#185FA5;animation:slideIn 0.25s ease}
@keyframes slideIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
.exec-log{font-family:"SF Mono","Fira Code",monospace;font-size:12px;line-height:1.8;max-height:180px;overflow-y:auto;background:#f5f5f0;border-radius:8px;padding:10px}
.log-line{margin-bottom:2px}
.log-op{color:#185FA5;font-weight:500}
.log-gas{color:#A32D2D}
.log-ok{color:#3B6D11}
.step-btns{display:flex;gap:8px;margin-bottom:12px}
button{padding:6px 16px;border-radius:6px;border:0.5px solid rgba(0,0,0,0.18);background:#fff;font-size:13px;cursor:pointer;transition:background 0.15s}
button:hover:not(:disabled){background:#f0f0ec}
button:disabled{opacity:0.45;cursor:default}
.cost-row{display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:0.5px solid rgba(0,0,0,0.08)}
.cost-row:last-child{border-bottom:none}
.cost-name{flex:1;font-size:13px;color:#333}
.cost-num{font-size:13px;font-weight:500;color:#185FA5;width:80px;text-align:right}
.cost-bar-bg{flex:2;height:6px;background:#e8e8e4;border-radius:3px;overflow:hidden}
.cost-bar-fill{height:100%;border-radius:3px;background:#378ADD;transition:width 0.3s}
.info-box{background:#E6F1FB;border:0.5px solid #B5D4F4;border-radius:8px;padding:10px 12px;font-size:13px;color:#185FA5;margin-top:10px;line-height:1.6}
.exec-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
@media(max-width:500px){.exec-grid{grid-template-columns:1fr}}
.col-label{font-size:12px;color:#666;margin-bottom:6px}
</style>
</head>
<body>

<h1>Gas / 合约执行交互学习</h1>
<p class="subtitle">Ethereum EVM Gas 机制全解 — 费用模拟 · 操作码查询 · 逐步执行 · EIP-1559</p>

<div class="tab-bar">
  <div class="tab active" onclick="switchTab('sim')">Gas 费用模拟</div>
  <div class="tab" onclick="switchTab('opcode')">操作码 Gas 表</div>
  <div class="tab" onclick="switchTab('exec')">逐步执行演示</div>
  <div class="tab" onclick="switchTab('eip1559')">EIP-1559 机制</div>
</div>

<!-- ========== Tab 1: Gas 模拟器 ========== -->
<div id="panel-sim" class="panel active">
  <div class="card">
    <div class="section-title">交易 Gas 费用模拟器</div>
    <div class="slider-row">
      <label>Gas limit</label>
      <input type="range" min="21000" max="500000" step="1000" value="100000" id="sl-limit" oninput="updateSim()">
      <span class="val" id="v-limit">100,000</span>
    </div>
    <div class="slider-row">
      <label>Gas 实际消耗</label>
      <input type="range" min="21000" max="500000" step="1000" value="65000" id="sl-used" oninput="updateSim()">
      <span class="val" id="v-used">65,000</span>
    </div>
    <div class="slider-row">
      <label>Base fee (Gwei)</label>
      <input type="range" min="1" max="300" step="1" value="20" id="sl-base" oninput="updateSim()">
      <span class="val" id="v-base">20 Gwei</span>
    </div>
    <div class="slider-row">
      <label>Priority fee (Gwei)</label>
      <input type="range" min="0" max="50" step="1" value="2" id="sl-prio" oninput="updateSim()">
      <span class="val" id="v-prio">2 Gwei</span>
    </div>
    <div class="slider-row">
      <label>ETH 价格 (USD)</label>
      <input type="range" min="500" max="10000" step="100" value="3500" id="sl-eth" oninput="updateSim()">
      <span class="val" id="v-eth">$3,500</span>
    </div>
  </div>

  <div class="metrics">
    <div class="metric"><div class="metric-label">实际费用 (ETH)</div><div class="metric-value info" id="m-eth">0.0000</div></div>
    <div class="metric"><div class="metric-label">实际费用 (USD)</div><div class="metric-value" id="m-usd">$0.00</div></div>
    <div class="metric"><div class="metric-label">燃烧 Base fee (ETH)</div><div class="metric-value danger" id="m-burn">0.0000</div></div>
    <div class="metric"><div class="metric-label">矿工小费 (ETH)</div><div class="metric-value success" id="m-tip">0.0000</div></div>
  </div>

  <div class="gas-bar-wrap">
    <div class="gas-bar-label"><span>Gas 使用率</span><span id="bar-pct">0%</span></div>
    <div class="gas-bar-bg"><div class="gas-bar-fill" id="gas-fill" style="width:0%"></div></div>
  </div>
  <div class="info-box" id="sim-tip">调整上方滑块来探索 Gas 费用的构成原理。</div>

  <div style="margin-top:16px;font-size:12px;color:#888;line-height:1.8">
    <b>公式说明：</b><br>
    实际费用 = (Base fee + Priority fee) × Gas 实际消耗<br>
    燃烧金额 = Base fee × Gas 实际消耗（由协议销毁）<br>
    矿工收益 = Priority fee × Gas 实际消耗<br>
    未使用的 Gas（limit − used）全额退还给发送者
  </div>
</div>

<!-- ========== Tab 2: 操作码 ========== -->
<div id="panel-opcode" class="panel">
  <div class="section-title">EVM 操作码 Gas 消耗查询</div>
  <p style="font-size:12px;color:#888;margin-bottom:12px">点击任意操作码查看详细说明与成本原理</p>
  <div class="opcode-grid" id="op-grid"></div>
  <div class="op-detail" id="op-detail">点击任意操作码查看详细说明。</div>

  <div style="margin-top:16px;font-size:12px;color:#888;line-height:1.8">
    <b>成本等级参考：</b><br>
    算术/内存读写 ≈ 3–6 Gas（极廉价）&nbsp;|&nbsp;
    哈希/事件 ≈ 30–1500 Gas（中等）&nbsp;|&nbsp;
    跨合约调用 ≈ 2600 Gas（较贵）&nbsp;|&nbsp;
    Storage 读写 ≈ 2100–20000 Gas（最昂贵）
  </div>
</div>

<!-- ========== Tab 3: 逐步执行 ========== -->
<div id="panel-exec" class="panel">
  <div class="section-title">合约逐步执行演示</div>
  <div style="margin-bottom:10px;font-size:13px;color:#555">
    示例合约：<code style="background:#f5f5f0;padding:2px 8px;border-radius:4px;font-size:12px">function add(uint a, uint b) public pure returns (uint)</code>
    &nbsp;— 调用时传入 a=10, b=20
  </div>
  <div class="step-btns">
    <button onclick="execStep()" id="btn-step">下一步 &#8594;</button>
    <button onclick="execReset()">重置</button>
  </div>
  <div class="exec-grid">
    <div>
      <div class="col-label">EVM 栈（栈顶在上）</div>
      <div class="evm-stack" id="evm-stack"><div style="color:#aaa;font-size:12px">栈空</div></div>
    </div>
    <div>
      <div class="col-label">执行日志</div>
      <div class="exec-log" id="exec-log">等待开始执行...</div>
    </div>
  </div>
  <div class="metrics" style="grid-template-columns:repeat(3,1fr);margin-top:12px">
    <div class="metric"><div class="metric-label">剩余 Gas</div><div class="metric-value info" id="ex-gas">30,000</div></div>
    <div class="metric"><div class="metric-label">当前步骤</div><div class="metric-value" id="ex-step">0 / 6</div></div>
    <div class="metric"><div class="metric-label">状态</div><div class="metric-value success" id="ex-status">就绪</div></div>
  </div>

  <div style="margin-top:16px;font-size:12px;color:#888;line-height:1.8">
    <b>EVM 执行模型要点：</b><br>
    EVM 是基于栈的虚拟机，每条指令弹出若干栈顶值、执行操作、将结果压回栈。<br>
    函数参数通过 calldata 传入，局部变量存于 memory（临时），状态变量存于 storage（永久）。<br>
    每执行一条指令都会消耗对应 Gas；Gas 耗尽时抛出 out-of-gas 异常，所有状态回滚。
  </div>
</div>

<!-- ========== Tab 4: EIP-1559 ========== -->
<div id="panel-eip1559" class="panel">
  <div class="section-title">EIP-1559 Gas 定价机制</div>
  <div style="margin-bottom:12px">
    <div style="font-size:13px;color:#555;margin-bottom:8px">模拟网络拥堵程度（0 = 空闲，100 = 极度拥堵）</div>
    <input type="range" min="0" max="100" value="50" id="sl-congestion" oninput="updateEip()" style="width:100%;accent-color:#378ADD">
    <div style="display:flex;justify-content:space-between;font-size:11px;color:#aaa;margin-top:2px">
      <span>空闲</span><span>正常</span><span>拥堵</span>
    </div>
  </div>
  <div id="eip-costs"></div>
  <div class="info-box" id="eip-info"></div>
  <div style="margin-top:14px;font-size:13px;color:#555;font-weight:500;margin-bottom:8px">ETH 流向分配（以 21000 Gas 转账为例）</div>
  <div id="eip-breakdown"></div>

  <div style="margin-top:16px;font-size:12px;color:#888;line-height:1.8">
    <b>EIP-1559 核心机制：</b><br>
    1. Base fee 由协议自动算法调整，目标区块使用率为 50%<br>
    2. 区块使用率 &gt; 50% → Base fee 最多上涨 12.5%；&lt; 50% → 最多下降 12.5%<br>
    3. Base fee 全部销毁（通缩）；Priority fee（小费）归矿工/验证者<br>
    4. 用户设置 maxFeePerGas = 愿意支付的最高 Gas 价格，超出部分退还
  </div>
</div>

<script>
function switchTab(id) {
  var ids = ['sim','opcode','exec','eip1559'];
  document.querySelectorAll('.tab').forEach(function(t,i){ t.classList.toggle('active', ids[i]===id); });
  document.querySelectorAll('.panel').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('panel-'+id).classList.add('active');
}

function fmtN(n){ return Math.round(n).toLocaleString('zh-CN'); }

function updateSim() {
  var lim = +document.getElementById('sl-limit').value;
  var used = Math.min(+document.getElementById('sl-used').value, lim);
  var base = +document.getElementById('sl-base').value;
  var prio = +document.getElementById('sl-prio').value;
  var eth = +document.getElementById('sl-eth').value;

  document.getElementById('v-limit').textContent = fmtN(lim);
  document.getElementById('v-used').textContent = fmtN(used);
  document.getElementById('v-base').textContent = base + ' Gwei';
  document.getElementById('v-prio').textContent = prio + ' Gwei';
  document.getElementById('v-eth').textContent = '$' + fmtN(eth);

  var totalEth = (base + prio) * used / 1e9;
  var burnEth = base * used / 1e9;
  var tipEth = prio * used / 1e9;
  var totalUsd = totalEth * eth;

  document.getElementById('m-eth').textContent = totalEth.toFixed(6);
  document.getElementById('m-usd').textContent = '$' + totalUsd.toFixed(2);
  document.getElementById('m-burn').textContent = burnEth.toFixed(6);
  document.getElementById('m-tip').textContent = tipEth.toFixed(6);

  var pct = Math.round(used / lim * 100);
  document.getElementById('bar-pct').textContent = pct + '%';
  var fill = document.getElementById('gas-fill');
  fill.style.width = pct + '%';
  fill.className = 'gas-bar-fill' + (pct > 90 ? ' over' : pct > 70 ? ' warn' : '');

  var tip = '';
  if (pct > 95) tip = '使用率接近上限，说明这是一笔计算密集型合约调用，容易触发 out-of-gas 风险，建议提高 limit 或优化合约。';
  else if (pct > 70) tip = 'Gas 使用率偏高，建议在合约中预留至少 20% 余量以应对动态执行路径。';
  else if (pct < 30) tip = 'Gas limit 设置偏保守，实际上很宽裕。可以适当降低 limit，减少发送前锁定的 ETH。';
  else tip = 'Gas 使用率合理（' + pct + '%）。未使用的 ' + fmtN(lim - used) + ' 单位 Gas 将在交易完成后退还给发送者。';
  document.getElementById('sim-tip').textContent = tip;
  document.getElementById('sl-used').max = lim;
}

var opcodes = [
  {name:'ADD',     gas:3,     cat:'算术', desc:'两个栈顶数相加，结果压栈。最基础的 EVM 指令之一，成本固定为 3 Gas。EVM 中所有整数均为 256 位无符号整数。', color:'#185FA5'},
  {name:'MUL',     gas:5,     cat:'算术', desc:'乘法运算，成本 5 Gas。EVM 中所有算术均按字（256-bit）操作，溢出自动截断，不抛出异常。', color:'#185FA5'},
  {name:'SLOAD',   gas:2100,  cat:'存储', desc:'从 storage 读取一个槽（cold access，EIP-2929）。若同一交易中已读过该槽（warm），仅需 100 Gas。Storage 是合约中最昂贵的资源。', color:'#A32D2D'},
  {name:'SSTORE',  gas:20000, cat:'存储', desc:'写入新值到 storage 槽（cold write）。修改已有非零值为非零值 = 2900 Gas；写入零值可触发 Gas 退款。是合约中最昂贵的操作。', color:'#A32D2D'},
  {name:'MLOAD',   gas:3,     cat:'内存', desc:'从 memory（临时内存）读取 32 字节，基础 3 Gas。Memory 按需扩展，访问超出已分配范围时会产生内存扩展费用（按 word 计费）。', color:'#3B6D11'},
  {name:'MSTORE',  gas:3,     cat:'内存', desc:'向 memory 写入 32 字节，基础 3 Gas + 内存扩展费。Memory 在函数调用结束后自动释放，不收取持久成本。', color:'#3B6D11'},
  {name:'CALL',    gas:2600,  cat:'调用', desc:'调用另一个合约（cold address）。携带 ETH 时额外 +9000 Gas；若目标账户不存在则 +25000 Gas（创建账户费）。', color:'#854F0B'},
  {name:'LOG2',    gas:1500,  cat:'日志', desc:'发出含 2 个 topic 的事件日志。费用 = 375 + 2×375（topic）+ 数据字节×8。日志永久写入链但合约无法读取。', color:'#3C3489'},
  {name:'CREATE',  gas:32000, cat:'部署', desc:'部署一个新合约，基础 32000 Gas + initcode 字节费（200 Gas/字节）+ 内存费。CREATE2 费用相同但加入 hash 计算。', color:'#993C1D'},
  {name:'KECCAK256',gas:30,   cat:'加密', desc:'基础 30 Gas + 6 Gas/word（每 32 字节）。Solidity mapping 键哈希、事件签名、CREATE2 地址计算等均依赖此指令。', color:'#0F6E56'},
];

function renderOpcodes() {
  var g = document.getElementById('op-grid');
  g.innerHTML = opcodes.map(function(op, i) {
    var barW = Math.min(100, Math.log10(op.gas+1) / Math.log10(32001) * 100).toFixed(1);
    return '<div class="op-card" id="opc-'+i+'" onclick="selectOp('+i+')">'
      + '<div class="op-name" style="color:'+op.color+'">'+op.name+' <span style="font-size:11px;color:#aaa">['+op.cat+']</span></div>'
      + '<div class="op-gas">'+op.gas.toLocaleString()+' Gas</div>'
      + '<div class="cost-bar-bg" style="margin-top:4px"><div class="cost-bar-fill" style="width:'+barW+'%;background:'+op.color+'"></div></div>'
      + '</div>';
  }).join('');
}

function selectOp(i) {
  document.querySelectorAll('.op-card').forEach(function(c){ c.classList.remove('selected'); });
  document.getElementById('opc-'+i).classList.add('selected');
  var op = opcodes[i];
  document.getElementById('op-detail').innerHTML =
    '<b style="color:'+op.color+'">'+op.name+'</b>'
    + ' &nbsp;|&nbsp; 类别：'+op.cat
    + ' &nbsp;|&nbsp; 消耗：<b>'+op.gas.toLocaleString()+' Gas</b>'
    + '<br><br>'+op.desc;
}

var execSteps = [
  {op:'PUSH1 0x0a', desc:'将参数 a=10 (0x0a) 压栈', gasUse:3, stack:['0x0a']},
  {op:'PUSH1 0x14', desc:'将参数 b=20 (0x14) 压栈', gasUse:3, stack:['0x14','0x0a']},
  {op:'ADD',        desc:'弹出两值相加 10+20=30，结果压栈', gasUse:3, stack:['0x1e']},
  {op:'DUP1',       desc:'复制栈顶值（备份返回值用）', gasUse:3, stack:['0x1e','0x1e']},
  {op:'MSTORE',     desc:'弹出地址 0 和值，将 30 写入 memory[0]', gasUse:6, stack:[]},
  {op:'RETURN',     desc:'返回 memory[0..31]，函数执行完成', gasUse:0, stack:[]},
];
var execState = {step:0, gas:30000, log:[]};

function renderExec() {
  var s = execState;
  document.getElementById('ex-gas').textContent = s.gas.toLocaleString();
  document.getElementById('ex-step').textContent = s.step + ' / ' + execSteps.length;
  var done = s.step >= execSteps.length;
  document.getElementById('btn-step').disabled = done;
  document.getElementById('ex-status').textContent = done ? '已完成' : (s.step > 0 ? '执行中' : '就绪');
  document.getElementById('ex-status').className = 'metric-value ' + (done ? 'success' : s.step > 0 ? 'info' : 'success');
  var stackEl = document.getElementById('evm-stack');
  var cur = s.step > 0 ? execSteps[s.step-1] : null;
  if (cur && cur.stack.length > 0) {
    stackEl.innerHTML = cur.stack.map(function(v){ return '<div class="stack-item">'+v+'</div>'; }).join('');
  } else if (s.step === 0) {
    stackEl.innerHTML = '<div style="color:#aaa;font-size:12px">栈空</div>';
  } else {
    stackEl.innerHTML = '<div style="color:#aaa;font-size:12px">栈已清空（值已消耗）</div>';
  }
  var logEl = document.getElementById('exec-log');
  logEl.innerHTML = s.log.join('') || '等待开始执行...';
  logEl.scrollTop = 9999;
}

function execStep() {
  var i = execState.step;
  if (i >= execSteps.length) return;
  var st = execSteps[i];
  execState.gas -= st.gasUse;
  execState.step++;
  execState.log.push(
    '<div class="log-line"><span class="log-op">'+st.op+'</span>'
    + ' — '+st.desc
    + (st.gasUse > 0 ? ' <span class="log-gas">(-'+st.gasUse+' Gas)</span>' : ' <span style="color:#aaa">(free)</span>')
    + '</div>'
  );
  if (execState.step === execSteps.length) {
    execState.log.push('<div class="log-line log-ok">执行成功。返回值：30 (0x1e)，总消耗：18 Gas</div>');
  }
  renderExec();
}

function execReset() {
  execState = {step:0, gas:30000, log:[]};
  renderExec();
}

function updateEip() {
  var cong = +document.getElementById('sl-congestion').value;
  var baseFee = Math.round(5 + cong * 2.9);
  var maxFee = Math.round(baseFee * 1.5 + 2);
  var prio = 2;
  var gas = 21000;
  var burnEth = (baseFee * gas / 1e9).toFixed(8);
  var tipEth = (prio * gas / 1e9).toFixed(8);

  var items = [
    {name:'Base fee（由协议算法设定）',  val:baseFee, max:300,  color:'#E24B4A'},
    {name:'Priority fee（用户小费）',   val:prio,    max:50,   color:'#3B6D11'},
    {name:'建议 maxFeePerGas 上限',    val:maxFee,  max:450,  color:'#185FA5'},
  ];
  document.getElementById('eip-costs').innerHTML = items.map(function(it) {
    var w = Math.min(100, it.val / it.max * 100).toFixed(1);
    return '<div class="cost-row">'
      + '<span class="cost-name">'+it.name+'</span>'
      + '<div class="cost-bar-bg"><div class="cost-bar-fill" style="width:'+w+'%;background:'+it.color+'"></div></div>'
      + '<span class="cost-num" style="color:'+it.color+'">'+it.val+' Gwei</span>'
      + '</div>';
  }).join('');

  var breakdown = [
    {name:'燃烧销毁（Base fee × 21000 Gas）', val:burnEth+' ETH', color:'#A32D2D'},
    {name:'矿工/验证者收益（Priority fee × Gas）', val:tipEth+' ETH', color:'#3B6D11'},
  ];
  document.getElementById('eip-breakdown').innerHTML = breakdown.map(function(b) {
    return '<div class="cost-row">'
      + '<span class="cost-name" style="color:'+b.color+'">'+b.name+'</span>'
      + '<span class="cost-num" style="color:'+b.color+'">'+b.val+'</span>'
      + '</div>';
  }).join('');

  var trend = '';
  if (cong > 60) trend = '当前网络拥堵（'+cong+'%），Base fee 将在下一区块继续上涨（每块最多 +12.5%）。建议设置更高的 maxFeePerGas 以保证上链。';
  else if (cong < 40) trend = '网络相对空闲（'+cong+'%），Base fee 正在下降。此时是低成本发送交易的好时机，无需设置过高 maxFee。';
  else trend = '网络负载适中（'+cong+'%），Base fee 在目标区块容量附近波动，可按当前 Base fee 的 1.5 倍设置 maxFeePerGas。';
  document.getElementById('eip-info').textContent = trend;
}

renderOpcodes();
updateSim();
updateEip();
renderExec();
</script>
</body>
</html>
```

对gas合约交易的模拟学习界面
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->

![屏幕截图 2026-05-22 204758.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Accuracy333/images/2026-05-22-1779454088506-_____2026-05-22_204758.png)

```
文件路径C:\Users\Accuracy\WorkBuddy\2026-05-22-task-7\gas-interactive-learning.html# 2026-05-22 工作记录

## Gas / 合约执行交互学习产物

生成了一个完整的 HTML 交互学习文件：`gas-interactive-learning.html`

包含四个模块：
1. **Gas 费用模拟器** — 可拖动滑块调整 Gas limit / 消耗 / Base fee / Priority fee / ETH 价格，实时计算费用构成
2. **操作码 Gas 表** — 10 种常见 EVM 操作码（ADD/MUL/SLOAD/SSTORE/MLOAD/MSTORE/CALL/LOG2/CREATE/KECCAK256），点击查看详细说明
3. **逐步执行演示** — 模拟 `add(uint a, uint b)` 函数的 EVM 执行过程，逐步查看操作码、EVM 栈变化和 Gas 递减
4. **EIP-1559 机制** — 可调节网络拥堵程度，实时看到 Base fee 变化、ETH 燃烧量和矿工收益分配

文件路径：`C:\Users\Accuracy\WorkBuddy\2026-05-22-task-7\gas-interactive-learning.html`
```

file:///C:/Users/Accuracy/WorkBuddy/2026-05-22-task-7/gas-interactive-learning.html
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->



Web3/以太坊核心原理

一、账户体系：助记词、私钥、公钥与地址

这是你掌控链上资产的基础，核心逻辑是“一对多派生，私钥唯一授权”。

1\. 助记词（根种子）

◦ 你所有账户的“母体”，可以派生出无数个独立账户。

◦ 一旦泄露，所有派生账户的资产都会面临风险。

2\. 私钥

◦ 从助记词派生而来，是控制单个账户资金的唯一钥匙。

◦ 核心特点：永远不离开本地钱包，一旦泄露，任何人都能直接转走资产。

3\. 公钥

◦ 由私钥通过密码学算法生成的公开信息，用于验证签名。

4\. 钱包地址

◦ 公钥经过哈希处理后，截取最后一段生成的公开“名片”，用于接收资产。

二、资产与钱包的真相

很多人都有一个误区：资产不是存在钱包里的。

• 钱包的本质：只负责保存私钥、构造交易、发起签名，不存储资产。

• 资产的位置：余额、NFT、合约状态等，全部记录在链上账本中。

• 区块浏览器的作用：读取链上数据，展示交易、区块和合约状态。

三、交易的完整生命周期

一笔交易从你发起，到最终上链确认，会经历6个关键步骤：

身份验证 → 授权签名 → 网络传播 → 内存池排队 → 区块排序 → 链上执行与确认

1\. 签名与授权（本地）

◦ 钱包在本地用私钥签名交易，私钥不会泄露。

◦ 交易的本质是一段“我授权网络执行这件事”的数据，不仅是转账，还包括合约调用、投票、授权等。

2\. 传播与排队（网络）

◦ 交易通过RPC节点广播到网络，进入内存池（Mempool）排队等待打包。

3\. 打包与出块（共识）

◦ 区块构建者（Builder）对交易进行排序，验证者（Validator）负责出块和证明。

4\. 确认与Finality

◦ 交易被写入区块后，会随着后续区块的生成不断获得“确认数”。

◦ 以太坊PoS中，约2个epoch（约12.8分钟）后交易达到Finalized（最终确认），几乎无法被篡改。

四、Gas Fee：链上的“运行成本”

Gas Fee不是单纯的“手续费”，它有三个核心作用：

1\. 阻挡垃圾交易：让占用公共网络资源这件事有成本，防止网络被恶意攻击。

2\. 激励区块提议者：以太坊中，base fee会销毁，priority fee和MEV激励验证者，普通节点不直接接收Gas。

3\. 让资源有价格：谁占用计算、存储和区块空间，谁付费，避免免费资源被滥用。

五、数字签名：链上的“身份证”

数字签名是区块链信任的核心机制，逻辑非常简单：

1\. 你用私钥签名一段消息或交易。

2\. 其他人可以通过公钥验证签名，确认交易确实由对应私钥授权。

3\. 除非拿到私钥，否则任何人都无法伪造你的签名。

4\. 注意：签名消息不一定会上链，只有广播交易才会进入链上执行流程。

六、共识机制：PoW vs PoS

这是区块链决定“谁说了算”的核心规则：

机制 代表项目 核心逻辑 特点

PoW（工作量证明） 比特币（BTC） 算力竞争写账，谁先解出难题谁记账，全网验算 能源消耗高，去中心化程度依赖算力分布

PoS（权益证明） 以太坊（ETH） 验证者质押ETH，系统随机选取提议者和证明者，作恶会被罚没 能源效率高，安全性与质押资产规模挂钩

七、钱包、RPC与节点：你如何连接区块链

用户不直接接入区块链全网，而是通过RPC节点间接访问：

1\. 钱包：连接某个RPC节点（访问节点的API），不直连全网。

2\. RPC节点：背后是节点或节点集群，负责接收、传播交易。

3\. 风险提示：很多用户依赖少数RPC服务商，这会带来可用性、隐私、审查和单点故障风险，但这不等同于以太坊共识层中心化。

八、智能合约：写在链上的“自动代码”

1\. 本质：写在链上、能被交易触发的代码，运行在EVM等虚拟机中。

2\. 特点：不是真的“有智能”，只是按代码规则执行；交易触发后会改变链上状态，执行历史写入区块后极难篡改。

3\. 社会学意义：

◦ 规则透明：合约代码、调用记录和执行历史都可被公开检查。

◦ 减少人为干预：条件满足后按代码自动执行，临时改规则的空间变小。

◦ 信任对象转变：从“相信某个机构”转向“检查代码 + 共识 + 审计/治理”。

九、以太坊的治理与升级

以太坊的规则不是由某个人或机构决定的，而是通过社区流程迭代：

1\. 讨论：在Ethereum Magicians、AllCoreDevs等社区论坛进行公开讨论。

2\. 文档：形成EIP（以太坊改进提案），Core EIP是协议变更的正式规格。

3\. 实现与测试：多个客户端实现提案，在测试网验证，协调生态适配。

4\. 主网升级：一次升级通常打包多个EIP，通过硬分叉（Hard Fork）激活。

十、节点客户端多样性：去中心化的保障

1\. 以太坊节点软件分为执行层客户端和共识层客户端，不止一种实现。

2\. 多样性越高，越不怕单一软件bug、分叉或Finality风险。

3\. 去中心化不仅是“节点数量多”，还包括“实现多样性”，避免因单一客户端故障导致全网瘫痪。

十一、Web3的核心本质

Web3是密码学、经济学、社会学三门学科的交叉：

• 密码学：签名、哈希、ZK技术让权利和行为可以被验证，保障所有权。

• 经济学：Gas、质押和罚没机制，把成本和奖励写进系统规则，协调参与者行为。

• 社会学：个人主权、去中心化治理和共识形成，回答“谁说了算”的问题。

它的核心不是技术本身，而是数字世界控制权的重新分配。
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->




````
### 一、AI时代基础知识的重要性

**关键结论：AI没有降低复杂度，反而对人的要求变得更高**

1. **人与AI的协作边界**
   - 人：设计方案 → 评估方案合理性 → 验收AI代码 → 分析问题
   - AI：协助细化方案 → 执行编码 → 自我验证

2. **AI编码高质量的关键**
   - AI自我验证是核心：AI不停写代码、验证，直到达到正确效果
   - 基础知识和架构能力不足，无法判断AI输出的是对还是错

3. **Web2与Web3的关系**
   - Web3不是全新的体系，与Web2本质没有太大区别
   - 大部分Web3项目里，Web2能力占比相当高（如CEX交易所）
   - Web3只是倾向方向不同

4. **安全的本质**
   - 安全应该源于设计，贯穿项目全生命周期
   - 无法证伪：做得多相对更安全，但不保证不被攻击
   - 基础知识不扎实，安全就是空中楼阁

---

### 二、Web3支付系统案例解析

#### 传统Web支付模型
```
用户 → 电商平台 → 支付服务 → 银行(Back Institution) → 用户支付
```

**资金流**：用户银行卡 → 支付服务控制账户 → 定时清算给商户

**安全考量**：
- API Key/Secret Key身份验证
- 用户支付密码、MFA、风控
- 信任问题：依赖权威机构

#### Web3支付模型演进
```
用户 → 电商平台 → 支付服务 → 区块链(Blockchain) → 链上监听服务
```

**核心区别**：
- Blockchain替代了Back Institution
- 链上监听服务替代主动请求（区块链无法主动访问外部服务）

**信任解决方案**：
- 算法保证数据不可篡改
- 逻辑代码公开透明（智能合约 = 程序）
- 消息签名证明意图和身份

---

### 三、区块链钱包核心概念

#### 钱包的本质
- **输入**：私钥(Private Key)
- **输出**：签名(Signature)
- **作用**：身份证明 + 资产管理

#### 签名验证原理
```
1. 服务端生成消息
2. 用户用私钥签名
3. 第三方通过数学算法验证（无需知道私钥）
```

#### 钱包分类体系

| 分类维度 | 类型 |
|---------|------|
| 账号类型 | EOA钱包 / 合约钱包 / AA钱包 |
| 签名方式 | 多签钱包 / MPC钱包 |
| 托管方式 | 自托管 / 全托管 / 混合托管 |
| 硬件形态 | 软件钱包 / 硬件钱包 |
| 特殊用途 | 隐私钱包(Railgun) / 分层钱包 |

#### 钱包安全风险
1. **私钥泄露** = 完全失去控制权（不可逆）
2. **签名欺骗** → EIP-712签名可视化解决方案
3. **权限滥用** → 禁用`eth_sign`方法

---

### 四、交易生命周期

#### 关键参数
- **Gas**：计算资源消耗（固定值）
- **Gas Price/Base Fee**：用户自定义费用
- **Call Data**：链上应用交互的灵魂（相当于EVM的解析指令）

#### 交易确认流程
```
构造交易 → 签名 → 广播 → 区块确认 → Reorg等待 → KYC筛查 → 回调通知
```

**重要概念**：
- **Reorg（重组）**：等待足够区块确认，避免链分叉
- **Finalize时间**：各链不同（Insum≈2 epochs，Polygon需更久）

#### 交易模拟（Simulation）
- **必须时机**：签名之前
- **作用**：验证交易执行结果，防止钓鱼
- **风险**：签名后再模拟 = 暴露面增加，无意义

---

### 五、服务端钱包安全方案

#### 权限拆分策略
1. **资金量拆分**：热钱包/冷钱包分离
2. **多签机制**：大资金账号多签保护

#### 交易审核流程
```
可视化展示 → 人工审核 → 交易模拟(未签名) → TEE环境签名 → 上链
```

#### TEE（可信执行环境）
- 输入：加密数据
- 输出：签名
- 私钥明文不出环境，内存隔离

---

### 六、AI时代开发者能力模型

#### AI改变了什么？
- ✅ 编码速度大幅提升
- ✅ 学习曲线降低
- ✅ 多Agent框架减少重复消耗

#### AI没改变什么？
- ❌ 系统复杂度
- ❌ 架构设计能力
- ❌ 底层判断能力
- ❌ 安全责任

#### 未来核心能力
| 能力 | 说明 |
|------|------|
| **驾驭AI** | 能看懂AI方案，能评估对错 |
| **架构能力** | 系统全局洞察力 |
| **放大器** | AI放大个人能力，人决定方向 |
| **安全意识** | Web3出错=资产损失，需深入理解 |

---

## Q&A 
````

![屏幕截图 2026-05-18 201645.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Accuracy333/images/2026-05-18-1779109348419-_____2026-05-18_201645.png)![屏幕截图 2026-05-18 201918.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Accuracy333/images/2026-05-18-1779109335795-_____2026-05-18_201918.png)

```


**Q: Private Key会变吗？**
A: 永不变化。但不同消息产生不同签名。

**Q: 私钥丢了怎么办？**
A: 无法恢复。Web3没有Charge Back机制。

**Q: 别人拿到私钥能冒充我吗？**
A: 能。链上只认私钥不认人，所以私钥保护是第一要务。
```

![屏幕截图 2026-05-18 202305.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Accuracy333/images/2026-05-18-1779109324314-_____2026-05-18_202305.png)
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
