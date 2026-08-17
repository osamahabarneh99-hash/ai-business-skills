#!/usr/bin/env bash
# Install the eBay + CJ dropshipping skills on any machine.
# Usage:  bash modules/dropshipping/install-ebay-skills.sh
set -euo pipefail

SRC="$(cd "$(dirname "$0")/en" && pwd)"
DEST="${HOME}/.claude/skills"
SKILLS=(ebay-cj-jordan product-research-ebay-cj ebay-listing-craft ebay-post-sale-ops)

echo "Installing to ${DEST}"
mkdir -p "${DEST}"

for s in "${SKILLS[@]}"; do
  if [ ! -f "${SRC}/${s}/SKILL.md" ]; then
    echo "  MISSING ${s} — aborting"; exit 1
  fi
  mkdir -p "${DEST}/${s}"
  cp "${SRC}/${s}/SKILL.md" "${DEST}/${s}/SKILL.md"
  # verify it will actually register: must open with YAML frontmatter
  if head -1 "${DEST}/${s}/SKILL.md" | grep -q '^---$'; then
    printf "  ok   %-26s %s lines\n" "${s}" "$(wc -l < "${DEST}/${s}/SKILL.md")"
  else
    echo "  FAIL ${s}: no YAML frontmatter — Claude Code will reject it"; exit 1
  fi
done

echo
echo "Installed ${#SKILLS[@]} skills."
echo "Open this repo as your working directory so CLAUDE.md and"
echo ".agents/dropshipping-context.md load automatically each session."
