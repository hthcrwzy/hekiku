import localFont from "next/font/local";

export const NotoSansJPLocal = localFont({
  src: "../font/NotoSansJP-VariableFont_wght.ttf",
  variable: "--noto-sans-jp-local",
});

export const NotoSerifJPLocal = localFont({
  src: [
    {
      path: "../font/NotoSerifJP/NotoSerifJP-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../font/NotoSerifJP/NotoSerifJP-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../font/NotoSerifJP/NotoSerifJP-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/NotoSerifJP/NotoSerifJP-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/NotoSerifJP/NotoSerifJP-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/NotoSerifJP/NotoSerifJP-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/NotoSerifJP/NotoSerifJP-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    ],
    variable: "--noto-serif-jp-local"
});
