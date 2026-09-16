import { defineConfig } from "vitest/config";

// `vitest run spec` filters by path substring, not by directory, so anything
// on disk with "spec" in its path gets collected --- including a git worktree
// under .claude/worktrees/, which has its own copy of this suite plus whatever
// the person working in it hasn't committed yet. The gate is meant to test
// this working tree, so the worktrees are excluded here rather than deleted.
export default defineConfig({
  test: {
    exclude: ["**/node_modules/**", "**/dist/**", "**/.claude/**", "**/.astro/**"],
  },
});
