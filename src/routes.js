/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Live from "views/examples/Live.js";
import Tables from "views/examples/Tables.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-pie-35 text-primary",
    component: <Index />,
    layout: "/admin",
  },

  {
    path: "/Live",
    name: "Moniteur en direct",
    icon: "ni ni-tv-2 text-orange",
    component: <Live />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "PlastiBots Actifs",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
  path: "/user-profile",
  name: "User Profile",
  icon: "ni ni-single-02 text-yellow",
  component: <Profile />,
  layout: "/admin",
  },
];
export default routes;
