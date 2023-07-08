import DashboardPageLayout from "../pages/master/MasterPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardIndex from "../pages/master/MasterPageIndex";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DocumentationPage from "../pages/corrections/Corrections";
import VehicleMaster from "../pages/master/VehicleMaster";
import VehicleType from "../pages/master/VehicleType";
import Employee from "../pages/master/Employee";
import SaveDevice from "../pages/master/SaveDevice";
import ReportPageLayout from "../pages/reports/ComponentPageLayout";
import BusyVisitingHour from "../pages/reports/BusyVisitingHour";
import Report from "../pages/reports/Report";
import SettingsPage from "../pages/setting/Settings";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/master",
    element: <DashboardPageLayout />,
    state: "master",
    sidebarProps: {
      displayText: "Master",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "master.index",
      },
      {
        path: "/master/vehicleMaster",
        element: <VehicleMaster />,
        state: "master.vehicleMaster",
        sidebarProps: {
          displayText: "VehicleMaster"
        },
      },
      {
        path: "/master/vehicleType",
        element: <VehicleType />,
        state: "master.vehicleType",
        sidebarProps: {
          displayText: "VehicleType"
        }
      },
      {
        path: "/master/employee",
        element: <Employee />,
        state: "master.employee",
        sidebarProps: {
          displayText: "Employee"
        }
      },
      {
        path: "/master/saveDevice",
        element: <SaveDevice />,
        state: "master.saveDevice",
        sidebarProps: {
          displayText: "SaveDevice"
        }
      }
    ]
  },
  {
    path: "/reports",
    element: <ReportPageLayout />,
    state: "reports",
    sidebarProps: {
      displayText: "Reports",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/reports/report",
        element: <Report />,
        state: "reports.report",
        sidebarProps: {
          displayText: "Report"
        },
      },
      {
        path: "/reports/busyVisitingHour",
        element: <BusyVisitingHour />,
        state: "reports.busyVisitingHour",
        sidebarProps: {
          displayText: "BusyVisitingHour"
        }
      }
    ]
  },
  {
    path: "/corrections",
    element: <DocumentationPage />,
    state: "corrections",
    sidebarProps: {
      displayText: "Corrections",
      icon: <ArticleOutlinedIcon />
    },
  child: [
    {
      path: "/corrections/correction",
      element: <Report />,
      state: "corrections.correction",
      sidebarProps: {
        displayText: "Correction"
      },
    }],
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <FormatListBulletedOutlinedIcon />
    }
  }
];

export default appRoutes;