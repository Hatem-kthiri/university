import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [sidebarElements, setSidebarElements] = useState([
    {
      id: 0,
      name: "Dashboard",
      icon: "ti-home",
      subMenu: false,
      path: "/admin/dashboard",
      active: true,
    },
    {
      id: 1,
      name: "Classes",
      icon: "ti-ruler-pencil",
      subMenu: true,
      active: false,
      subMenuDetails: {
        active: false,
        details: [
          {
            name: "Classes List",
            path: "/admin/classes-list",
          },
          {
            name: "Add Class",
            path: "/admin/add-class",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Subjects",
      icon: "ti-book",
      subMenu: true,
      active: false,
      subMenuDetails: {
        active: false,
        details: [
          {
            name: "Subjects List",
            path: "/admin/subjects-list",
          },
          {
            name: "Add Subject",
            path: "/admin/add-subject",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Students",
      icon: "ti-user",
      subMenu: true,
      active: false,
      subMenuDetails: {
        active: false,
        details: [
          {
            name: "Students List",
            path: "/admin/students-list",
          },
          {
            name: "Add Student",
            path: "/admin/add-student",
          },
        ],
      },
    },
    {
      id: 4,
      name: "Professor",
      icon: "ti-briefcase",
      subMenu: true,
      active: false,
      subMenuDetails: {
        active: false,
        details: [
          {
            name: "Professor List",
            path: "/admin/professors-list",
          },
          {
            name: "Add Professor",
            path: "/admin/add-professor",
          },
        ],
      },
    },
    {
      id: 5,
      name: "Event",
      icon: "ti-time",
      subMenu: true,
      active: false,
      subMenuDetails: {
        active: false,
        details: [
          {
            name: "Event List",
            path: "/admin/event-list",
          },
          {
            name: "Add Event",
            path: "/admin/add-event",
          },
        ],
      },
    },
  ]);
  const activeSubMenu = (index) => {
    setSidebarElements((prevState) => {
      const updatedElements = prevState.map((element, i) => {
        if (i === index) {
          if (element.subMenu) {
            return {
              ...element,
              subMenuDetails: {
                ...element.subMenuDetails,
                active: !element.subMenuDetails.active,
              },
            };
          } else {
            return element;
          }
        } else {
          return {
            ...element,
            subMenuDetails: {
              ...element.subMenuDetails,
              active: false,
            },
          };
        }
      });
      return updatedElements;
    });
  };
  const location = useLocation();
  useEffect(() => {
    const updatedSidebarElements = sidebarElements.map((element) => {
      if (element.path === location.pathname) {
        return { ...element, active: true };
      } else if (element.subMenu) {
        const isPathFound = element.subMenuDetails.details.some(
          (detail) => detail.path === location.pathname
        );

        return {
          ...element,
          active: isPathFound,
          subMenuDetails: {
            ...element.subMenuDetails,
            active: isPathFound,
          },
        };
      } else {
        return { ...element, active: false };
      }
    });
    setSidebarElements(updatedSidebarElements);
    // eslint-disable-next-line
  }, [location.pathname]);
  return (
    <div
      className="pcoded-navbar"
      style={{ background: "#f6f7fb" }}
      navbar-theme="themelight"
      active-item-theme="theme7"
      sub-item-theme="theme2"
      active-item-style="style0"
      pcoded-navbar-position="fixed"
    >
      <div
        className="pcoded-inner-navbar main-menu  "
        style={{ height: "calc(100% - 90px)" }}
      >
        <div>
          <div
            className="pcoded-navigatio-lavel"
            data-i18n="nav.category.navigation"
            menu-title-theme="theme1"
          >
            menu
          </div>

          {sidebarElements.map((element, index) => {
            return (
              <ul
                className="pcoded-item pcoded-left-item"
                item-border="true"
                item-border-style="none"
                subitem-border="true"
                key={index}
              >
                <li
                  className={
                    element.subMenu &&
                    element.subMenuDetails.active &&
                    element.active
                      ? "pcoded-hasmenu pcoded-trigger active"
                      : element.subMenu && element.subMenuDetails.active
                      ? "pcoded-hasmenu pcoded-trigger"
                      : element.subMenu
                      ? "pcoded-hasmenu"
                      : element.active
                      ? "active"
                      : null
                  }
                  dropdown-icon="style3"
                  subitem-icon="style7"
                  onClick={() => activeSubMenu(index)}
                >
                  <Link to={element.path !== undefined ? element.path : null}>
                    <span className="pcoded-micon">
                      <i className={element.icon} />
                    </span>
                    <span
                      className="pcoded-mtext"
                      data-i18n="nav.basic-components.main"
                    >
                      {element.name}
                    </span>
                    <span className="pcoded-mcaret" />
                  </Link>
                  <ul className="pcoded-submenu">
                    {element.subMenu
                      ? element.subMenuDetails.details.map((submenu, index) => {
                          return (
                            <li className="" key={index}>
                              <Link to={submenu.path}>
                                <span className="pcoded-micon">
                                  <i className="ti-angle-right" />
                                </span>
                                <span
                                  className="pcoded-mtext"
                                  data-i18n="nav.basic-components.alert"
                                >
                                  {submenu.name}
                                </span>
                                <span className="pcoded-mcaret" />
                              </Link>
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
