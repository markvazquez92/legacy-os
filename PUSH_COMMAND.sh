#!/bin/bash
# Push cleanup commit to GitHub
# Usage: bash PUSH_COMMAND.sh

cd "$(dirname "$0")"

echo "📤 Pushing cleanup commit to GitHub..."
echo "Repository: github.com/markvazquez92/legacy-os"
echo "Branch: main"
echo "Commit: Clean repo: remove test files, fix links, enable mobile nav"
echo ""

git push origin main

if [ $? -eq 0 ]; then
  echo "✅ Push successful!"
  echo "View commit: https://github.com/markvazquez92/legacy-os/commits/main"
else
  echo "❌ Push failed. Try one of these:"
  echo ""
  echo "1. Use GitHub CLI:"
  echo "   gh auth login"
  echo "   git push origin main"
  echo ""
  echo "2. Use SSH:"
  echo "   git remote set-url origin git@github.com:markvazquez92/legacy-os.git"
  echo "   git push origin main"
  echo ""
  echo "3. Use GitHub Desktop (if installed)"
fi
