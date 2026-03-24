// eu criei essa interface baseada no swager https://trainee.fidelis.workers.dev/docs
export interface Client {
  id: number;
  name: string;
  phone: string;
  email: string;
  created_at: string;
}

// Interface para o que você ENVIA ao servidor (POST /clients)
export interface NewClient {
  name: string;
  phone: string;
  email: string;
}
