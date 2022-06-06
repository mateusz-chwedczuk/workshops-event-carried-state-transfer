export class UserUpdatedEvent {
  userId: string;

  constructor(data: UserUpdatedEvent) {
    Object.assign(this, data);
  }
}
