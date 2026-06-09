---
timezone: UTC+8
---

# Jizhixing-Kieran

**GitHub ID:** Jizhixing-Kieran

**Telegram:** @Kieran_Ji

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-06-09
<!-- DAILY_CHECKIN_2026-06-09_START -->
继续实现Demo
<!-- DAILY_CHECKIN_2026-06-09_END -->

# 2026-06-07
<!-- DAILY_CHECKIN_2026-06-07_START -->

学习typescript和前端
<!-- DAILY_CHECKIN_2026-06-07_END -->

# 2026-06-06
<!-- DAILY_CHECKIN_2026-06-06_START -->


了解到vibe coding的危害

首先，可以无编程背景，但是不能不学习

其次，可以AI编程，但要收敛需求，否则伤财费力，还做不出什么项目
<!-- DAILY_CHECKIN_2026-06-06_END -->

# 2026-06-04
<!-- DAILY_CHECKIN_2026-06-04_START -->



今天继续用Claude Code和Code Whale完成Agent开发项目的写作，提炼了几个哲学，并且Demo跑通了我对想法的验证
<!-- DAILY_CHECKIN_2026-06-04_END -->

# 2026-06-03
<!-- DAILY_CHECKIN_2026-06-03_START -->




今天发现了一个专门给DeepSeek优化的codeagent——codewhale，而且经过我初步尝试，页面也不错，功能也可以，以后就他了
<!-- DAILY_CHECKIN_2026-06-03_END -->

# 2026-06-01
<!-- DAILY_CHECKIN_2026-06-01_START -->






今天在设计层面上打通了Memory的闭环
<!-- DAILY_CHECKIN_2026-06-01_END -->

# 2026-05-31
<!-- DAILY_CHECKIN_2026-05-31_START -->







# MCP原理简单总结

今天总算在一天天的了解、理解下，终于理解了MCP到底内部走了一个什么形式：

MCP Client（客户端）和MCP Server（服务端）连接成功——Server向Client暴露出Server提供的可用工具和传参格式——用户发送消息——Runtime启动——Client把用户消息和Server提供的工具列表、描述、传参格式全都交给LLM——然后LLM收到思考选择是否使用工具使用什么工具，返回格式准确的JSON格式内容——Client把返回内容交给Server请求Server执行——Server这边拿到使用什么工具和工具对应的参数，执行，返回结果——Client把Server返回结果和之前的工具列表、用户提示词再次打包传给LLM——LLM再次选择，是完成任务，停止调用工具，还是输出JSON格式内容再调用一个工具——任务完成
<!-- DAILY_CHECKIN_2026-05-31_END -->

# 2026-05-30
<!-- DAILY_CHECKIN_2026-05-30_START -->








今天跑通了一个基于MCP的天气查询Demo，可以通过对话框的形式，让AI获取到MCP Server的工具列表并获取某地的当前的气温、天气等信息。
<!-- DAILY_CHECKIN_2026-05-30_END -->

# 2026-05-29
<!-- DAILY_CHECKIN_2026-05-29_START -->









今天更加深入的了解了MCP这个协议

MCP Client：MCP 的执行端，即支持MCP的Agent本身

MCP Server：MCP 的服务端，为Agent提供工具
<!-- DAILY_CHECKIN_2026-05-29_END -->

# 2026-05-28
<!-- DAILY_CHECKIN_2026-05-28_START -->










今天注意到MCP在各个文档中出现，一次两次出现可能是特定术语，几乎动不动就出现或许就是行业共识了，必须得了解一下。

结果，AI返回的结果完全不是人话，不知所云。

最后深思一下，或许这个MCP就有点像一个对API的标准，比如把这个API什么的，做成标准的形式，让LLM可以根据这个已知的标准进行处理，调用工具，而不是一家一套规矩，LLM也不知道将要返回的东西是什么样的，全都靠猜。

至于为什么把MCP评价为**AI领域的USB-C**呢，我是这么认为的，插头是一样的（有标准、有规范、大小一致），才能给AI充好电
<!-- DAILY_CHECKIN_2026-05-28_END -->

# 2026-05-27
<!-- DAILY_CHECKIN_2026-05-27_START -->











# 提示词工程学习

翻译阅读整理学习项目andrej-karpathy-skills和superpowers

* * *

以下是andrej-karpathy-skills的CLAUDE.md和Examples的翻译

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

> 本文旨在减少常见 LLM 编码错误的行为准则。根据需要与项目特定说明合并。

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

> **权衡取舍：** 这些准则偏重谨慎而非速度。对于琐碎任务，自行判断。

## 1\. Think Before Coding (编码前先思考)

**Don't assume. Don't hide confusion. Surface tradeoffs.**

> **不要假设，不要隐藏困惑，请揭示权衡利弊。**

Before implementing:

-   State your assumptions explicitly. If uncertain, ask.
    
-   If multiple interpretations exist, present them - don't pick silently.
    
-   If a simpler approach exists, say so. Push back when warranted.
    
-   If something is unclear, stop. Name what's confusing. Ask.
    
    > 在实施前：  
    > 明确陈述你的假设。如果不确定，请提问。  
    > 如果存在多种解释，请列出来——不要默默地自行选择。  
    > 如果存在更简单的方法，说出来，必要时提出反对。  
    > 如果有不清楚的地方，Stop。请指出困惑之处，问一问。
    

## 2\. Simplicity First (简洁优先)

**Minimum code that solves the problem. Nothing speculative.**

> **请最小化解决问题所需的代码，不要写任何推测性内容。**

-   No features beyond what was asked.
    
-   No abstractions for single-use code.
    
-   No "flexibility" or "configurability" that wasn't requested.
    
-   No error handling for impossible scenarios.
    
-   If you write 200 lines and it could be 50, rewrite it.
    
    > 不要加没做要求的功能。  
    > 不要把一次性代码搞得太抽象和复杂。  
    > 不添加未要求的“灵活性”或“可配置性”。  
    > 不对不可能发生的场景做错误处理。  
    > 如果写了 200 行但 50 行就能搞定，请你重写。
    

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

> 请问问你自己：“一个资深的工程师会说这过于复杂吗？”如果是，简化。

## 3\. Surgical Changes (外科手术式修改)

**Touch only what you must. Clean up only your own mess.**

> **仅触碰必须修改的地方，只清理自己造成的混乱。**

When editing existing code:

-   Don't "improve" adjacent code, comments, or formatting.
    
-   Don't refactor things that aren't broken.
    
-   Match existing style, even if you'd do it differently.
    
-   If you notice unrelated dead code, mention it - don't delete it.
    
    > 在编辑现有代码时：  
    > 不要“改进”相邻的代码、注释或格式。  
    > 不要重构没有损坏的东西。  
    > 即使你会用各种各样的发放，请匹配现有风格编写代码。  
    > 如果你注意到无关的死代码，先提出来，但不要删除它。
    

When your changes create orphans:

-   Remove imports/variables/functions that YOUR changes made unused.
    
-   Don't remove pre-existing dead code unless asked.
    
    > 当你的修改造成了孤立项：  
    > 去掉那些由于你的修改而死掉的导入/变量/函数。  
    > 若无要求，请不要移除先前存在的死代码。
    

The test: Every changed line should trace directly to the user's request.

