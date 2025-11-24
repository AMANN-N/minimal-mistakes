lsof -i :4000 | grep ruby | awk '{print $2}' | xargs kill -9 2>/dev/null; arch -x86_64 bundle exec jekyll serve

