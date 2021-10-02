export default interface SessionData {
  /**
   * GroupID
   */
  id?: number;

  /**
   * Project Name
   */
  name?: string;

  /**
   * Project description
   */
  description?: string;
  updateData: () => void;
}
