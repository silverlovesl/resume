export class StringUtils {
  /**
   * ブラウザ言語コード取得
   */
  static browserLanguage(): string {
    let lang = window.navigator.language;
    if (lang) {
      if (lang.indexOf('ja') >= 0) {
        return 'ja';
      } else {
        return 'zh';
      }
    } else {
      return 'ja';
    }
  }
}
