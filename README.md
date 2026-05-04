<div align="center">

<br/>

<table>
<tr>
<td align="center" width="900">

<samp>edge-runtime.ready / agent-harness.online / cloud.optional</samp>

<h1>Anshul Panigrahi</h1>

<samp><b>AI/ML Engineer</b> // Edge AI // Agentic Systems</samp>

<br/><br/>

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=15&duration=2400&pause=650&color=3FB950&center=true&vCenter=true&width=820&lines=%3E+boot+local+LLM+runtime;%3E+route+context+through+tools;%3E+recover+from+bad+tool+calls;%3E+simulate+5%2C000+factory+machines;%3E+ship+models+where+latency+matters" alt="Boot sequence"/>

</td>
</tr>
</table>

<br/>

[![](https://img.shields.io/badge/Gmail-anshulpanigrahi3678%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0D1117)](mailto:anshulpanigrahi3678@gmail.com)
[![](https://img.shields.io/badge/LinkedIn-anshul--panigrahi22-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0D1117)](https://linkedin.com/in/anshul-panigrahi22)
[![](https://img.shields.io/badge/GitHub-burntcookiedough-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=0D1117)](https://github.com/burntcookiedough)
[![](https://img.shields.io/badge/VIT_Vellore-BTech_IT_%7C_2027-238636?style=for-the-badge&labelColor=0D1117)](https://vit.ac.in)

<br/><br/>

![Open to AI/ML internships](https://img.shields.io/badge/Open_to-AI%2FML_Internships-238636?style=for-the-badge&labelColor=0D1117)
![2 patent filings](https://img.shields.io/badge/Patents-2_Filed-D29922?style=for-the-badge&labelColor=0D1117)
![Edge first](https://img.shields.io/badge/Default-Edge_First-3FB950?style=for-the-badge&labelColor=0D1117&color=238636)
![Agent systems](https://img.shields.io/badge/Focus-Agentic_Systems-A371F7?style=for-the-badge&labelColor=161B22)

</div>

---

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:0D1117,100:161b22&height=3" width="100%"/>

```yaml
name:     Anshul Panigrahi
role:     AI/ML Engineering Intern (actively looking)
location: VIT Vellore, Tamil Nadu, India
patents:  2   # yes. as a third-year. I am also surprised.

obsessions:
  - On-device LLM inference without the cloud knowing about it
  - Agentic pipelines that recover when things go wrong
  - Multi-agent orchestration on N8N and beyond
  - Making tiny hardware do very unreasonable things
  - Reading every new agent framework paper at 1am and calling it research

current_build: "Multi-agent workflow — Hermes Agent + custom tool harness"

fun_fact: >
  My health app flagged my sleep as anomalous for 31 consecutive days.
  The model was correct every single time.
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:161b22,100:0D1117&height=3" width="100%"/>

---

## The Work

<table>
<tr>
<td width="50%" valign="top">

**Real-Time Predictive Maintenance**
*Patent Application Filed — Feb. 2026*

Full Lambda architecture. Kafka ingests, Spark processes, Cassandra stores, PyTorch infers — across 5,000 simulated factory machines simultaneously. Graph analytics on the machine connectivity network detects cascade failures before the first machine goes down.

`98% accuracy` `F1: 0.96` `AUC: 0.99` `<12ms latency`

[View Repository](https://github.com/burntcookiedough/Real-Time-Predictive-Maintenance)

</td>
<td width="50%" valign="top">

**Physical-Bounded Multimodal Mode Discovery**

Unsupervised fault detection on NASA CMAPSS and CWRU benchmarks. No labels. No supervision. HDBSCAN finds the clusters; physics constraints filter anything that violates thermodynamics or vibration limits. Found 7 fault regimes on CMAPSS and 8 on CWRU.

`80% physics constraint pass rate` `Zero labeled training data`

[View Repository](https://github.com/burntcookiedough/Physical-Bounded-Multimodal-Mode-Discovery)

</td>
</tr>
<tr>
<td width="50%" valign="top">

**Stella**

On-device AI health assistant. Mistral 7B runs locally via Ollama, reads your wearable data, answers your health questions in plain English. Z-score anomaly detection feeds flagged events directly into the model as context. 35 anomalies flagged across 31 days. The model explained every single one.

`29 metrics` `33 users` `100% local` `0 cloud calls`

[View Repository](https://github.com/burntcookiedough/Stella)

</td>
<td width="50%" valign="top">

**Veri-Dose**
*Patent Published — Mar. 2026 · IN202641027860 A1*

Smart medication dispenser. MobileNetV2 fine-tuned for 4-class pill classification, quantized to TFLite, running on a Raspberry Pi 4. No internet. No cloud. Confidence calibrated with temperature scaling. Below 0.80 confidence triggers a human-in-the-loop fallback — because this is healthcare, not a demo.

`<100ms inference` `Offline` `Raspberry Pi 4`

[View Repository](https://github.com/burntcookiedough/Veridose)

</td>
</tr>
</table>

---

## Control Panel

<div align="center">

| Signal | What it means |
|:---:|:---|
| **Edge AI** | Local inference first. Cloud only when it earns the latency, privacy, and cost tradeoff. |
| **Agent Harnesses** | Tool calls, context routing, recovery paths, and model handoffs over plain chatbot loops. |
| **Industrial ML** | Predictive maintenance, sensor streams, graph failure propagation, and systems that survive noisy data. |
| **Healthcare AI** | Offline inference, calibrated confidence, and human fallback where mistakes have real cost. |

</div>

---

## How I Think About Agents

I am not building chatbots. I am building systems where models **plan, call tools, recover from failure, and hand off to other models** when they are out of their depth.

The part that actually interests me is not the model — it is the harness. How you structure context. How you design tool interfaces. When an agent should spawn a sub-agent vs. just answer. How you make a multi-agent pipeline that fails gracefully instead of hallucinating its way to a wrong answer.

Current stack: N8N for orchestration, Claude Code and OpenAI Codex for agentic coding workflows, Cursor Agent SDK for development automation, OpenClaw and Hermes for agent tooling. Building custom pipelines from scratch when frameworks get in the way.

```mermaid
flowchart LR
    A["Input signal"] --> B["Context router"]
    B --> C["Planner model"]
    C --> D["Tool call"]
    D --> E{"Did it work?"}
    E -->|yes| F["Verify result"]
    E -->|no| G["Recovery policy"]
    G --> C
    F --> H{"Need specialist?"}
    H -->|yes| I["Sub-agent handoff"]
    H -->|no| J["Final answer or action"]
    I --> F
```

---

## Tech

<div align="center">

<img height="36" src="https://skillicons.dev/icons?i=py,pytorch,tensorflow,sklearn,fastapi,flask,docker,git,linux,bash,kafka,cassandra,sqlite,raspberrypi,arduino&theme=dark&perline=15" />

<br/><br/>

![On-device LLMs](https://img.shields.io/badge/On--device_LLMs-0D1117?style=flat-square&labelColor=161B22&color=58A6FF)
![Agent orchestration](https://img.shields.io/badge/Agent_Orchestration-0D1117?style=flat-square&labelColor=161B22&color=1F6FEB)
![Predictive maintenance](https://img.shields.io/badge/Predictive_Maintenance-0D1117?style=flat-square&labelColor=161B22&color=238636)
![Fault detection](https://img.shields.io/badge/Fault_Detection-0D1117?style=flat-square&labelColor=161B22&color=58A6FF)
![Raspberry Pi inference](https://img.shields.io/badge/Raspberry_Pi_Inference-0D1117?style=flat-square&labelColor=161B22&color=C51A4A)
![Kafka Spark Cassandra](https://img.shields.io/badge/Kafka_Spark_Cassandra-0D1117?style=flat-square&labelColor=161B22&color=1F6FEB)

</div>

---

## GitHub Stats

<div align="center">

<img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=burntcookiedough&theme=github_dark" width="100%"/>

<br/><br/>

<img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=burntcookiedough&theme=github_dark" width="49%"/>
<img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=burntcookiedough&theme=github_dark&utcOffset=5.5" width="49%"/>

<br/><br/>

<img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=burntcookiedough&theme=github_dark" width="49%"/>
<img src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=burntcookiedough&theme=github_dark" width="49%"/>

[![GitHub Streak](https://streak-stats.demolab.com?user=burntcookiedough&theme=github-dark-blue&hide_border=true&background=0D1117&ring=58A6FF&fire=FF6B6B&currStreakLabel=C9D1D9&sideLabels=C9D1D9&dates=8B949E)](https://github.com/burntcookiedough)

</div>

---

## Activity

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=burntcookiedough&bg_color=0D1117&color=58A6FF&line=1F6FEB&point=58A6FF&area=true&area_color=1F6FEB&hide_border=true&custom_title=Contribution%20Activity)](https://github.com/burntcookiedough)

---

## Trophies

<div align="center">

[![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=burntcookiedough&theme=darkhub&no-frame=true&no-bg=true&margin-w=8&row=1)](https://github.com/ryo-ma/github-profile-trophy)

</div>

---

## The Snake Ate My Contributions

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/burntcookiedough/burntcookiedough/output/github-snake-dark.svg"/>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/burntcookiedough/burntcookiedough/output/github-snake.svg"/>
  <img alt="contribution snake" src="https://raw.githubusercontent.com/burntcookiedough/burntcookiedough/output/github-snake.svg" width="100%"/>
</picture>

---

## Certifications

| Certification | Issuer | Date |
|:---|:---:|:---:|
| Getting Started with Deep Learning | NVIDIA DLI | Mar 2026 |
| OCI 2025 AI Foundations Associate | Oracle | Mar 2026 |
| Software Engineer Intern Certificate | HackerRank | Feb 2026 |
| Intro to Machine Learning | Kaggle | Feb 2026 |

---

## Competitions

[![](https://img.shields.io/badge/2nd_Place-IEEE_CS_Hackathon_2025-238636?style=flat-square)](https://github.com/burntcookiedough)
&nbsp;
[![](https://img.shields.io/badge/Finalist-Yantra_Central_Hackathon_2025-1F6FEB?style=flat-square)](https://github.com/burntcookiedough)

---

<div align="center">

*If your model needs the cloud to run, we have different philosophies.*

*If your agent cannot recover from a bad tool call, it is not an agent — it is a very slow API.*

[![Profile Views](https://komarev.com/ghpvc/?username=burntcookiedough&color=58A6FF&style=flat-square&label=profile+views)](https://github.com/burntcookiedough)

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,100:0D1117&height=120&section=footer" width="100%"/>
