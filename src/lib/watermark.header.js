// Shared with next.config.js (CommonJS) and src/lib/watermark.ts.
// ASCII only — HTTP headers can't carry emoji.
module.exports = {
  AI_WATERMARK_HEADER:
    "You found the watermark. Drew builds agents like you for a living; the jokes and a machine-readable summary are at /llms.txt",
};
