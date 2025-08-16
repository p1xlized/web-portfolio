import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";

interface EducationCardProps {
  university: string;
  degree: string;
  years: string;
  icon?: string;
  details?: string;
}

export default function EducationCard({
  university,
  degree,
  years,
  icon,
  details = "More information coming soon...",
}: EducationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="rounded-2xl bg-muted shadow-sm hover:shadow-md transition-all p-2 my-2 bg-gradient-to-br from-muted via-secondary to-chart-3">
        <div className="flex justify-between items-start px-1 pt-1">
          {/* Left: icon + university + degree */}
          <div className="flex items-center gap-3">
            {icon && (
              <img
                src={icon}
                alt="University Logo"
                className="w-10 h-10 rounded-xl"
              />
            )}
            <div className="flex flex-col">
              <CardTitle className="text-xl font-semibold leading-none">
                {university}
              </CardTitle>
              <p className="text-xs text-muted-foreground leading-none">
                {degree}
              </p>
            </div>
          </div>

          {/* Right: years */}
          <p className="text-sm font-medium">{years}</p>
        </div>
        {/* Details with more spacing */}
        <div className="mt-4 ml-2 text-base font-bold text-muted-foreground">
          {details}
        </div>
      </Card>
    </motion.div>
  );
}
