import { ICommand } from "@nestjs/cqrs";
import { CreateUserDto } from "src/Dtos/create-user.dto";

export class CreateUserCommand implements ICommand{
   constructor(
    public readonly data : CreateUserDto
   ){}
}