## 4\. Goal-Driven Execution (目标驱动执行)

**Define success criteria. Loop until verified.**

> **定义成功的标准，循环迭代直到验证通过。**

Transform tasks into verifiable goals:

-   "Add validation" → "Write tests for invalid inputs, then make them pass"
    
-   "Fix the bug" → "Write a test that reproduces it, then make it pass"
    
-   "Refactor X" → "Ensure tests pass before and after"
    
    > 将任务转化为可验证的目标：  
    > “添加验证” → “为无效输入编写测试，然后让它们通过”  
    > “修复错误” → “编写一个能复现该错误的测试，然后让它通过”  
    > “重构 X” → “确保重构前后测试均通过”
    

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

> 对于多步骤任务，给出简要计划：
> 
> ```
> 1. [步骤] → 验证: [检查项]
> 2. [步骤] → 验证: [检查项]
> 3. [步骤] → 验证: [检查项]
> ```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

> 强有力的成功标准让你能独立循环迭代；而薄弱的标准（比如“让它能运行”）则需要不断阐明、澄清。

* * *

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

> **这些准则生效的标志是：** 差异比较中不必要的改动更少、因过度复杂而重写的情况更少，以及在实现之前就提出澄清性问题，而不是在犯错误之后。

# Examples

Real-world code examples demonstrating the four principles. Each example shows what LLMs commonly do wrong and how to fix it.

> 下面是四条原则的真实代码案例，每个例子都反映 LLM 常犯的错，以及怎么改才对。

* * *

## 1\. Think Before Coding

### Example 1: Hidden Assumptions（藏着没说出来的假设）

**User Request:** "Add a feature to export user data"

> **用户需求：** “加个导出用户数据的功能”

**❌ What LLMs Do (Wrong Assumptions)**

> ❌ LLM 常干的（错误假设）

```python
def export_users(format='json'):
    """Export all users to a file."""
    """导出所有用户到文件。"""
    users = User.query.all()
    
    if format == 'json':
        with open('users.json', 'w') as f:
            json.dump([u.to_dict() for u in users], f)
    elif format == 'csv':
        with open('users.csv', 'w') as f:
            writer = csv.DictWriter(f, fieldnames=['id', 'email', 'name'])
            writer.writeheader()
            writer.writerows([u.to_dict() for u in users])
    
    return f"Exported {len(users)} users"
```

**Problems:**

-   Assumed it should export ALL users (what about pagination? privacy?)
    
-   Assumed file location without asking
    
-   Assumed which fields to include
    
-   Assumed CSV fieldnames without checking actual data structure
    
    > **Problems**：  
    > 假设他应该默认导出全部用户（分页呢？隐私呢？）  
    > 假设文件路径直接写死，而不做询问  
    > 假设的要包含哪些字段  
    > 假设的CSV 的字段名，根本没检查真实的数据结构
    

**✅ What Should Happen (Surface Assumptions)**

> ✅ 应该怎么做（把假设摊出来）

```
Before implementing, I need to clarify:

1. **Scope**: Export all users or filtered subset? (privacy implications)
2. **Format**: You mentioned "export" - did you mean:
   - Download file in browser?
   - Background job with email notification?
   - API endpoint returning data?
3. **Fields**: Which user fields? (some might be sensitive)
4. **Volume**: How many users typically? (affects approach)

Simplest approach: Add an API endpoint that returns paginated JSON.
Would need more info for file-based exports.

What's your preference?
```

> **✅ 应该怎么做（把假设摊出来）**
> 
> ```bash
> 动手之前，我需要先搞清楚：
> 
> 1. **范围**：是导出全部用户还是按条件过滤？（涉及隐私）
> 2. **形式**：你说的“导出”，具体指：
>    - 浏览器里直接下载文件？
>    - 后台任务跑完发邮件通知？
>    - 提供一个 API 端点返回数据？
> 3. **字段**：要哪些用户字段？（有些可能是敏感信息）
> 4. **数据量**：大概有多少用户？（决定技术方案）
>    
> 最简单的方案：加一个 API 端点，返回分页的 JSON。
> 如果需要文件导出，得再给点信息。
> 
> 你更倾向于哪种？
> ```

### Example 2: Multiple Interpretations（多重理解）

**User Request:** "Make the search faster"

> **用户需求：** “让搜索快一点”

**❌ What LLMs Do (Pick Silently)**

> ❌ LLM 常干的（默默选择）

```python
# Adds caching, database indexes, and async processing
# without asking which "faster" matters
# 不问问是怎么快就开始加缓存、数据库索引、异步处理
@lru_cache(maxsize=1000)
async def search(query: str) -> List[Result]:
    # ... 200 lines of optimization code
```

**✅ What Should Happen**

```bash
"Make the search faster" could mean:
# “让搜索快一点” 可能有几种意思：

1. **Faster response time** (< 100ms instead of 500ms)
   # **响应速度更快**（比如从 500ms 降到 100ms 以内）
   - Add database indexes                 # 加数据库索引
   - Cache frequent queries               # 缓存高频查询
   - Estimated effort: 2 hours            # 预估工作量：2 小时

2. **Handle more concurrent searches** (throughput)
   # **能扛更高并发**（吞吐量）
   - Add async/await                      # 改成 async/await
   - Connection pooling                   # 上连接池
   - Estimated effort: 4 hours            # 预估工作量：4 小时

2. **Faster perceived speed** (UX)
   # **用户感觉更快**（体验上）
   - Show partial results immediately     # 立刻出部分结果
   - Progressive loading                  # 渐进式加载
   - Estimated effort: 3 hours            # 预估工作量：3 小时

Current search takes ~500ms for typical queries.  # 目前典型查询大约 500ms
Which aspect matters most for your use case?      # 你先说哪种“快”最要紧？
```

* * *

## 2\. Simplicity First

### Example 1: Over-abstraction（过度抽象）

**User Request:** "Add a function to calculate discount"

> **用户需求：** “加个算折扣的函数”

**❌ What LLMs Do (Overengineered)**

> ❌ LLM 常干的（过度设计）

```python
from abc import ABC, abstractmethod
from enum import Enum
from typing import Protocol, Union
from dataclasses import dataclass

class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, amount: float) -> float:
        pass

class PercentageDiscount(DiscountStrategy):
    def __init__(self, percentage: float):
        self.percentage = percentage
        
    def calculate(self, amount: float) -> float:
        return amount * (self.percentage / 100)

class FixedDiscount(DiscountStrategy):
    def __init__(self, fixed_amount: float):
        self.fixed_amount = fixed_amount

    def calculate(self, amount: float) -> float:
        return min(self.fixed_amount, amount)

@dataclass
class DiscountConfig:
    strategy: DiscountStrategy
    min_purchase: float = 0.0
    max_discount: float = float('inf')

  

class DiscountCalculator:
    def __init__(self, config: DiscountConfig):
        self.config = config

    def apply_discount(self, amount: float) -> float:
        if amount < self.config.min_purchase:
            return 0
        discount = self.config.strategy.calculate(amount)
        return min(discount, self.config.max_discount)

# Usage requires 30+ lines of setup for a simple calculation
# 就为了算个折扣，调用前还得写 30 多行准备代码
```

