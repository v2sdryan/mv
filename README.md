# MV Workflow Tutorial

Static Cantonese guide for turning a 2-3 minute song into a coherent AI-assisted music video using Codex, CapCut, cloud ComfyUI, and simple editing tools.

## Run Locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 5173
```

Then visit:

```text
http://localhost:5173
```

## Deploy To Vercel

1. Create a GitHub repository named `mv`.
2. Push the contents of this folder to that repository.
3. In Vercel, import the GitHub repo.
4. Use `Other` or static project settings.
5. Leave Build Command empty.
6. Set Output Directory to `.`.

## Included Workflow Examples

- CapCut-only lyric MV route for first-time users.
- Cloud ComfyUI story MV route using image-to-video workflows.
- Hybrid character-performance route using Codex planning plus ComfyUI/CapCut finishing.
