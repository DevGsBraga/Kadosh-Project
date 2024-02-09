import "./Formstyle.css";

const FormContain = () => {
  return (
    <><div className="container-geral-form">


      <div className="container-form">
        <div className="form-container-dados">
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Nome</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Modelo</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label className="form-label">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder=""
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Estado</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Cidade</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="col-md-2">
              <label className="form-label">CEP</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check"></div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>
    </>
  );
};

export default FormContain;
