export const redirectToLink = (idQuarto?: number) => {
  let url = "https://taiuaambiental.motordereservas.com.br/novareserva";

  window.open(url);
};

export const CallWppMessage = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=556299818977&text=%23Site+%E2%80%A2+Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+a+hospedagem.+Poderia+me+ajudar+por+favor%3F&type=phone_number&app_absent=0"
  );
};