**✅ What Should Happen (Simple)**

```python
def calculate_discount(amount: float, percent: float) -> float:
    """Calculate discount amount. percent should be 0-100."""
    """计算折扣金额。percent 取值 0 到 100。"""
    return amount * (percent / 100)

# Usage（用起来）
discount = calculate_discount(100.0, 10.0)  # $10 off（用起来）
```

**When to add complexity:** Only when you actually need multiple discount types. If that requirement comes later, refactor then.

> **什么时候再加复杂的东西？** 等到真的需要支持多种折扣类型再说。那时再重构，不迟。

### Example 2: Speculative Features（臆想的需求）

**User Request:** "Save user preferences to database"

> **用户需求：** “把用户偏好存到数据库”

**❌ What LLMs Do (Unnecessary Features)**

> ❌ LLM 常干的（没必要加的功能）

```python
class PreferenceManager:
    def __init__(self, db, cache=None, validator=None):
        self.db = db
        self.cache = cache or InMemoryCache()
        self.validator = validator or DefaultValidator()

    def save(self, user_id: int, prefs: dict,
             merge: bool = True,
             validate: bool = True,
             notify: bool = False) -> bool:
        """Save preferences with optional merging, validation, and notifications."""
        """保存偏好，可选合并、校验、通知。"""

        if validate:
            errors = self.validator.validate(prefs)
            if errors:
                raise ValidationError(errors)

        existing = self.get(user_id) if merge else {}

        if merge:
            existing.update(prefs)
            prefs = existing

        self.db.execute(
            "UPDATE users SET preferences = ? WHERE id = ?",
            (json.dumps(prefs), user_id)
        )

        if self.cache:
            self.cache.set(f"prefs:{user_id}", prefs)

        if notify:
            self.notify_preference_change(user_id, prefs)

        return True

    def notify_preference_change(self, user_id: int, prefs: dict):
        # Another 30 lines for a feature nobody asked for
        # 又写了 30 行，根本没人要求的代码
        pass
```

**✅ What Should Happen (Just What Was Asked)**

> ✅ 应该怎么做（只做提的需求）

```python
def save_preferences(db, user_id: int, preferences: dict):
    """Save user preferences to database."""
    """把用户偏好存进数据库。"""
    db.execute(
        "UPDATE users SET preferences = ? WHERE id = ?",
        (json.dumps(preferences), user_id)
    )

```

**Add later if needed:** Caching (when performance matters), validation (when bad data appears), merging (when requirement emerges).

> **将来真有需要再加：** 缓存（性能表现不行了再说），校验（总有异常数据进去再说），合并（真出现这个需求再说）。

* * *

## 3\. Surgical Changes

### Example 1: Drive-by Refactoring（顺手重构）

**User Request:** "Fix the bug where empty emails crash the validator"

> **用户需求：** “修一下空邮箱把校验器搞崩的 bug”

**❌ What LLMs Do (Too Much)**

> ❌ LLM 常干的（改得太多）

```diff
  def validate_user(user_data):
-     # Check email format
-     # 检查邮箱格式
-     if not user_data.get('email'):
+     """Validate user data."""
+     """验证用户数据。"""
+     email = user_data.get('email', '').strip()
+    
+     # Validate email
+     # 验证邮箱
+     if not email:
          raise ValueError("Email required")
-    
-     # Basic email validation
-     # 基本邮箱校验
-     if '@' not in user_data['email']:
+     if '@' not in email or '.' not in email.split('@')[1]:
          raise ValueError("Invalid email")

-     # Check username
-     # 检查用户名
-     if not user_data.get('username'):
+     # Validate username
+     # 验证用户名
+     username = user_data.get('username', '').strip()
+     if not username:
          raise ValueError("Username required")
+     if len(username) < 3:
+         raise ValueError("Username too short")
+     if not username.isalnum():
+         raise ValueError("Username must be alphanumeric")
      return True
```

**Problems:**

-   "Improved" email validation beyond the bug fix
    
-   Added username validation nobody asked for
    
-   Changed comments
    
-   Added docstring
    
    > Problems  
    > 趁改 bug 顺便“加强”了邮箱校验逻辑  
    > 加上了没人要求的用户名校验  
    > 改了一堆注释  
    > 加了一堆文档字符串
    

**✅ What Should Happen (Surgical)**

````diff
  def validate_user(user_data):
      # Check email format
      # 检查邮箱格式

-     if not user_data.get('email'):
+     email = user_data.get('email', '')
+     if not email or not email.strip():
          raise ValueError("Email required")

      # Basic email validation
      # 基本邮箱校验
-     if '@' not in user_data['email']:
+     if '@' not in email:
          raise ValueError("Invalid email")

      # Check username
      # 检查用户名
      if not user_data.get('username'):
          raise ValueError("Username required")

      return True
  ```
**Only changed:** The specific lines that fix empty email handling.
> **只改了：** 直接修空邮箱问题的那几行。

### Example 2: Style Drift（风格漂移）

**User Request:** "Add logging to the upload function"
> **用户需求：** “给上传函数加点日志”

**❌ What LLMs Do (Reformat Everything)**
> ❌ LLM 常干的（把所有内容格式化）

```diff
- def upload_file(file_path, destination):
+ def upload_file(file_path: str, destination: str) -> bool:
+     """Upload file to destination with logging."""
+     """上传文件到目标地址，带日志记录。"""
+     logger.info(f"Uploading {file_path} to {destination}")
+    
      try:
-         with open(file_path, 'rb') as f:
-             data = f.read()
-        
-         response = requests.post(destination, files={'file': data})
-        
-         if response.status_code == 200:
-             return True
-         else:
-             return False
+         with open(file_path, "rb") as f:
+             data = f.read()
+         response = requests.post(destination, files={"file": data})
+         success = response.status_code == 200
+        
+         if success:
+             logger.info(f"Upload successful: {file_path}")
+         else:
+             logger.error(f"Upload failed: {file_path}, status={response.status_code}")
+        
+         return success
      except Exception as e:
-         print(f"Error: {e}")
+         logger.exception(f"Upload error for {file_path}: {e}")
          return False
````

**Problems:**

-   Changed quote style ('' to "")
    
-   Added type hints nobody asked for
    
-   Added docstring
    
-   Reformatted whitespace
    
-   Changed boolean return logic
    
    > Problems:  
    > 把单引号全换成了双引号  
    > 自作主张加了类型注解  
    > 加了文档字符串  
    > 重新排版了空格  
    > 把返回布尔的逻辑也“优化”了
    

**✅ What Should Happen (Match Existing Style)**

```diff
+ import logging
+
+ logger = logging.getLogger(__name__)
+
  def upload_file(file_path, destination):
+     logger.info(f'Starting upload: {file_path}')
      try:
          with open(file_path, 'rb') as f:
              data = f.read()
    
          response = requests.post(destination, files={'file': data})

          if response.status_code == 200:
+             logger.info(f'Upload successful: {file_path}')
              return True
          else:
+             logger.error(f'Upload failed: {file_path}, status={response.status_code}')
              return False
      except Exception as e:
-         print(f"Error: {e}")
+         logger.exception(f'Upload error: {file_path}')
          return False
```

**Matched:** Single quotes, no type hints, existing boolean pattern, spacing style.

