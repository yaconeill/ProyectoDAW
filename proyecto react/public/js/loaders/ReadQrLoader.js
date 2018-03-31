var dataJson;
function start(){
  ReactDOM.render(<ReadQRComponent />,document.getElementById('react'));
}

$(function(){
  start();
  checkCookie();
});