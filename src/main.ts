import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para validar automaticamente as solicitações recebidas
  const kafkaConsumerService = app.get(KafkaConsumerService)
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService
  })
  await app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();
