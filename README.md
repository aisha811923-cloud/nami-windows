# Nami for Windows

Nami for Windows is a desktop app that lets you run Claude Code, Codex, Gemini and other AI coding agents side by side in one workspace on Windows 10 and 11 (x64 and ARM64). It is a Windows port of [Nami by Dainami](https://github.com/mrdainami/nami).

<div align="center">

### Put the world's best AI agents to work.

One workspace for all of them. Say what you need in plain English and watch it get done.

**[↓ Download for Windows (x64 & ARM64)](https://github.com/aisha811923-cloud/nami-windows/releases/latest)**

Windows 10 / 11 (64-bit) · x64 & ARM64 supported · Free and Open Source

</div>

![Four sessions running on the Nami desk](docs/media/hero.jpg)

> Nami is free and open source under the Apache License 2.0. It is designed so that anyone — not just engineers — can put AI agents to work. If it earns a place on your desk, hit the **☆ Star** at the top right. It is the only thing that helps other people find it.

## Download

Get the latest installer or portable executable from the **[Releases Page](https://github.com/aisha811923-cloud/nami-windows/releases/latest)**:

| Architecture | Package | Description |
| :--- | :--- | :--- |
| **x64** (Intel / AMD) | `Nami Setup <version>-x64.exe` | Standard Windows installer with Start Menu & Desktop shortcuts |
| **x64** (Intel / AMD) | `Nami <version>-x64.exe` | Standalone portable executable (no install required) |
| **ARM64** (Snapdragon / Surface) | `Nami Setup <version>-arm64.exe` | Native ARM64 installer for Windows on ARM |
| **ARM64** (Snapdragon / Surface) | `Nami <version>-arm64.exe` | Standalone ARM64 portable executable |

## Installation

1. **Installer (`Setup.exe`)**:
   - Download the installer for your architecture (`x64` or `arm64`).
   - Run the executable to install Nami. It automatically configures desktop and start menu shortcuts.
2. **Portable (`.exe`)**:
   - Download the portable `.exe` file.
   - Run it directly without installation—ideal for USB drives or quick testing.

## What it is

Nami is a desk for AI agents. You open one folder on your PC, ask for something in plain English, and an agent gets to work in its own pane — while three others do something else beside it.

Nothing happens behind your back.

## Run any of the top agents in one click

![Claude Code, Codex and Gemini ready; OpenCode, Hermes and Kimi one click away](docs/media/agents.jpg)

No more downloading ten different tools only to switch again next week. A better agent ships next month? Swap it in a click and keep working.

It runs on the subscriptions you already pay for — no Nami account, no second bill.

## A morning of work in the time one job used to take

Every job runs in its own pane, all at the same time. One agent writes your emails, another ships your pricing page, a third sorts the invoices, a fourth plans your month. One screen, and you are watching all of it.

## Describe an agent. Get an agent.

![Describing an agent in plain words, and the finished agent ready to run](docs/media/new-agent.jpg)

Say what you want in plain words and seconds later it is on your shelf, ready to run. Same for skills and connections. Notion, Gmail and Slack connect in one click.

## Four desks

<table>
  <tr>
    <td width="50%"><img src="docs/media/desk-glass.jpg" alt="Glass desk"><br><b>Glass</b> — light and airy</td>
    <td width="50%"><img src="docs/media/desk-paper.jpg" alt="Paper desk"><br><b>Paper</b> — ink and cream</td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/media/desk-operator.jpg" alt="Operator desk"><br><b>Operator</b> — dark ops</td>
    <td width="50%"><img src="docs/media/desk-graphite.jpg" alt="Graphite desk"><br><b>Graphite</b> — glass at night</td>
  </tr>
</table>

## Your files never leave your PC

Nami only ever looks inside the one folder you point it at. Dictation runs on your own machine (using local Whisper ONNX models), so it works on a fresh install with no account, no API key, and no network requirement.

## Get started

1. **[Download it](https://github.com/aisha811923-cloud/nami-windows/releases/latest)** and run the installer (`.exe`) or standalone portable app.
2. **Point it at one folder** you work in. It never looks outside it.
3. **Ask for something.** It finds the agents you already have.

Find your way around with **Ctrl Shortcuts** in the app, or read the [shortcuts and gestures reference](docs/shortcuts.md).

Windows (x64 & ARM64) is supported natively.

## Frequently Asked Questions (FAQ)

### Do I need a separate Nami account or subscription?
No. Nami runs directly on your local machine using the CLI tools and subscriptions you already have (Claude Code, OpenAI Codex, Gemini CLI, etc.). There is no Nami account, cloud server, or extra fee.

### Are both x64 and ARM64 Windows PCs supported?
Yes. Nami provides native builds for both 64-bit Intel/AMD (x64) and Windows on ARM (ARM64, including Snapdragon X Elite and Surface Pro devices).

### Do my files or code leave my computer?
No. Nami is an Electron app running local PTY terminal sessions on your machine. Nami only accesses the directory you select, and speech-to-text dictation runs entirely locally via bundled ONNX models without transmitting audio.

### What agents are supported?
Any agent with a command-line interface: Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Hermes, Kimi, or any custom shell command or terminal tool.

### How is this related to the original Mac version of Nami?
This repository is a community Windows port of Nami, originally created by Calvin Hia ([Dainami](https://github.com/mrdainami/nami)) for macOS. It ports native PTY terminal handling, Windows path conventions, and build packaging while preserving the complete paper desk experience under the Apache-2.0 license.

## Build it yourself

```bash
git clone https://github.com/aisha811923-cloud/nami-windows.git
cd nami-windows
npm install
npm start
```

Contributor notes are in [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Attribution & License

Nami for Windows is licensed under the [Apache License 2.0](LICENSE).

- **Original Project**: [Nami](https://github.com/mrdainami/nami) by [Calvin Hia](https://dainami.ai/links?utm_source=github&utm_medium=readme) / [Dainami Pte Ltd](https://nami.dainami.ai).
- **Windows Port**: Maintained by [Aisha](https://github.com/aisha811923-cloud/nami-windows).
- Original documentation and resources: [nami.dainami.ai](https://nami.dainami.ai) · [Docs](https://nami.dainami.ai/docs/) · [Terms](https://nami.dainami.ai/terms/).
