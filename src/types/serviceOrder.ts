// eu criei essa interface baseada no swager https://trainee.fidelis.workers.dev/docs

export interface ServiceOrder {
  /* // O que o servidor devolve (GET) e o que o Dashboard usa */
  id: number;
  clientId: number;
  device: string;
  issue: string;
  status: string;
  created_at: string;
}

// O que o formulário envia (POST) - SEM id e SEM created_at
export interface NewServiceOrder {
  clientId: number;
  device: string;
  issue: string;
  status: "open" | "in_progress" | "done";
}
