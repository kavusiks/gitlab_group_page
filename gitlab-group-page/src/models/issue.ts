export default interface Issue {
  /**
   * The unique issue-number
   */
  iid: number;

  /**
   * Issue Title
   */
  title: string;

  /**
   * Issue Description
   */
  description: string;

  /**
   * The current status of issue
   */
  state: string;
}
