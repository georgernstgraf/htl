#!/bin/sh

cond_pandoc () {
  MD=$1
  PDF=$(awk -v MD=$MD 'BEGIN {printf "%s.pdf", substr(MD,1,length(MD)-3);}')
  # echo $MD $PDF
  if test $PDF -nt $MD
  then
    return
  fi
  echo "pandoc für" $MD
  pandoc -f gfm -o $PDF $MD
}

for md in *.md; do
  cond_pandoc $md
done
