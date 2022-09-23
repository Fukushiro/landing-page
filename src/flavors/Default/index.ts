interface FlavorData {
  colors: {};
  font: {
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
  };
}

export const Default: FlavorData = {
  colors: {},
  font: {
    fontSize: {
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
    },
  },
};
