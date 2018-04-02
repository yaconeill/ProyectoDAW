var dataJson;
function start(){
  ReactDOM.render(<StatsComponent />,document.getElementById('react'));
}

$(function(){
  start();
  checkCookie();
});