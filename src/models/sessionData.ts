export default interface SessionData {
  /**
   * GroupID
   */
  id: number;

  setId: (value: number) => void;
  setName: (value: string) => void;
  setDescription: (value: string) => void;

  /**
   * Project Name
   */
  name: string;

  /**
   * Project description
   */
  description: string;
}
