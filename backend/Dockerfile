FROM openjdk:22-jdk-slim

WORKDIR /app

COPY backend/target/lab6-0.0.1-SNAPSHOT.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "/app/app.jar"]

EXPOSE 8080