> **保持一致：** 单引号，不加类型注解，保留原有布尔返回写法，不改空格。

* * *

## 4\. Goal-Driven Execution

### Example 1: Vague vs. Verifiable（### 模糊 vs. 可验证）

**User Request:** "Fix the authentication system"

> **用户需求：** “修一下认证系统”

**❌ What LLMs Do (Vague Approach)**

> ❌ LLM 常干的（含糊的做法）

```bash
I\'ll fix the authentication system by:       # 我来修认证系统，做法：
1. Reviewing the code                         # 先看一遍代码
2. Identifying issues                         # 找出问题
3. Making improvements                        # 做优化
4. Testing the changes                        # 测一测

[Proceeds to make changes without clear success criteria]
# [然后就动手改，成功标准完全没定义]
```

**✅ What Should Happen (Verifiable Goals)**

> ✅ 应该怎么做（有可验证的目标）

```bash
To "fix authentication," I need to define success criteria.
# 要“修认证”，得先定个成功标准。

What specific issue are we solving?
# 咱们到底解决什么具体问题？
  
If the issue is "users stay logged in after password change":
# 如果问题是“用户改密码后，旧会话还能继续用”：
  
Plan:
1. Write test: Change password → verify old session invalidated
   Verify: Test fails (reproduces bug)
# 写测试：改密码 → 验证旧会话已失效
# 验证：测试失败（复现出 bug）
  
2. Implement: Invalidate sessions on password change
   Verify: Test passes
# 实现：改密码时，让已有会话失效
# 验证：测试通过
  
3. Check edge cases: Multiple active sessions, concurrent changes
   Verify: Additional tests pass
# 检查边界情况：多处同时登录、并发改密码
# 验证：新增测试通过

4. Verify no regression: Existing auth tests still pass
   Verify: Full test suite green
# 确保没搞坏别的：已有的认证测试仍然通过
# 验证：全量测试绿条

Current test coverage for auth: [shows coverage]
# 目前认证部分的测试覆盖率：[展示覆盖率]

What's the specific auth issue you're seeing?
# 你碰到的具体认证问题是哪个？
```

### Example 2: Multi-Step with Verification（多步骤并逐步验证）

**User Request:** "Add rate limiting to the API"

> **用户需求：** “给 API 加限流”

**❌ What LLMs Do (All at Once)**

> ❌ LLM 常干的（一口气全上）

```python
# Implements full rate limiting with Redis, multiple strategies,
# configuration system, and monitoring in one 300-line commit
# No clear verification steps

# 用 Redis 实现全功能限流，多策略，配置系统，监控，一次提交300行，没有明确的验证步骤
```

**✅ What Should Happen (Incremental with Verification)**

> ✅ 应该怎么做（增量 + 验证）

```
Plan for rate limiting:

1. Add basic in-memory rate limiting (single endpoint)
   Verify:
   - Test: 100 requests → first 10 succeed, rest get 429
   - Manual: curl endpoint 11 times, see rate limit error

2. Extract to middleware (apply to all endpoints)
   Verify:
   - Test: Rate limits apply to /users and /posts
   - Existing endpoint tests still pass

3. Add Redis backend (for multi-server)
   Verify:
   - Test: Rate limit persists across app restarts
   - Test: Two app instances share rate limit counter

4. Add configuration (rates per endpoint)
   Verify:
   - Test: /search allows 10/min, /users allows 100/min
   - Config file parsed correctly

Each step is independently verifiable and deployable.
Start with step 1?


加限流的计划：

1. 先加个最基础的内存限流（只对一个端点）
   验证：
   - 测试：发 100 个请求，前 10 个成功，后面的返回 429
   - 手动：curl 连续打 11 次，能看到限流报错

2. 抽象成中间件（应用到所有端点）
   验证：
   - 测试：/users 和 /posts 都受限制
   - 已有的端点测试不受影响

3. 切到 Redis 后端（为了多服务器共享）
   验证：
   - 测试：重启应用后限流计数还在
   - 测试：两个应用实例共享限流计数器

4. 加可配置（不同端点不同速率）
   验证：
   - 测试：/search 每分钟 10 次，/users 每分钟 100 次
   - 配置文件解析正常

每一步都可以独立验证和部署。
要不先从第 1 步开始？
```

### Example 3: Test-First Verification（测试先行验证）

**User Request:** "The sorting breaks when there are duplicate scores"

> **用户需求：** “有重复分数的时候，排序就乱了”

**❌ What LLMs Do (Fix Without Reproducing)**

> ❌ LLM 常干的（不复现就改）

```python
# Immediately changes sort logic without confirming the bug
# 直接改排序逻辑，也不先确认 bug
def sort_scores(scores):
    return sorted(scores, key=lambda x: (-x['score'], x['name']))
```

**✅ What Should Happen (Reproduce First)**

> ✅ 应该怎么做（先复现）

```python
# 1. First, write a test that reproduces the issue
# 1. 先写个测试把问题复现出来
def test_sort_with_duplicate_scores():
    """Test sorting when multiple items have same score."""
    """有相同分数时的排序测试。"""
    scores = [
        {'name': 'Alice', 'score': 100},
        {'name': 'Bob', 'score': 100},
        {'name': 'Charlie', 'score': 90},
    ]

    result = sort_scores(scores)

    # The bug: order is non-deterministic for duplicates
    # bug 表现：同分情况下顺序不固定
    # Run this test multiple times, it should be consistent
    # 多跑几次这个测试，结果应该一致
    assert result[0]['score'] == 100
    assert result[1]['score'] == 100
    assert result[2]['score'] == 90

# Verify: Run test 10 times → fails with inconsistent ordering
# 验证：跑 10 次测试 → 因为顺序不稳定而失败

# 2. Now fix with stable sort
# 2. 现在改成稳定排序
def sort_scores(scores):
    """Sort by score descending, then name ascending for ties."""
    """按分数降序排列，同分时按名字升序。"""
    return sorted(scores, key=lambda x: (-x['score'], x['name']))

# Verify: Test passes consistently
# 验证：测试稳定通过
```

* * *

## Anti-Patterns Summary

| Principle | Anti-Pattern | Fix |
| --- | --- | --- |
| Think Before Coding | Silently assumes file format, fields, scope | List assumptions explicitly, ask for clarification |
| Simplicity First | Strategy pattern for single discount calculation | One function until complexity is actually needed |
| Surgical Changes | Reformats quotes, adds type hints while fixing bug | Only change lines that fix the reported issue |
| Goal-Driven | "I'll review and improve the code" | "Write test for bug X → make it pass → verify no regressions" |

> 原则违反速查表

| 原则 | 违反形式 | 改正 |
| --- | --- | --- |
| 先想再做 | 闷头假设文件格式、字段、范围 | 把假设列清楚，该问就问 |
| 简洁优先 | 为一个折扣计算，写出整个策略模式 | 一个函数搞定，等真复杂了再改 |
| 手术式修改 | 修 bug 时顺手改引号、加类型标注 | 只改跟 bug 有关的那几行 |
| 目标驱动 | “我会过一遍代码并改进” | “写测试复现 bug → 改到测试通过 → 确认没有regressions” |

## Key Insight

