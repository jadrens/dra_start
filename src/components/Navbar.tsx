"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Avatar,
  useTheme,
} from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import LocaleToggle from "./LocaleToggle";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const theme = useTheme();
  const { t } = useI18n();
  const bg = theme.palette.mode === "dark" ? "#1e1e1e" : "#f8f6f3";

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        backgroundColor: `${bg}80`,
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 4 },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Avatar
          component={Link}
          href="/"
          src="/avatar.png"
          alt="jadren"
          sx={{ width: 32, height: 32, flexShrink: 0 }}
        />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            flexDirection: "row-reverse",
            flexGrow: 1,
          }}
        >
          <Button
            component={Link}
            href="https://blog.rayou.me"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            {t.nav.blog}
          </Button>
          <Button
            component={Link}
            href="https://tool.rayou.me"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            {t.nav.tools}
          </Button>
          <Button component={Link} href="/" size="small">
            {t.nav.start}
          </Button>
          <ThemeToggle />
          <LocaleToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
