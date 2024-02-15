import "./Formstyle.css"; // CSS

// IMPORTES DO FORMULÁRIO E ANIMAÇÃO
import { useState, useEffect } from "react";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import emailjs from '@emailjs/browser';
import { ScrollTrigger } from "gsap/all";





const FormContain = () => {
  // VALIDAÇÃO DO FORMULÁRIO
  const [name, setName] = useState('');
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');

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
      <h3 className="title-h3"> <b>Faça agora sua cotação gratuita</b> e descubra as melhores opções disponíveis para você!</h3>
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
