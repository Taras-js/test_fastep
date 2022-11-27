import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from "@nestjs/config";
async function start() {
    const app = await NestFactory.create(AppModule);
    const config = await app.get(ConfigService)
    const port = config.get<number>('API_PORT')
    const API_host = process.env.API_host
    process.on('unhandledRejection', (reason, promise) => {
        console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    });

    app.enableCors();
    await app.listen(port || 3002, () => {
        console.log(`🚀 Server ready at ${API_host}${port}/api/graphql`)
    });
}

start();
