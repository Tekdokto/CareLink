import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import Features from "../components/Features";
import About from "../components/About";
import HowTo from "../components/HowTo";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
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
      <HeroBanner />
      <section className={classes.section}>
        <Features />
      </section>
      <section className={classes.section}>
        <About />
      </section>
      <section className={classes.section}>
        <HowTo />
      </section>
      <section className={classes.section}>
        <Testimonials />
      </section>
      <section className={classes.section}>
        <Contact />
      </section>
    </Layout>
  );
}
