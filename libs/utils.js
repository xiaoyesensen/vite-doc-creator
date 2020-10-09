const { readFileSync } = require('fs');
const {
  domain,
  port
} = require('../config');

// 读取文件封装
function readFile (path) {
  return readFileSync(path, 'utf8');
}

// 创建菜单项（模板）
function createMenuItem (filename, userDomain, userPort, isActive) {
  return `
    <li class="menu-item${ isActive ? ' active' : '' }">
      <a href="${_foratBaseUrl(userDomain, userPort)}/src/html/${filename}" target="myFrame">${filename.replace('.html', '')}</a>
    </li>
  `;
}

// 创建iframe
function createIframe (filename, userDomain, userPort) {
  return `
    <iframe src="${_foratBaseUrl(userDomain, userPort)}/src/html/${filename}" name="myFrame"></iframe>
  `;
}

// 组合baseUrl
function _foratBaseUrl (userDomain, userPort) {
  userPort = Number(userPort);

  if (userDomain && userPort) {
    return `${userDomain}:${userPort}`;
  } else if (userDomain && !userPort) {
    return `${userDomain}`;
  } else if (!userDomain && userPort) {
    return `${domain}:${userPort}`;
  } else if (!userDomain && !userPort) {
    return `${domain}:${port}`;
  } else {
    return `${domain}:${port}`;
  }
}

function replaceHtml (regexp, html, content) {
  return html.replace(html.match(regexp)[1], content);
}

module.exports = {
  readFile,
  createMenuItem,
  replaceHtml,
  createIframe
}