The "overcomplicated" examples aren't obviously wrong—they follow design patterns and best practices. The problem is **timing**: they add complexity before it's needed, which:

> 那些“过度复杂”的例子乍一看并没错——它们遵循设计模式和最佳实践。  
> 问题在于**时机**：需求还没到，就把复杂度加上了。后果就是：

-   Makes code harder to understand
    
-   Introduces more bugs
    
-   Takes longer to implement
    
-   Harder to test
    

> 代码更难懂  
> 引出更多 bug  
> 开发时间更长  
> 测试更麻烦

The "simple" versions are:

-   Easier to understand
    
-   Faster to implement
    
-   Easier to test
    
-   Can be refactored later when complexity is actually needed
    
    > 而“简洁”的版本是：  
    > 更容易看懂  
    > 实现更快  
    > 测试更简单  
    > 等以后真正需要复杂的时候还能再重构
    
    **Good code is code that solves today's problem simply, not tomorrow's problem prematurely.**
    
    > **好代码就是简单解决今天的问题，而不是着急解决明天的问题。**
    

* * *

以下是andrej-karpathy-skills的README的翻译

# Superpowers

Superpowers is a complete software development methodology for your coding agents, built on top of a set of composable skills and some initial instructions that make sure your agent uses them.

> Superpowers 是一套完善的软件开发方法论，为你的coding agents构建在一组可组合的 Skills 和一些确保代理使用它们的初始指令之上。

## Quick start

