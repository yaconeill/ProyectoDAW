var dataJson;
function start(){
  ReactDOM.render(<IndexComponent />,document.getElementById('react'));
}

$(function(){
  loadData();
  start();
  checkCookie();
});