export class UserUpdatedEvent {
  userId: string;
  city: string;

  constructor(data: UserUpdatedEvent) {
    Object.assign(this, data);
  }
}
