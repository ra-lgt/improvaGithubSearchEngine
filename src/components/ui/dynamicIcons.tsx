import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "@/utils/utils";

const iconCache: Record<string, any> = {};

export default function DynamicIcon({ type, className = "", size = "lg" }: { type: string, className?: string, size?: any }) {
  const [icon, setIcon] = useState<any>(iconCache[type] ?? null);

  useEffect(() => {
    if (!iconCache[type]) {
      getIcon(type).then((resolvedIcon) => {
        iconCache[type] = resolvedIcon;
        setIcon(resolvedIcon);
      });
    } else {
      setIcon(iconCache[type]);
    }
  }, [type]);

  if (!icon) return <div className="w-5 h-5 rounded-full bg-gray-300 animate-pulse" />;

  return <FontAwesomeIcon icon={icon} size={size} className={className} />;
}
