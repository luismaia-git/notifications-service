import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ServerKafka } from '@nestjs/microservices'

Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy{
  constructor(){
    super({
      client: {
        clientId : 'notifications',
        brokers: ['localhost:29092', 'localhost:29093']
      }
    })
  }
  
  async onModuleDestroy() { //inverso do init
    await this.close()
  }
  
}