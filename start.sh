trap "kill 0" EXIT

(cd api && pnpm start) &
(cd back && pnpm start) &

wait

# chmod +x start.sh
# ./start.sh