;((doc) => {
  let curIdx = 0;
  
  const oMenuList = doc.querySelector('.menu-list'),
        oMenuItems = oMenuList.querySelectorAll('.menu-item');

  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    oMenuList.addEventListener('click', handleMenuClick, false);
  }

  function handleMenuClick (e) {
    const tar = e.target,
          tagName = tar.tagName.toLowerCase();
    
    tagName === 'a' && menuChange(tar);
  }

  function menuChange (target) {
    const curParent = target.parentNode;
    oMenuItems[curIdx].className = 'menu-item';
    curIdx = [].indexOf.call(oMenuItems, curParent);
    curParent.className += ' active';
  }
  
  init();
})(document);