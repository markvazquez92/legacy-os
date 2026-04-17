# CLAUDE.md — Rules for AI tools working in this repo

## PROTECTED FILES — DO NOT TOUCH

### CNAME
The CNAME file at repo root contains the single line:
mylegacycontinues.com

This file is managed by GitHub Pages automatically when the custom domain is set in Settings > Pages. AI tools (Claude Code, Cowork, Claude Chat) must NEVER:
- Delete CNAME
- Modify CNAME
- Commit any change to CNAME

If CNAME appears in a diff, the AI tool must flag it and refuse to push until the user approves.

### logo.png
The logo file at repo root is the gold ship on transparent background. Do not replace, modify, or overwrite.

### .github/workflows/*
GitHub Actions config. Do not modify without explicit approval.

## PUSH PROTOCOL
- Only Bear pushes via PowerShell
- AI tools show diffs and wait for acknowledgment
- No auto-commits, no auto-pushes
