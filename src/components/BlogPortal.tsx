"use client";

import { Box, Avatar } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import BuildIcon from "@mui/icons-material/Build";
import { motion } from "framer-motion";
import StylizedName from "./StylizedName";
import PortalCard from "./PortalCard";
import { useI18n } from "@/lib/i18n";

export default function BlogPortal() {
  const { t } = useI18n();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <Avatar
          src="/avatar.png"
          alt="Jadren Rayne"
          sx={{ width: 120, height: 120, boxShadow: 3 }}
        />
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
        <StylizedName />
      </motion.div>

      {/* Cards — 响应式宽度，紧凑间距 */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2.5,
          width: { xs: "90vw", sm: "480px", md: "700px" },
          maxWidth: "100%",
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <PortalCard
            href="https://blog.jadren.me"
            delay={0.2}
            icon={<ArticleIcon sx={{ color: "primary.main", fontSize: 28 }} />}
            title={t.blogPortal.title}
            description={t.blogPortal.description}
            features={t.blogPortal.features}
            visitLabel={t.blogPortal.visit}
          />
        </Box>

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <PortalCard
            href="https://tool.jadren.me"
            delay={0.3}
            icon={<BuildIcon sx={{ color: "primary.main", fontSize: 28 }} />}
            title={t.toolPortal.title}
            description={t.toolPortal.description}
            features={t.toolPortal.features}
            visitLabel={t.toolPortal.visit}
          />
        </Box>
      </Box>
    </Box>
  );
}
