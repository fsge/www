#! /bin/bash
PAGE_ENTITY=page

for file in ./_data/contentful/spaces/content/$PAGE_ENTITY/*.yaml
do
  cp "$file" "$file.html"
  echo "---" >> "$file.html"
done

rm -rf _contentful
mkdir _contentful
mv ./_data/contentful/spaces/content/$PAGE_ENTITY/*.html _contentful