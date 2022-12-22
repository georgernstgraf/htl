ALL != ls *.md | awk '{printf "%s.pdf ", substr($$0, 1, length($$0)-3);}'

defalt: $(ALL)

%.pdf: %.md
	mypandoc $<

info:
	@echo make $(ALL)

# ls *.md | awk 'BEGIN {printf "make ";} {printf "%s.pdf ", substr($0, 1, length($0)-3);} END {printf "\n";}' | sh -v

# all: 4_transport.pdf Fragensammlung_I.pdf Fragensammlung_II.pdf
#
# 
# 4_transport.pdf: 4_transport.md
# 	/home/georg/Spengercloud/bin/mypandoc 4_transport.md 
# 
# Fragensammlung_II.pdf: Fragensammlung_II.md
# 	/home/georg/Spengercloud/bin/mypandoc Fragensammlung_II.md
# 
# Fragensammlung_I.pdf: Fragensammlung_I.md
# 	/home/georg/Spengercloud/bin/mypandoc Fragensammlung_I.md
# 
