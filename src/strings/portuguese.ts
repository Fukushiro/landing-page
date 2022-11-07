export interface StringsData {
  bem_vindo: string;
  introduction_1: string;
  introduction_2: string;
  introduction_3: string[];
  data_name: string;
  data_age: string;
  data_phone: string;
  data_email: string;
  my_social_medias_label: string;
}

export const Portuguese: StringsData = {
  bem_vindo: "Bem vindo",
  introduction_1: "Eu sou um desenvolvedor front end",
  introduction_2:
    "Sou um desenvolvedor front com 2 anos de experiencia, possuo experiencia com:",
  introduction_3: [
    "Desenvolvimento de aplicativos móveis com react native",
    "Desenvolvimento de aplicações web com react.js, next, vite",
    "Gerenciamento de estado com redux, context e zustand",
    "Chamadas de API com fetch e axios",
    "Armazenamento de dados com firebase e fauna",
    "Usar typescript",
    "Publicar aplicativos para Android e ios",
    "Fazer uso de styled components para estilização de aplicações react",
  ],
  my_social_medias_label: "Minhas redes sociais:",
  data_name: "Nome",
  data_age: "Idade",
  data_phone: "Telefone",
  data_email: "Email",
};
