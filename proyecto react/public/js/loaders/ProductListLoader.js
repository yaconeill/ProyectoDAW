var dataJson;
function start(){
  ReactDOM.render(<ProductListComponent />,document.getElementById('react'));
}

$(function(){
  start();
  checkCookie();
});