// Skrypt wygenerowano za darmo z uzyciem: https://skrypt-cookies.pl
// Ekipa autorow skryptu i kontakt z nami: https://skrypt-cookies.pl/o-autorach
function hovered() {
  document.getElementById('hcks').style.background = '#3c4047';
}
function unhovered() {
  document.getElementById('hcks').style.background = '#323946';
}
function hidecks() {
  document.getElementById('cookie').style.display = 'none';
  setCookie('ck_c397094840623323', 'y', 30);
}
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = ';expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + ';path=/';
}
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
if (window.addEventListener) {
  window.addEventListener('load', skr_ckz);
} else {
  window.attachEvent('onload', skr_ckz);
}
function skr_ckz() {
  let x = getCookie('ck_c397094840623323');
  if (!x) {
    let c = document.createElement('aside');
    let hc = document.createElement('span');
    c.setAttribute('id', 'cookie');
    c.style.zIndex = 999999;
    hc.setAttribute('id', 'hcks');
    document.body.appendChild(c);
    c.style.background = '#0a0c1b';
    c.style.color = '#fafafa';
    hc.style.background = '#323946';
    hc.style.color = '#00EEFF';
    c.innerHTML =
      '<span id="cinfo" style="flex: 1 1 auto; margin-top: 2px;">Niniejsza witryna wykorzystuje pliki cookies w celu zapewnienia usług na najwyższym poziomie. Kontynuując korzystanie z witryny, wyrażasz zgodę na ich użycie. [&nbsp;<a href="https://skrypt-cookies.pl/czym-sa-ciasteczka" target="_blank" style="text-decoration:underline;color:#fafafa;">Więcej informacji</a>&nbsp;]</span>';
    hc.innerHTML = 'Rozumiem';
    c.style.left = '0px';
    c.style.right = '0px';
    c.style.bottom = '0px';
    c.style.top = 'auto';
    c.style.maxWidth = '100%';
    hc.style.padding = '12px 30px';
    hc.style.cursor = 'pointer';
    hc.style.display = 'flex';
    hc.style.borderRadius = '.3rem';
    hc.style.alignItems = 'center';
    hc.style.marginLeft = '15px';
    hc.addEventListener('click', hidecks, false);
    hc.addEventListener('mouseenter', hovered, false);
    hc.addEventListener('mouseleave', unhovered, false);
    c.style.position = 'fixed';
    c.style.padding = '20px';
    c.style.fontSize = '16px';
    c.style.display = 'flex';
    c.appendChild(hc);
  }
}
