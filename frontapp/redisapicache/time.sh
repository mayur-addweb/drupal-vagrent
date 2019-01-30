for n in {1..10}; do curl -s "http://localhost:3300/wp-json" -o /dev/null -w "%{time_total}\n" ; done
