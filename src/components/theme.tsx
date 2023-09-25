import { useColor } from "../hooks/use-color";

export default function Theme() {
  const { colors } = useColor();

  return (
    <style>{`
      :root {
        --background-primary-rgb: ${colors.background.primary.rgb};
        --background-primary: ${colors.background.primary.hex};
        --background-secondary-rgb: ${colors.background.secondary.rgb};
        --background-secondary: ${colors.background.secondary.hex};
        --border: ${colors.border.hex};
        --border-rgb: ${colors.border.rgb};
        --box-shadow-rgb: ${colors.boxShadow.rgb};
        --box-shadow: ${colors.boxShadow.hex};
        --button-text-rgb: ${colors.buttonText.rgb};
        --button-text: ${colors.buttonText.hex};
        --disabled-rgb: ${colors.disabled.rgb};
        --disabled: ${colors.disabled.hex};
        --info-rgb: ${colors.info.rgb};
        --info: ${colors.info.hex};
        --error-rgb: ${colors.error.rgb};
        --error: ${colors.error.hex};
        --primary-rgb: ${colors.primary.rgb};
        --primary: ${colors.primary.hex};
        --success: ${colors.success.hex};
        --success-rgb: ${colors.success.rgb};
        --text-primary-rgb: ${colors.text.primary.rgb};
        --text-primary: ${colors.text.primary.hex};
        --text-secondary-rgb: ${colors.text.secondary.rgb};
        --text-secondary: ${colors.text.secondary.hex};
        --white: ${colors.white.hex};
        --white-rgb: ${colors.white.rgb};
        --black: ${colors.black.hex};
        --black-rgb: ${colors.black.rgb};
      }
      `}</style>
  );
}