Give your agent Superpowers: [Claude Code](#claude-code), [Codex CLI](#codex-cli), [Codex App](#codex-app), [Factory Droid](#factory-droid), [Gemini CLI](#gemini-cli), [OpenCode](#opencode), [Cursor](#cursor), [GitHub Copilot CLI](#github-copilot-cli).

> 为你的Agent赋予Superpowers：`Claude Code` `Codex CLI` `Codex App` `Factory Droid` `Gemini CLI` `OpenCode` `Cursor` `GitHub Copilot CLI`。

## How it works

It starts from the moment you fire up your coding agent. As soon as it sees that you're building something, it _doesn't_ just jump into trying to write code. Instead, it steps back and asks you what you're really trying to do.

> 它从你启动编程代理的那一刻起就开始了。一旦它发现你在构建某个东西，它_不会_直接跳进去写代码，而是会先退一步，问清楚你真正想做的是什么。

Once it's teased a spec out of the conversation, it shows it to you in chunks short enough to actually read and digest.

> 在对话中梳理清楚规划后，它会分段展示给你，每段短到你能真正阅读和消化。

After you've signed off on the design, your agent puts together an implementation plan that's clear enough for an enthusiastic junior engineer with poor taste, no judgement, no project context, and an aversion to testing to follow. It emphasizes true red/green TDD, YAGNI (You Aren't Gonna Need It), and DRY.

> 在你确认它给出的设计之后，你的Agent就会制定一个实现计划，这个计划清晰到足以让一位热情但品味糟糕、没有判断力、缺乏项目背景且讨厌测试的初级工程师也能照着执行。它强调真正的红/绿 TDD、YAGNI（你不会需要它）以及 DRY 原则。

```python
# 红/绿 TDD：TDD 即 Test-Driven Development 测试驱动开发。
#           红/绿 TDD 即红-绿-重构（Red-Green-Refactor）循环
# 
# DRY 原则： Don't Repeat Yourself 原则，不要写重复代码，而是一次编写，到处复用，到处生效
```

Next up, once you say "go", it launches a _subagent-driven-development_ process, having agents work through each engineering task, inspecting and reviewing their work, and continuing forward. It's not uncommon for Claude to be able to work autonomously for a couple hours at a time without deviating from the plan you put together.

> 接下来，当你说“开始”后，它会启动一个_子代理驱动开发_（subagent-driven-development）流程，让代理们处理每一项工程任务，检查并审查它们的工作，然后继续向前推进。让Claude 能够不偏离制定计划地连续自主工作一两个小时，也并非罕见之事。

There's a bunch more to it, but that's the core of the system. And because the skills trigger automatically, you don't need to do anything special. Your coding agent just has Superpowers.

> 除此之外还有很多细节，但这就已经是我们系统的核心了，同时，由于 Skills 是自动触发的，你不需要额外做任何事情，你的 code agent 能够使用 Superpowers 了。

## Sponsorship

If Superpowers has helped you do stuff that makes money and you are so inclined, I'd greatly appreciate it if you'd consider [sponsoring my opensource work](https://github.com/sponsors/obra).

> 如果 Superpowers 帮你完成了能赚钱的事，并且你也有此心意，我将非常感谢你能考虑[赞助我的开源工作](https://github.com/sponsors/obra)。

Thanks! - Jesse

## Installation

Installation differs by harness. If you use more than one, install Superpowers separately for each one.

> 安装方式因编程平台而异。如果你同时使用多种AI编程平台，那么只能麻烦您分别针对每一种单独安装 Superpowers。

### Claude Code

Superpowers is available via the [official Claude plugin marketplace](https://claude.com/plugins/superpowers)

> Superpowers 已上架 [Claude 官方插件市场](https://claude.com/plugins/superpowers)

Official Marketplace

-   Install the plugin from Anthropic's official marketplace:
    
-   (从 Anthropic 的官方市场安装插件)
    
    ```bash
    /plugin install superpowers@claude-plugins-official
    ```
    

Superpowers Marketplace

The Superpowers marketplace provides Superpowers and some other related plugins for Claude Code.

> Superpowers 在ClaudeCode注册了自己的市场，为 Claude Code 提供 Superpowers 及其他一些相关插件。

-   Register the marketplace:
    
    ```bash
    /plugin marketplace add obra/superpowers-marketplace
    ```
    
-   Install the plugin from this marketplace:
    
    ```bash
    /plugin install superpowers@superpowers-marketplace
    ```
    

> 由于译者本人主要使用Claude Code，故以下平台的内容暂时不译

### Codex CLI

Superpowers is available via the [official Codex plugin marketplace](https://github.com/openai/plugins).

-   Open the plugin search interface:
    
    ```bash
    /plugins
    ```
    
-   Search for Superpowers:
    
    ```bash
    superpowers
    ```
    
-   Select `Install Plugin`.
    

### Codex App

Superpowers is available via the [official Codex plugin marketplace](https://github.com/openai/plugins).

-   In the Codex app, click on Plugins in the sidebar.
    
-   You should see `Superpowers` in the Coding section.
    
-   Click the `+` next to Superpowers and follow the prompts.
    

### Factory Droid

-   Register the marketplace:
    
    ```bash
    droid plugin marketplace add https://github.com/obra/superpowers
    ```
    
-   Install the plugin:
    
    ```bash
    droid plugin install superpowers@superpowers
    ```
    

### Gemini CLI

-   Install the extension:
    
    ```bash
    gemini extensions install https://github.com/obra/superpowers
    ```
    
-   Update later:
    
    ```bash
    gemini extensions update superpowers
    ```
    

### OpenCode

OpenCode uses its own plugin install; install Superpowers separately even if you  
already use it in another harness.

-   Tell OpenCode:
    
    ```
    Fetch and follow instructions from https://raw.githubusercontent.com/obra/superpowers/refs/heads/main/.opencode/INSTALL.md
    ```
    
-   Detailed docs: docs/README.opencode.md
    

### Cursor

-   In Cursor Agent chat, install from marketplace:
    
    ```text
    /add-plugin superpowers
    ```
    
-   Or search for "superpowers" in the plugin marketplace.
    

### GitHub Copilot CLI

-   Register the marketplace:
    
    ```bash
    copilot plugin marketplace add obra/superpowers-marketplace
    ```
    
-   Install the plugin:
    
    ```bash
    copilot plugin install superpowers@superpowers-marketplace
    ```
    

## The Basic Workflow

1.  **brainstorming** - Activates before writing code. Refines rough ideas through questions, explores alternatives, presents design in sections for validation. Saves design document.
    
    > **头脑风暴**：  
    > 在编写代码前激活。  
    > 通过提问提炼粗略想法，探索替代方案，分段呈现设计以供验证。  
    > 保存设计文档。
    
2.  **using-git-worktrees** - Activates after design approval. Creates isolated workspace on new branch, runs project setup, verifies clean test baseline.
    
    > **使用 git 工作树**  
    > 在设计批准后激活。  
    > 在新分支上创建隔离工作区，运行项目设置，验证干净的测试基线。
    
3.  **writing-plans** - Activates with approved design. Breaks work into bite-sized tasks (2-5 minutes each). Every task has exact file paths, complete code, verification steps.
    
    > **制定计划**  
    > 在设计确定后激活。  
    > 将工作拆分为细粒度任务（每个 2-5 分钟）。  
    > 每个任务包含确切的文件路径、完整的代码和验证步骤。
    
4.  **subagent-driven-development** or **executing-plans** - Activates with plan. Dispatches fresh subagent per task with two-stage review (spec compliance, then code quality), or executes in batches with human checkpoints.
    
    > **子代理驱动开发/执行计划**  
    > 有计划后激活。  
    > 为每个任务分派全新的子代理，并进行两阶段审查  
    > _先检查是否符合规格，再检查代码质量_；  
    > 或者分批执行并设置人工检查点。
    
5.  **test-driven-development** - Activates during implementation. Enforces RED-GREEN-REFACTOR: write failing test, watch it fail, write minimal code, watch it pass, commit. Deletes code written before tests.
    
    > **测试驱动开发**  
    > 在实现过程中激活。  
    > 强制执行 RED-GREEN-REFACTOR：  
    > _写失败的测试，看着它失败，写最小量代码，看着它通过，提交_。  
    > 删除在测试之前编写的代码。
    
6.  **requesting-code-review** - Activates between tasks. Reviews against plan, reports issues by severity. Critical issues block progress.
    
    > **申请代码审查**  
    > 在任务之间激活。  
    > 对照计划进行审查，按严重程度报告问题。  
    > 严重问题将阻止继续推进。
    
7.  **finishing-a-development-branch** - Activates when tasks complete. Verifies tests, presents options (merge/PR/keep/discard), cleans up worktree.
    
    > **完成开发分支**  
    > 任务完成后激活。  
    > 验证测试，提供选项（合并/PR/保留/丢弃），清理 worktree。
    

**The agent checks for relevant skills before any task.** Mandatory workflows, not suggestions.

> **代理在任何任务前都会检查相关的 Skills。** 这是强制性工作流，而非建议。

## What's Inside

### Skills Library

**Testing（测试）**

-   **test-driven-development** - RED-GREEN-REFACTOR cycle (includes testing anti-patterns reference)
    
    >  RED-GREEN-REFACTOR 循环（内含测试反模式参考）
    

**Debugging（调试）**

-   **systematic-debugging** - 4-phase root cause process (includes root-cause-tracing, defense-in-depth, condition-based-waiting techniques)
    
    > 四阶段根因分析流程（内含根因追踪、纵深防御、基于条件的等待等技术）
    
-   **verification-before-completion** - Ensure it's actually fixed
    
    > 确保问题确实被修复
    

**Collaboration（协作）**

-   **brainstorming** - Socratic design refinement
    
    > 苏格拉底式设计提炼
    
-   **writing-plans** - Detailed implementation plans
    
    > 详细的实现计划
    
-   **executing-plans** - Batch execution with checkpoints
    
    > 带可审核存档的分批执行
    
-   **dispatching-parallel-agents** - Concurrent subagent workflows
    
    > 并行子代理工作流
    
-   **requesting-code-review** - Pre-review checklist
    
    > 审查前检查清单
    
-   **receiving-code-review** - Responding to feedback
    
    > 响应代码审查反馈
    
-   **using-git-worktrees** - Parallel development branches
    
    > 并行开发分支
    
-   **finishing-a-development-branch** - Merge/PR decision workflow
    
    > 合并/PR 决策工作流
    
-   **subagent-driven-development** - Fast iteration with two-stage review (spec compliance, then code quality)
    
    > 快速迭代与两阶段审查（先检查规格符合性，再检查代码质量）
    

**Meta（元技能）**

-   **writing-skills** - Create new skills following best practices (includes testing methodology)
    
    > 遵循最佳实践来创建新的 Skills（内含测试方法论）
    
-   **using-superpowers** - Introduction to the skills system
    
    > Skills 的系统介绍
    

## Philosophy

-   **Test-Driven Development** - Write tests first, always
    
-   **Systematic over ad-hoc** - Process over guessing
    
-   **Complexity reduction** - Simplicity as primary goal
    
-   **Evidence over claims** - Verify before declaring success
    

> 开发哲学

```
1. **测试驱动开发** - 始终先写测试
2. **系统化优于临时应付** - 流程优于猜测
3. **降低复杂性** - 简单性是首要目标
4. **证据优于声明** - 验证之后再宣布成功
```

Read [the original release announcement](https://blog.fsck.com/2025/10/09/superpowers/).

## Contributing

The general contribution process for Superpowers is below. Keep in mind that we don't generally accept contributions of new skills and that any updates to skills must work across all of the coding agents we support.

1.  Fork the repository
    
2.  Switch to the 'dev' branch
    
3.  Create a branch for your work
    
4.  Follow the `writing-skills` skill for creating and testing new and modified skills
    
5.  Submit a PR, being sure to fill in the pull request template.
    

See `skills/writing-skills/SKILL.md` for the complete guide.

## Updating

Superpowers updates are somewhat coding-agent dependent, but are often automatic.

## License

MIT License - see LICENSE file for details

## Community

Superpowers is built by [Jesse Vincent](https://blog.fsck.com) and the rest of the folks at [Prime Radiant](https://primeradiant.com).

-   **Discord**: [Join us](https://discord.gg/35wsABTejz) for community support, questions, and sharing what you're building with Superpowers
    
-   **Issues**: [https://github.com/obra/superpowers/issues](https://github.com/obra/superpowers/issues)
    
-   **Release announcements**: [Sign up](https://primeradiant.com/superpowers/) to get notified about new versions
<!-- DAILY_CHECKIN_2026-05-27_END -->

# 2026-05-26
<!-- DAILY_CHECKIN_2026-05-26_START -->












# claude code项目结构分析

文件夹 PATH 列表

```bash
.claude.json          # 登录会话、MCP、缓存，自动生成，自动更新，已逐步废弃
.claude
	│ .last-cleanup   # 存储程序上次自动清理缓存的时间标记，用于管控清理周期
	|
	│ history.jsonl   # 按时间线记录所有prompt、时间戳、项目路径与会话 ID，仅存输入不存回复
	|
	├─backups/        # 对.claude.json的备份，也没什么大用
	│    .claude.json.backup.1779637949559
	│    ...
	│
	├─cache/
	│    changelog.md # claude code自身的更新日志
	|
	├─telemetry/      # 远端上报失败的死信队列，我们的配置非官方API，所以每条会话都上传失败
	|    1p_failed_events.<session-id>.<event-id>.json
	| 
	├─sessions/       # 存储着单次会话运行态快照
	|
	├─session-env/         # 启动时自动根据uuid创建一个当前会话的文件夹
	│  └─<session-uuid>/   # 存储当前会话环境变量、Shell状态、启动Hook等，通常为空
	|	
	| shell-snapshots/# Shell环境快照
	|
	├─file-history/        # file-history是ClaudeCode的文件编辑历史存档。
	│  └─<session-uuid>/   # 每个会话一个目录，由该会话的ID命名
	│       <file-hash>@v1 # 被编辑文件的第1版（file-hash是文件绝对路径，通过SHA-256计
	│       <file-hash>@v2 # 被编辑文件的第2版 算出的hash值，没改动一次都对源文件快照一次）
	|
	│ CLAUDE.md       # 系统提示词
	|
	│ settings.json   # 配置文件，参考https://code.claude.com/docs/zh-CN/settings
	|
	├─projects/
	|  └─<project>/
	|	   ├──memory/                 # 可配置该文件夹的默认位置，我已迁移至主目录
	|  	   |   ├── MEMORY.md          # 简洁索引，加载到每个会话
	|	   |   └── ...                # Claude 创建的任何其他主题文件
	|      | <UUID>.jsonl             # 单次对话的完整记录
	|  	   └──<UUID>/                 # 单词对话使用subagent和tools的完整记录
	|
	├─memory/
	|	├── MEMORY.md # 简洁索引，加载到每个会话
	|	└── ...       # Claude 创建的任何其他主题文件
	|
	├─skills/
	|  └─<name>/
	|	   ├── SKILL.md           # 必需 - 主要说明和导航
	|	   ├── template.md        # 可选 - Claude 要填写的模板
	|	   ├── examples/          # 可选 - 示例输出
	|	   │   └── sample.md
	|	   └── scripts/           # 可选 - Claude 可执行的脚本
	|		    └── validate.sh
	|
	├─tasks/
	| └── <task-list-uuid>/       # 每个任务列表一个 UUID 目录 
	|	  ├── 1.json              # 单个任务 
	|	  ├── 2.json 
	|     ├── ... 
	|	  ├── .lock               # 防并发写 
	|	  └── .highwatermark      # 下一个任务 ID
	|
	└─plugins/
	   │  known_marketplaces.json    # 本地记录你已添加的所有插件市场的注册表
	   │
	   └─marketplaces/ # 是插件市场的本地仓库目录，里面每个子目录就是一个市场的 git 仓库。
	       └─claude-plugins-official/# Anthropic 官方市场，同级也可以添加其他插件市场
	           │                     #git clone自anthropics/claude-plugins-official
	           │  .gitignore         # Git 忽略文件
	           │
	           │  README.md          # Claude Code 插件目录
	           │
	           ├─.claude-plugin/     # Claude Code 约定的市场标识目录
	           │     marketplace.json# 记录了该插件市场的所有插件的基本信息
	           │
	           ├─.git/   # 是任何git仓库都有的元数据目录，是git协议本身的数据存储层。
	           │  └─ ...
	           │
	           ├─.github/# 这个市场特有的CI/CD体系，自动完成更新,校验,扫描等工作的流水线
	           │  ├─policy/           # 记录对插件市场的审核准则以及审核结果的格式定义
	           │  │      prompt.md
	           │  │      schema.json
	           │  │
	           │  ├─workflows/        # 组成自动化流水线的workflows
	           │  |      ...
	           │  |
	           │  └─scripts/          # workflow 跑的具体脚本
	           │         discover_bumps.py
	           │         validate-frontmatter.ts
	           │
	           ├─plugins/ # Anthropic 自己维护的内部插件，包含所有的配置和源码
	           |  └─<name>
	           |     └─ ...
	           │
	           └─external_plugins # 第三方服务集成的外部插件，只包含轻量配置，不含核心源码
	              └─<name>
	                 └─ ...
```

其他更个性化的文件夹参考[探索 .claude 目录 - Claude Code Docs](https://code.claude.com/docs/zh-CN/claude-directory)按需取用
<!-- DAILY_CHECKIN_2026-05-26_END -->

# 2026-05-24
<!-- DAILY_CHECKIN_2026-05-24_START -->













今天几乎完整写完了我的Agent的顶层设计文档，参考了当前各种主流Agent的范式，做了很多关于个性化的调整和认为更合理的处理，也希望经过去敏感处理后开源出来有更多人看到，提提意见，一起完成技术实现。
<!-- DAILY_CHECKIN_2026-05-24_END -->

# 2026-05-23
<!-- DAILY_CHECKIN_2026-05-23_START -->














今天继续写项目文件，同时做了少量关于日历日程的Debug
<!-- DAILY_CHECKIN_2026-05-23_END -->

# 2026-05-22
<!-- DAILY_CHECKIN_2026-05-22_START -->















为Agent增加了撤回回滚、日历编辑功能
<!-- DAILY_CHECKIN_2026-05-22_END -->

# 2026-05-21
<!-- DAILY_CHECKIN_2026-05-21_START -->
















## 今日成果：

1.  思考科研方向，已经有了初步的想法
    
2.  调整自己的claudecode，使其对我而言更加便捷，增加自动加载保存聊天记录功能，方便回溯回顾和断连找回
    
3.  为Agent迭代做准备，阅读飞书开发者文档，写作自己的项目文件
<!-- DAILY_CHECKIN_2026-05-21_END -->

# 2026-05-20
<!-- DAILY_CHECKIN_2026-05-20_START -->

















````markdown
## 一、核心概念

以太坊是一个账户模型（Account-based model），不是 UTXO 模型。整个以太坊世界状态（World State）就是所有账户状态的集合，每个账户对应一个地址。

**地址格式**：`0x` + 40位十六进制 = 42个字符（20字节），例如 `0x06012c8cf97bead5deae237070f9587f8e7a266d`。

无论是 EOA 还是合约账户，地址格式完全一致，无法从地址本身判断账户类型。

---

## 二、两种账户类型

| 维度 | EOA（外部拥有账户） | Contract Account（合约账户） |
|------|------|------|
| 控制方式 | 私钥控制 | 代码逻辑控制 |
| 创建方式 | 生成密钥对（免费） | 部署智能合约（消耗 gas） |
| 能否发起交易 | 能 | 不能，只能被触发后响应 |
| 代码 | 无（CodeHash = keccak256("")） | 有（CodeHash = keccak256(bytecode)） |
| 存储 | 无（StorageRoot = 空树哈希） | 有（StorageRoot 存储合约状态变量） |
| Nonce 含义 | 该账户发出的交易数量 | 该账户创建的合约数量 |
| Balance | 可以持有 ETH | 可以持有 ETH |

### 关键理解

1. **EOA 是用户入口**：所有链上交互的起点必须是 EOA 签名发起的交易，合约不能主动"起床干活"。
2. **合约是被动的**：合约只能响应交易，不能主动发起。这意味着定时任务、自动执行等都需要外部触发器（如 Chainlink Keeper）。
3. **地址同构**：两种账户使用相同的地址格式，这为账户抽象（Account Abstraction）埋下了伏笔。

---

## 三、账户状态四字段

每个账户在状态树中存储四个字段：

| 字段 | 含义 | EOA 的值 | Contract 的值 |
|------|------|----------|---------------|
| **Nonce** | 防重放计数器 | 已发送交易数 | 已创建合约数 |
| **Balance** | ETH 余额（单位 Wei） | 用户持有的 ETH | 合约持有的 ETH |
| **StorageRoot** | 存储树的 Merkle Patricia Trie 根哈希 | 空树哈希 | 合约变量的持久化存储 |
| **CodeHash** | 代码的 keccak256 哈希 | 空代码哈希 | 合约字节码哈希 |

**理解要点**：
- EOA 的 CodeHash 和 StorageRoot 永远是"空值"哈希，这是区分 EOA 和合约的链上依据。
- Nonce 对 EOA 来说保证交易顺序和防重放（同一笔交易不能提交两次）。
- StorageRoot 是 Merkle Patricia Trie 结构，保证状态可验证且不可篡改。

---

## 四、EIP-7702：EOA 的代码革命

> **状态：已上线** — Pectra 硬分叉于 2025 年 5 月 7 日激活，EIP-7702 是其中核心改进之一。

### 核心机制

EIP-7702 引入了新的交易类型（`SET_CODE`），允许 EOA **给自己设置代码**：

1. EOA 签署一个包含 `authorization_list` 的交易
2. 协议将指定的合约代码"挂载"到该 EOA 的 code 字段
3. 这个 EOA 从此可以像智能合约钱包一样执行逻辑
4. **用户仍持有私钥**，随时可以覆盖或清除代码，恢复成普通 EOA

### 解锁的能力

- **批量交易**：approve + swap 合并为一次操作
- **Gas 代付（Paymaster）**：dApp 帮用户付 gas，用户用 USDC 等代币支付
- **Session Keys**：给应用临时有限权限，不用每笔交易都签名
- **社交恢复**：给 EOA 添加恢复机制，不怕丢私钥

### 为什么取代 EIP-3074

EIP-3074 通过 `AUTH`/`AUTHCALL` 操作码把控制权委托给 Invoker 合约，存在持久授权的安全隐患。EIP-7702 直接把代码写到账户上，用户用私钥随时可撤销，更安全且与 ERC-4337 兼容。

---

## 五、账户抽象的演进路线

```
EOA (私钥控制)
  │
  ├── ERC-4337 (2023) ── 应用层方案，部署新合约钱包
  │     问题：用户需要迁移资金到新地址
  │
  ├── EIP-3074 (已废弃) ── 协议层 AUTH/AUTHCALL
  │     问题：Invoker 安全模型有隐患
  │
  └── EIP-7702 (2025.05, Pectra) ── 协议层 Set Code
        优势：EOA 原地升级，无需迁移，兼容 ERC-4337 生态
```

---

## 六、个人理解与思考

1. **以太坊账户设计的精妙之处**：EOA 和合约同构（相同地址格式、相同状态结构），这为后续账户抽象铺平了道路。比特币 UTXO 模型做不到这一点。

2. **EIP-7702 是渐进式改进的典范**：不是推翻重来（强制所有用户迁移到合约钱包），而是在现有 EOA 上"加能力"，保持了向后兼容。

3. **合约的被动性是关键约束**：合约不能主动发起交易，这是以太坊的基本安全假设。所有"自动化"都需要外部触发（cron service、keeper、用户交易等）。

4. **Nonce 的双重含义**：EOA 的 nonce 是交易计数（防重放），合约的 nonce 是合约创建计数（CREATE 地址派生用）。同一个字段在不同账户类型中语义不同，这是以太坊的一个历史包袱。

5. **Merkle Patricia Trie**：StorageRoot 用 MPT 存储，每个状态变更都可以生成 Merkle Proof，这是轻客户端验证的基础。
````
<!-- DAILY_CHECKIN_2026-05-20_END -->

# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->


















# 拒绝纸上谈兵，用费曼技巧复盘我的个人 Agent 开发之路

**写在前面：我的学习理念**

在今天的共学营学习中，我没有选择传统的摘抄式笔记，而是更倾向于用**费曼技巧**来复盘——即“把自己做了什么、怎么做的讲出来”。只有能清晰地讲明白一个技术落地的过程，才算是真正掌握了它。

**第一步：大模型调研与选型**

在开发个人 Agent 的初期，我并没有盲目上手，而是对市面上主流的大模型能力进行了深度调研。我先后对比了豆包、DeepSeek、KIMI 以及阿里千问等多个模型的表现。

经过综合考量，我最终确定了使用 **Qwen3.6-Max** 作为我的核心模型。它在代码逻辑理解和长上下文处理上的表现，非常契合我开发 Agent 的需求。

**第二步：部署 Claude Code 并接入千问**

选型确定后，我迅速部署了 **Claude Code (CC)**，并成功将其与千问大模型进行了接入。  
  

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Jizhixing-Kieran/images/2026-05-19-1779188258024-image.png)

接入完成后，我立刻用千问进行了一次 **Vibe Coding** 的实战体验。我的第一个目标是实现 Agent 的**自动化定时和提醒功能**，这对于我日常依赖的飞书机器人至关重要。

**第三步：解决痛点——赋予 CC “长期记忆”**

在实际使用中，我发现了一个明显的痛点：每次调用强大的 Claude Code 和 Qwen3.6-Max 时，它们都会“失忆”，丢失之前的对话上下文和项目背景。

为了解决这个问题，我并没有妥协，而是动手为它建立了记忆系统：

1.  **建立记忆文件**：我让 CC 创建并维护了核心的记忆文档。
    
2.  **固化核心信息**：将“我是谁（独立开发者）”、“项目是什么（飞书 AI 聊天机器人）”、“文件在哪（关键路径速查）”等信息写入记忆。
    
3.  **跨会话继承**：现在，每次新对话启动时，CC 都会自动加载这些背景，真正实现了跨会话的持续开发。
    

![image.png](https://raw.githubusercontent.com/IntensiveCoLearning/AI-Web3-School/main/assets/Jizhixing-Kieran/images/2026-05-19-1779188203878-image.png)

**总结**

今天不仅完成了个人 Agent 的核心功能迭代，更重要的是打通了“Claude Code + 千问大模型”的高效开发流。从解决失忆问题到落地定时提醒，AI 真正成为了我开发路上的得力兄弟。

**下一步计划：** 继续拓展飞书机器人的业务功能，优化代码沙箱的安全性，让 Agent 更稳定地服务于我的日常生活。

昨天打卡结果直接编辑在了GitHub本地仓库中，所以打卡失败了，今天过来补一下
<!-- DAILY_CHECKIN_2026-05-19_END -->
<!-- Content_END -->
