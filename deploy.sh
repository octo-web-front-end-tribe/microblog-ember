#!/usr/bin/env bash

ember build --prod --output-path=gh-dist

git add gh-dist

git commit -m "Deploy to gh-pages"

if [ -n "$(git ls-remote origin gh-pages)" ];
then
  git push origin :gh-pages;
fi

git subtree push --prefix=gh-dist origin gh-pages

git reset --hard HEAD^
