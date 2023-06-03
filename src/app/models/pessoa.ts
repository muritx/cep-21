export class Pessoa {
  id?: string | null;
  cpf?: string;
  nome?: string;
  nascimento?: Date;
  sexo?: string;
  email?: string;
  celular?: number;

  //Dados de endereço
  cep?: number;
  logradouro?: string;
  numero?: number;
  complemento?: string;
  bairro?: string;
  municipio?: string;
  estado?: string;
}
