var dataJson;
function start(){
  ReactDOM.render(<ResultQRComponent />,document.getElementById('react'));
}

$(function(){
  start();
  checkCookie();
});