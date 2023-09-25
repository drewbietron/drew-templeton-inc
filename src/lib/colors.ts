export const colors = (mode: "light" | "dark" = "light") => {
  const darkMode = mode === "dark";

  return {
    black: {
      hex: "#0A0A0A",
      rgb: "10, 10, 10",
    },
    white: {
      hex: "#EBEBEB",
      rgb: "251, 251, 251",
    },
    background: {
      primary: {
        hex: darkMode ? "#1F1F1F" : "#EEEEEE",
        rgb: darkMode ? "26, 26, 26" : "225, 225, 225",
      },
      secondary: {
        hex: darkMode ? "#0A0A0A" : "#F9F9F9",
        rgb: darkMode ? "10, 10, 10" : "235, 235, 235",
      },
    },
    text: {
      primary: {
        hex: darkMode ? "#EBEBEB" : "#0A0A0A",
        rgb: darkMode ? "251, 251, 251" : "10, 10, 10",
      },
      secondary: {
        hex: darkMode ? "#E2E2E2" : "#161616",
        rgb: darkMode ? "226, 226, 226" : "22, 22, 22",
      },
    },
    border: {
      hex: darkMode ? "#1f1f1f" : "#DFDFDF",
      rgb: darkMode ? "31, 31, 31" : "223, 223, 223",
    },
    boxShadow: {
      hex: darkMode ? "#EBEBEB" : "#0A0A0A",
      rgb: darkMode ? "251, 251, 251" : "10, 10, 10",
    },
    buttonText: { hex: "#F9F9F9", rgb: "235, 235, 235" },
    primary: { hex: "#19ff00", rgb: "18, 52, 92" },
    disabled: { hex: "#868686", rgb: "134, 134, 134" },
    info: { hex: "#FFBC0F", rgb: "236, 228, 49" },
    error: { hex: "#FF4141", rgb: "255, 65, 65" },
    success: { hex: "#3BE36E", rgb: "59, 227, 110" },
    condition: {
      BRAND_NEW_IN_BOX: { hex: "#30C996" },
      OPEN_BOX: { hex: "#32B7EC" },
      EXCELLENT: { hex: "#7852D2" },
      GOOD: { hex: "#7852D2" },
      FAIR: { hex: "#6C6B6B" },
      POOR: { hex: "#DE5050" },
      NON_FUNCTIONING: { hex: "#F0E36A" },
    },
  };
};
