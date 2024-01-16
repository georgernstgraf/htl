find.txt::
	find . -type f -not -regex '.*/\.git/.*' -not -regex '.*/\.svn/.*' -not -regex '.*/\.github/.*' | sort > find.txt
