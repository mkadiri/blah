build:
	docker build -t webpack-demo:dev .

run:
	docker-compose down && docker-compose up -d && docker logs -f webpack-demo

exec:
	docker exec -ti webpack-demo sh