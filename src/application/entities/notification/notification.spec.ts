import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitacao'),
      category: 'Social',
      recipientId: 'example recipientId',
    });
    expect(notification).toBeTruthy();
  });
});
