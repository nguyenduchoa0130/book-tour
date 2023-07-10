const MenuUtils = {
  constructMenu: (menuMap, loggedInUser) => {
    return Object.keys(menuMap).reduce((menus, key) => {
      const menuItem = menuMap[key];
      if (!menuItem.isLoggedIn) {
        menus.push(menuItem);
      } else {
        const hasRole = menuItem.permissions.includes(loggedInUser.role);
        hasRole && menus.push(menuItem);
      }
      return menus;
    }, []);
  }
};

export default MenuUtils;