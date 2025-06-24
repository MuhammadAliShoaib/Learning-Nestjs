import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get('/get')
    getMessages(){

    }

    @Post('/create')
    createMessage(@Body() body :CreateMessageDto){
        console.log(body)
    }

    @Get('/get/:id')
    getMessage(@Param('id') id:string){
        console.log(id)
    }
}
