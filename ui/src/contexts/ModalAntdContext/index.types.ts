export interface IModalAntd {
  showModal?: (ra?: string, remove?: boolean) => void;
}

export interface BackEndError {
  statusCode: number; 
  message: string;
  error: string;
}