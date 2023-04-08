import { DashboardGuard } from "../components/DashboardGuard";
import Home from "../components/HomeScreen";
import styles from "../styles/Home.module.css";

export default function Test() {
  return (
    <DashboardGuard>
      <Home />
    </DashboardGuard>
  )
}
