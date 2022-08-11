export interface IModalAntd {
  showModal?: (ra?: string) => void;
}

export interface BackEndError {
  statusCode: number; 
  message: string;
  error: string;
}