class CookiePolicyComponent extends React.Component {
  render() {
    return (
      <div id="barraAceptacion">
        <div className="inner">
          Solicitamos su permiso para obtener datos estadísticos de su navegación en esta
          web, en cumplimiento del Real Decreto-ley 13/2012. Si continúa navegando
          consideramos que acepta el uso de cookies.
          <a href="javascript:void(0);" id="ok" onClick={PonerCookie}>
            <b>OK</b>
          </a>
          |<a href="http://politicadecookies.com" target="_blank" className="info">Más información</a>
        </div>
      </div>
    );
  }
}