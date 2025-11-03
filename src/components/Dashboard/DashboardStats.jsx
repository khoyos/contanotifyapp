import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, BarChart } from "lucide-react";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaUsersGear } from "react-icons/fa6";
import { LuClockAlert } from "react-icons/lu"
import { FaCalendarTimes } from "react-icons/fa";




import CountUp from "react-countup";

const StatCard = ({ icon: Icon, color, bgColor, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-sm"
  >
    <div className={`p-3 rounded-full ${bgColor}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-900"><CountUp end={value} duration={2} /></p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  </motion.div>
);

export default function DashboardStats({ porHacer, pendientePorDocs, elaboracion, declaradoPresentado, vencidas }) {
  const stats = [
    { icon: CheckCircle, color: "text-blue-600", bgColor: "bg-blue-100", label: "Por Hacer", value: porHacer },
    { icon: LuClockAlert, color: "text-red-600", bgColor: "bg-red-100", label: "Pendiente Por Docs.", value: pendientePorDocs },
    { icon: FaUsersGear , color: "text-yellow-600", bgColor: "bg-orange-100", label: "Elaboración", value: elaboracion },
    { icon: GrDocumentPerformance, color: "text-green-600", bgColor: "bg-green-100", label: "Declarado y Presentado", value: declaradoPresentado },
    { icon: FaCalendarTimes, color: "text-red-600", bgColor: "bg-yellow-100", label: "vencidas", value: vencidas },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {stats.map((s, i) => (
        <StatCard key={i} {...s} />
      ))}
    </div>
  );
}
