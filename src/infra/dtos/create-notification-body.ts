import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;

  constructor(recipientId: string, content: string, category: string) {
    this.category = category;
    this.content = content;
    this.recipientId = recipientId;
  }
}
