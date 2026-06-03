"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";
import StylizedName from "./StylizedName";

const BLOG_FEATURES = [
  "Markdown & LaTeX",
  "Code Highlighting",
  "Dark / Light Theme",
  "Full-text Search",
];

export default function BlogPortal() {
  const [hovered, setHovered] = useState(false);

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      >
        <StylizedName />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card
          component={Link}
          href="https://blog.dragonren.top"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            maxWidth: 420,
            width: "90vw",
            textDecoration: "none",
            borderRadius: 3,
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered
              ? "0 12px 40px rgba(0,0,0,0.15)"
              : "0 2px 8px rgba(0,0,0,0.06)",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <ArticleIcon sx={{ color: "primary.main", fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                My Blog
              </Typography>
              <LaunchIcon
                sx={{
                  fontSize: 18,
                  color: "text.secondary",
                  ml: "auto",
                  transition: "transform 0.2s ease",
                  transform: hovered ? "translate(2px, -2px)" : "none",
                }}
              />
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
              A personal blog built with Next.js, featuring Markdown & LaTeX
              support, code syntax highlighting, and bilingual content.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
              {BLOG_FEATURES.map((feat) => (
                <Chip
                  key={feat}
                  label={feat}
                  size="small"
                  sx={{
                    fontSize: "0.75rem",
                    bgcolor: "action.hover",
                    color: "text.secondary",
                    borderRadius: 1,
                  }}
                />
              ))}
            </Box>

            <Button
              variant="outlined"
              size="small"
              endIcon={<LaunchIcon />}
              sx={{
                mt: 0.5,
                alignSelf: "flex-start",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Visit blog.dragonren.top
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
