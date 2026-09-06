function validateTopic(topic, count) {
  const cleanedTopic = topic.trim();

  if (!cleanedTopic) {
    return { ok: false, error: "Enter a lecture topic before generating prompts." };
  }

  if (cleanedTopic.length > 120) {
    return { ok: false, error: "Keep the topic under 120 characters." };
  }

  if (!Number.isInteger(count) || count < 1 || count > 5) {
    return { ok: false, error: "Choose between 1 and 5 prompts." };
  }

  return { ok: true, topic: cleanedTopic, count };
}

function buildPrompts(topic, count) {
  const templates = [
    `Define the key idea behind "${topic}" in your own words.`,
    `Give one realistic example where "${topic}" matters.`,
    `Name one risk or limitation connected to "${topic}".`,
    `Write one check you could use to verify an answer about "${topic}".`,
    `Explain why "${topic}" is relevant to an AI application project.`
  ];

  return templates.slice(0, count);
}

function renderPrompts(promptList, prompts) {
  promptList.replaceChildren();

  for (const prompt of prompts) {
    const item = document.createElement("li");
    item.textContent = prompt;
    promptList.append(item);
  }
}

function showMessage(message, text, isSuccess = false) {
  message.textContent = text;
  message.classList.toggle("is-success", isSuccess);
}

if (typeof document !== "undefined") {
  const form = document.querySelector("#question-form");
  const topicInput = document.querySelector("#topic");
  const countInput = document.querySelector("#count");
  const message = document.querySelector("#message");
  const promptList = document.querySelector("#prompt-list");

  function handleSubmit(event) {
    event.preventDefault();

    const count = Number(countInput.value);
    const result = validateTopic(topicInput.value, count);

    if (!result.ok) {
      renderPrompts(promptList, []);
      showMessage(message, result.error);
      return;
    }

    renderPrompts(promptList, buildPrompts(result.topic, result.count));
    showMessage(message, "Prompts generated. Repeat the same input to verify the result.", true);
  }

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
}

if (typeof module !== "undefined") {
  module.exports = { validateTopic, buildPrompts };
}
