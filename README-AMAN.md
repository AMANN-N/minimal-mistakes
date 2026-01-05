export PATH="/opt/homebrew/opt/ruby/bin:$PATH" && lsof -i :4000 | grep ruby | awk '{print $2}' | xargs kill -9 2>/dev/null; bundle exec jekyll serve

