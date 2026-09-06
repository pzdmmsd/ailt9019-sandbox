const assert = require("node:assert/strict");
const { validateTopic, buildPrompts } = require("./app");

assert.equal(validateTopic("", 3).ok, false);
assert.equal(validateTopic("   ", 3).ok, false);
assert.equal(validateTopic("AI literacy", 0).ok, false);
assert.equal(validateTopic("AI literacy", -1).ok, false);
assert.equal(validateTopic("AI literacy", 6).ok, false);
assert.equal(validateTopic("AI literacy", 3).ok, true);
assert.equal(buildPrompts("AI literacy", 3).length, 3);

console.log("All checks passed.");
