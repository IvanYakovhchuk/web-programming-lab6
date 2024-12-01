FROM openjdk:22-jdk-slim AS build
COPY . .
RUN mvn clean package

FROM openjdk:22-jdk-slim
WORKDIR /app
COPY backend/target/lab6-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]