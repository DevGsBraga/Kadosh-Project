import "./Formstyle.css"; // CSS

// IMPORTES DO FORMULÁRIO E ANIMAÇÃO
import { useState, useEffect } from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/all";

import Cookies from "js-cookie";
import emailjs from '@emailjs/browser';





const FormContain = () => {
  // VALIDAÇÃO DO FORMULÁRIO
  const [name, setName] = useState(Cookies.get('name') || '');
  const [contato, setContato] = useState(Cookies.get('contato') || '');
  const [email, setEmail] = useState(Cookies.get('email') || '');
  const [cidade, setCidade] = useState(Cookies.get('cidade') || '');

  function enviarEmail(event){
    event.preventDefault(); // IMPEDE O RELOAD DA PÁGINA

    if(name === '' || contato === '' || email === '' || cidade === '') {
      alert('Por favor, preenchar todos os campos');
      return;
    }

    const templateMensagem = {
      from_name: name,
      from_contact: contato,
      from_email: email,
      from_cidade: cidade
    }


    emailjs.send("service_ygcl22l", "template_2wro9rj", templateMensagem, "cdtUm1lRVd31PkyAG").then(alert('Email enviado com sucesso'))
    setName('')
    setContato('')
    setEmail('')
    setCidade('')
  }

    Cookies.set('name', name, { expires: 7 }); // Expire em 7 dias
    Cookies.set('contato', contato, { expires: 7 });
    Cookies.set('email', email, { expires: 7 });
    Cookies.set('cidade', cidade, { expires: 7 });


  // ANIMAÇÃO DO FORMULÁRIO



useEffect(() => {
  function animarForm(element, eixoX, eixoY, eixoXFim, eixoYFim, start, time) {
    gsap.fromTo(element, {
      opacity:0,
      x: eixoX,
      y: eixoY
    }, {
      opacity: 1,
      x: eixoXFim,
      y: eixoYFim,
      duration: time,
      scrollTrigger: {
        trigger: start,
        start: "top center",
        end: "bottom center",
        once: true
      }
    })
  }



  animarForm('.title-span', 100, 0, 0, 0, ".container__form", .5);
  animarForm('.title-h3', -100, 0, 0, 0, ".container__form", 1);
  animarForm('.title-p', 100, 0, 0, 0, ".container__form", 1);
  animarForm('.form__description', 0, 100, 0, 0, ".container__form", 1.1);


}, [])





  return (
    <div className="container__form">
      <div className="form-title">
      <span className="title-span">TRABALHANDO PARA VOCÊ COM RAPIDEZ E EFICIÊNCIA.</span>
      <h3 className="title-h3"> <b className="bold-description-form">Faça agora uma simulação gratuita</b> e descubra as melhores opções disponíveis para você!</h3>
      <p className="title-p">Tornamos a proteção veicular simples e acessível.</p>
      </div>


      <div className="form__description">
        <form onSubmit={enviarEmail}>

          <input
              className="form-input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
          />


          <input
              className="form-input"
              type="text"
              maxLength="11"
              placeholder="Digite seu contato"
              onChange={(event) => setContato(event.target.value)}
              value={contato}
          />

          <input
              className="form-input"
              type="email"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
          />

          <input
              className="form-input"
              type="text"
              placeholder="Digite sua cidade"
              onChange={(event) => setCidade(event.target.value)}
              value={cidade}
          />

        <div className="form-btn">
          <input type="submit" value="Enviar" />
        </div>
        </form>





      </div>









    </div>
  )
}

export default FormContain
