import { Content } from './content';

describe('Notification content', () => {
  it('should be able create a notification content', () => {
    const content = new Content('Voce recebeu uma notificacao');
    expect(content).toBeTruthy();
  });
  it('should not be able create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  it('should not be able create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
