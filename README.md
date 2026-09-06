# AILT9019 Sandbox

Hello from zyk, testing my AI coding setup.

This small local app completes the Week 1 T-I vibe-coding exercises from `01_Kickoff.pdf`.

## What This App Does

The page turns a lecture topic into short self-test question prompts. It is intentionally small so the edit-run-check loop is easy to inspect.

Open `index.html` in a browser to run it.

## Week 1 Exercise Evidence

Exercise 1 - visible change:

- Changed file: `styles.css`
- Relevant block: `.app-title`
- What changed: the title is dark blue (`#1B2A41`) and uses a 24px font size.
- Check: open `index.html` and confirm the page title is visibly dark blue.

Exercise 2 - break it on purpose:

- Breaking input: submit the form with an empty topic.
- Changed file: `app.js`
- Relevant block: `validateTopic`
- What changed: the app now rejects empty or overly long topics and shows an error message instead of generating invalid output.
- Check: run `node test.js`, then try the empty form manually in the browser.

Exercise 3 - explain one change in my own words:

The `validateTopic` function checks the topic before the app tries to generate question prompts. This was needed because empty or invalid input would produce useless output; now the page gives a clear error and keeps working.

## Platform Map

- Moodle: deadlines, submissions, timestamps, and authoritative announcements.
- Ed: questions, discussion, and team standups.
- GitHub: code, project history, and final repository.

## GitHub Setup Reminder

To finish the external setup step, create a GitHub repository named `ailt9019-sandbox`, push this folder, and confirm this README line appears on GitHub.
