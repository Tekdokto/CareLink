import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: "#f8f8f8",
  },
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: theme.spacing(8, 2),
  },
  sectionTitle: {
    marginBottom: theme.spacing(4),
    fontWeight: "bold",
    fontSize: "2.5rem",
    textAlign: "center",
  },
}));

export default function Home({toggleTheme, themeMode}) {
  const classes = useStyles();

  return (
    <Layout toggleTheme={toggleTheme} themeMode={themeMode}>
      <section className={classes.section}>
      </section>
    </Layout>
  );
}
