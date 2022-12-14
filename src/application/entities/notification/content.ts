export class Content {
  private readonly content: string;

  get value() {
    return this.content;
  }

  private validityContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const IsContentLengthValid = this.validityContentLength(content);

    if (!IsContentLengthValid) {
      throw new Error('Content length error');
    }
    this.content = content;
  }
}
