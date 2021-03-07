#!/bin/bash

cd build || exit

echo 'Updating html file...'

# load @rows.to_json to data-rows:
#sed -e 's/<div id=\"root\"><\/div>//g' index.html > script.html
#echo '<div id="root" data-rows="<%= @rows.to_json %>"></div>' > index.html
#cat script.html >> index.html
#rm -rf script.html

# exclude <head>:
sed -e 's/<!doctype html>//g' index.html > without-doctype.html
sed -e 's/<head>\(.*\)<\/head>//g' without-doctype.html > without-head.html

# get css links:
grep -Eo '<link.*(rel="stylesheet">)' index.html > links.html

# update index.html:
echo -e '<% content_for :header_tags do %>' > index.html
cat links.html >> index.html
echo -e '<% end %>' >> index.html
cat without-head.html >> index.html
rm -rf without-doctype.html links.html without-head.html

echo 'Replacing html file to views folder...'
mv -f index.html ../_index.html.erb

echo 'Replacing static files to public folder...'
rm -rf ../../../../public/assets/react/schedule_app/static/
mkdir -p ../../../../public/assets/react/schedule_app/static/
mv -f ./static/* ../../../../public/assets/react/schedule_app/static/
