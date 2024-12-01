FROM openjdk:22-jdk-slim

WORKDIR /app

COPY backend/target/app.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "/app/app.jar"]

EXPOSE 8080